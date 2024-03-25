import React, { useEffect, useState } from 'react';
import MainColors from '../Components/MainColors';
import MainLayout from '../Components/MainLayout';
import AllProducts from '../Components/AllProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useQuery } from '@apollo/client';
import { GetProducts } from '../gql/Query'
import { useLocation } from 'react-router-dom';




function Home() {
  const {loading,error,data} = useQuery(GetProducts)
  const location = useLocation()
  console.log(location.state)
  useEffect(() => {
   
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <MainLayout/>
      <MainColors loading={loading} error={error} data={data}/>
      <AllProducts loading={loading} error={error} data={data}/>
      <Footer/>

    </>
  );
}

export default Home;
