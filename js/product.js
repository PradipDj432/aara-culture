// Product page: photos, size picker, the "Order on WhatsApp" button and "You may also like".
// Opened as product.html?id=AC-001

const RELATED_COUNT = 4;

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("product");
  const id = new URLSearchParams(location.search).get("id");

  let products;
  try {
    products = await loadProducts();
  } catch (error) {
    console.error(error);
    showLoadError(container);
    return;
  }

  const product = products.find((p) => p.id === id);
  if (!product) {
    container.innerHTML = `
      <div class="notice">
        <p>We couldn't find this product. It may have been removed.</p>
        <p><a class="button" href="shop.html">See all products</a></p>
      </div>`;
    return;
  }

  document.title = product.name + " | " + STORE.name;
  const sizes = sortSizes(product.sizes || []);
  // Products without a size list are still orderable; the size is agreed on WhatsApp.
  const hasSizes = sizes.length > 0;
  let selectedSize = sizes.length === 1 ? sizes[0] : "";

  const images = product.images || [];
  const slides = images
    .map((src, i) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(product.name)}, photo ${i + 1}" width="600" height="800"${i ? ' loading="lazy"' : ""}>`)
    .join("");
  const counter =
    images.length > 1
      ? `<p class="gallery-count" aria-hidden="true"><span id="gallery-index">1</span> / ${images.length}</p>`
      : "";

  container.innerHTML = `
    <div class="product-layout">
      <div class="gallery">
        <div class="gallery-track">${slides}</div>
        ${counter}
      </div>
      <div class="product-info">
        <p class="breadcrumb">
          <a href="shop.html">Shop</a><span aria-hidden="true">/</span><a href="shop.html?cat=${encodeURIComponent(product.category)}">${escapeHtml(categoryName(product.category))}</a>
        </p>
        <h1 class="product-title">${escapeHtml(product.name)}</h1>
        <p class="product-price">${formatPrice(product.price)}</p>
        <p class="product-code">Code ${escapeHtml(product.id)}${product.sample ? ' <span class="badge badge-light">Sample</span>' : ""}</p>

        <div class="size-picker">
          <div class="size-head">
            <p class="label" id="size-label">${hasSizes ? "Select size" : "Size"}</p>
            <a href="info.html#size-chart">Size help</a>
          </div>
          ${
            hasSizes
              ? `<div class="sizes" role="group" aria-labelledby="size-label">
                  ${sizes
                    .map((s) => `<button type="button" class="size-option" data-size="${escapeHtml(s)}" aria-pressed="${s === selectedSize}">${escapeHtml(s)}</button>`)
                    .join("")}
                </div>`
              : `<p class="size-note">Ask us for the available sizes on WhatsApp when you order.</p>`
          }
        </div>

        <div class="order-bar">
          <a class="button button-block" id="order-button" target="_blank" rel="noopener"></a>
        </div>
        <p class="order-note">We confirm availability on WhatsApp before you pay.</p>

        <div class="accordion">
          <details open>
            <summary>Details</summary>
            <div class="accordion-body">
              ${product.description ? `<p>${escapeHtml(product.description)}</p>` : ""}
              ${product.fabric ? `<p><strong>Fabric:</strong> ${escapeHtml(product.fabric)}</p>` : ""}
            </div>
          </details>
          <details>
            <summary>Delivery &amp; payment</summary>
            <div class="accordion-body">
              <p data-policy="delivery"></p>
              <p data-policy="payment"></p>
            </div>
          </details>
          <details>
            <summary>Returns</summary>
            <div class="accordion-body">
              <p data-policy="returns"></p>
            </div>
          </details>
        </div>
      </div>
    </div>`;
  fillPolicies();

  // "You may also like": same category first, then the rest.
  const others = products.filter((p) => p.id !== product.id);
  const related = [
    ...others.filter((p) => p.category === product.category),
    ...others.filter((p) => p.category !== product.category),
  ].slice(0, RELATED_COUNT);
  if (related.length) {
    container.insertAdjacentHTML(
      "beforeend",
      `<section class="related">
        <div class="section-head">
          <div>
            <p class="eyebrow">More to love</p>
            <h2 class="section-title">You may also like</h2>
          </div>
          <a class="text-link" href="shop.html">View all ${ARROW_ICON}</a>
        </div>
        <div class="product-grid">${related.map(productCard).join("")}</div>
      </section>`
    );
  }

  const orderButton = document.getElementById("order-button");

  function updateOrderButton() {
    if (!product.inStock) {
      orderButton.removeAttribute("href");
      orderButton.setAttribute("aria-disabled", "true");
      orderButton.textContent = "Sold out";
      return;
    }
    if (hasSizes && !selectedSize) {
      orderButton.removeAttribute("href");
      orderButton.setAttribute("aria-disabled", "true");
      orderButton.textContent = "Select a size";
      return;
    }
    const message = [
      `Hi ${STORE.name}, I want to order:`,
      `${product.name} (${product.id})`,
      `Size: ${selectedSize || "please share the available sizes"}`,
      `Price: ${formatPrice(product.price)}`,
      location.href,
    ].join("\n");
    orderButton.href = whatsappLink(message);
    orderButton.removeAttribute("aria-disabled");
    orderButton.innerHTML = WHATSAPP_ICON + " Order on WhatsApp";
  }

  container.querySelector(".size-picker").addEventListener("click", (event) => {
    const button = event.target.closest(".size-option");
    if (!button) return;
    selectedSize = button.dataset.size;
    container.querySelectorAll(".size-option").forEach((option) => {
      option.setAttribute("aria-pressed", String(option.dataset.size === selectedSize));
    });
    updateOrderButton();
  });

  // Swipeable photos on phones: keep the "1 / 2" counter in sync.
  const track = container.querySelector(".gallery-track");
  const indexLabel = document.getElementById("gallery-index");
  if (indexLabel) {
    track.addEventListener("scroll", () => {
      indexLabel.textContent = String(Math.round(track.scrollLeft / track.clientWidth) + 1);
    });
  }

  updateOrderButton();
});
