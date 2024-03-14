import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

// const products = [ 
//   {
//     id: 1,
//     name: 'Royal Blue Scrub',
//     src: '/product',
//     imageSrc: blueImage,
//     imageAlt: "Royal Blue Scrub.",
//     price: '00.00',
//     color: ["#1D24CA"],
//   },
//   {
//     id: 2,
//     name: 'Black Scrub',
//     src: '/product',
//     imageSrc: blackImage,
//     imageAlt: "Black Scrub",
//     price: '00:00',
//     color: ["#000"],
//   },
//   {
//     id: 3,
//     name: 'Olive',
//     src: '/product',
//     imageSrc: Olive,
//     imageAlt: "Olive Scrub",
//     price: '00:00',
//     color: ["#436850"],
//   },
//   {
//     id: 4,
//     name: 'Navy',
//     src: '/product',
//     imageSrc: Navy,
//     imageAlt: "Navy",
//     price: '00:00',
//     color: ["#201658"],
//   },
// ]
const ProductColors = ({ color }) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="w-6 h-6 rounded-full"
        style={{ backgroundColor: color, border: "1px solid #ccc" }}
        title={color}
      />
    </div>
  );
};
const MainColors = ({loading,error,data}) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  // Subscribe to the resize event on component mount
  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  const settings = {
    infinite: true,
    slidesToShow: screenSize.width >= 500 ? 4: 1, 
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if(loading) return <p>Loading....</p>
  if(error) return <p>Error! {console.error(error)}</p>

  return (
    <div className='m-1 h-fit'>
      <h1 className='p-3 text-4xl font-semibold text-center'>Shop By Color</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <Slider {...settings}>
            {data.productsFeed.map((product , index) => (
              index < 5 && (
                <div key={product.id} className="group relative">
                <div className="aspect-h-1 bg-gray-50 border aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`${product.image[0]}`}
                    alt="Product"
                    className="h-[400px] w-full object-cover lg:h-full lg:w-full rounded-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.status}
                      </Link>
                    </h3>
                      <ProductColors color={product.color} />
                  </div>
                  <p className="text-sm font-medium px-5 text-gray-900">{product.price}</p>
                </div>
              </div>
              ) 
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer slick-arrow" onClick={onClick}>
      <FaChevronRight className="text-gray-500 text-5xl" />
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer slick-arrow" onClick={onClick}>
      <FaChevronLeft className="text-gray-500 text-5xl" />
    </div>
  );
};
export default MainColors;