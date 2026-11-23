# Jedburgh Town Trail V4

The V4 publishable web version of the Jedburgh Town Trail. It includes the main trail experience, essential and full routes, historic location content, audio narration, directions, maps, blue-plaque puzzles, quizzes and supporting media.

## Preview locally

From this directory, start a local web server:

```sh
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/` — V4 landing page.
- `http://localhost:8000/coding-blue-plaque/locations.html` — trail locations directly.

The landing page links to the trail application. The application must be served over HTTP; opening the HTML files directly from the filesystem may prevent some browser features and asset paths from working correctly.

## Deployment

This is a static site and can be deployed through GitHub Pages:

1. Open the repository’s **Settings**.
2. Select **Pages**.
3. Choose **Deploy from a branch**.
4. Select the required branch and `/ (root)` directory.

The repository includes a `CNAME` file for the configured custom domain. Keep it at the repository root when deploying the site.

## Repository structure

### Site and application

- `index.html` — V4 landing page and entry point.
- `coding-blue-plaque/` — trail application, route logic, location content, puzzles, maps, quizzes and shared styles.
- `coding-blue-plaque/trail-data.js` — location and content data.
- `coding-blue-plaque/trail-routes.js` — essential and full route definitions.
- `coding-blue-plaque/trail-experience.js` — trail interaction and experience logic.

### Audio

- `Jedburgh_Town_Trail_Assets/audio/Location_voice_overs/` — location narration.
- `Jedburgh_Town_Trail_Assets/audio/Directions_essential_trail/` — directions for the essential route.
- `Jedburgh_Town_Trail_Assets/audio/Directions_full_trail/` — directions for the full route.
- `Jedburgh_Town_Trail_Assets/audio/Music_quiz/` — short music-quiz clips.
- `Jedburgh_Town_Trail_Assets/audio/mp3/` — additional public-library and reflection audio.

### Images and media

- `Jedburgh_Town_Trail_Assets/created graphics/` — maps, illustrations, puzzle graphics and interface artwork.
- `Jedburgh_Town_Trail_Assets/improved_photographs/` — improved location photographs.
- `Jedburgh_Town_Trail_Assets/photographs/` — source and supporting photographs.
- `Jedburgh_Town_Trail_Assets/plaques/` — blue-plaque images.
- `Jedburgh_Town_Trail_Assets/video/` — video and poster artwork.

### Documentation and maintenance

- `MARKETING_CALENDAR_AUDIT.md` — editorial audit of people, events, dates, birthday candidates and marketing opportunities.
- `scripts/validate-v4.mjs` — automated validation for routes, trail data, puzzle links and puzzle return controls.

## Validate V4

From this directory, run:

```sh
node scripts/validate-v4.mjs
```

A successful run confirms that the essential route contains the expected stops, the full route contains 24 unique locations, retired stops are absent, and puzzle links and return controls are consistent.

## Editorial and asset notes

- The essential route currently contains nine stops; the full/explore route contains 24.
- Some puzzle pages are fictional challenges. Marketing copy should present them as trail puzzles rather than historical events.
- The marketing audit identifies approximate, disputed and context-only dates. Do not present these as exact anniversaries without checking the audit notes and supporting sources.
- Editable source recordings and working design files are not part of this publishable V4 site.
