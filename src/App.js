// App.js

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Category from './Pages/Category';
import ProductPage from './Pages/ProductPage';
import OrdersPage from './Pages/OrdersPage';
import About from './Pages/About';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import WomanCategory from './Pages/WomanCategory';

function App() {
  const uri = process.env.REACT_APP_API_URL
  const client = new ApolloClient({
    uri: uri ,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Category />} />
          <Route path="/women" element={<WomanCategory />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/order" element={<OrdersPage />} />
          <Route path="/about" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
