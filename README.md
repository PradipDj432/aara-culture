# Aara Culture — Website

The catalog website for **Aara Culture**, a women's clothing brand (kurtis, tops, 2-piece and 3-piece sets). Customers browse products and order on WhatsApp. There's no checkout, login or payment gateway.

## Project docs
| File | What's in it |
|---|---|
| `README.md` | This file: how the code works and how to run and edit it |
| `business.md` | What the business is, what it sells, how orders work, shop rules |
| `decisions.md` | Every choice made and why (numbered D-001, D-002, …) |
| `backlog.md` | Everything still to do, with priority |
| `progress.md` | Current status and a dated work log |
| `CLAUDE.md` | Rules for keeping these docs and the code up to date |

## How it works
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step (D-007).
- Hosted free on **GitHub Pages** at `pradipdj432.github.io/aara-culture` (D-006).
- Every product comes from one file, **`products.json`**. The pages read it in the browser and draw the product cards.
- The **"Order on WhatsApp"** button opens `https://wa.me/916353425567?text=<message>` with the product name, code, size, price and a link to the product (D-001, D-008).

## Folder layout
```
aara-culture/
├── index.html          Home: banner, categories, new arrivals, how to order
├── shop.html           All products, with category and size filters
├── product.html        One product (product.html?id=AC-001): photos, sizes, WhatsApp button
├── info.html           How to order, payment, delivery, returns, size help
├── products.json       The product list (edit this to add products)
├── .nojekyll           Tells GitHub Pages to serve the files as they are
├── css/style.css       All styles (mobile first)
├── js/
│   ├── config.js       Store settings: WhatsApp number, shop rules, categories
│   ├── common.js       Used on every page: header, footer, product cards, WhatsApp links
│   ├── home.js         Home page
│   ├── shop.js         Shop page filters
│   └── product.js      Product page, size picker, order button
└── images/
    ├── products/       Product photos (ac-001-1.jpg, ac-002-1.jpg, …)
    ├── categories/     Placeholder tile for a category with no photo yet
    ├── hero.jpg        Home page banner photo
    └── favicon.svg     Browser tab icon
```

## Run it on your computer
The pages load `products.json` with `fetch`, which doesn't work when you open a file directly (`file://`). Start a small local server in the project folder instead:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Add a product (from the GitHub website or app)

### 1. Upload the photos
- Go to the `images/products/` folder → **Add file → Upload files**.
- Name the photos after the product code: `ac-007-1.jpg`, `ac-007-2.jpg`, …
- Use **portrait** photos (3:4, for example 900 × 1200 pixels). Keep each photo under about 300 KB so the site stays fast on phones.
- Click **Commit changes**.

### 2. Add the product details
Open `products.json` → pencil icon (✏️). Copy this block and paste it **at the top of the list**, right after the first `[`. The newest products go at the top and show up under "New arrivals" on the home page.

```json
  {
    "id": "AC-009",
    "name": "Lemon Yellow Cotton Kurti",
    "category": "kurtis",
    "price": 849,
    "sizes": ["S", "M", "L", "XL"],
    "fabric": "Cotton",
    "description": "Straight kurti with white embroidery on the neck.",
    "images": ["images/products/ac-009-1.jpg", "images/products/ac-009-2.jpg"],
    "inStock": true
  },
```

| Field | What to write |
|---|---|
| `id` | A new code, never used before: `AC-009`, `AC-010`, … |
| `name` | Product name customers see |
| `category` | One of `kurtis`, `tops`, `2-piece`, `3-piece` |
| `price` | Price in rupees, just the number (no ₹, no commas) |
| `sizes` | Sizes in quotes, separated by commas: `["S", "M", "L"]`. One size? `["Free size"]`. Not sure yet? Leave it empty, `[]`: the customer is asked to check sizes on WhatsApp |
| `fabric` | For example `"Cotton"` or `"Rayon kurti, chiffon dupatta"` |
| `description` | One or two short sentences |
| `images` | Photo paths from step 1. The first photo is the one shown in the shop |
| `inStock` | `true` = can order, `false` = shows "Sold out" |

Click **Commit changes**. The live site updates in about a minute.

**Watch the commas:** every product block ends with `},` except the **last** one in the list, which ends with `}` (no comma). If the shop shows "Products couldn't load", a missing or extra comma in `products.json` is the usual cause. GitHub shows a red mark on the line with the mistake.

### Other product changes
- **Sold out:** change `"inStock": true` to `"inStock": false`. Back in stock: change it back.
- **Change a price:** edit the `"price"` number.
- **Remove a product:** delete its whole block, from `{` to `},`.
- **Add sizes later:** change `"sizes": []` to, for example, `"sizes": ["S", "M", "L", "XL"]`. Size buttons and the shop's size filter appear by themselves.

## Change store details
Edit `js/config.js`:
- `whatsappNumber` / `whatsappDisplay`: the order number (country code + number, no `+` or spaces in `whatsappNumber`).
- `announcement`: the text in the thin black bar at the top of every page.
- `highlights`: the three short points shown above the footer.
- `policies.delivery`, `policies.payment`, `policies.returns`: the delivery, payment and return text. It shows on every product page and on the info page.
- `CATEGORIES`: category names and their home page pictures. Each picture is one of the product photos (for example `"images/products/ac-006-1.jpg"`); if you delete that product, pick another photo. A category with no products is hidden by itself, and shows up again when you add a product to it.

## Change the home page banner
Upload a portrait photo (about 1000 × 1250 pixels) to `images/`, then in `index.html` change `images/hero.jpg` to your photo's name.

## Photo tips for the premium look
- Keep each photo under about 300 KB. Big phone or AI photos (1–2 MB) make the site slow on mobile data; ask Claude to compress them, or use a free tool like squoosh.app (JPEG, quality 80, width 1000).
- Portrait (3:4), plain light background (white, cream or light grey wall), daylight, no clutter.
- Same background and framing for every product, so the shop looks tidy.
- First photo: the full outfit from the front. Second photo: a close-up or the back. It shows when a customer hovers on a computer.

## Go live (GitHub Pages)
GitHub Pages serves the `main` branch from the repo root. Turn it on once:

1. Open the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Pick branch **`main`** and folder **`/ (root)`** → **Save**.
4. After a minute or two the site is live at `https://pradipdj432.github.io/aara-culture/`.

After that, every change on `main` goes live automatically.
