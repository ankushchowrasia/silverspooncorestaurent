# 🍴 Silver Spoon .Co - Fine Dining Restaurant Website

<p align="center">
  <img src="https://raw.githubusercontent.com/ankushchowrasia16/Silverspoon.co-restaurant/b38e5d5cb3f1ab03df211b677de5a6ce902e3338/silverspoon.cofavicon.png" alt="Silver Spoon Logo" width="120">
</p>

<p align="center">
  <strong>Experience the finest culinary delights crafted with passion, served with excellence, and delivered with love.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#author">Author</a>
</p>

---

## ✨ Features

### 🏠 Landing Page
- **Animated Hero Section** - Eye-catching hero with floating background shapes and particle effects
- **Responsive Navigation** - Sticky header with mobile hamburger menu
- **About Us Section** - Company story with feature cards highlighting quality, expertise, and service

### 🍽️ Menu System
- **Dynamic Menu Grid** - Beautiful card-based layout displaying dishes
- **Chef's Special Picks** - Highlighted recommended dishes section
- **Advanced Filtering Options:**
  - Category filters (All, Starters, Main Course, Desserts, Drinks)
  - Veg/Non-Veg toggle
  - Price range slider (₹100 - ₹2500)
  - Sort options (Popularity, Price Low-High, Price High-Low, Rating)
  - Real-time search functionality

### 🛒 Shopping Cart
- **Persistent Cart** - Cart data saved to localStorage
- **Quantity Controls** - Add, remove, increase/decrease item quantities
- **Smart Pricing:**
  - Individual item discounts displayed
  - Cart-level discounts (10% off ₹1000+, 15% off ₹2000+)
  - Coupon code support (SILVER10, FREEDRINK)
- **Animated Feedback** - Visual confirmation when items are added

### 📋 Dish Details Modal
- **Comprehensive Information:**
  - High-quality dish images
  - Veg/Non-Veg indicator
  - Rating display
  - Ingredient list
  - Fun food trivia
  - Original & discounted pricing

### 📅 Table Booking
- **Reservation Form:**
  - Name & Contact details
  - Day & Date selection
  - Time & Party size
- **Success Confirmation** - Animated popup on successful booking

### 🚀 Checkout System
- **Order Form:**
  - Customer details
  - Delivery address
  - Special instructions
- **Order Summary** - Total amount display
- **Order Confirmation** - Success popup with animation

### 📱 Mobile Responsive
- Fully responsive design for all screen sizes
- Mobile-optimized navigation sidebar
- Touch-friendly interface elements

---

## 🎯 Demo

### Screenshots

| Home Page | Menu Section | Cart Sidebar |
|:---------:|:------------:|:------------:|
| Hero with animations | Filterable menu grid | Full cart functionality |

### Live Features
- ⚡ Smooth scroll navigation
- 🎨 CSS animations & transitions
- 💫 Particle effects in hero section
- 🔄 Real-time filter updates
- 📱 Mobile-first responsive design

---

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure |
| **CSS3** | Styling, animations, responsive design |
| **Vanilla JavaScript** | Interactivity, state management |
| **Google Fonts** | Typography (Cormorant Garamond, Inter) |
| **LocalStorage** | Cart persistence |

### Design Features
- CSS Custom Properties (Variables)
- Flexbox & CSS Grid layouts
- CSS Animations & Keyframes
- Backdrop blur effects
- Gradient backgrounds
- Box shadows & borders

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankushchowrasia/silverspooncorestaurent.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd silverspooncorestaurent
   ```

3. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

---

## 📖 Usage

### Navigation
- **Home** - Landing page with hero section
- **About Us** - Restaurant information and features
- **Our Menu** - Browse and filter dishes
- **Book a Table** - Make reservations

### Ordering Food
1. Browse the menu or use filters to find dishes
2. Click **"Add"** to add items to cart
3. Click **"View Details"** for more information
4. Open cart by clicking the bag icon
5. Apply coupon codes if available
6. Proceed to checkout

### Available Coupon Codes
| Code | Discount | Conditions |
|------|----------|------------|
| `SILVER10` | 10% off | No minimum |
| `FREEDRINK` | ₹100 off | Cart > ₹100 + 1 Main Course |

### Booking a Table
1. Click **"Book a Table"** button
2. Fill in your details
3. Select day, date, time, and party size
4. Submit the form
5. Receive confirmation

---

## 📁 Project Structure

```
silverspooncorestaurent/
│
├── index.html          # Main HTML file with embedded CSS & JS
├── README.md           # Project documentation
│
├── images/             # Image assets
│   └── images.webp     # Chole Bhature image
│
└── assets/             # Additional assets
    └── shape-5.png     # Hero background shape
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | `#ea580c` | Buttons, accents, highlights |
| Primary Hover | `#c2410c` | Button hover states |
| Success Green | `#16a34a` | Veg badges, success messages |
| Danger Red | `#ef4444` | Non-veg badges, discounts |
| Text Main | `#1e293b` | Primary text |
| Text Muted | `#64748b` | Secondary text |
| Background | `#f8fafc` | Page background |

---

## 🍽️ Menu Items

The restaurant features 8 carefully curated dishes:

| Dish | Category | Price | Discount |
|------|----------|-------|----------|
| Mango Smoothie | Drinks | ₹220 | 5% |
| Paneer Tikka | Starters | ₹360 | 8% |
| Grilled Salmon | Main Course | ₹850 | 10% |
| Choco Lava Cake | Desserts | ₹280 | 5% |
| Butter Chicken | Main Course | ₹580 | 10% |
| Chole Bhature | Main Course | ₹260 | 5% |
| Vada Pav | Starters | ₹90 | 6% |
| Chicken Biryani | Main Course | ₹650 | 10% |

---

## 🔮 Future Enhancements

- [ ] Backend integration for real orders
- [ ] User authentication system
- [ ] Payment gateway integration
- [ ] Order tracking functionality
- [ ] Review & rating system
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Admin dashboard for menu management

---

## 👨‍💻 Author

<p align="center">
  <strong>Ankush Chowrasia</strong>
</p>

<p align="center">
  <a href="https://ankushchowrasia.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio">
  </a>
  <a href="https://www.linkedin.com/in/ankushchowrasia27/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/ankushchowrasia" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.facebook.com/profile.php?id=100074737849819" target="_blank">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook">
  </a>
</p>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Icons created with inline SVGs

---

<p align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</p>

<p align="center">
  Made with ❤️ in Kolkata, India
</p>

<p align="center">
  &copy; 2025 Silver Spoon .Co. All rights reserved.
</p>
