// App.js

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Category from './Pages/Category';
import ProductPage from './Pages/ProductPage';
import OrdersPage from './Pages/OrdersPage';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Category />} />
        <Route path="/women" element={<Category />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/order" element={<OrdersPage />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
