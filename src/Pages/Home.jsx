import React, { useEffect, useState } from 'react';
import MainColors from '../Components/MainColors';
import MainLayout from '../Components/MainLayout';
import AllProducts from '../Components/AllProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useQuery } from '@apollo/client';
import { GetProducts } from '../gql/Query'
import { useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';



function Home() {
  const {loading,error,data} = useQuery(GetProducts)
  const [showAlert,setShowAlert] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if(location.state.successMsg){
      setShowAlert(true)
      setInterval(() => {
        setShowAlert(false)
      }, 2000);
    }
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      {
        showAlert && <Alert severity="success">location.state.successMsg</Alert>
      }
      <MainLayout/>
      <MainColors loading={loading} error={error} data={data}/>
      <AllProducts loading={loading} error={error} data={data}/>
      <Footer/>

    </>
  );
}

export default Home;
