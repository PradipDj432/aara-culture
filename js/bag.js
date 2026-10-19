// Bag page: the items a customer picked, and one WhatsApp message with all of them.

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("bag");

  let products;
  try {
    products = await loadProducts();
  } catch (error) {
    console.error(error);
    showLoadError(container);
    return;
  }

  let removedNames = [];

  // Keep only items that can still be ordered; tell the customer about the rest.
  function cleanBag() {
    const kept = [];
    for (const item of readBag()) {
      const product = products.find((p) => p.id === item.id);
      if (product && product.inStock) kept.push(item);
      else removedNames.push(product ? product.name : item.id);
    }
    if (kept.length !== readBag().length) writeBag(kept);
    return kept;
  }

  function orderMessage(lines, subtotal, total) {
    const rows = lines.map(({ item, product }, i) => {
      const size = item.size || "please share the available sizes";
      const link = new URL("product.html?id=" + encodeURIComponent(product.id), location.href).href;
      return [
        `${i + 1}. ${product.name} (${product.id})`,
        `   Size: ${size} · Qty: ${item.qty} · ${formatPrice(product.price * item.qty)}`,
        `   ${link}`,
      ].join("\n");
    });
    return [
      `Hi ${STORE.name}, I want to order:`,
      "",
      ...rows,
      "",
      `Items: ${formatPrice(subtotal)}`,
      `Delivery: ${formatPrice(STORE.deliveryCharge)}`,
      `Total: ${formatPrice(total)}`,
    ].join("\n");
  }

  function render() {
    const items = cleanBag();
    const notice = removedNames.length
      ? `<p class="notice">No longer available, so taken out of your bag: ${removedNames.map(escapeHtml).join(", ")}.</p>`
      : "";
    removedNames = [];

    if (!items.length) {
      container.innerHTML = `
        ${notice}
        <div class="bag-empty">
          <p>Your bag is empty.</p>
          <p><a class="button" href="shop.html">Shop now</a></p>
        </div>`;
      return;
    }

    const lines = items.map((item) => ({ item, product: products.find((p) => p.id === item.id) }));
    const subtotal = lines.reduce((sum, { item, product }) => sum + product.price * item.qty, 0);
    const total = subtotal + STORE.deliveryCharge;

    const rows = lines
      .map(({ item, product }) => {
        const key = `data-id="${escapeHtml(item.id)}" data-size="${escapeHtml(item.size)}"`;
        const name = escapeHtml(product.name);
        return `
          <li class="bag-item">
            <a class="bag-photo" href="product.html?id=${encodeURIComponent(product.id)}">
              <img src="${escapeHtml((product.images || [])[0] || "")}" alt="${name}" width="120" height="160" loading="lazy">
            </a>
            <div class="bag-details">
              <a class="bag-name" href="product.html?id=${encodeURIComponent(product.id)}">${name}</a>
              <p class="bag-meta">${escapeHtml(item.size ? "Size " + item.size : "Size to be confirmed")} · ${formatPrice(product.price)}</p>
              <div class="bag-controls">
                <div class="qty">
                  <button type="button" class="qty-button" ${key} data-action="less" aria-label="One less ${name}">−</button>
                  <span class="qty-value" aria-label="Quantity">${item.qty}</span>
                  <button type="button" class="qty-button" ${key} data-action="more" aria-label="One more ${name}"${item.qty >= BAG_MAX_QTY ? " disabled" : ""}>+</button>
                </div>
                <button type="button" class="link-button" ${key} data-action="remove" aria-label="Remove ${name}">Remove</button>
              </div>
            </div>
            <p class="bag-line-price">${formatPrice(product.price * item.qty)}</p>
          </li>`;
      })
      .join("");

    container.innerHTML = `
      ${notice}
      <ul class="bag-list">${rows}</ul>
      <div class="bag-summary">
        <dl>
          <div><dt>Items</dt><dd>${formatPrice(subtotal)}</dd></div>
          <div><dt>Delivery</dt><dd>${formatPrice(STORE.deliveryCharge)}</dd></div>
          <div class="bag-total"><dt>Total</dt><dd>${formatPrice(total)}</dd></div>
        </dl>
        <a class="button button-block" target="_blank" rel="noopener" href="${whatsappLink(orderMessage(lines, subtotal, total))}">${WHATSAPP_ICON} Order all on WhatsApp</a>
        <p class="order-note">We confirm availability on WhatsApp before you pay. <span data-policy="payment"></span></p>
        <p class="order-note"><a href="shop.html">Keep shopping</a></p>
      </div>`;
    fillPolicies();
  }

  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const { id, size, action } = button.dataset;
    const items = readBag();
    const item = items.find((i) => i.id === id && i.size === size);
    if (!item) return;
    if (action === "more") item.qty = Math.min(item.qty + 1, BAG_MAX_QTY);
    if (action === "less") item.qty -= 1;
    if (action === "remove") item.qty = 0;
    writeBag(items.filter((i) => i.qty > 0));
    render();
  });

  window.addEventListener("storage", render); // changed in another tab
  render();
});
