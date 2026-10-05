# Fenkam Blog

A small, no-build editorial site designed for GitHub Pages.

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

The article pages contain locally hosted copies of the Fenkam articles, with the legacy Hashnode cross-link rewritten to the local article page.

## Unpublished drafts

Keep unpublished articles in `drafts/` and their evidence in `drafts/assets/`.
Open <http://localhost:4173/drafts/> during local preview to browse drafts.
The Python preview serves drafts locally; GitHub Pages excludes the entire
folder using `_config.yml`. Do not add `.nojekyll`, because it disables this
exclusion. Draft files committed to this public repository remain visible on
GitHub, even though they are not published on the website.

To publish an article, move its HTML to the root and its evidence to `assets/`,
change `../styles.css` and `../index.html` links back to `styles.css` and
`index.html`, and add its card to the root `index.html`.
