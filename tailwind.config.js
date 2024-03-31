/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/Components/Navbar.jsx",
    "src/Components/MainLayout.jsx",
    "src/Components/AllProducts.jsx",
    "src/Components/MainColors.jsx",
    "src/Components/ProductDetails.jsx",
    "src/Components/CategoryProducts.jsx",
    "src/Components/ProductDialog.jsx",
    "src/Components/PlaceOrder.jsx",
    "src/Components/sizeGuide.jsx",
    "src/Components/Footer.jsx",
    "src/Pages/About.jsx",
],
  theme: {
    extend: {
      boxShadow:{
        'cardShadow': `-1px 3px 13px 2px rgba(0,0,0,0.75)`
      }
    },
  },
  plugins: [],
}

