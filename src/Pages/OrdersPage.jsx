import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlaceOrder from '../Components/PlaceOrder';

function OrdersPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar/>
        <PlaceOrder/>
        <Footer/>
    </>
  );
}

export default OrdersPage;
