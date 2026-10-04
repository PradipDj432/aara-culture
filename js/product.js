// Product page: photos, size picker and the "Order on WhatsApp" button.
// Opened as product.html?id=AC-001

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
  let selectedSize = sizes.length === 1 ? sizes[0] : "";

  const images = product.images || [];
  const slides = images
    .map((src, i) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(product.name)}, photo ${i + 1}" width="600" height="800"${i ? ' loading="lazy"' : ""}>`)
    .join("");
  const dots =
    images.length > 1
      ? `<div class="gallery-dots">${images
          .map((_, i) => `<button type="button" aria-label="Photo ${i + 1}"${i ? "" : ' aria-current="true"'}></button>`)
          .join("")}</div>`
      : "";

  container.innerHTML = `
    <div class="product-layout">
      <div class="gallery">
        <div class="gallery-track">${slides}</div>
        ${dots}
      </div>
      <div class="product-info">
        <p class="breadcrumb">
          <a href="shop.html">Shop</a> /
          <a href="shop.html?cat=${encodeURIComponent(product.category)}">${escapeHtml(categoryName(product.category))}</a>
        </p>
        <h1 class="product-title">${escapeHtml(product.name)}</h1>
        <p class="product-code">Code: ${escapeHtml(product.id)}${product.sample ? ' <span class="badge badge-sample">Sample</span>' : ""}</p>
        <p class="product-price">${formatPrice(product.price)}</p>

        <div class="size-picker">
          <p class="label" id="size-label">Size</p>
          <div class="chips" role="group" aria-labelledby="size-label">
            ${sizes
              .map((s) => `<button type="button" class="chip" data-size="${escapeHtml(s)}" aria-pressed="${s === selectedSize}">${escapeHtml(s)}</button>`)
              .join("")}
          </div>
          <p class="size-help"><a href="info.html#size-chart">Size help</a></p>
        </div>

        <div class="order-bar">
          <a class="button button-whatsapp" id="order-button" target="_blank" rel="noopener"></a>
        </div>

        <dl class="details">
          ${product.fabric ? `<dt>Fabric</dt><dd>${escapeHtml(product.fabric)}</dd>` : ""}
          ${product.description ? `<dt>Details</dt><dd>${escapeHtml(product.description)}</dd>` : ""}
        </dl>

        <ul class="policy-list">
          <li><strong>Delivery:</strong> <span data-policy="delivery"></span></li>
          <li><strong>Payment:</strong> <span data-policy="payment"></span></li>
          <li><strong>Returns:</strong> <span data-policy="returns"></span></li>
        </ul>
      </div>
    </div>`;
  fillPolicies();

  const orderButton = document.getElementById("order-button");

  function updateOrderButton() {
    if (!product.inStock) {
      orderButton.removeAttribute("href");
      orderButton.setAttribute("aria-disabled", "true");
      orderButton.textContent = "Sold out";
      return;
    }
    if (!selectedSize) {
      orderButton.removeAttribute("href");
      orderButton.setAttribute("aria-disabled", "true");
      orderButton.textContent = "Select a size to order";
      return;
    }
    const message = [
      `Hi ${STORE.name}, I want to order:`,
      `${product.name} (${product.id})`,
      `Size: ${selectedSize}`,
      `Price: ${formatPrice(product.price)}`,
      location.href,
    ].join("\n");
    orderButton.href = whatsappLink(message);
    orderButton.removeAttribute("aria-disabled");
    orderButton.innerHTML = WHATSAPP_ICON + " Order on WhatsApp";
  }

  container.querySelector(".size-picker .chips").addEventListener("click", (event) => {
    const button = event.target.closest(".chip");
    if (!button) return;
    selectedSize = button.dataset.size;
    container.querySelectorAll(".size-picker .chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.size === selectedSize));
    });
    updateOrderButton();
  });

  // Swipeable photos: keep the dots in sync, and let dots jump to a photo.
  const track = container.querySelector(".gallery-track");
  const dotButtons = [...container.querySelectorAll(".gallery-dots button")];
  track.addEventListener("scroll", () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    dotButtons.forEach((dot, i) => {
      if (i === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  });
  dotButtons.forEach((dot, i) => {
    dot.addEventListener("click", () => track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }));
  });

  updateOrderButton();
});
