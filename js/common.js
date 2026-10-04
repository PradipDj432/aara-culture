// Shared code for every page: header, menu, footer, product cards, WhatsApp links.

const WHATSAPP_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
  '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/>' +
  '<path d="M16.6 14.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/>' +
  "</svg>";

// Logo files (Bloom, D-023). Made by brand/tools/make_logo.py; don't edit them by hand.
const LOGO = {
  header: "brand/logo/aara-logo-horizontal-on-light.svg",
  footer: "brand/logo/aara-logo-on-dark.svg",
};

const MENU_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 8h18M3 16h18"/></svg>';

const CLOSE_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 5l14 14M19 5L5 19"/></svg>';

const ARROW_ICON =
  '<svg class="icon icon-arrow" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPrice(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function categoryName(id) {
  const category = CATEGORIES.find((c) => c.id === id);
  return category ? category.name : id;
}

function whatsappLink(message) {
  const base = "https://wa.me/" + STORE.whatsappNumber;
  return message ? base + "?text=" + encodeURIComponent(message) : base;
}

function sortSizes(sizes) {
  const rank = (size) => {
    const i = SIZE_ORDER.indexOf(size);
    return i === -1 ? SIZE_ORDER.length : i;
  };
  return [...sizes].sort((a, b) => rank(a) - rank(b));
}

let productsRequest;

// Loads products.json once per page, however many scripts ask for it.
function loadProducts() {
  productsRequest ??= fetch("products.json", { cache: "no-cache" }).then((response) => {
    if (!response.ok) throw new Error("products.json returned " + response.status);
    return response.json();
  });
  return productsRequest;
}

// Categories that have at least one product, in the order of CATEGORIES.
function activeCategories(products) {
  return CATEGORIES.filter((c) => products.some((p) => p.category === c.id));
}

// Menu and footer are drawn before products load; drop links to empty categories afterwards.
function hideEmptyCategoryLinks(products) {
  const active = new Set(activeCategories(products).map((c) => c.id));
  document.querySelectorAll("[data-category]").forEach((el) => {
    if (!active.has(el.dataset.category)) el.remove();
  });
}

function productCard(product) {
  const badges = [];
  if (!product.inStock) badges.push('<span class="badge">Sold out</span>');
  if (product.sample) badges.push('<span class="badge badge-light">Sample</span>');
  const [first = "", second] = product.images || [];
  // A second photo fades in on hover (desktop only).
  const hoverImage = second
    ? `<img class="card-image-hover" src="${escapeHtml(second)}" alt="" loading="lazy" width="600" height="800">`
    : "";
  return `
    <a class="card${product.inStock ? "" : " is-soldout"}" href="product.html?id=${encodeURIComponent(product.id)}">
      <div class="card-image">
        <img src="${escapeHtml(first)}" alt="${escapeHtml(product.name)}" loading="lazy" width="600" height="800">
        ${hoverImage}
        <div class="badges">${badges.join("")}</div>
      </div>
      <h3 class="card-title">${escapeHtml(product.name)}</h3>
      <p class="card-price">${formatPrice(product.price)}</p>
    </a>`;
}

function showLoadError(container) {
  container.innerHTML = `
    <p class="notice">Products couldn't load. Please refresh the page, or
    <a href="${whatsappLink()}">message us on WhatsApp</a>.</p>`;
}

function renderHeader(page) {
  const header = document.getElementById("site-header");
  const link = (href, label, name) =>
    `<a href="${href}"${page === name ? ' aria-current="page"' : ""}>${label}</a>`;
  const categoryLinks = CATEGORIES.map(
    (c) => `<li data-category="${escapeHtml(c.id)}"><a href="shop.html?cat=${encodeURIComponent(c.id)}">${escapeHtml(c.name)}</a></li>`
  ).join("");

  header.insertAdjacentHTML(
    "beforebegin",
    `<div class="announcement">${escapeHtml(STORE.announcement)}</div>`
  );
  header.innerHTML = `
    <div class="container header-inner">
      <div class="header-left">
        <button type="button" class="icon-button menu-button" aria-label="Open menu" aria-expanded="false" aria-controls="menu">${MENU_ICON}</button>
        <nav class="nav" aria-label="Main">
          ${link("shop.html", "Shop", "shop")}
          ${link("info.html", "How to order", "info")}
        </nav>
      </div>
      <a class="logo" href="index.html"><img src="${LOGO.header}" alt="${escapeHtml(STORE.name)}" width="262" height="84"></a>
      <div class="header-right">
        <a class="icon-button" href="${whatsappLink()}" aria-label="Chat on WhatsApp">${WHATSAPP_ICON}</a>
      </div>
    </div>`;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="menu-overlay" hidden></div>
    <aside class="menu" id="menu" aria-label="Menu" hidden>
      <div class="menu-head">
        <a class="logo" href="index.html"><img src="${LOGO.header}" alt="${escapeHtml(STORE.name)}" width="262" height="84"></a>
        <button type="button" class="icon-button menu-close" aria-label="Close menu">${CLOSE_ICON}</button>
      </div>
      <ul class="menu-links">
        <li><a href="shop.html">Shop all</a></li>
        ${categoryLinks}
      </ul>
      <ul class="menu-secondary">
        <li><a href="info.html">How to order</a></li>
        <li><a href="info.html#delivery">Delivery &amp; payment</a></li>
        <li><a href="${whatsappLink()}">${WHATSAPP_ICON} ${escapeHtml(STORE.whatsappDisplay)}</a></li>
      </ul>
    </aside>`
  );

  const menu = document.getElementById("menu");
  const overlay = document.querySelector(".menu-overlay");
  const openButton = header.querySelector(".menu-button");
  function setMenu(open) {
    menu.hidden = !open;
    overlay.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    openButton.setAttribute("aria-expanded", String(open));
    if (open) menu.querySelector(".menu-close").focus();
    else openButton.focus();
  }
  openButton.addEventListener("click", () => setMenu(true));
  menu.querySelector(".menu-close").addEventListener("click", () => setMenu(false));
  overlay.addEventListener("click", () => setMenu(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) setMenu(false);
  });
}

function renderFooter() {
  const categoryLinks = CATEGORIES.map(
    (c) => `<li data-category="${escapeHtml(c.id)}"><a href="shop.html?cat=${encodeURIComponent(c.id)}">${escapeHtml(c.name)}</a></li>`
  ).join("");
  const highlights = STORE.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("");
  document.getElementById("site-footer").innerHTML = `
    <ul class="highlights">${highlights}</ul>
    <div class="footer-main">
      <div class="container footer-inner">
        <div class="footer-brand">
          <a class="logo" href="index.html"><img src="${LOGO.footer}" alt="${escapeHtml(STORE.name)}" width="400" height="400"></a>
        </div>
        <div>
          <p class="footer-heading">Shop</p>
          <ul>${categoryLinks}</ul>
        </div>
        <div>
          <p class="footer-heading">Help</p>
          <ul>
            <li><a href="info.html#how-to-order">How to order</a></li>
            <li><a href="info.html#delivery">Delivery</a></li>
            <li><a href="info.html#payment">Payment</a></li>
            <li><a href="info.html#returns">Returns</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-heading">Contact</p>
          <ul>
            <li><a class="footer-whatsapp" href="${whatsappLink()}">${WHATSAPP_ICON} ${escapeHtml(STORE.whatsappDisplay)}</a></li>
          </ul>
        </div>
      </div>
      <p class="container copyright">© ${new Date().getFullYear()} ${escapeHtml(STORE.name)}</p>
    </div>`;
}

function renderFloatingWhatsapp() {
  const button = document.createElement("a");
  button.className = "floating-whatsapp";
  button.href = whatsappLink("Hi " + STORE.name + ", I have a question.");
  button.setAttribute("aria-label", "Chat on WhatsApp");
  button.innerHTML = WHATSAPP_ICON;
  document.body.appendChild(button);
}

// Fills every element like <span data-policy="delivery"></span> from STORE.policies.
function fillPolicies() {
  document.querySelectorAll("[data-policy]").forEach((el) => {
    el.textContent = STORE.policies[el.dataset.policy] || "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  renderHeader(page);
  renderFooter();
  fillPolicies();
  if (page !== "product") renderFloatingWhatsapp();
  loadProducts().then(hideEmptyCategoryLinks, () => {});
});
