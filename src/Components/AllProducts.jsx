import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';

const AllProducts = ({loading,error,data}) => {
    useEffect(() => {
      // Scroll to the top of the page when the component mounts (page loads)
      window.scrollTo(0, 0);
    }, []);
    if(loading) return <p>Loading....</p>
    if(error) return <p>Error! {console.error(error)}</p>
    return (
      <div className="max-w-full">
        <h1 className="text-center font-semibold text-3xl p-5 md:text-4xl lg:text-5xl xl:text-6xl">
          MODERN MEDICAL SCRUBS
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {data.productsFeed.map((product,index) => (
            index <= 4 &&
              <Link key={product.id} to={`/product/${product.id}`} className="flex items-center justify-center">
                <img src={`${product.image[1]}`} className="h-full object-contain" alt={product.color} />
              </Link>
          ))}
        </div>
      </div>
    );
  };
    

export default AllProducts;
