import CategoryProducts from '../Components/CategoryProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useEffect } from 'react';
import { GetProductByType } from '../gql/Query';
import { useQuery } from '@apollo/client';




function Category() {
  const {loading,error,data} = useQuery(GetProductByType,{
    variables: {"gender": "Male"}
  })
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <CategoryProducts loading={loading} error={error} data={data} type={'Male'}/>
      <Footer/>
    </>
  );
}

export default Category;