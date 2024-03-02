import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import CategoryProducts from '../Components/CategoryProducts'
import Footer from '../Components/Footer'
import { GetProductByType } from '../gql/Query'
import { useQuery } from '@apollo/client'

const WomanCategory = () => {
    const {loading,error,data} = useQuery(GetProductByType,{
        variables: {"gender": "Female"}
    })
    useEffect(() => {
        // Scroll to the top of the page when the component mounts (page loads)
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <Navbar/>
        <CategoryProducts loading={loading} error={error} data={data} type={'Female'}/>
        <Footer/>
    </>
  )
}

export default WomanCategory