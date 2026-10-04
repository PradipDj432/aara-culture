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
- **Status:** Accepted
- **Context:** No real product photos are ready yet, but the owner wants to see the site working.
- **Decision:** Add 6 sample products (`"sample": true`) with simple drawn outfit images in `images/samples/`. Each shows a "Sample" badge.
- **Alternatives considered:** Wait for real products before building; use stock photos (copyright risk).
- **Consequences:** The samples must be deleted from `products.json` (and `images/samples/`) before real launch.

