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
each of the 39 original illustrations generated with the built-in image tool.
The 42 numbered stories now use authored technical diagrams instead. The
original conceptual illustrations remain in the repository as asset history.

The real-life scenes are editorial cover art; they do not require a matching
analogy in the prose. Keep a written analogy only when it clarifies something
the case alone does not explain easily. Titles name the operational problem.
Image filenames retain the `-analogy.png` suffix used when they were generated.

## Illusion identifiers

Illusion article titles use stable `IL-N: Title` identifiers. Assignments live in
`assets/illusion-index.json`; use its `next_number` for a new illusion and then
increment it. Keep existing identifiers when sorting or adding posts.
The opening sequence is `IL-1` (web server), `IL-2` (swap/kernel downgrade),
`IL-3` (cron verification) and `IL-4` (backup copies). The experiment
overview and general problem guide are separate from the numbered illusion stories.
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

Write for Linux specialists who are not native English speakers and know
nothing about the platform or test harness. Use familiar words and explicit,
connected sentences. Skip basic Linux definitions.
Explain the agent's access to the machine and how the results were checked.
Introduce case-specific accounts, files and unfamiliar terms before relying on
them. Use plain language and short paragraphs without losing technical precision.
Start with the requested job and the concrete action or failure. Explain each case
before drawing a lesson from it. Name the machine, service, file or command
instead of relying on phrases such as “the boundary” or “the retained state.”
Explain the case directly. Add a short analogy only when it makes a difficult
distinction easier to understand; remove it when it repeats the explanation.
Use short, concrete titles. Cut repeated introductions, lessons and conclusions.
Keep unrelated run inventories in linked evidence files, outside the article.
Distinguish an observed failure, a code risk and a behavior that was not tested.
Keep internal finding IDs and batch labels in the evidence, not in the narrative.
Link recorded commands next to the case and detailed evidence at the end.

Always include the task prompt verbatim near the beginning of each story,
with a link to its recorded source. Preserve the exact wording, punctuation,
constraints and paragraph breaks, and label it clearly as the task prompt.
Copy it from the recorded input rather than reconstructing it from a summary
or the agent's report. For cases with different prompts, identify which prompt
belongs to each case. If the original is unavailable, state that explicitly.

Every article must stand on its own. Assume the reader opened this page first.
Introduce the task and its purpose before describing the agent's actions.
Name the model before comparing its behavior across runs. Introduce reviewers,
test accounts and other actors before referring to them. Cross-links provide
optional detail; they must not supply context needed to understand this page.

Tell each field note as a short factual story: the situation, the goal, the
agent's decision, what happened next and the consequence. Let those parts flow
through the prose rather than using them as a repeated set of headings.
Do not invent customers, incidents, dialogue or requirements to make a story.

Use architecture or flow diagrams when the reader needs to understand machines,
connections, permissions or a sequence of copies. Place the image at the top
of the article, directly after the separator and before the opening text.
Show the requested setup or the recorded
actions; mark hypothetical access separately from observed traffic.

`assets/article-diagrams.json` lists the technical diagrams for all 42 numbered
stories and records the diagram type, caption, accessible description and assets.
Choose the type that explains the case: sequence diagrams for interactions and
retries; state machines for lifecycle changes; data-flow and lineage diagrams
for copied data; dependency graphs for shared components; deployment and network
diagrams for machines and listeners; trust boundaries and access matrices for
permissions; activity diagrams for branches; timelines for recorded events.
Keep observed behavior distinct from conditional risks and untested paths.

Every diagram has a wide SVG and a narrow layout with larger labels. PNG
exports support social previews. New article diagrams open at full size.
Homepage diagrams show the full image without cropping and keep the existing
alternating-card layout. Original illustrations and prompts remain as history.

Connect sections through the events and their consequences. Name the agent,
command, process or machine that acted. Do not write that an article or section
"establishes", "follows" or "separates" events, and do not add section previews.

Our role is to identify and explain issues posed by LLMs acting as sysadmins.
Do not propose fixes, safeguards, alternative implementations or operator
checklists. Describe recorded repairs as events. Remove defensive caveats
about claims the article never made; qualify a claim only where the reader
would otherwise mistake an uncertain or hypothetical result for an observation.

Before publication, obtain an independent comprehension review from a reader
who sees only the article. The reader must explain the task, agent action,
issue and consequence without guessing connections or repeatedly rereading.
Revise and repeat the review when that test fails. Verify facts against the
original records separately, and preserve verbatim task prompts.

Before publishing, reread the entire article yourself from beginning to end.
Check that it is coherent in reading order: the context is sufficient, terms
are introduced, sections connect, and the evidence supports the consequence.
Review section starts and endings as part of that complete read.
Introduce both ends of a connection before saying it failed. Explain the first
attempt before a retry, and introduce a new task before describing its result.
Read the paragraphs in order: an improved opening cannot establish that the
rest of the story flows. Preserve the difference between observed results and
possible consequences when simplifying the text.
