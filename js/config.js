// Store settings. Change a value here and it updates on every page.

const STORE = {
  name: "Aara Culture",

  // WhatsApp number for orders: country code + number, no "+" or spaces.
  whatsappNumber: "916353425567",
  whatsappDisplay: "+91 63534 25567",

  // Thin maroon bar at the very top of every page.
  announcement: "Delivery all over India · Order on WhatsApp",

  // Three short points shown above the footer.
  highlights: ["Delivery all over India", "Easy UPI payment", "Order on WhatsApp"],

  // Shop rules, shown on the product page and the info page.
  policies: {
    delivery: "Delivery all over India. Flat ₹50 delivery charge per order.",
    payment: "Pay by UPI after we confirm your order on WhatsApp. No cash on delivery.",
    returns: "No returns or exchanges. Not sure about your size? Ask us on WhatsApp before ordering.",
  },
};

// Product categories. "id" must match the "category" field in products.json.
// A category with no products is hidden automatically.
const CATEGORIES = [
  { id: "kurtis", name: "Kurtis", image: "images/categories/kurtis.svg" },
  { id: "tops", name: "Tops", image: "images/products/ac-006-1.jpg" },
  { id: "2-piece", name: "2-piece sets", image: "images/products/ac-008-1.jpg" },
  { id: "3-piece", name: "3-piece sets", image: "images/products/ac-001-1.jpg" },
];

// Order sizes are listed in on the shop filter.
const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "Free size"];
