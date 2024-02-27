import CategoryProducts from '../Components/CategoryProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useEffect } from 'react';




function Category() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  const pathname = window.location.pathname;
  return (
    <>
      <Navbar/>
      <CategoryProducts location={pathname}/>
      <Footer/>
    </>
  );
}

export default Category;