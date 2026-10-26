import fs from 'node:fs';
import vm from 'node:vm';

const pageDirectory = new URL('../coding-blue-plaque/', import.meta.url);
const context = { window: {} };
context.window = context;
vm.createContext(context);

for (const filename of ['trail-data.js', 'trail-experience.js', 'trail-routes.js']) {
  vm.runInContext(fs.readFileSync(new URL(filename, pageDirectory), 'utf8'), context, { filename });
}

const expectedEssential = [
  'public-hall', 'abbey', 'war-memorial', 'sheriff-court',
  'prince-charlies-house', 'high-street', 'mary-queen-of-scots-house',
  'canongate', 'market-place'
];
const actualEssential = context.TrailRoutes.forMode('essential').locationIds;
const full = context.TrailRoutes.forMode('explore').locationIds;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(JSON.stringify(actualEssential) === JSON.stringify(expectedEssential), 'Essential route order is incorrect.');
assert(new Set(actualEssential).size === 9, 'Essential route must contain nine unique locations.');
assert(new Set(full).size === 24, 'Full route must contain 24 unique locations.');
assert(!full.includes('time-for-reflection'), 'Time for Reflection must not remain in the full route.');
assert(context.TrailRoutes.welcomePin('essential').id === 'public-hall', 'Essential Welcome must use Public Hall.');
assert(context.TrailRoutes.congratulationsPin('essential').id === 'market-place', 'Essential Congratulations must use Market Place.');
assert(context.TrailRoutes.welcomePin('explore').id === 'the-glebe', 'Full Welcome must use The Glebe.');
assert(context.TrailRoutes.congratulationsPin('explore').id === 'the-glebe', 'Full Congratulations must use The Glebe.');

for (const pin of context.TrailRoutes.pinsForMode('essential').slice(0, -1)) {
  const directions = context.TrailRoutes.fromHereFor(pin, 'essential');
  assert(directions && !directions.startsWith('Your next location is '), `Essential route needs custom onward directions for ${pin.id}.`);
}
assert(context.TrailRoutes.fromHereFor(context.TrailRoutes.congratulationsPin('essential'), 'essential') === '', 'Essential final stop must not show onward directions.');

for (const filename of ['index.html', 'locations.html', 'location.html', 'map.html', 'congratulations.html']) {
  const html = fs.readFileSync(new URL(filename, pageDirectory), 'utf8');
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(match => match[1]).filter(script => script.trim());
  scripts.forEach((script, index) => new vm.Script(script, { filename: `${filename}:inline-${index + 1}` }));
}

const trail = vm.runInContext('jedburghTrail', context);
for (const pin of trail.pins) {
  const content = pin.content || [];
  for (let index = 0; index < content.length; index += 1) {
    if (content[index] !== '# Just for Fun') continue;

    const links = [];
    for (let blockIndex = index + 1; blockIndex < content.length; blockIndex += 1) {
      const block = content[blockIndex];
      if (typeof block === 'string' && block.startsWith('# ')) break;
      if (block && typeof block === 'object' && block.type === 'link') links.push(block);
    }

    assert(links.length > 0, `${pin.name} has a Just for Fun section without a puzzle link.`);
    for (const link of links) {
      const filename = link.href.split(/[?#]/)[0];
      const puzzleUrl = new URL(filename, pageDirectory);
      assert(fs.existsSync(puzzleUrl), `${pin.name} links to missing puzzle page ${filename}.`);

      const html = fs.readFileSync(puzzleUrl, 'utf8');
      const returnMatch = html.match(/<a\b[^>]*href=["']location\.html\?id=([^"'&]+)[^"']*["'][^>]*>/i);
      assert(returnMatch, `${filename} needs a return link to its location page.`);
      assert(returnMatch[1] === pin.id, `${filename} returns to ${returnMatch[1]} instead of ${pin.id}.`);
      assert(/puzzle-consistency\.css/.test(html) && /puzzle-consistency\.js/.test(html), `${filename} needs the shared puzzle return styling and behaviour.`);
    }
  }
}

console.log('V4 validation passed: routes are correct; every Just for Fun section links to a puzzle with a consistent return control.');
