# Aara Culture — Business

What the business is, who it sells to, and how it sells. This file holds business facts only. Technical details go in `README.md`, choices go in `decisions.md`.

## In short
**Aara Culture** is a women's ethnic-wear brand selling short kurtis, co-ord sets and kurti sets with dupatta. Customers browse the website and order on WhatsApp. Payment is by UPI, and orders ship all over India.

| | |
|---|---|
| Brand | Aara Culture |
| Website | https://pradipdj432.github.io/aara-culture/ |
| Website headline | "Everyday elegance" |
| Tagline | Kurtis, tops and sets for every day |
| Orders | WhatsApp +91 63534 25567 |
| Look | "Minimal luxury": elegant serif, photo-first (D-014) |
| Logo | The Bloom (rose petals) above **AARA**, with CULTURE (D-023). Files in `brand/logo/` |
| Brand tagline | Not confirmed. A logo version with "Wear Your Story." exists |
| Brand colours | Maroon `#6E2639`, Ivory `#F8F1E7`, Antique Gold `#B88A44`, Muted Rose `#C98F91`, Charcoal `#292522` (D-020; may be adjusted a little later) |
| Brand fonts | Cormorant Garamond (titles), Montserrat (text), Allura (taglines) (D-024) |
| Brand guide | `brand/README.md` |

## What we sell
| Category | Description | Price | Fabric | Live products |
|---|---|---|---|---|
| Tops | Short kurtis, sold as the top only (no pants) | ₹400 | Cotton | 3 |
| 2-piece sets | Kurti + bottom (co-ord set) | ₹1,000 | Cotton | 2 |
| 3-piece sets | Kurti + bottom + dupatta | ₹1,000 | Rayon slub | 3 |
| Kurtis | Single long kurtis | — | — | 0 (category hidden until a product is added) |

- **Sizes:** all current products come in **S, M, L, XL and XXL**. The owner said "all sizes available"; whether XS or 3XL should be added is still to confirm (D-018).
- **Stock:** all 8 products are in stock.
- **Product list:** each product's name, code, price, fabric, sizes and photo are in `products.json`.

## Long-term plan
Today Aara Culture sells women's ethnic wear only, and the website focuses on that. The owner's bigger plan is a full **lifestyle brand** with sub-brands, each sharing one logo style, colours and fonts:

| Sub-brand | What it would sell |
|---|---|
| Aara Culture (Women) | Women's clothing (live now) |
| Aara Men | Men's clothing |
| Aara Accessories | Bags and accessories |
| Aara Footwear | Footwear |
| Aara Lifestyle | Home and living |
| Aara Beauty & Care | Beauty and personal care |
| Aara Beyond | Sustainability / community projects |

These are ideas, not launched products. Sub-brand logos must not use human silhouettes (owner's preference). Tracked in `backlog.md` → "Future: lifestyle brand".

## Who buys
Women in India who find us through the website link (shared on WhatsApp, social media and word of mouth) and prefer to order by chat.

## How we sell
The website is a **catalog**, not a full online shop. It has no checkout, no customer login and no payment gateway.

1. The customer browses the website and opens a product.
2. They pick a size and tap **"Order on WhatsApp"**.
3. WhatsApp opens with a ready message, for example:
   *"Hi Aara Culture, I want to order: White Leaf Print Short Kurti (AC-005), Size: XL, Price: ₹400"* plus a link to the product.
4. We confirm stock on WhatsApp and tell them the total including delivery.
5. The customer pays by **UPI**. The UPI details are sent on WhatsApp, not shown on the website (D-003).
6. We pack and ship the order.

## Shop rules
These are shown on the website. To change one, edit `js/config.js` (see `README.md`).

| Rule | Current setting | Decision |
|---|---|---|
| Delivery area | All over India | D-011 |
| Delivery charge | Flat ₹50 per order (may change later) | D-011 |
| Payment | UPI only, after the order is confirmed on WhatsApp | D-010 |
| Cash on delivery | Not available (may change later) | D-010 |
| Returns / exchange | No returns or exchanges (may change later) | D-012 |

## Contact
| Channel | Detail |
|---|---|
| WhatsApp (orders) | +91 63534 25567 |
| Instagram | None yet |
| Website | https://pradipdj432.github.io/aara-culture/ |

## Still to decide
Tracked in `backlog.md`. Don't put these on the website until the owner confirms them.

- **Tagline:** "Wear Your Story.", another line from the boards, or none?
- **Size list:** is S–XXL right, or should XS / 3XL be added?
- **Size chart:** measurements for each size. The site says "coming soon" and sends customers to WhatsApp for size help.
- **UPI ID off the website:** suggested (D-003), not yet confirmed by the owner.
- **Instagram:** no account yet.
- **Own domain:** for example `aaraculture.in`, when the owner is ready.
