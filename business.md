# Aara Culture — Business

What the business is, who it sells to, and how it sells. This file holds business facts only. Technical details go in `README.md`, choices go in `decisions.md`.

## What we sell
Aara Culture is a women's clothing brand. The range:

| Category | Description | Current price | Current fabric |
|---|---|---|---|
| Kurtis | Single kurtis | No products yet | — |
| Tops | Short kurtis, sold as the top only (no pants) | ₹400 | Cotton |
| 2-piece sets | Kurti + bottom (co-ord set) | ₹1,000 | Cotton |
| 3-piece sets | Kurti + bottom + dupatta | ₹1,000 | Rayon slub |

The product list, with each product's price and fabric, is in `products.json`.

## Who buys
Women in India who find us through the website link (shared on WhatsApp, social media and word of mouth) and prefer to order by chat.

## How we sell
The website is a **catalog**, not a full online shop. It has no checkout, no customer login and no payment gateway.

1. The customer browses the website and opens a product.
2. They pick a size and tap **"Order on WhatsApp"**.
3. WhatsApp opens with a ready message, for example:
   *"Hi Aara Culture, I want to order: Rose Pink Cotton Kurti (AC-001), Size: M, Price: ₹799"* plus a link to the product.
4. We confirm stock on WhatsApp and tell them the total including delivery.
5. The customer pays by **UPI**.
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

- **Logo and brand colours:** no logo yet. The site uses a text logo.
- **Sizes for each product:** not given yet. Until then the site asks customers to check sizes on WhatsApp.
- **Size chart:** measurements for each size. The site says "coming soon" and sends customers to WhatsApp for size help.
