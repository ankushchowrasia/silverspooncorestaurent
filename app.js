// your code// ====== DATA & CONSTANTS ======
const CATEGORIES = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

const calculateFinalPrice = (mrp, discountPercent) =>
  Math.round(mrp - (mrp * discountPercent / 100));

const MENU_ITEMS = [
  {
    id: 1,
    name: "Mango Smoothie",
    description: "Thick & creamy mango smoothie made with fresh Alphonso mangoes.",
    price: 220,
    discountPercent: 0,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop",
    isVeg: true,
    isSpecial: true,
    rating: 4.8,
    ingredients: ["Alphonso Mango Pulp", "Yogurt", "Milk", "Honey", "Ice Cubes"],
    trivia: "Mango is known as the 'King of Fruits' and originated in India over 4,000 years ago."
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese skewers grilled to perfection in a tandoor.",
    price: 360,
    discountPercent: 8,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop",
    isVeg: true,
    isSpecial: true,
    rating: 4.7,
    ingredients: ["Paneer (Cottage Cheese)", "Yogurt", "Besan (Gram Flour)", "Spices", "Bell Peppers"],
    trivia: "Paneer Tikka is a vegetarian alternative to Chicken Tikka, popularised in the Punjab region."
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon grilled with lemon butter and herbs.",
    price: 850,
    discountPercent: 10,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&h=400&fit=crop",
    isVeg: false,
    isSpecial: true,
    rating: 4.9,
    ingredients: ["Atlantic Salmon Fillet", "Lemon Juice", "Butter", "Garlic", "Dill"],
    trivia: "Salmon are anadromous, meaning they are born in fresh water, migrate to the ocean, then return to fresh water to reproduce."
  },
  {
    id: 4,
    name: "Choco Lava Cake",
    description: "Rich chocolate cake with a molten goooy chocolate center.",
    price: 280,
    discountPercent: 0,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop",
    isVeg: false,
    isSpecial: true,
    rating: 4.9,
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Sugar"],
    trivia: "The molten center is achieved by undercooking the cake slightly, not by injecting chocolate."
  },
  {
    id: 5,
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich, creamy tomato and cashew gravy.",
    price: 580,
    discountPercent: 10,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop",
    isVeg: false,
    isSpecial: false,
    rating: 4.8,
    ingredients: ["Chicken", "Tomato Puree", "Cream", "Butter", "Cashew Paste", "Fenugreek Leaves"],
    trivia: "Butter Chicken was invented by accident in Delhi in the 1950s using leftover tandoori chicken."
  },
  {
    id: 6,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy fried bread.",
    price: 260,
    discountPercent: 5,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&h=400&fit=crop",
    isVeg: true,
    isSpecial: false,
    rating: 4.6,
    ingredients: ["Chickpeas", "Maida (Flour)", "Onions", "Tomatoes", "Spices"],
    trivia: "This dish is a breakfast staple in North India, often accompanied by lassi."
  },
  {
    id: 7,
    name: "Vada Pav",
    description: "Mumbai's favorite street food - spicy potato fritter in a bun.",
    price: 90,
    discountPercent: 8,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop",
    isVeg: true,
    isSpecial: false,
    rating: 4.5,
    ingredients: ["Potatoes", "Gram Flour", "Bread Bun (Pav)", "Green Chilies", "Garlic Chutney"],
    trivia: "Often called the 'Indian Burger', it was invented in 1966 by a Mumbai mill worker."
  },
  {
    id: 8,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with spices and tender chicken pieces.",
    price: 650,
    discountPercent: 10,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop",
    isVeg: false,
    isSpecial: false,
    rating: 4.9,
    ingredients: ["Basmati Rice", "Chicken", "Saffron", "Fried Onions", "Yogurt", "Mint"],
    trivia: "The word 'Biryani' is derived from the Persian word 'Birian', which means 'fried before cooking'."
  }
];

// ====== STATE ======
let darkMode = false;
let cart = []; // [{id, qty}]
let activeCategory = "All";
let searchQuery = "";
let dietFilter = "All"; // All, Veg, Non-Veg
let priceRange = 2500;
let sortOption = "popularity";
let selectedItemId = null;
let activeCoupon = null;
let couponMsg = "";
let couponMsgTimeoutId = null;

// ====== DOM ELEMENTS ======
const searchInput = document.getElementById("search-input");
const searchInputMobile = document.getElementById("search-input-mobile");
const categoryPillsContainer = document.getElementById("category-pills");
const dietToggleContainer = document.getElementById("diet-toggle");
const sortSelect = document.getElementById("sort-select");
const priceRangeInput = document.getElementById("price-range-input");
const priceRangeValue = document.getElementById("price-range-value");
const menuGrid = document.getElementById("menu-grid");
const menuEmpty = document.getElementById("menu-empty");
const clearFiltersBtn = document.getElementById("clear-filters-btn");
const specialGrid = document.getElementById("special-grid");

const cartOverlay = document.getElementById("cart-overlay");
const cartSidebarEl = document.getElementById("cart-sidebar");
const cartToggleBtn = document.getElementById("cart-toggle");
const cartCountBadge = document.getElementById("cart-count-badge");

const dishModalOverlay = document.getElementById("dish-modal-overlay");
const dishModalEl = document.getElementById("dish-modal");

const darkToggleBtn = document.getElementById("dark-toggle");
const darkIconSpan = document.getElementById("dark-icon");

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  // Load dark mode from prefers or localStorage
  const savedDark = localStorage.getItem("silverSpoonDark");
  if (savedDark === "true") {
    darkMode = true;
    applyDarkMode();
  }

  // Load cart
  const storedCart = localStorage.getItem("silverSpoonCart");
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
    } catch {
      cart = [];
    }
  }

  setupFilters();
  renderSpecials();
  renderMenu();
  renderCart();
  setupEventListeners();
});

// ====== EVENT LISTENERS SETUP ======
function setupEventListeners() {
  // Search (desktop)
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderMenu();
    });
  }

  // Search (mobile)
  if (searchInputMobile) {
    searchInputMobile.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchInput) searchInput.value = e.target.value;
      renderMenu();
    });
  }

  // Sort
  sortSelect.addEventListener("change", (e) => {
    sortOption = e.target.value;
    renderMenu();
  });

  // Price range
  priceRangeInput.addEventListener("input", (e) => {
    priceRange = Number(e.target.value);
    priceRangeValue.textContent = "₹" + priceRange;
    renderMenu();
  });

  // Clear filters
  clearFiltersBtn.addEventListener("click", () => {
    activeCategory = "All";
    searchQuery = "";
    dietFilter = "All";
    priceRange = 2500;
    sortOption = "popularity";
    if (searchInput) searchInput.value = "";
    if (searchInputMobile) searchInputMobile.value = "";
    priceRangeInput.value = 2500;
    priceRangeValue.textContent = "₹2500";
    updateFilterUI();
    renderMenu();
  });

  // Cart open/close
  cartToggleBtn.addEventListener("click", openCart);
  cartOverlay.addEventListener("click", closeCart);

  // Dish modal overlay
  dishModalOverlay.addEventListener("click", closeDishModal);

  // Dark mode
  darkToggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    applyDarkMode();
  });
}

// ====== DARK MODE ======
function applyDarkMode() {
  if (darkMode) {
    document.body.classList.add("dark");
    darkIconSpan.classList.remove("icon-moon");
    darkIconSpan.classList.add("icon-sun");
  } else {
    document.body.classList.remove("dark");
    darkIconSpan.classList.remove("icon-sun");
    darkIconSpan.classList.add("icon-moon");
  }
  localStorage.setItem("silverSpoonDark", darkMode ? "true" : "false");
}

// ====== FILTERS UI ======
function setupFilters() {
  // Category pills
  categoryPillsContainer.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-pill";
    btn.textContent = cat;
    if (cat === activeCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      activeCategory = cat;
      updateFilterUI();
      renderMenu();
    });
    categoryPillsContainer.appendChild(btn);
  });

  // Diet toggle
  const dietOptions = ["All", "Veg", "Non-Veg"];
  dietToggleContainer.innerHTML = "";
  dietOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "diet-btn";
    btn.textContent = opt;
    if (opt === dietFilter) btn.classList.add("active");
    btn.addEventListener("click", () => {
      dietFilter = opt;
      updateFilterUI();
      renderMenu();
    });
    dietToggleContainer.appendChild(btn);
  });
}

function updateFilterUI() {
  // Category
  Array.from(categoryPillsContainer.children).forEach((btn) => {
    if (btn.textContent === activeCategory) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  // Diet
  Array.from(dietToggleContainer.children).forEach((btn) => {
    if (btn.textContent === dietFilter) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  sortSelect.value = sortOption;
  priceRangeInput.value = priceRange;
  priceRangeValue.textContent = "₹" + priceRange;
}

// ====== FILTERING & SORTING ======
function getFilteredSortedItems() {
  let list = MENU_ITEMS.filter((item) => {
    const textMatch =
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);

    const catMatch =
      activeCategory === "All" || item.category === activeCategory;

    const dietMatch =
      dietFilter === "All" ||
      (dietFilter === "Veg" && item.isVeg) ||
      (dietFilter === "Non-Veg" && !item.isVeg);

    const discountedPrice = calculateFinalPrice(
      item.price,
      item.discountPercent
    );
    const priceMatch = discountedPrice <= priceRange;

    return textMatch && catMatch && dietMatch && priceMatch;
  });

  list.sort((a, b) => {
    const priceA = calculateFinalPrice(a.price, a.discountPercent);
    const priceB = calculateFinalPrice(b.price, b.discountPercent);
    switch (sortOption) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "rating":
        return b.rating - a.rating;
      case "popularity":
      default:
        // Treat popularity as rating for now
        return b.rating - a.rating;
    }
  });

  return list;
}

// ====== RENDER SPECIALS ======
function renderSpecials() {
  const specials = MENU_ITEMS.filter((item) => item.isSpecial);
  specialGrid.innerHTML = specials.map((item) => cardHTML(item)).join("");
  attachCardEvents(specialGrid);
}

// ====== RENDER MENU ======
function renderMenu() {
  const items = getFilteredSortedItems();
  if (items.length === 0) {
    menuGrid.innerHTML = "";
    menuEmpty.classList.remove("hidden");
    return;
  }
  menuEmpty.classList.add("hidden");
  menuGrid.innerHTML = items.map((item) => cardHTML(item)).join("");
  attachCardEvents(menuGrid);
}

// ====== CARD HTML & EVENTS ======
function cardHTML(item) {
  const discountedPrice = calculateFinalPrice(item.price, item.discountPercent);

  return `
    <article class="card fade-in" data-id="${item.id}">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="card-img" />
        <div class="badge ${item.isVeg ? "badge-veg" : "badge-nonveg"}">
          <span class="badge-circle"></span>
          <span>${item.isVeg ? "Veg" : "Non-Veg"}</span>
        </div>

        ${
          item.discountPercent > 0
            ? `<div class="badge badge-discount">${item.discountPercent}% OFF</div>`
            : ""
        }

        <div class="badge-rating">
          ⭐ ${item.rating.toFixed(1)}
        </div>
      </div>
      <div class="card-body">
        <div class="card-category">${item.category}</div>
        <h4 class="card-title">${item.name}</h4>
        <p class="card-desc">${item.description}</p>

        <div class="card-footer">
          <div class="price-block">
            ${
              item.discountPercent > 0
                ? `<span class="price-mrp">MRP ₹${item.price}</span>`
                : ""
            }
            <span class="price-final">₹${discountedPrice}</span>
          </div>
          <div class="card-actions">
            <button class="icon-chip btn-view" data-id="${item.id}">
              <span class="icon icon-info"></span>
            </button>
            <button class="btn-add btn-add-cart" data-id="${item.id}">
              <span>Add</span>
              <span class="icon icon-bag"></span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function attachCardEvents(root) {
  root.querySelectorAll(".btn-view").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      openDishModal(id);
    });
  });
  root.querySelectorAll(".btn-add-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const item = MENU_ITEMS.find((i) => i.id === id);
      if (item) {
        addToCart(item);
      }
    });
  });
}

// ====== DISH MODAL ======
function openDishModal(id) {
  const item = MENU_ITEMS.find((i) => i.id === id);
  if (!item) return;
  selectedItemId = id;

  const discountedPrice = calculateFinalPrice(
    item.price,
    item.discountPercent
  );

  dishModalEl.innerHTML = `
    <div class="dish-modal-img-wrap">
      <img src="${item.image}" alt="${item.name}" />
      <div class="dish-modal-img-badges">
        <div class="badge ${item.isVeg ? "badge-veg" : "badge-nonveg"}">
          <span class="badge-circle"></span>
          <span>${item.isVeg ? "Vegetarian" : "Non-Vegetarian"}</span>
        </div>
        <div class="badge-rating">
          ⭐ ${item.rating.toFixed(1)}
        </div>
      </div>
    </div>
    <div class="dish-modal-body">
      <button class="dish-modal-close" aria-label="Close modal">✕</button>
      <div class="dish-category-label">${item.category}</div>
      <h3 class="dish-modal-title">${item.name}</h3>
      <p class="dish-modal-desc">${item.description}</p>

      ${
        item.ingredients && item.ingredients.length
          ? `
      <div class="ingredient-chips">
        ${item.ingredients
          .map(
            (ing) =>
              `<span class="ingredient-chip">${escapeHtml(ing)}</span>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        item.trivia
          ? `
      <div class="dish-trivia">
        <strong>Did you know?</strong> ${escapeHtml(item.trivia)}
      </div>`
          : ""
      }

      <div class="dish-modal-bottom">
        <div class="dish-modal-price">
          ${
            item.discountPercent > 0
              ? `<span class="dish-modal-mrp">MRP ₹${item.price}</span>`
              : ""
          }
          <span class="dish-modal-final">₹${discountedPrice}</span>
        </div>
        <button class="dish-modal-add-btn" data-id="${item.id}">
          Add to Order 🛒
        </button>
      </div>
    </div>
  `;

  dishModalEl.classList.add("visible");
  dishModalOverlay.classList.remove("hidden");
  dishModalEl.classList.remove("hidden");

  // Close button
  dishModalEl.querySelector(".dish-modal-close").addEventListener("click", () => {
    closeDishModal();
  });

  // Add to order
  dishModalEl
    .querySelector(".dish-modal-add-btn")
    .addEventListener("click", () => {
      const item = MENU_ITEMS.find((i) => i.id === selectedItemId);
      if (item) {
        addToCart(item);
      }
      closeDishModal();
    });
}

function closeDishModal() {
  selectedItemId = null;
  dishModalEl.classList.remove("visible");
  dishModalOverlay.classList.add("hidden");
  dishModalEl.classList.add("hidden");
}

// ====== CART LOGIC ======
function addToCart(item) {
  const existing = cart.find((c) => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: item.id, qty: 1 });
  }
  persistCart();
  validateActiveCoupon();
  renderCart();
  openCart();
}

function updateCartQuantity(id, delta) {
  const idx = cart.findIndex((c) => c.id === id);
  if (idx === -1) return;

  const newQty = cart[idx].qty + delta;
  if (newQty <= 0) {
    // Proper fix: remove item if qty <= 0
    cart.splice(idx, 1);
  } else {
    cart[idx].qty = newQty;
  }

  persistCart();
  validateActiveCoupon();
  renderCart();
}

function removeCartItem(id) {
  cart = cart.filter((c) => c.id !== id);
  persistCart();
  validateActiveCoupon();
  renderCart();
}

function persistCart() {
  localStorage.setItem("silverSpoonCart", JSON.stringify(cart));
}

// Calculate totals (discounted)
function calculateCartTotals() {
  let grossTotal = 0; // sum of discounted items
  let totalSavings = 0; // sum of (MRP - discounted)

  cart.forEach((item) => {
    const product = MENU_ITEMS.find((p) => p.id === item.id);
    if (!product) return;

    const mrp = product.price;
    const discountedUnit = calculateFinalPrice(mrp, product.discountPercent);

    const lineMrp = mrp * item.qty;
    const lineDiscounted = discountedUnit * item.qty;

    grossTotal += lineDiscounted;
    totalSavings += lineMrp - lineDiscounted;
  });

  // Cart level discount: 10% >= 1000, 15% >= 2000
  let cartDiscountAmt = 0;
  let cartDiscountText = "";

  if (grossTotal >= 2000) {
    cartDiscountAmt = Math.round(grossTotal * 0.15);
    cartDiscountText = "(15% off > ₹2000)";
  } else if (grossTotal >= 1000) {
    cartDiscountAmt = Math.round(grossTotal * 0.10);
    cartDiscountText = "(10% off > ₹1000)";
  }

  const taxableAmount = grossTotal - cartDiscountAmt;

  // Coupon discount
  let couponDiscountAmt = 0;
  if (activeCoupon === "SILVER10") {
    couponDiscountAmt = Math.round(taxableAmount * 0.10);
  } else if (activeCoupon === "FREEDRINK") {
    const hasMainCourse = cart.some((c) => {
      const p = MENU_ITEMS.find((i) => i.id === c.id);
      return p && p.category === "Main Course";
    });
    if (grossTotal >= 100 && hasMainCourse) {
      couponDiscountAmt = 100;
    } else {
      // If conditions fail, we will clear via validateActiveCoupon
    }
  }

  const netPayable = Math.max(0, grossTotal - cartDiscountAmt - couponDiscountAmt);

  return {
    grossTotal,
    totalSavings,
    cartDiscountAmt,
    cartDiscountText,
    couponDiscountAmt,
    netPayable
  };
}

function validateActiveCoupon() {
  // Called after cart change
  if (!activeCoupon) return;
  const { grossTotal } = calculateCartTotals();
  if (activeCoupon === "FREEDRINK") {
    const hasMainCourse = cart.some((c) => {
      const p = MENU_ITEMS.find((i) => i.id === c.id);
      return p && p.category === "Main Course";
    });
    if (grossTotal < 100 || !hasMainCourse) {
      activeCoupon = null;
      setCouponMsg("Coupon FREEDRINK removed (conditions not met)", false);
    }
  }
  if (cart.length === 0) {
    activeCoupon = null;
    couponMsg = "";
  }
}

// Apply coupon by code
function applyCoupon(code) {
  if (!code) return;
  const normalized = code.trim().toUpperCase();
  const { grossTotal } = calculateCartTotals();
  if (cart.length === 0) {
    setCouponMsg("Add items to cart before applying coupon.", false);
    return;
  }

  if (normalized === "SILVER10") {
    activeCoupon = "SILVER10";
    setCouponMsg("Coupon SILVER10 applied! (10% extra off)", true);
  } else if (normalized === "FREEDRINK") {
    const hasMainCourse = cart.some((c) => {
      const p = MENU_ITEMS.find((i) => i.id === c.id);
      return p && p.category === "Main Course";
    });
    if (grossTotal >= 100 && hasMainCourse) {
      activeCoupon = "FREEDRINK";
      setCouponMsg("Coupon FREEDRINK applied! (₹100 off)", true);
    } else {
      activeCoupon = null;
      setCouponMsg("Requirements: Cart > ₹100 & at least 1 Main Course.", false);
    }
  } else {
    activeCoupon = null;
    setCouponMsg("Invalid coupon code.", false);
  }
  renderCart();
}

function removeCoupon() {
  activeCoupon = null;
  setCouponMsg("", true);
  renderCart();
}

function setCouponMsg(text, success) {
  couponMsg = text;
  if (couponMsgTimeoutId) {
    clearTimeout(couponMsgTimeoutId);
  }
  if (text) {
    couponMsgTimeoutId = setTimeout(() => {
      couponMsg = "";
      renderCart(); // to clear message
    }, 4000);
  }
}

// ====== CART UI ======
function openCart() {
  cartOverlay.classList.remove("hidden");
  cartSidebarEl.classList.remove("hidden");
  requestAnimationFrame(() => {
    cartSidebarEl.classList.add("visible");
  });
}

function closeCart() {
  cartSidebarEl.classList.remove("visible");
  cartOverlay.classList.add("hidden");
  setTimeout(() => {
    if (!cartSidebarEl.classList.contains("visible")) {
      cartSidebarEl.classList.add("hidden");
    }
  }, 200);
}

// Render cart UI
function renderCart() {
  const itemCount = cart.reduce((sum, c) => sum + c.qty, 0);
  if (itemCount > 0) {
    cartCountBadge.textContent = itemCount;
    cartCountBadge.classList.remove("hidden");
  } else {
    cartCountBadge.classList.add("hidden");
  }

  const {
    grossTotal,
    totalSavings,
    cartDiscountAmt,
    cartDiscountText,
    couponDiscountAmt,
    netPayable
  } = calculateCartTotals();

  // Build items list
  let itemsHtml = "";
  if (cart.length === 0) {
    itemsHtml = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <div>Your cart is empty.</div>
        <div style="font-size:0.8rem;">Add delicious food! 😋</div>
      </div>
    `;
  } else {
    itemsHtml = cart
      .map((c) => {
        const product = MENU_ITEMS.find((p) => p.id === c.id);
        if (!product) return "";
        const unitPrice = calculateFinalPrice(
          product.price,
          product.discountPercent
        );
        return `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}" />
            <div class="cart-item-main">
              <div class="cart-item-title">${product.name}</div>
              <div class="cart-item-meta">₹${unitPrice} × ${c.qty}</div>
              <div class="cart-item-bottom">
                <div class="qty-controls">
                  <button class="qty-btn" data-id="${c.id}" data-delta="-1">-</button>
                  <span class="qty-value">${c.qty}</span>
                  <button class="qty-btn" data-id="${c.id}" data-delta="1">+</button>
                </div>
                <button class="cart-remove-btn" data-id="${c.id}">🗑</button>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // Coupon message
  let couponMsgHtml = "";
  if (couponMsg) {
    const isSuccess = /applied|removed \(conditions not met\)/i.test(couponMsg)
      ? true
      : !/invalid|requirements|add items/i.test(couponMsg);
    couponMsgHtml = `
      <div class="coupon-msg ${
        couponMsg.toLowerCase().includes("applied") ? "success" : "error"
      }">${couponMsg}</div>
    `;
  }

  // Coupon line
  let couponRowHtml = "";
  if (activeCoupon) {
    couponRowHtml = `
      <div class="summary-row saving">
        <span>Coupon (${activeCoupon}) <button style="border:none;background:none;color:#ef4444;font-size:0.7rem;cursor:pointer;" id="remove-coupon-btn">Remove</button></span>
        <span>-₹${couponDiscountAmt}</span>
      </div>
    `;
  }

  const sidebarHtml = `
    <div class="cart-header">
      <div class="cart-title">
        <span class="icon icon-bag"></span>
        <span>Your Order</span>
      </div>
      <button class="icon-btn" id="cart-close-btn">✕</button>
    </div>

    <div class="cart-items">
      ${itemsHtml}
    </div>

    <div class="cart-summary">
      <div class="coupon-row">
        <div class="coupon-input-wrapper">
          <input type="text" id="coupon-input" class="coupon-input" placeholder="Coupon Code" />
        </div>
        <button class="coupon-apply-btn" id="coupon-apply-btn">Apply</button>
      </div>
      ${couponMsgHtml}
      <div class="summary-row">
        <span>Subtotal</span>
        <span>₹${grossTotal}</span>
      </div>
      ${
        totalSavings > 0
          ? `<div class="summary-row saving"><span>Item Savings</span><span>-₹${totalSavings}</span></div>`
          : ""
      }
      ${
        cartDiscountAmt > 0
          ? `<div class="summary-row saving"><span>Cart Offer <span style="font-size:0.7rem;opacity:0.8;">${cartDiscountText}</span></span><span>-₹${cartDiscountAmt}</span></div>`
          : ""
      }
      ${couponRowHtml}
      <div class="summary-row main-total">
        <span>Total</span>
        <span>₹${netPayable}</span>
      </div>
      <button class="checkout-btn" ${cart.length === 0 ? "disabled" : ""}>
        Checkout
      </button>
    </div>
  `;

  cartSidebarEl.innerHTML = sidebarHtml;

  // Wire up buttons
  const closeBtn = document.getElementById("cart-close-btn");
  closeBtn.addEventListener("click", closeCart);

  cartSidebarEl.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const delta = Number(btn.dataset.delta);
      updateCartQuantity(id, delta);
    });
  });

  cartSidebarEl.querySelectorAll(".cart-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      removeCartItem(id);
    });
  });

  const couponInputEl = document.getElementById("coupon-input");
  const couponApplyBtn = document.getElementById("coupon-apply-btn");
  couponApplyBtn.addEventListener("click", () => {
    applyCoupon(couponInputEl.value);
    couponInputEl.value = "";
  });

  const removeCouponBtn = document.getElementById("remove-coupon-btn");
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener("click", removeCoupon);
  }

  const checkoutBtn = cartSidebarEl.querySelector(".checkout-btn");
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    alert("Proceeding to checkout!");
  });
}

// ====== HELPERS ======
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
 goes here
