# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Live with sample products. "Minimal luxury" redesign done on the work branch. |
| **Live site** | https://pradipdj432.github.io/aara-culture/ (first design until the redesign is merged) |
| **Blocked on** | Real product photos from the owner (being uploaded to `images/products`). |
| **Next step** | Merge the redesign, then put the owner's real photos in. |

## Log

### 2026-10-04
- Planned the website in a separate Claude session (started in the DK-Engineer repo). The owner chose WhatsApp ordering, product editing through GitHub files, the repo name `aara-culture`, and the free GitHub Pages address first. See `decisions.md` D-001 to D-007.
- The owner created the `PradipDj432/aara-culture` repo and gave Claude access.
- The owner shared the WhatsApp order number: +91 63534 25567 (D-008). There's no Instagram account yet (D-009).
- Created the project docs: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`.
- Owner set the shop rules: delivery all over India for ₹50, UPI only with no COD, no returns or exchanges (D-010 to D-012). All three may change later.
- Built the first version of the site: home, shop (category and size filters), product page (photos, size picker, WhatsApp order button), info page. Plain HTML/CSS/JS, no build step.
- Added 6 sample products with drawn placeholder photos (D-013).
- Tested in Chromium at phone (390px) and desktop (1280px) widths: no horizontal scrolling and no script errors. Checked that the filters, size selection, WhatsApp message, sold-out state, unknown-product page and photo dots all work.
- Merged the first version to `main` ([PR #1](https://github.com/PradipDj432/aara-culture/pull/1)). The owner turned on GitHub Pages.
- The owner found the first design looked bad and chose the "Minimal luxury" style (D-014). Redesigned every page: black announcement bar, centred spaced-out logo, slide-out menu on phones, split hero on desktop, category carousel on phones, product cards with a second photo on hover, stacked photos and sticky details on the desktop product page, fold-out Details / Delivery / Returns sections, and a dark footer.
- Redrew the placeholder pictures as garments on hangers in muted tones.
- Stock photo sites (Unsplash, Pexels) are blocked by this environment's network settings, so the owner is uploading their own photos instead.
- Tested at 390px and 1440px: no horizontal scrolling and no script errors. The menu, filters, size picker, WhatsApp message, photo counter, sold-out state and unknown-product page all work.
