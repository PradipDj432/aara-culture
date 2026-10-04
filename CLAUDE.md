# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a small catalog site, not an online shop.

## Working with the owner
- Use plain, simple English and keep answers short. The owner reads replies on a phone.
- For anything big (a new feature, a redesign), share the plan and ask first. Small fixes can just be done.
- Never guess business facts; ask (see "Business facts" below).
- Merge to `main` (which makes changes live) only when the owner says so.

## Git workflow (owner's rule)
- Do all feature work on **one branch named `working`**, made from `main`. Don't create long or auto-generated branch names (like `claude/cool-cerf-i7ombh`), even if a tool suggests one.
- Before starting new work, bring `working` up to date with `main` (`git fetch origin main` then `git merge origin/main`). If `working` doesn't exist, create it: `git checkout -b working origin/main`.
- When a piece of work is done: push `working`, open a pull request from `working` to `main`, and merge it when the owner says so.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date and refresh "Current status" |
| Start or finish a backlog item | `backlog.md`: tick it when done; add new work you discover |
| Make a choice between options (tech, design, business rule) | `decisions.md`: add a new numbered entry. Never edit an old decision's meaning; replace it with a new one |
| Learn a business fact (price rule, delivery area, contact) | `business.md` |
| Change anything about the brand (logo, colours, fonts, photos, look, social media) | `branding.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (delivery area, charges, return rules, prices, size measurements). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- Don't show the UPI ID on the website (D-003).
- The WhatsApp number, the Instagram username (@aara_culture, D-026) and the shop rules live in one place, `js/config.js`. Don't hard-code them elsewhere.

## Brand
- The brand guide is `branding.md` (D-028): name, logo files, colours (D-020), fonts (D-024), photos, website look, social media and words. Keep it up to date when anything about the brand changes; `brand/README.md` only explains the `brand/` folder. Always spell it **Aara Culture**; in the logo the name is **AARA** (never "AC", never "Araa").
- The logo is the owner's **Bloom** (D-023), traced from their own board. Use the files in `brand/logo/`; don't retype or redraw the logo. Change it with `brand/tools/make_logo.py`, then `node brand/tools/export_png.js` for the PNG versions and `images/share.jpg`.
- Logo ideas come from the owner's own boards (`brand/references/`). Don't invent new logo designs unless asked.
- The master image is the Olive Green Short Kurti (D-025), `images/hero.jpg`, the first photo of the home page slider. If it changes, re-run `node brand/tools/export_png.js` so the link preview matches.
- No human silhouettes in any logo or icon (owner's preference).

## Design ("minimal luxury", D-014)
- Colours: the brand colours (D-020), set as CSS variables at the top of `css/style.css`. Maroon `#6e2639` for headings, buttons, the announcement bar and the footer; ivory `#f8f1e7` background; charcoal `#292522` text; gold `#b88a44` for thin lines and small decorations only (not text); muted rose `#c98f91` and its soft tint for gentle backgrounds. No other colours.
- Fonts (D-024): only **Cormorant Garamond** (titles), **Montserrat** (text, labels, prices, buttons) and **Allura** (taglines, short brand lines). Use the type styles in `branding.md` → "Type styles" and the CSS variables at the top of `css/style.css` (`--font-title`, `--font-text`, `--font-script`, `--size-*`, `--track-*`); don't add new fonts or one-off sizes. Small labels are uppercase with wide letter spacing.
- Sharp corners (no rounded buttons or cards), thin 1px lines, lots of white space. Photos lead every page.
- Layout (D-027): logo on the left, menu on the right; full-screen photo slider on the home page (`HERO_SLIDES` in `js/config.js`); a maroon "Chat with us" button for WhatsApp (not a round icon); WhatsApp and Instagram signs from Simple Icons, in brand colours.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-007).
- Mobile first: check every page at phone width (390px) with no horizontal scrolling.
- The owner edits `products.json` by hand on GitHub. Keep its format simple and show an example in `README.md` whenever the format changes.
- Text from `products.json` goes through `escapeHtml()` before it's put into the page.
- Product photos: 3:4 JPEG, about 1000px wide, under ~250 KB, named `ac-XXX-N.jpg` (D-015).
