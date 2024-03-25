import React from 'react';
import { Link } from 'react-router-dom';

const ProductColors = ({ color }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className="w-5 h-5 rounded-full m-1"
        style={{ backgroundColor: color, border: "1px solid #ccc" }}
        title={color}
      />
    </div>
  );
};
const CategoryProducts = ({loading,error,data,type}) => {
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error! {console.error(error)}</p>
  return (
    // Container
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          data.productType.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-h-8 lg:aspect-w-7 h-96 overflow-hidden rounded-lg bg-white">
                <img
                  src={`${product.image[0]}`}
                  alt={`${type},Product`}
                  className="h-full w-full object-contain object-center group-hover:opacity-75"
                />
              </div>
              <ProductColors color={product.color.colorName} />
              <p className="mt-1 text-lg font-medium text-center text-gray-900">{product.price} EGP</p>
            </Link>
          ))
        }
          </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
