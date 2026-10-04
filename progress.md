# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Live with 8 real products, the owner's photos and sizes S–XXL. |
| **Live site** | https://pradipdj432.github.io/aara-culture/ |
| **Blocked on** | Nothing. |
| **Next step** | Check the live site on a real phone. Then backlog P2 items (size chart, second photos, bag). |

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
- Merged the redesign ([PR #2](https://github.com/PradipDj432/aara-culture/pull/2)); it's live.
- The owner uploaded 9 photos to `images/products`. Compressed them to 3:4 JPEGs (about 100–200 KB each, from 1.5–2 MB), named them `ac-001-1.jpg` to `ac-008-1.jpg`, and left out a duplicate photo with a misspelt brand overlay ("Aara Cluture"). See D-015.
- Owner gave prices and fabrics: tops (AC-003, AC-005, AC-006) ₹400, cotton, top only; sets ₹1,000; AC-001, AC-004 and AC-007 are rayon slub, the rest cotton. Sizes not given yet.
- Replaced the 6 samples with the 8 real products. Home banner now uses the ivory floral co-ord photo; category tiles use product photos.
- Empty categories ("Kurtis" for now) are hidden everywhere (D-016). Products without sizes can still be ordered; the WhatsApp message asks for available sizes (D-017).
- Tested at 390px and 1440px: no horizontal scrolling, no broken images, no script errors.
- Owner: all sizes available. Set S, M, L, XL, XXL on all 8 products, so size buttons and the shop size filter now show.
- Owner set the git rule: one simple `working` branch, made from `main`, for all feature work (saved in `CLAUDE.md`).
