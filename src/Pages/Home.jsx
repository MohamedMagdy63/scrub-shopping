import React, { useEffect } from 'react';
import MainColors from '../Components/MainColors';
import MainLayout from '../Components/MainLayout';
import AllProducts from '../Components/AllProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useQuery } from '@apollo/client';
import { GetProducts } from '../gql/Query'


function Home() {
  const {loading,error,data} = useQuery(GetProducts)
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
