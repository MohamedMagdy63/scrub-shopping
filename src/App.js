// App.js

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Category from './Pages/Category';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Add Outlet to render nested routes */}
        </Route>
        <Route path="/men" element={<Category />} />
        <Route path="/women" element={<Category />} />
        <Route path="/product" element={<ProductPage />} />
        
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
