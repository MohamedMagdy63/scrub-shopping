import ProductDialog from '../Components/ProductDialog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useEffect } from 'react';

function ProductPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <ProductDialog />
      <Footer/>
    </>
  );
}

export default ProductPage;
