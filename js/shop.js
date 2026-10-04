// Shop page: all products with category and size filters.
// Filters are kept in the address (shop.html?cat=kurtis&size=M) so links can be shared.

document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("product-grid");
  const categoryFilter = document.getElementById("category-filter");
  const sizeFilter = document.getElementById("size-filter");
  const count = document.getElementById("result-count");

  let products;
  try {
    products = await loadProducts();
  } catch (error) {
    console.error(error);
    showLoadError(grid);
    return;
  }

  const params = new URLSearchParams(location.search);
  const state = { cat: params.get("cat") || "", size: params.get("size") || "" };
  const allSizes = sortSizes([...new Set(products.flatMap((p) => p.sizes || []))]);

  function chip(group, value, label) {
    const active = state[group] === value;
    return `<button type="button" class="chip" data-group="${group}" data-value="${escapeHtml(value)}" aria-pressed="${active}">${escapeHtml(label)}</button>`;
  }

  function render() {
    categoryFilter.innerHTML =
      chip("cat", "", "All") + CATEGORIES.map((c) => chip("cat", c.id, c.name)).join("");
    sizeFilter.innerHTML =
      chip("size", "", "All sizes") + allSizes.map((s) => chip("size", s, s)).join("");

    const shown = products.filter(
      (p) => (!state.cat || p.category === state.cat) && (!state.size || (p.sizes || []).includes(state.size))
    );
    count.textContent = shown.length === 1 ? "1 product" : shown.length + " products";
    grid.innerHTML = shown.length
      ? shown.map(productCard).join("")
      : '<p class="notice">No products match these filters. <button type="button" class="link-button" id="clear-filters">Show all products</button></p>';

    const query = new URLSearchParams();
    if (state.cat) query.set("cat", state.cat);
    if (state.size) query.set("size", state.size);
    history.replaceState(null, "", query.toString() ? "?" + query : location.pathname);
  }

  document.querySelector(".filters").addEventListener("click", (event) => {
    const button = event.target.closest(".chip");
    if (!button) return;
    state[button.dataset.group] = button.dataset.value;
    render();
  });

  grid.addEventListener("click", (event) => {
    if (event.target.id !== "clear-filters") return;
    state.cat = "";
    state.size = "";
    render();
  });

  render();
});
