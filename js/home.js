// Home page: full-screen photo slider, category tiles, newest products and the Instagram strip.

const NEW_ARRIVALS_COUNT = 4;
const INSTAGRAM_PHOTOS = 6;
const SLIDE_SECONDS = 5;

// Photo slider: swipe on phones, arrows and dots on computers, moves on by itself every few seconds.
// One photo fills a phone screen; on wider screens 2 or 3 photos sit side by side (set in css/style.css).
function setUpHero() {
  const track = document.getElementById("hero-track");
  const dots = document.getElementById("hero-dots");
  if (!HERO_SLIDES.length) return;
  track.innerHTML = HERO_SLIDES.map(
    (slide, i) => `
      <a class="hero-slide" href="product.html?id=${encodeURIComponent(slide.product)}" data-product="${escapeHtml(slide.product)}">
        <img src="${escapeHtml(slide.image)}" alt="" width="1000" height="1333"${i < 3 ? (i ? "" : ' fetchpriority="high"') : ' loading="lazy"'}>
      </a>`
  ).join("");
  // Load the rest of the photos once the page is ready, so a slide is never blank.
  window.addEventListener("load", () => track.querySelectorAll("img[loading=lazy]").forEach((img) => (img.loading = "eager")));

  const slides = [...track.children];
  const slideWidth = () => slides[0].getBoundingClientRect().width;
  const positions = () => Math.max(1, slides.length - Math.round(track.clientWidth / slideWidth()) + 1);
  const current = () => Math.round(track.scrollLeft / slideWidth());
  const goTo = (i) => track.scrollTo({ left: i * slideWidth(), behavior: "smooth" });

  function drawDots() {
    dots.innerHTML = Array.from(
      { length: positions() },
      (_, i) => `<button type="button" class="hero-dot" aria-label="Photo ${i + 1}" data-index="${i}"></button>`
    ).join("");
    markDot();
  }
  function markDot() {
    const index = current();
    dots.querySelectorAll(".hero-dot").forEach((dot, i) => dot.setAttribute("aria-current", String(i === index)));
  }

  let timer;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function restart() {
    clearInterval(timer);
    if (reducedMotion) return;
    timer = setInterval(() => {
      if (!document.hidden) goTo((current() + 1) % positions());
    }, SLIDE_SECONDS * 1000);
  }

  dots.addEventListener("click", (event) => {
    const dot = event.target.closest(".hero-dot");
    if (!dot) return;
    goTo(Number(dot.dataset.index));
    restart();
  });
  document.getElementById("hero-prev").addEventListener("click", () => {
    goTo((current() - 1 + positions()) % positions());
    restart();
  });
  document.getElementById("hero-next").addEventListener("click", () => {
    goTo((current() + 1) % positions());
    restart();
  });

  let frame;
  track.addEventListener("scroll", () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(markDot);
  });
  track.addEventListener("pointerdown", restart);
  const hero = track.closest(".hero");
  hero.addEventListener("mouseenter", () => clearInterval(timer));
  hero.addEventListener("mouseleave", restart);
  window.addEventListener("resize", drawDots);

  drawDots();
  restart();
}

function setUpInstagramLinks() {
  const handle = document.getElementById("instagram-handle");
  handle.href = instagramLink();
  handle.textContent = "@" + STORE.instagram;
  document.getElementById("instagram-button").href = instagramLink();
}

// A few product photos under the Instagram heading, each opening the Instagram page.
function drawInstagramPhotos(products) {
  const link = instagramLink();
  const photos = products.filter((p) => p.images && p.images.length).slice(0, INSTAGRAM_PHOTOS);
  document.getElementById("instagram-grid").innerHTML = photos
    .map(
      (p) => `
      <a class="instagram-photo" href="${link}" target="_blank" rel="noopener" aria-label="${escapeHtml(p.name)} on Instagram">
        <img src="${escapeHtml(p.images[0])}" alt="" loading="lazy" width="600" height="800">
        ${INSTAGRAM_ICON}
      </a>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  setUpHero();
  setUpInstagramLinks();

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

  // Slider photos get their product's name, for screen readers.
  document.querySelectorAll(".hero-slide").forEach((slide) => {
    const product = products.find((p) => p.id === slide.dataset.product);
    if (product) slide.querySelector("img").alt = product.name;
  });

  const categories = activeCategories(products);
  categoryGrid.style.setProperty("--count", categories.length);
  categoryGrid.innerHTML = categories
    .map(
      (c) => `
      <a class="category" href="shop.html?cat=${encodeURIComponent(c.id)}">
        <img src="${escapeHtml(c.image)}" alt="" loading="lazy" width="600" height="800">
        <span class="category-label">
          <span class="category-name">${escapeHtml(c.name)}</span>
          <span class="category-more">Shop now ${ARROW_ICON}</span>
        </span>
      </a>`
    )
    .join("");

  // Newest products are at the top of products.json.
  grid.innerHTML = products.slice(0, NEW_ARRIVALS_COUNT).map(productCard).join("");

  drawInstagramPhotos(products);
});
