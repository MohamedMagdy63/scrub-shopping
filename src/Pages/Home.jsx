import React, { useEffect } from 'react';
import MainColors from '../Components/MainColors';
import MainLayout from '../Components/MainLayout';
import AllProducts from '../Components/AllProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <MainLayout/>
      <MainColors/>
      <AllProducts/>
      <Footer/>

    </>
  );
}

export default Home;
