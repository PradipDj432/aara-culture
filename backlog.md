# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it here and add a line to `progress.md`.

**Priority:** `P1` needed now · `P2` soon · `P3` later / nice to have
**Owner:** `Owner` (business owner must provide or decide) · `Dev` (build work)

## To do — waiting on the business owner
- [ ] **P1 · Owner** Open the live site on a real phone and try one order on WhatsApp.
- [ ] **P1 · Owner** Confirm the size list: S, M, L, XL, XXL, or also XS / 3XL? (D-018)
- [ ] **P2 · Owner** Size chart: measurements for each size (bust, length, etc.).
- [ ] **P2 · Owner** Confirm the UPI ID stays off the website and is sent on WhatsApp only (D-003).
- [ ] **P2 · Owner** A second photo for each product (back or close-up). It shows on hover and in the product gallery.
- [ ] **P1 · Owner** Pick the logo from the 5 options redrawn from your boards (`brand/README.md`), and pick the tagline.
- [ ] **P3 · Owner** A wider photo of AC-008 (the current one is very tall, so its sides are filled with a soft blur).
- [ ] **P3 · Owner** Create an Instagram account, then add the link to the site.
- [ ] **P3 · Owner** Buy a custom domain (for example `aaraculture.in`).

## To do — build
- [ ] **P2 · Dev** Size chart table on the info page (once the owner sends measurements).
- [ ] **P2 · Dev** Share preview image, so links look good when shared on WhatsApp/Instagram.
- [ ] **P2 · Dev** Bag: add several items, then send them all in one WhatsApp message (no login, saved in the browser).
- [ ] **P2 · Dev** When the first single kurti is added, use its photo as the Kurtis category picture in `js/config.js` (it's a drawn placeholder now).
- [ ] **P1 · Dev** After the logo is picked: switch the website to the final colours (D-020), and use the logo everywhere: website header, browser icon, WhatsApp / Instagram profile picture, link preview image. Same fonts and sizes in every place.
- [ ] **P2 · Dev** Brand board with the chosen logo (logo, colours, fonts, icon, pattern, tag and packaging mock-ups), saved in `brand/`.
- [ ] **P3 · Dev** Connect custom domain once bought.
- [ ] **P3 · Dev** Google Business Profile listing.
- [ ] **P3 · Dev** Optional Razorpay "Pay now" link if order volume grows (see D-002 / D-010).

## Future: lifestyle brand (owner's long-term plan)
Focus now is women's clothing only. Later, grow into a lifestyle brand with sub-brands sharing one logo system (see `business.md` → Long-term plan).
- [ ] **P3 · Owner** Decide which sub-brand comes next: Men, Accessories, Footwear, Lifestyle (home), Beauty & Care, or Beyond.
- [ ] **P3 · Dev** Sub-brand logos in the same style as the main logo. No human silhouettes (owner doesn't like the man/woman figures).
- [ ] **P3 · Dev** Website structure for more than one sub-brand (for example a top menu: Women · Men · Accessories …).

## Done
- [x] **Owner** Delivery area: all of India (D-011).
- [x] **Owner** Delivery charge: flat ₹50 per order (D-011).
- [x] **Owner** Cash on delivery: not for now (D-010).
- [x] **Owner** Return / exchange rule: no returns or exchanges for now (D-012).
- [x] **Owner** Turn on GitHub Pages.
- [x] **Owner** Upload real product photos, with price and fabric for each (8 products).
- [x] **Owner** Sizes for the 8 products: "all sizes", set as S–XXL (D-018).
- [x] **Dev** Site skeleton: shared header and footer, mobile-first styles, store settings file (`js/config.js`).
- [x] **Dev** `products.json` format (first with 6 sample products).
- [x] **Dev** Home page: banner, categories, new arrivals, "How to order".
- [x] **Dev** Shop page: all products with category and size filters.
- [x] **Dev** Product page: swipeable photos, price, size buttons, fabric/details, "Order on WhatsApp" button.
- [x] **Dev** WhatsApp message builder (product name, code, size, price, product link).
- [x] **Dev** Info page: how to order, payment, delivery, returns, size help.
- [x] **Dev** Sold-out handling: "Sold out" badge and disabled order button when `inStock` is false.
- [x] **Dev** README guide for the owner: how to add and edit products, with examples.
- [x] **Dev** Go live on GitHub Pages ([PR #1](https://github.com/PradipDj432/aara-culture/pull/1)).
- [x] **Dev** Redesign in the "minimal luxury" style (D-014, [PR #2](https://github.com/PradipDj432/aara-culture/pull/2)).
- [x] **Dev** Owner's photos in: products, home banner, category pictures. 6 samples removed (D-015, [PR #3](https://github.com/PradipDj432/aara-culture/pull/3)).
- [x] **Dev** Hide empty categories (D-016).
- [x] **Dev** Size buttons and size filter (D-017, D-018).
- [x] **Dev** `working` branch for all feature work (D-019).
- [x] **Owner** Final brand colours chosen (D-020).
- [x] **Dev** Owner's reference boards saved in `brand/references/`; 5 logo options redrawn as vector files in `brand/logo-options/` (D-021).
