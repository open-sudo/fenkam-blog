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

- `/ai-tested-cron-access-and-deleted-existing-configuration/`: cron verification and the brownfield preservation problem.

- `/ai-asked-for-swap-downgraded-kernel/`: the swap request and kernel downgrade field note.

- `/illusion-of-done/`: the original experiment article.
- `/illusion1/`: Illusion of Done #1, the custom web-server article.

The original long HTML URLs remain as browser-side redirects. JavaScript
preserves query strings and section anchors; an HTML refresh and a visible
link provide fallbacks without JavaScript. Redirect pages omit analytics to
avoid recording an extra pageview before the destination loads.

## Illustrated field-note collection

The 39 former draft articles now use main-site `<slug>/index.html` routes, with
illustrations and evidence under `assets/`. The homepage lists all 44 articles.
The category collection is available at `/remaining-audit-categories/`.

The 27 category field notes are written for Linux readers without knowledge of
the test platform. Their complete finding inventories remain in the linked
evidence extracts. Former draft article files are redirect stubs for local
preview. GitHub Pages still excludes `drafts/`; the public URLs are the new
main-site routes.

`assets/article-illustration-prompts.json` records the prompt and alt text for
each of the 39 illustrations generated with the built-in image tool. The images
are conceptual illustrations and are labeled as AI-generated in the articles.

Each of these articles explains a real-life analogy for its failure mechanism.
Its illustration depicts that analogy, and its title names the operational
problem. Image filenames end in `-analogy.png` to distinguish the replacements
from the superseded workshop illustrations.

## Illusion identifiers

Illusion article titles use stable `IL-N: Title` identifiers. Assignments live in
`assets/illusion-index.json`; use its `next_number` for a new illusion and then
increment it. Never renumber existing articles when sorting or adding posts.
The original first and second stories retain `IL-1` and `IL-2`. The experiment
overview and evaluation guide are separate from the numbered illusion stories.
Keep the article heading, browser title, social title, homepage card and topic
index consistent. Existing article URLs stay unchanged.

## Homepage ordering and operating-system filter

Keep numbered article cards in decreasing IL order (highest first), followed by general articles.
Each card's `data-os` lists systems covered by the article text or linked case
examples, including family tags such as `ubuntu` and release tags such as
`ubuntu-24`. Use `general` for articles without specific systems. Do not tag a
story from unrelated cases found only in its full evidence inventory.
The OS dropdown sits between the homepage wordmark and navigation menu,
with an accessible name and no visible label.
Selecting a system jumps to the filtered article list.
`article-filter.js` filters these tags, updates the count and keeps visible
images alternating. The selected filter can be shared with `?os=ubuntu-24`.
All articles remain readable when JavaScript is disabled.

## Editorial standard

Write for Linux administrators who have never used the test platform. Start
with the requested job and the concrete action or failure. Explain each case
before drawing a lesson from it. Name the machine, service, file or command
instead of relying on phrases such as “the boundary” or “the retained state.”
Keep the real-life analogy, but do not use it in place of explaining the case.
Distinguish an observed failure, a code risk and a behavior that was not tested.
Keep internal finding IDs and batch labels in the evidence, not in the narrative.
Link recorded commands next to the case and detailed evidence at the end.
