# Aara Culture — Website

The catalog website for **Aara Culture**, a women's clothing brand (kurtis, tops, 2-piece and 3-piece sets). Customers browse products and order on WhatsApp. There's no checkout, login or payment gateway.

> **Status:** planning done, code not written yet. The structure below is the plan. Update this file as the code is built.

## Project docs
| File | What's in it |
|---|---|
| `README.md` | This file: how the code works and how to run and edit it |
| `business.md` | What the business is, what it sells, how orders work |
| `decisions.md` | Every choice made and why (numbered D-001, D-002, …) |
| `backlog.md` | Everything still to do, with priority |
| `progress.md` | Current status and a dated work log |
| `CLAUDE.md` | Rules for keeping these docs and the code up to date |

## How it works
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step (D-007).
- Hosted free on **GitHub Pages** at `pradipdj432.github.io/aara-culture` (D-006).
- Every product comes from one file, **`products.json`**. Pages read it in the browser and draw the product cards.
- The **"Order on WhatsApp"** button opens `https://wa.me/916353425567?text=<message>` with the product name, code, size and price filled in (D-001, D-008).

## Planned folder layout
```
aara-culture/
├── index.html          Home: banner, categories, new arrivals, how to order
├── shop.html           All products, with category and size filters
├── product.html        One product: photos, sizes, details, WhatsApp button
├── info.html           Size chart, payment, delivery, return/exchange
├── products.json       The product list (edit this to add products)
├── images/             Product photos
├── css/style.css       All styles (mobile first)
└── js/
    ├── config.js       Store name, WhatsApp number
    ├── products.js     Loads products.json, draws cards, filters
    └── whatsapp.js     Builds the WhatsApp order message
```

## Run it on your computer
The pages load `products.json` with `fetch`, which doesn't work when you open a file directly (`file://`). Start a small local server in the project folder instead:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Add or edit a product
A full step-by-step guide with examples will be added here once `products.json` exists. In short:

1. Upload the photos to `images/` (GitHub website → **Add file → Upload files**).
2. Open `products.json` → pencil icon → copy an existing product block, change the details, and use the new photo names.
3. Sold out: change `"inStock": true` to `"inStock": false`.
4. Click **Commit changes**. The live site updates in about a minute.

## Deploy
GitHub Pages serves the `main` branch from the repo root. Turn it on once: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**. After that, every change merged to `main` goes live automatically.
