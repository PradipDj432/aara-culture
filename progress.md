# Progress

Where the project stands right now, what's done, what's next, and a dated log. Update this file at the end of every work session.

## Where we are
| | |
|---|---|
| **Phase** | Live. 8 real products, final brand (logo, colours, fonts, master image). |
| **Live site** | https://pradipdj432.github.io/aara-culture/ |
| **Brand** | Bloom logo with **AARA** (D-023) · colours maroon, ivory, gold, rose, charcoal (D-020) · fonts Cormorant Garamond, Montserrat, Allura (D-024) · master image Olive Green Short Kurti (D-025). Guide: `brand/README.md` |
| **Design** | "Minimal luxury": elegant serif titles, lots of white space, photo-first (D-014) |
| **Work branch** | `working` (made from `main`; see `CLAUDE.md` → Git workflow) |
| **Blocked on** | Nothing. Next steps mostly need the owner (see below). |

## Done so far
- **Business set-up:** catalog website with WhatsApp ordering, UPI payment, delivery all over India for ₹50, no returns (D-001, D-010 to D-012).
- **Website:** plain HTML/CSS/JS on free GitHub Pages: home, shop with category and size filters, product pages, how-to-order page (D-006, D-007).
- **Products:** 8 real products with the owner's photos: 3 tops at ₹400 and 5 sets at ₹1,000, sizes S–XXL; photos compressed for phones (D-015, D-018). Empty categories hide by themselves (D-016).
- **Design:** premium "minimal luxury" look (D-014).
- **Brand:** the owner's own Bloom logo traced from their board, final colours, 3 brand fonts with fixed type styles, and the olive kurti as master image, used the same way on every page (D-020 to D-025).
- **Sharing:** link preview picture for WhatsApp / Instagram / Facebook; WhatsApp profile picture and print-ready logo files in `brand/logo/`.
- **Docs and rules:** `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `README.md`, `CLAUDE.md`, `brand/README.md`; one `working` branch for all work (D-019).

## Next
1. **Owner:** set the WhatsApp profile picture to `brand/logo/aara-profile-picture-1080.png`.
2. **Owner:** open the live site on a real phone and try one order on WhatsApp.
3. **Owner:** confirm the size list. "All sizes" is set as S, M, L, XL, XXL; say if XS or 3XL should be added (D-018).
4. **Owner:** pick a tagline ("Wear Your Story.", another line from the boards, or none).
5. **Owner:** send size chart measurements, so "Size help" can show a real chart.
6. **Owner:** a second photo per product (back or close-up), and a wider photo of AC-008.
7. **Dev:** brand board with the final logo, colours and fonts (hang tag, packaging, social post mock-ups).
8. **Dev:** "Bag" to order several items in one WhatsApp message.

The full list, with priorities, is in `backlog.md`.

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
- Stock photo sites (Unsplash, Pexels) are blocked by this environment's network settings, so the owner uploaded their own photos instead.
- Tested at 390px and 1440px: no horizontal scrolling and no script errors. The menu, filters, size picker, WhatsApp message, photo counter, sold-out state and unknown-product page all work.
- Merged the redesign ([PR #2](https://github.com/PradipDj432/aara-culture/pull/2)); it's live.
- The owner uploaded 9 photos to `images/products`. Compressed them to 3:4 JPEGs (about 100–200 KB each, from 1.5–2 MB), named them `ac-001-1.jpg` to `ac-008-1.jpg`, and left out a duplicate photo with a misspelt brand overlay ("Aara Cluture"). See D-015.
- Owner gave prices and fabrics: tops (AC-003, AC-005, AC-006) ₹400, cotton, top only; sets ₹1,000; AC-001, AC-004 and AC-007 are rayon slub, the rest cotton.
- Replaced the 6 samples with the 8 real products. Home banner now uses the ivory floral co-ord photo; category tiles use product photos.
- Empty categories ("Kurtis" for now) are hidden everywhere (D-016). Products without sizes can still be ordered; the WhatsApp message asks for available sizes (D-017).
- Tested at 390px and 1440px: no horizontal scrolling, no broken images, no script errors.
- Owner: all sizes available. Set S, M, L, XL, XXL on all 8 products, so size buttons and the shop size filter now show (D-018).
- Merged the real products and sizes ([PR #3](https://github.com/PradipDj432/aara-culture/pull/3)); live on GitHub Pages.
- Owner set the git rule: one simple `working` branch, made from `main`, for all feature work (D-019, saved in `CLAUDE.md`). Created `working` from `main`.
- Reviewed and updated every `.md` file so each one matches what's live: business summary, done / where we are / next, backlog order, new decisions D-018 and D-019, README workflow.
- Logo round 1: 4 options (wordmark, arch, lotus, signature). Round 2, after the owner's first board: 8 options (4 simple, 4 premium), no human silhouettes. The owner liked neither.
- The owner shared 5 more AI-made boards and chose their colour palette as final (D-020). Saved all 6 boards in `brand/references/`.
- Redrew the boards' logo ideas as clean vector files in the final colours: Signature, Modern minimal, AC monogram, Palace arch, Diamond floral, plus 4 profile icons (D-021). Files, colours, fonts and the redraw script are in `brand/` (guide: `brand/README.md`).
- Added the owner's long-term lifestyle-brand plan (Men, Accessories, Footwear, Lifestyle, Beauty & Care, Beyond) to `business.md` and `backlog.md`.
- Owner picked logo option 4, the Palace arch (D-022). Made the final logo set in `brand/logo/`: full logo with "Wear Your Story.", a version without tagline, a side-by-side version for the header, a square icon, a 1080px profile picture and 2000px print PNGs.
- Website switched to the final brand colours (maroon, ivory, gold, rose, charcoal) with the logo in the header, menu and footer, a new browser and phone home-screen icon, and a link preview image (`images/share.jpg`) for WhatsApp / Instagram / Facebook shares.
- Tested at 390px and 1440px: no horizontal scrolling, no broken images, no script errors. Filters, size picker and WhatsApp message work.
- Owner still doesn't like the Palace arch as redrawn (it had a plain pointed arch and different letters from their board's scalloped arch). Colours are fine. They asked for options taken only from their own boards. Cut the 6 full logos and both symbol boards out of their images into `brand/logo-options/10–12-*.webp`. Waiting for a pick.
- Owner picked symbol "03 Bloom" from their board 3, with the name AARA (not AC, not Araa) (D-023). Traced the Bloom straight from their image into clean vector petals (`brand/tools/trace_bloom.py`), keeping its two rose tones, and checked it side by side with the original. New logo set in `brand/logo/`: main logo, on maroon, with tagline, name only, side-by-side header version, Bloom alone, icons, 1080px profile picture, print PNGs, link preview.
- Website now shows the Bloom logo in the header, menu and footer, with the Bloom as the browser and home-screen icon. Tested at 390px and 1440px: no horizontal scrolling, no broken images, no script errors.
- Merged the Bloom logo ([PR #6](https://github.com/PradipDj432/aara-culture/pull/6)); it's live. Owner: logo and colours are final for now (colours may be adjusted a little later).
- Fonts: showed 3 pairs from the owner's boards on real website pieces. Owner chose Cormorant Garamond (titles) + Montserrat (text) + Allura (taglines) (D-024). Replaced Jost with Montserrat across the website, set fixed type styles as CSS variables, put the brand quote in Allura, and switched the logo's tagline version to Allura. Type styles are documented in `brand/README.md`.
- Tested at 360px, 390px and 1440px: no horizontal scrolling, no clipped text, no broken images, no script errors; the announcement bar stays on one line.
- Owner chose the Olive Green Short Kurti (AC-003) as the master image (D-025). New home banner cut from the original full-size upload (from git history, not the compressed copy); link preview rebuilt with it. Checked on phone and computer.
- Merged the brand fonts and the olive kurti master image ([PR #7](https://github.com/PradipDj432/aara-culture/pull/7)); live.
- Reviewed and updated every `.md` file: progress summary, backlog order, business summary (master image, fonts), README (brand folder, fonts), brand guide and CLAUDE.md (master image rule). Removed an unused `tagline` setting from `js/config.js` (left over from the old footer).
