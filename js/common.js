// Shared code for every page: header, footer, product cards, WhatsApp links.

const WHATSAPP_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
  '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/>' +
  '<path d="M16.6 14.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/>' +
  "</svg>";

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

async function loadProducts() {
  const response = await fetch("products.json", { cache: "no-cache" });
  if (!response.ok) throw new Error("products.json returned " + response.status);
  return response.json();
}

function productCard(product) {
  const badges = [];
  if (!product.inStock) badges.push('<span class="badge badge-soldout">Sold out</span>');
  if (product.sample) badges.push('<span class="badge badge-sample">Sample</span>');
  const image = (product.images && product.images[0]) || "";
  return `
    <a class="card${product.inStock ? "" : " is-soldout"}" href="product.html?id=${encodeURIComponent(product.id)}">
      <div class="card-image">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="lazy" width="600" height="800">
        <div class="badges">${badges.join("")}</div>
      </div>
      <div class="card-body">
        <p class="card-category">${escapeHtml(categoryName(product.category))}</p>
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

function renderHeader(page) {
  const link = (href, label, name) =>
    `<a href="${href}"${page === name ? ' aria-current="page"' : ""}>${label}</a>`;
  document.getElementById("site-header").innerHTML = `
    <div class="container header-inner">
      <a class="logo" href="index.html">${escapeHtml(STORE.name)}</a>
      <nav class="nav" aria-label="Main">
        ${link("shop.html", "Shop", "shop")}
        ${link("info.html", "Info", "info")}
        <a class="nav-whatsapp" href="${whatsappLink()}" aria-label="Chat on WhatsApp">${WHATSAPP_ICON}</a>
      </nav>
    </div>`;
}

function renderFooter() {
  const categoryLinks = CATEGORIES.map(
    (c) => `<li><a href="shop.html?cat=${encodeURIComponent(c.id)}">${escapeHtml(c.name)}</a></li>`
  ).join("");
  document.getElementById("site-footer").innerHTML = `
    <div class="container footer-inner">
      <div>
        <p class="logo">${escapeHtml(STORE.name)}</p>
        <p class="footer-tagline">${escapeHtml(STORE.tagline)}</p>
        <a class="footer-whatsapp" href="${whatsappLink()}">${WHATSAPP_ICON} ${escapeHtml(STORE.whatsappDisplay)}</a>
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
    </div>
    <p class="container copyright">© ${new Date().getFullYear()} ${escapeHtml(STORE.name)}</p>`;
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
});
