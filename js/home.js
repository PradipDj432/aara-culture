// Home page: category tiles and the newest products.

const NEW_ARRIVALS_COUNT = 4;

document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("categories").innerHTML = CATEGORIES.map(
    (c) => `
      <a class="category" href="shop.html?cat=${encodeURIComponent(c.id)}">
        <img src="${escapeHtml(c.image)}" alt="" loading="lazy" width="600" height="800">
        <span>${escapeHtml(c.name)}</span>
      </a>`
  ).join("");

  const grid = document.getElementById("new-arrivals");
  try {
    const products = await loadProducts();
    // Newest products are at the top of products.json.
    grid.innerHTML = products.slice(0, NEW_ARRIVALS_COUNT).map(productCard).join("");
  } catch (error) {
    console.error(error);
    showLoadError(grid);
  }
});
