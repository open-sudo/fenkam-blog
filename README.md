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

To publish an article, place its HTML in `<slug>/index.html` and its evidence
in `assets/`. Use root-relative links such as `/styles.css`, `/theme.js`,
`/assets/example.png`, and `/index.html`, and add its card to the homepage.
Include the canonical URL and `og:url`, plus the Cloudflare analytics snippet.

## Article URLs

- `/illusion-of-done/`: the original experiment article.
- `/illusion1/`: Illusion of Done #1, the custom web-server article.

The original long HTML URLs remain as browser-side redirects. JavaScript
preserves query strings and section anchors; an HTML refresh and a visible
link provide fallbacks without JavaScript. Redirect pages omit analytics to
avoid recording an extra pageview before the destination loads.
