// Store settings. Change a value here and it updates on every page.

const STORE = {
  name: "Aara Culture",
  tagline: "Kurtis, tops and sets for every day",

  // WhatsApp number for orders: country code + number, no "+" or spaces.
  whatsappNumber: "916353425567",
  whatsappDisplay: "+91 63534 25567",

  // Shop rules, shown on the product page and the info page.
  policies: {
    delivery: "Delivery all over India. Flat ₹50 delivery charge per order.",
    payment: "Pay by UPI after we confirm your order on WhatsApp. No cash on delivery.",
    returns: "No returns or exchanges. Not sure about your size? Ask us on WhatsApp before ordering.",
  },
};

// Product categories. "id" must match the "category" field in products.json.
const CATEGORIES = [
  { id: "kurtis", name: "Kurtis", image: "images/categories/kurtis.svg" },
  { id: "tops", name: "Tops", image: "images/categories/tops.svg" },
  { id: "2-piece", name: "2-piece sets", image: "images/categories/2-piece.svg" },
  { id: "3-piece", name: "3-piece sets", image: "images/categories/3-piece.svg" },
];

// Order sizes are listed in on the shop filter.
const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "Free size"];
