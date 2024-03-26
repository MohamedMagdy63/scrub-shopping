import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlaceOrder from '../Components/PlaceOrder';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { MakeOrder } from '../gql/Mutation'

function OrdersPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [makeOrder ,{loading}] = useMutation(MakeOrder,{
    onCompleted:()=>{
    navigate('/',{state:{successMsg: "Order Completed"}})
    }
  }) 
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar/>
        <PlaceOrder size={location.state.sizeVal} productId={location.state.productId} productImages={location.state.images} basicPrice={location.state.price} lodingUploadData={loading} action={makeOrder}/>
        <Footer/>
    </>
  );
}

export default OrdersPage;
