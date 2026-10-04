// Home page: category tiles and the newest products.

const NEW_ARRIVALS_COUNT = 4;

document.addEventListener("DOMContentLoaded", async () => {
  const categoryGrid = document.getElementById("categories");
  const grid = document.getElementById("new-arrivals");
  let products;
  try {
    products = await loadProducts();
  } catch (error) {
    console.error(error);
    showLoadError(grid);
    return;
  }

  const categories = activeCategories(products);
  categoryGrid.style.setProperty("--count", categories.length);
  categoryGrid.innerHTML = categories
    .map(
      (c) => `
      <a class="category" href="shop.html?cat=${encodeURIComponent(c.id)}">
        <div class="category-image">
          <img src="${escapeHtml(c.image)}" alt="" loading="lazy" width="600" height="800">
        </div>
        <span class="category-name">${escapeHtml(c.name)} ${ARROW_ICON}</span>
      </a>`
    )
    .join("");

  // Newest products are at the top of products.json.
  grid.innerHTML = products.slice(0, NEW_ARRIVALS_COUNT).map(productCard).join("");
});
