import ProductDialog from '../Components/ProductDialog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GetProductByID } from '../gql/Query';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const params = useParams()
  const {loading,error,data} = useQuery(GetProductByID,{
    variables:{productId:params.id}
  })
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <ProductDialog loading={loading} error={error} data={data} productId={params.id}/>
      <Footer/>
    </>
  );
}

export default ProductPage;
