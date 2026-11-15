# Jedburgh Town Trail V3

The publishable web version of the Jedburgh Town Trail, including the Blue Plaque Puzzle, location narration and audio directions between stops.

## Preview locally

Serve the repository through a local web server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. The root page redirects to the trail application in `coding-blue-plaque/`.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, then select the `main` branch and `/ (root)` directory.

## Structure

- `coding-blue-plaque/` — trail application and content.
- `Jedburgh_Town_Trail_Assets/audio/mp3/` — location narration.
- `Jedburgh_Town_Trail_Assets/audio/mp3-directions/` — directions to the next stop.
- `Jedburgh_Town_Trail_Assets/` — referenced images, plaques and video.

Editable source recordings and working design files are intentionally excluded from this deployment repository.
