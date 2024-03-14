import { useState  } from 'react'
import { RadioGroup } from '@headlessui/react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';
import { GetColorName } from 'hex-color-to-color-name';

const sizes = [
  { name: 'S', inStock: true },
  { name: 'M', inStock: true },
  { name: 'L', inStock: true },
  { name: 'XL', inStock: true },
  { name: '2XL', inStock: true },
  { name: '3XL', inStock: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// ... (previous imports and product definition)

export default function ProductDialog({loading,error,data,productId}) {
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const navigate = useNavigate()
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    if(loading) return <p>Loading....</p>
    if(error) return <p>Error! {console.error(error)}</p>
    const colorName = GetColorName(data.product.color); 

    return (
      <div className="bg-white">
        <div className="pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ul className="flex items-center space-x-2 px-4 sm:px-6">
              <li>
                <div className="flex items-center">
                    {data.product.gender}
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                {colorName}
              </li>
            </ul>
          </nav>
          {/* Image gallery and Product info */}
        <div className="flex flex-col lg:flex-row lg:mt-6 lg:space-x-8">
          {/* Image gallery */}
          <div className="lg:flex-shrink-0 lg:w-1/2">
            {/* First image with hover effect */}
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block relative">
              {
                data.product.image.map((imge,idx)=>(
                  <img
                    src={`${process.env.REACT_APP_API_URL_IMAGE}/${imge}`}
                    alt='Product'
                    className={
                      idx === 0 ? 
                      `h-full w-full object-cover object-center` 
                      :
                      `h-full w-full object-cover object-center opacity-0 absolute top-0 left-0 transition-opacity duration-300 hover:opacity-100`}
                  />
                ))
              }
            </div>

            {/* Second image for small screens */}
            <div className="lg:hidden mt-4">
            <Slider {...sliderSettings}>
                {data.product.image.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`${process.env.REACT_APP_API_URL_IMAGE}/${image}`}
                      alt='Product'
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

            {/* Product info */}
            <div className="lg:w-1/2 px-5 lg:px-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{data.product.price}</p>
              <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: data.product.color, border: "1px solid #ccc" }}
                        title={data.product.color}
                      />
                    </div>
                  </div>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <Link to="/about" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </Link>
                </div>
                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#AAD7D9] cursor-pointer px-8 py-3 text-base font-medium text-white hover:bg-[#92C7CF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={()=>{
                navigate('/order',{state:{sizeVal: selectedSize, productId:productId}})
              }}
              >
                Oreder Now
              </div>
              
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  