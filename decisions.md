# Decisions

A log of choices made for Aara Culture and why. Add new decisions at the bottom with the next number. Never delete an old one: if it changes, add a new decision that replaces it and set the old one's status to `Replaced by D-xxx`.

**Status values:** `Accepted` (owner agreed) · `Proposed` (suggested, not confirmed by the owner yet) · `Replaced by D-xxx`

---

## D-001 — Catalog website with WhatsApp ordering, not a full e-commerce site
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner wants customers to see the products and order them, without building or paying for a full online shop.
- **Decision:** Build a catalog website. Every product has an "Order on WhatsApp" button that opens WhatsApp with a ready message (product name, code, size, price).
- **Alternatives considered:** Instagram DM ordering (less smooth); a full shop with cart, checkout and login (too much to build and run).
- **Consequences:** No checkout, no login, no customer database. Every order is confirmed by hand on WhatsApp.

## D-002 — Payment by UPI or cash on delivery, after WhatsApp confirmation
- **Date:** 2026-10-04
- **Status:** Replaced by D-010
- **Context:** Customers need a simple way to pay that costs nothing to set up.
- **Decision:** After confirming stock on WhatsApp, take payment by UPI or cash on delivery.
- **Alternatives considered:** A "Pay now" Razorpay payment link (needs a Razorpay account with KYC and charges a fee per payment).
- **Consequences:** No payment gateway to maintain. Payment is checked by hand. Razorpay can be added later if order volume grows.

## D-003 — Don't show the UPI ID on the website
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** If the UPI ID is on the site, a customer could pay for an item that's out of stock.
- **Decision:** Send the UPI ID on WhatsApp only after the order is confirmed.
- **Alternatives considered:** Show a UPI ID / QR code on the site.
- **Consequences:** One extra WhatsApp message per order, but no payments for unavailable stock.

## D-004 — Products are added by editing files on GitHub
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner needs to add products, change prices and mark items sold out without a developer.
- **Decision:** Product photos go in an `images/` folder. Product details go in one file, `products.json`. Both are edited through the GitHub website or app. Sold out = set `"inStock": false`.
- **Alternatives considered:** Google Sheet as the product list (easier from a phone, but depends on Google Drive links); an admin panel with login (needs a third-party login service and much more setup).
- **Consequences:** No extra accounts or services. The owner must follow the step-by-step guide in `README.md`. A typo in `products.json` can break the product list, so the guide must include examples.

## D-005 — Separate repository `aara-culture`
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** Planning started inside the DK-Engineer repo, which is a different business.
- **Decision:** Keep Aara Culture in its own public repo, `PradipDj432/aara-culture`.
- **Alternatives considered:** A folder inside DK-Engineer; names `aaraculture` or `aara-culture-website`.
- **Consequences:** The repo must stay public, because free GitHub Pages only works for public repos.

## D-006 — Host on the free GitHub Pages address, add own domain later
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The site should go live with no cost.
- **Decision:** Start on `pradipdj432.github.io/aara-culture`. Add a custom domain (for example `aaraculture.in`, about ₹500–900/year) when the owner is ready.
- **Alternatives considered:** Buy a domain now; stay on the free address forever.
- **Consequences:** Links shared now will change when the domain is added. GitHub Pages can redirect the old address to the new domain.

## D-007 — Plain HTML, CSS and JavaScript with no build step
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** Most customers will open the site on a phone. The owner will edit files directly on GitHub.
- **Decision:** Write the site in plain HTML/CSS/JavaScript. No framework, no build tools, no `npm install`.
- **Alternatives considered:** Angular / React / a static site generator (needs a build step and makes direct edits on GitHub harder).
- **Consequences:** Fast on phones and simple to host. Shared parts (header, footer) are added with a small JavaScript include or repeated in each page.

## D-008 — WhatsApp number for orders
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The order button needs a WhatsApp number.
- **Decision:** Use **+91 63534 25567**. The WhatsApp link format is `https://wa.me/916353425567?text=...`.
- **Alternatives considered:** —
- **Consequences:** If the number changes, update it in one place in the site config and in `business.md`.

## D-009 — No Instagram link for now
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner doesn't have an Instagram account for the business yet.
- **Decision:** Don't show Instagram on the site. Add it when the account exists.
- **Alternatives considered:** —
- **Consequences:** WhatsApp is the only contact channel on the site.

## D-010 — UPI only, no cash on delivery (for now)
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner wants to keep things simple at the start. Cash on delivery adds courier fees and risk of refused parcels.
- **Decision:** Customers pay by UPI after the order is confirmed on WhatsApp. No cash on delivery. Replaces D-002.
- **Alternatives considered:** UPI or cash on delivery (D-002).
- **Consequences:** Every order is prepaid. The owner may turn COD on later; change the payment text in `js/config.js`.

## D-011 — Deliver all over India, flat ₹50 per order
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The site needs a clear delivery rule.
- **Decision:** Ship anywhere in India for a flat ₹50 delivery charge per order. The owner may change the charge later.
- **Alternatives considered:** Local delivery only; free delivery above an order value.
- **Consequences:** The delivery text is in one place, `js/config.js`.

## D-012 — No returns or exchanges (for now)
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner wants to keep things simple at the start.
- **Decision:** No returns or exchanges. Customers are invited to ask about size on WhatsApp before ordering.
- **Alternatives considered:** Exchange within a few days.
- **Consequences:** Size help matters more, so a size chart is in the backlog. The rule can change later in `js/config.js`.

## D-013 — Launch with sample products and drawn placeholder photos
- **Date:** 2026-10-04
- **Status:** Replaced by D-015
- **Context:** No real product photos are ready yet, but the owner wants to see the site working.
- **Decision:** Add 6 sample products (`"sample": true`) with simple drawn outfit images in `images/samples/`. Each shows a "Sample" badge.
- **Alternatives considered:** Wait for real products before building; use stock photos (copyright risk).
- **Consequences:** The samples must be deleted from `products.json` (and `images/samples/`) before real launch.

## D-014 — "Minimal luxury" design
- **Date:** 2026-10-04
- **Status:** Accepted (colours replaced by D-020)
- **Context:** The owner found the first design looked bad and asked for a modern, premium look.
- **Decision:** Ivory and black colours, an elegant serif for headings (Cormorant Garamond) with a clean sans for text (Jost), small spaced-out capital labels, sharp corners, lots of white space and photo-first layouts. The "Order on WhatsApp" button is black instead of bright green. Placeholder pictures were redrawn as garments on hangers in muted tones.
- **Alternatives considered:** "Indian heritage premium" (maroon and gold, pattern borders); "Soft modern" (blush colours, rounded cards).
- **Consequences:** Real photos now matter most. Portrait photos (3:4) on plain, light backgrounds suit the design best.

## D-015 — Real products replace the samples; photos are compressed
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner uploaded 9 photos (1.5–2 MB each). Two of them showed the same outfit; one of those had a misspelt brand overlay ("Aara Cluture").
- **Decision:** 8 products (AC-001 to AC-008) with the owner's photos. Each photo is a 3:4 JPEG of about 100–200 KB, named `ac-XXX-1.jpg`. Very tall photos get soft blurred sides instead of being cropped, so heads and feet stay in frame. The photo with the misspelt overlay is not used. The 6 samples and their pictures are removed. Product names and descriptions were written from the photos; prices and fabrics come from the owner.
- **Alternatives considered:** Use the photos at full size (slow on phones); crop tall photos (cut off heads or feet).
- **Consequences:** Pages load fast on mobile data. New photos should be compressed the same way.

## D-016 — Hide categories that have no products
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** None of the first 8 products is a single long kurti, so the "Kurtis" category would be empty.
- **Decision:** Any category with no products is left out of the home page, shop filter, menu and footer. It comes back by itself when a product is added to it.
- **Alternatives considered:** Show an empty category; delete the category from the settings.
- **Consequences:** No dead ends for customers, and nothing to remember to switch on later.

## D-017 — Products can be listed before their sizes are known
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner gave prices and fabrics but not sizes yet. Sizes must not be guessed.
- **Decision:** `"sizes": []` is allowed. Those products have no size buttons; the order button works straight away and the WhatsApp message asks the shop for the available sizes. The shop's size filter is hidden while no product lists sizes.
- **Alternatives considered:** Wait for sizes before showing the products; guess common sizes.
- **Consequences:** The site can go live now. Once sizes are added to `products.json`, size buttons and the size filter appear by themselves.

## D-018 — "All sizes" means S, M, L, XL and XXL
- **Date:** 2026-10-04
- **Status:** Proposed (the owner said "all sizes available"; the exact list is still to confirm)
- **Context:** The owner said every product comes in all sizes. The website needs an exact list to show size buttons.
- **Decision:** Every current product lists S, M, L, XL and XXL, the usual range for women's ethnic wear.
- **Alternatives considered:** XS to XXL; S to 3XL; leave sizes empty and ask on WhatsApp (D-017).
- **Consequences:** Customers pick a size before ordering, and the size goes into the WhatsApp message. If the owner wants XS or 3XL, add it to `"sizes"` in `products.json`.

## D-019 — One `working` branch for all feature work
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** Tools created long, auto-generated branch names (like `claude/cool-cerf-i7ombh`), which the owner found confusing.
- **Decision:** All feature work happens on one branch named `working`, made from `main`. When work is done: push `working`, open a pull request to `main`, and merge when the owner says so. The steps are in `CLAUDE.md`.
- **Alternatives considered:** A new branch per feature; working directly on `main` (no review before going live).
- **Consequences:** One easy-to-find branch. `working` must be brought up to date with `main` before each new piece of work.

## D-020 — Final brand colours
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner shared AI-made brand boards and chose the colour palette on them as final.
- **Decision:** Maroon `#6E2639`, Ivory `#F8F1E7`, Antique Gold `#B88A44`, Muted Rose `#C98F91`, Charcoal `#292522`. Roles are in `brand/README.md`. Fonts stay Cormorant Garamond and Jost (the boards suggest Montserrat/Manrope for text; Jost is the same style and already on the site).
- **Alternatives considered:** Ivory and black only (D-014); Midnight / Golden Sand / Rose Dusk (an earlier proposal the owner didn't pick).
- **Consequences:** The website moves from ivory-and-black to these colours when the new logo goes live. Gold and rose are only for shapes and lines, not small text (too light on ivory).

## D-021 — Logo comes from the owner's brand boards
- **Date:** 2026-10-04
- **Status:** Accepted (option 4, Palace arch, chosen: D-022)
- **Context:** The owner didn't like the first two rounds of logo options and shared their own boards (`brand/references/`). They don't want human silhouettes.
- **Decision:** Redraw the boards' logo ideas as clean vector files in the final colours: 1 Signature (lotus + flowing AARA, the boards' main logo), 2 Modern minimal, 3 AC monogram, 4 Palace arch, 5 Diamond floral. Recommended system: #1 as the main logo, #3 or the lotus icon for profile pictures and tags, #5 as a pattern.
- **Alternatives considered:** The earlier options (spaced wordmark, signature italic, framed A, drape A, arch, lotus, paisley, AC crest), which the owner turned down; using the AI board images directly (blurry, misspellings, not editable).
- **Consequences:** Logos are drawn by `brand/tools/make_logo_options.py`, so they can be changed and redrawn exactly. Once the owner picks, the logo and colours go on the website, browser icon and link preview.

## D-022 — Palace arch logo, used everywhere
- **Date:** 2026-10-04
- **Status:** Replaced by D-023 (logo only; the colours and where the logo is used stay)
- **Context:** The owner picked option 4, the Palace arch (also the 4th concept on their own board `brand/references/05`), and asked to use it everywhere.
- **Decision:** The arch logo with the tagline "Wear Your Story." (the tagline that came with this concept) is the main logo. A side-by-side version (small arch + AARA / CULTURE) is used in the website header and menu, because the full arch is too tall to read at header size. A square icon (arch, lotus, "A") is used for the browser tab, phone home screen and profile pictures. The website switches to the final colours (D-020): maroon buttons, announcement bar and footer; maroon headings; ivory background; gold for thin decorations only. A link preview image (`images/share.jpg`) shows a product photo with the logo when the website is shared.
- **Alternatives considered:** The other four options (D-021); the full arch in the header (unreadable at that size).
- **Consequences:** All logo files live in `brand/logo/` and are made by `brand/tools/make_logo.py` and `export_png.js`; the website loads them from there. To change the tagline, change it in `make_logo.py` and re-run both scripts.

## D-023 — Bloom logo, traced from the owner's own board
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner didn't like the redrawn Palace arch (it didn't look like their board) and asked for options taken only from their own boards. They picked symbol **"03 Bloom"** from `brand/references/03-icon-16-symbols.webp`, and said the name must read **AARA** (not "AC", not "Araa"). Colours stay (D-020).
- **Decision:** Trace the Bloom straight from the owner's image into vector petals (`brand/tools/trace_bloom.py`), keeping its two tones: Muted Rose centre and the board's Deep Rose `#955457` leaves. Under it: **AARA** in Cormorant Garamond SemiBold (maroon) and **CULTURE** in Montserrat Medium (charcoal), the fonts named on the owner's boards. The main logo has no tagline; a version with "Wear Your Story." exists. The logo goes in the same places as D-022: header and menu (side-by-side version), footer (on maroon), browser and home-screen icon (Bloom on ivory), profile picture, print PNGs and the link preview.
- **Alternatives considered:** Keep the Palace arch; redraw the Bloom by hand (wouldn't match the owner's design exactly); use the board image directly (blurry, not editable).
- **Consequences:** The logo now matches the owner's own design. Deep Rose is used only inside the logo. Any new logo version must come from `make_logo.py` so it stays identical.

