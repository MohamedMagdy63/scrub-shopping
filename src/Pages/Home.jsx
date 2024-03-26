import React, { useEffect, useState } from 'react';
import MainColors from '../Components/MainColors';
import MainLayout from '../Components/MainLayout';
import AllProducts from '../Components/AllProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useQuery } from '@apollo/client';
import { GetProducts } from '../gql/Query'
import { useLocation } from 'react-router-dom';
import { Alert } from '@mui/material';




function Home() {
  const {loading,error,data} = useQuery(GetProducts)
  const location = useLocation()
  const [showAlerte,setShowAlerte] = useState(false)
  useEffect(() => {
   
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
    if(location.state){
      setShowAlerte(true)
      setTimeout(() => {
        setShowAlerte(false)
      }, 10000)
    }else{
      setShowAlerte(false)
    }
      
  },[location.state])
  return (
    <>
      <Navbar/>
      {
        showAlerte &&
          <Alert className='fixed top-0 left-0 w-full z-50 flex justify-center items-center' severity="success">
            <p className='text-black font-bold text-2xl'>{location.state.successMsg}</p> 
          </Alert>
      }
      <MainLayout/>
      <MainColors loading={loading} error={error} data={data}/>
      <AllProducts loading={loading} error={error} data={data}/>
      <Footer/>

    </>
  );
}

export default Home;
