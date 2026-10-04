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
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (delivery area, charges, return rules, prices, size measurements). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- Don't show the UPI ID on the website (D-003).
- The WhatsApp number and shop rules live in one place, `js/config.js`. Don't hard-code them elsewhere.

## Brand
- The brand guide is `brand/README.md`: final colours (D-020), fonts, logo files. Always spell it **Aara Culture**; in the logo the name is **AARA** (never "AC", never "Araa").
- The logo is the owner's **Bloom** (D-023), traced from their own board. Use the files in `brand/logo/`; don't retype or redraw the logo. Change it with `brand/tools/make_logo.py`, then `node brand/tools/export_png.js` for the PNG versions and `images/share.jpg`.
- Logo ideas come from the owner's own boards (`brand/references/`). Don't invent new logo designs unless asked.
- No human silhouettes in any logo or icon (owner's preference).

## Design ("minimal luxury", D-014)
- Colours: the brand colours (D-020), set as CSS variables at the top of `css/style.css`. Maroon `#6e2639` for headings, buttons, the announcement bar and the footer; ivory `#f8f1e7` background; charcoal `#292522` text; gold `#b88a44` for thin lines and small decorations only (not text); muted rose `#c98f91` and its soft tint for gentle backgrounds. No other colours.
- Fonts: Cormorant Garamond for the logo and headings, Jost for everything else. Small labels are uppercase with wide letter spacing.
- Sharp corners (no rounded buttons or cards), thin 1px lines, lots of white space. Photos lead every page.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-007).
- Mobile first: check every page at phone width (390px) with no horizontal scrolling.
- The owner edits `products.json` by hand on GitHub. Keep its format simple and show an example in `README.md` whenever the format changes.
- Text from `products.json` goes through `escapeHtml()` before it's put into the page.
- Product photos: 3:4 JPEG, about 1000px wide, under ~250 KB, named `ac-XXX-N.jpg` (D-015).
