// Shared code for every page: header, menu, footer, product cards, WhatsApp and Instagram links.

// WhatsApp and Instagram signs from Simple Icons (simpleicons.org, CC0, free to use).
const WHATSAPP_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

const INSTAGRAM_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>';

// Logo files (Bloom, D-023). Made by brand/tools/make_logo.py; don't edit them by hand.
const LOGO = {
  header: "brand/logo/aara-logo-horizontal-on-light.svg",
  headerOnPhoto: "brand/logo/aara-logo-horizontal-on-dark.svg",
  footer: "brand/logo/aara-logo-on-dark.svg",
};

const MENU_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 7h18M3 12h18M9 17h12"/></svg>';

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

function instagramLink() {
  return "https://www.instagram.com/" + encodeURIComponent(STORE.instagram) + "/";
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
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(product.name)}</h3>
        <p class="card-price">${formatPrice(product.price)}</p>
      </div>
    </a>`;
}

function showLoadError(container) {
  container.innerHTML = `
    <p class="notice">Products couldn't load. Please refresh the page, or
    <a href="${whatsappLink()}">message us on WhatsApp</a>.</p>`;
}

function categoryLinks() {
  return CATEGORIES.map(
    (c) => `<li data-category="${escapeHtml(c.id)}"><a href="shop.html?cat=${encodeURIComponent(c.id)}">${escapeHtml(c.name)}</a></li>`
  ).join("");
}

// Header: logo on the left, menu on the right (D-027).
// On the home page it sits on top of the photo slider until the page is scrolled.
function renderHeader(page) {
  const header = document.getElementById("site-header");
  const link = (href, label, name) =>
    `<li><a href="${href}"${page === name ? ' aria-current="page"' : ""}>${label}</a></li>`;
  const logo = (onPhoto) => `
    <a class="logo" href="index.html">
      <img class="logo-on-light" src="${LOGO.header}" alt="${escapeHtml(STORE.name)}" width="262" height="84">
      ${onPhoto ? `<img class="logo-on-photo" src="${LOGO.headerOnPhoto}" alt="${escapeHtml(STORE.name)}" width="262" height="84">` : ""}
    </a>`;

  header.insertAdjacentHTML(
    "beforebegin",
    `<div class="announcement">${escapeHtml(STORE.announcement)}</div>`
  );
  header.innerHTML = `
    <div class="container header-inner">
      ${logo(true)}
      <div class="header-right">
        <nav class="nav" aria-label="Main">
          <ul>
            ${link("shop.html", "Shop", "shop")}
            ${categoryLinks()}
            ${link("info.html", "How to order", "info")}
          </ul>
        </nav>
        <a class="icon-button header-instagram" href="${instagramLink()}" target="_blank" rel="noopener" aria-label="Instagram @${escapeHtml(STORE.instagram)}">${INSTAGRAM_ICON}</a>
        <button type="button" class="icon-button menu-button" aria-label="Open menu" aria-expanded="false" aria-controls="menu">${MENU_ICON}</button>
      </div>
    </div>`;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="menu-overlay" hidden></div>
    <aside class="menu" id="menu" aria-label="Menu" hidden>
      <div class="menu-head">
        ${logo(false)}
        <button type="button" class="icon-button menu-close" aria-label="Close menu">${CLOSE_ICON}</button>
      </div>
      <ul class="menu-links">
        <li><a href="shop.html">Shop all</a></li>
        ${categoryLinks()}
      </ul>
      <ul class="menu-secondary">
        <li><a href="info.html#how-to-order">How to order</a></li>
        <li><a href="info.html#delivery">Delivery &amp; payment</a></li>
        <li><a href="info.html#size-chart">Size help</a></li>
      </ul>
      <div class="menu-contact">
        <a href="${instagramLink()}" target="_blank" rel="noopener">${INSTAGRAM_ICON} @${escapeHtml(STORE.instagram)}</a>
        <a href="${whatsappLink()}" target="_blank" rel="noopener">${WHATSAPP_ICON} ${escapeHtml(STORE.whatsappDisplay)}</a>
      </div>
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

  // Home page: see-through header on the photo, solid once the page scrolls.
  if (document.body.classList.contains("has-hero")) {
    const update = () => header.classList.toggle("is-on-photo", window.scrollY < 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }
}

function renderFooter() {
  const highlights = STORE.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("");
  document.getElementById("site-footer").innerHTML = `
    <ul class="highlights">${highlights}</ul>
    <div class="footer-main">
      <div class="container footer-inner">
        <div class="footer-brand">
          <a class="logo" href="index.html"><img src="${LOGO.footer}" alt="${escapeHtml(STORE.name)}" width="400" height="400"></a>
          <p class="footer-text">Kurtis, tops and sets for women. Order on WhatsApp, delivered all over India.</p>
          <div class="social">
            <a href="${instagramLink()}" target="_blank" rel="noopener" aria-label="Instagram">${INSTAGRAM_ICON}</a>
            <a href="${whatsappLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${WHATSAPP_ICON}</a>
          </div>
        </div>
        <div>
          <p class="footer-heading">Shop</p>
          <ul>
            <li><a href="shop.html">Shop all</a></li>
            ${categoryLinks()}
          </ul>
        </div>
        <div>
          <p class="footer-heading">Help</p>
          <ul>
            <li><a href="info.html#how-to-order">How to order</a></li>
            <li><a href="info.html#delivery">Delivery</a></li>
            <li><a href="info.html#payment">Payment</a></li>
            <li><a href="info.html#returns">Returns</a></li>
            <li><a href="info.html#size-chart">Size help</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-heading">Contact</p>
          <ul>
            <li><a class="footer-contact" href="${whatsappLink()}" target="_blank" rel="noopener">${WHATSAPP_ICON} ${escapeHtml(STORE.whatsappDisplay)}</a></li>
            <li><a class="footer-contact" href="${instagramLink()}" target="_blank" rel="noopener">${INSTAGRAM_ICON} @${escapeHtml(STORE.instagram)}</a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <p class="footer-bottom">© ${new Date().getFullYear()} ${escapeHtml(STORE.name)}</p>
      </div>
    </div>`;
}

// "Chat with us" button in the bottom corner (D-027). The product page has its own order button instead.
// On the home page it appears once the visitor scrolls past the photo slider.
function renderChatButton() {
  const button = document.createElement("a");
  button.className = "chat-button";
  button.href = whatsappLink("Hi " + STORE.name + ", I have a question.");
  button.target = "_blank";
  button.rel = "noopener";
  button.innerHTML = WHATSAPP_ICON + "<span>Chat with us</span>";
  document.body.appendChild(button);

  if (document.body.classList.contains("has-hero")) {
    const update = () => button.classList.toggle("is-away", window.scrollY < window.innerHeight * 0.6);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }
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
  if (page !== "product") renderChatButton();
  loadProducts().then(hideEmptyCategoryLinks, () => {});
});
