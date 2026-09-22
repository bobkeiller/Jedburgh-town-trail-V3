(function () {
  'use strict';

  const STORAGE_KEY = 'jedburghTownTrail:bluePlaquePrototype:v1';
  const FINAL_SENTENCE = ['JEDBURGH', 'IS', 'A', 'TOWN', 'BUILT', 'ON', 'EXCEPTIONAL', 'STORIES'];

  const collections = {
    crime: { name: 'Crime & Justice', clue: 'The Law', ids: ['newgate', 'black-bull-inn', 'the-courthouse', 'battle-of-burn-wynd'] },
    words: { name: 'Words & Writers', clue: 'Literature', ids: ['james-thomson', 'royal-hotel', 'wordsworths-visit', 'spread-eagle-hotel'] },
    faith: { name: 'Faith & Abbey', clue: 'Religion', ids: ['ramparts-jedburgh-abbey', 'abbey-close', 'abbey-close-jedburgh-abbey', 'jedburgh-friary'] },
    royal: { name: 'Royal Jedburgh', clue: 'Royalty', ids: ['wrens-nest', 'jedburgh-castle-jail', 'prince-charlies-house', 'mary-queen-of-scots-house'] },
    minds: { name: 'Minds of Jedburgh', clue: 'Learning', ids: ['carters-rest', 'james-veitch', 'mary-somerville', 'sir-david-brewster'], special: true },
    defended: { name: 'The Defended Burgh', clue: 'Conflict', ids: ['the-ramparts', 'townhead-port', 'skiprunning-burn', 'canongate-bridge'] }
  };

  const mysteries = {
    'public-hall': { word: 'JEDBURGH', excerpt: '“…many malt barns found in _____…”', choices: ['JEDBURGH', 'KELSO', 'MELROSE', 'HAWICK', 'SELKIRK'] },
    'jedburgh-public-library': { word: 'IS', excerpt: '“…Let there be light, _____ carved into the stonework.”', choices: ['IS', 'WAS', 'LIES', 'REMAINS', 'APPEARS'] },
    'john-ainslie': { word: 'ON', excerpt: '“…a surveyor _____ the Forth and Clyde Canal project.”', choices: ['ON', 'BESIDE', 'ACROSS', 'NEAR', 'THROUGH'] },
    closes: { word: 'BUILT', excerpt: '“Jedburgh was originally _____ in a traditional cross-shape…”', choices: ['BUILT', 'PLANNED', 'FOUNDED', 'SHAPED', 'LAID'] },
    'port-house': { word: 'EXCEPTIONAL', excerpt: '“…an early and _____ use of ‘curtain walling’…”', choices: ['EXCEPTIONAL', 'UNUSUAL', 'DEFENSIVE', 'INGENIOUS', 'EXTENSIVE'] },
    'sheriff-shortreed': { word: 'STORIES', excerpt: '“…collecting ballads, _____ and legends…”', choices: ['STORIES', 'SONGS', 'POEMS', 'HISTORIES', 'TALES'] },
    'mary-queen-of-scots-visit': { word: 'A', excerpt: '“…to conduct _____ royal inspection…”', choices: ['A', 'THE', 'ONE', 'HER', 'THIS'] },
    'pipers-house': { word: 'TOWN', excerpt: '“The _____’s hereditary pipers…”', choices: ['TOWN', 'ROYAL', 'LOCAL', 'BURGH', 'ABBEY'] }
  };

  const themeChoices = {
    crime: ['Crime & Justice', 'Trade & Travel', 'Royal Jedburgh', 'Faith & Abbey'],
    words: ['Words & Writers', 'Crime & Justice', 'Industry & Craft', 'The Defended Burgh'],
    faith: ['Faith & Abbey', 'Words & Writers', 'Trade & Travel', 'Minds of Jedburgh'],
    royal: ['Royal Jedburgh', 'Faith & Abbey', 'Crime & Justice', 'Minds of Jedburgh'],
    minds: ['Minds of Jedburgh', 'Royal Jedburgh', 'Words & Writers', 'Trade & Travel'],
    defended: ['The Defended Burgh', 'Crime & Justice', 'Faith & Abbey', 'Trade & Travel']
  };

  const STATE_VERSION = 9;
  let activePlaque = null;

  function emptyState() {
    return { schemaVersion: STATE_VERSION, found: [], discoveryOrder: {}, named: [], completed: [], words: {}, catchUp: {}, finaleCompleted: false };
  }

  function read() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      const needsProgressRecovery = !stored.schemaVersion || stored.schemaVersion < STATE_VERSION;
      const state = Object.assign(emptyState(), stored);
      if (!Array.isArray(state.found)) state.found = [];
      if (!state.discoveryOrder || typeof state.discoveryOrder !== 'object') state.discoveryOrder = {};
      Object.keys(collections).forEach(key => {
        if (!Array.isArray(state.discoveryOrder[key])) state.discoveryOrder[key] = [];
      });
      if (!Array.isArray(state.named)) state.named = [];
      if (!Array.isArray(state.completed)) state.completed = [];
      if (!state.words || typeof state.words !== 'object') state.words = {};
      if (!state.catchUp || typeof state.catchUp !== 'object') state.catchUp = {};
      if (needsProgressRecovery) {
        Object.keys(collections).forEach(key => {
          const foundCount = collections[key].ids.filter(id => state.found.includes(id)).length;
          if (foundCount >= 3 && !state.named.includes(key)) state.named.push(key);
          if (foundCount === 4 && !state.completed.includes(key)) state.completed.push(key);
        });
        state.schemaVersion = STATE_VERSION;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      }
      return state;
    } catch (_) { return emptyState(); }
  }

  function write(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function plaqueById(id) {
    const trail = typeof jedburghTrail !== 'undefined' ? jedburghTrail : window.jedburghTrail;
    return trail && Array.isArray(trail.plaques) ? trail.plaques.find(p => p.id === id) : null;
  }
  function collectionFor(id) { return Object.entries(collections).find(([, c]) => c.ids.includes(id)); }
  function countFor(state, collection) { return collection.ids.filter(id => state.found.includes(id)).length; }
  function allStoryIds() { return Object.values(collections).reduce((ids, collection) => ids.concat(collection.ids), []); }
  function allMysteryIds() { return Object.keys(mysteries); }
  function completeForFinale(state) { return allStoryIds().every(id => state.found.includes(id)) && allMysteryIds().every(id => state.words[id]); }

  function ensureModal() {
    let modal = document.getElementById('bpModal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'bpModal';
    modal.className = 'bp-modal';
    modal.hidden = true;
    modal.innerHTML = '<div class="bp-dialog" role="dialog" aria-modal="true" aria-labelledby="bpDialogTitle"><button class="bp-close" type="button" aria-label="Close">×</button><div id="bpDialogBody"></div></div>';
    document.body.append(modal);
    modal.querySelector('.bp-close').addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
      if (event.target.closest('[data-bp-close]')) closeModal();
    });
    modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
    return modal;
  }

  function closeModal() {
    const modal = document.getElementById('bpModal');
    if (modal) modal.hidden = true;
    activePlaque = null;
    document.dispatchEvent(new CustomEvent('bluePlaqueStateChanged'));
  }

  function plaqueFoundHtml(plaque) {
    if (!plaque) return '';
    const image = plaque.image ? `<img src="${plaque.image}" alt="${plaque.name} plaque">` : '';
    return `<figure class="bp-found-plaque">${image}<figcaption>${plaque.name}</figcaption></figure>`;
  }

  function showModal(html, setup) {
    const modal = ensureModal();
    modal.querySelector('#bpDialogBody').innerHTML = plaqueFoundHtml(activePlaque) + html;
    modal.hidden = false;
    if (setup) setup(modal);
    const firstButton = modal.querySelector('button:not(.bp-close)');
    if (firstButton) firstButton.focus();
  }

  function names(ids) { return ids.map(id => { const plaque = plaqueById(id); return plaque ? plaque.name : id; }); }
  function listNames(items) { return items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items[0]; }

  function plaqueEvidenceHtml(ids) {
    return `<div class="bp-evidence">${ids.map(id => {
      const plaque = plaqueById(id);
      if (!plaque) return '';
      return `<div class="bp-evidence-item"><img src="${plaque.image || ''}" alt=""><strong>${plaque.name}</strong></div>`;
    }).join('')}</div>`;
  }

  function answerButtons(choices, correct, onCorrect) {
    return modal => {
      const feedback = modal.querySelector('.bp-feedback');
      modal.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
        if (button.dataset.answer === correct) {
          feedback.textContent = 'Correct.';
          feedback.className = 'bp-feedback is-correct';
          modal.querySelectorAll('[data-answer]').forEach(b => b.disabled = true);
          onCorrect();
        } else {
          feedback.textContent = 'Not quite — look again and try another answer.';
          feedback.className = 'bp-feedback is-wrong';
        }
      }));
    };
  }

  function choicesHtml(choices) {
    const shuffled = [...choices];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
    }
    return `<div class="bp-choices">${shuffled.map(choice => `<button class="btn secondary" type="button" data-answer="${choice}">${choice}</button>`).join('')}</div><p class="bp-feedback" aria-live="polite"></p>`;
  }

  function handleMystery(plaque, state) {
    const mystery = mysteries[plaque.id];
    if (state.words[plaque.id]) {
      showModal(`<p class="bp-kicker">Mystery word recovered</p><h2 id="bpDialogTitle">${mystery.word}</h2><p>${mystery.excerpt.replace('_____', `<strong>${mystery.word}</strong>`)}</p><a class="btn primary" href="plaque-game.html">View your collections</a>`);
      return;
    }
    showModal(`<p class="bp-kicker">Mystery plaque</p><h2 id="bpDialogTitle">Recover the missing word</h2><p>This is one of the Mystery Plaques. Identify the missing word. When you have all eight, they will reveal an insightful truth.</p><blockquote>${mystery.excerpt}</blockquote>${choicesHtml(mystery.choices)}`,
      answerButtons(mystery.choices, mystery.word, () => {
        const next = read(); next.words[plaque.id] = mystery.word; write(next);
        const total = Object.keys(next.words).length;
        const feedback = document.querySelector('#bpModal .bp-feedback');
        feedback.innerHTML = total === 8 ? '<strong>Mystery collection complete — 8 of 8 words found.</strong><br>But what do they mean? Complete the trail to find out.' : `<strong>${mystery.word}</strong> added to your word bank. ${total} of 8 recovered.`;
        document.dispatchEvent(new CustomEvent('bluePlaqueStateChanged'));
      }));
  }

  function handleStory(plaque, state) {
    const [key, collection] = collectionFor(plaque.id);
    const foundIds = collection.ids.filter(id => state.found.includes(id));
    const count = foundIds.length;
    if (state.completed.includes(key)) {
      showModal(`<p class="bp-kicker">Story complete · 4 of 4</p><h2 id="bpDialogTitle">${collection.name}</h2><p>${listNames(names(collection.ids))}</p><a class="btn primary" href="plaque-game.html">View your collections</a>`);
      return;
    }
    if (collection.special) {
      if (count === 4) {
        showThemeQuestion(key, collection, state, true);
      } else if (count === 1) {
        showModal(`<p class="bp-kicker">A new connection</p><h2 id="bpDialogTitle">${plaque.name} added</h2>${plaqueEvidenceHtml(foundIds)}<p><strong>${plaque.name}</strong> is the first plaque in a new collection. It is too early to tell what connects it to other plaques, so keep exploring.</p><button class="btn primary" type="button" data-bp-close>Keep exploring</button>`);
      } else {
        const heldNames = listNames(names(foundIds));
        showModal(`<p class="bp-kicker">A connection is forming</p><h2 id="bpDialogTitle">${plaque.name} added</h2>${plaqueEvidenceHtml(foundIds)}<p><strong>${heldNames}</strong> seem connected${count === 3 ? ', but one more plaque will make the full story clear.' : '. Keep exploring to learn what links them.'}</p><button class="btn primary" type="button" data-bp-close>Keep exploring</button>`);
      }
      return;
    }
    if (count === 1) {
      showModal(`<p class="bp-kicker">A new connection</p><h2 id="bpDialogTitle">Excellent — plaque found</h2><p>This is the first plaque in a new collection. It is too early to tell what connects it to the others, so keep exploring.</p><button class="btn primary" type="button" data-bp-close>Keep exploring</button>`);
    } else if (count === 2) {
      showModal(`<p class="bp-kicker">Connection suspected</p><h2 id="bpDialogTitle">A pattern is emerging</h2><p>This feels connected to <strong>${names(foundIds)[0]}</strong>. Perhaps these plaques share a <strong>${collection.clue}</strong> theme.</p><button class="btn primary" type="button" data-bp-close>Keep exploring</button>`);
    } else if (count >= 3 && !state.named.includes(key)) {
      showThemeQuestion(key, collection, state, false);
    } else if (count === 4) {
      showCompletionQuestion(key, collection, state);
    } else {
      showModal(`<p class="bp-kicker">Story discovered · ${count} of 4</p><h2 id="bpDialogTitle">${collection.name}</h2><p>${listNames(names(foundIds))}</p><p>Find the remaining plaque to complete this story.</p>`);
    }
  }

  function showThemeQuestion(key, collection, state, completesToo) {
    const foundIds = collection.ids.filter(id => state.found.includes(id));
    const choices = themeChoices[key];
    showModal(`<p class="bp-kicker">${completesToo ? 'A late connection' : 'Name the connection'}</p><h2 id="bpDialogTitle">What best connects these plaques?</h2>${plaqueEvidenceHtml(foundIds)}${choicesHtml(choices)}`,
      answerButtons(choices, collection.name, () => {
        const next = read();
        if (!next.named.includes(key)) next.named.push(key);
        if (completesToo && !next.completed.includes(key)) next.completed.push(key);
        write(next);
        document.querySelector('#bpModal .bp-feedback').innerHTML = completesToo
          ? `<strong>Story discovered and complete: ${collection.name}</strong><br>You found all four plaques in this story.`
          : `<strong>Story discovered: ${collection.name}</strong><br>Can you find the final plaque in the set?`;
        document.dispatchEvent(new CustomEvent('bluePlaqueStateChanged'));
      }));
  }

  function showCompletionQuestion(key, collection) {
    const state = read();
    const available = state.named.map(id => collections[id] ? collections[id].name : '').filter(Boolean);
    if (!available.includes(collection.name)) available.push(collection.name);
    for (const fallback of ['Crime & Justice', 'Words & Writers', 'Faith & Abbey', 'Royal Jedburgh', 'The Defended Burgh']) {
      if (available.length >= 4) break;
      if (!available.includes(fallback)) available.push(fallback);
    }
    showModal(`<p class="bp-kicker">Complete the collection</p><h2 id="bpDialogTitle">Where does ${plaqueById(collection.ids[3]).name} belong?</h2><p>Which of your named story collections does this plaque complete?</p>${choicesHtml(available)}`,
      answerButtons(available, collection.name, () => {
        const next = read();
        if (!next.named.includes(key)) next.named.push(key);
        if (!next.completed.includes(key)) next.completed.push(key);
        write(next);
        document.querySelector('#bpModal .bp-feedback').innerHTML = `<strong>Collection complete: ${collection.name}</strong><br>You found all four plaques in this story.`;
        document.dispatchEvent(new CustomEvent('bluePlaqueStateChanged'));
      }));
  }

  function showStoryRecovery(plaque, state, originalError) {
    console.error('Recovering story-plaque panel', originalError);
    const entry = collectionFor(plaque.id);
    if (!entry) {
      showModal(`<p class="bp-kicker">Plaque found</p><h2 id="bpDialogTitle">${plaque.name}</h2><p>This plaque has been safely added to your collection.</p>`);
      return;
    }
    const key = entry[0];
    const collection = entry[1];
    const count = countFor(state, collection);
    if (count < 3) {
      showModal(`<p class="bp-kicker">Plaque found</p><h2 id="bpDialogTitle">${plaque.name}</h2><p>This plaque has been safely added. It is not yet part of a discovered story, so keep exploring.</p>`);
      return;
    }
    const choices = themeChoices[key] || [collection.name];
    const foundIds = collection.ids.filter(id => state.found.includes(id));
    showModal(`<p class="bp-kicker">Name the connection</p><h2 id="bpDialogTitle">What best connects these plaques?</h2>${plaqueEvidenceHtml(foundIds)}${choicesHtml(choices)}`,
      answerButtons(choices, collection.name, () => {
        const next = read();
        if (!next.named.includes(key)) next.named.push(key);
        write(next);
        document.querySelector('#bpModal .bp-feedback').innerHTML = `<strong>Story discovered: ${collection.name}</strong><br>${count === 4 ? 'Review this plaque once more to complete the collection.' : 'Can you find the final plaque in the set?'}`;
        document.dispatchEvent(new CustomEvent('bluePlaqueStateChanged'));
      }));
  }

  function collect(plaque) {
    activePlaque = plaque;
    const state = read();
    if (!state.found.includes(plaque.id)) {
      state.found.push(plaque.id);
      // Save the find first. Optional progression metadata must never prevent a plaque being collected.
      write(state);
      const entry = collectionFor(plaque.id);
      if (entry) {
        const [key] = entry;
        if (!Array.isArray(state.discoveryOrder[key])) state.discoveryOrder[key] = [];
        if (!state.discoveryOrder[key].includes(plaque.id)) state.discoveryOrder[key].push(plaque.id);
      }
      write(state);
    }
    const fresh = read();
    if (mysteries[plaque.id]) {
      handleMystery(plaque, fresh);
    } else {
      try { handleStory(plaque, fresh); }
      catch (error) { showStoryRecovery(plaque, fresh, error); }
    }
    document.dispatchEvent(new CustomEvent('bluePlaqueStateChanged'));
  }

  function catchUp() {
    const state = read();
    [...allStoryIds(), ...allMysteryIds()].forEach(id => {
      const outstanding = !state.found.includes(id) || (mysteries[id] && !state.words[id]);
      if (!state.found.includes(id)) state.found.push(id);
      if (outstanding) state.catchUp[id] = 'stop-25-catch-up';
      if (mysteries[id] && !state.words[id]) state.words[id] = mysteries[id].word;
    });
    state.named = Object.keys(collections);
    state.completed = Object.keys(collections);
    write(state);
  }

  function reset() { localStorage.removeItem(STORAGE_KEY); }

  window.BluePlaqueGame = { STORAGE_KEY, collections, mysteries, FINAL_SENTENCE, read, write, collect, catchUp, reset, completeForFinale, allStoryIds, allMysteryIds, plaqueById };
})();
