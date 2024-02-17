import React from 'react';
// Men
import mfirstblack from "../Data/Images/Men/IMG_8240.JPG"
import msecondblack from "../Data/Images/Men/IMG_8117.JPG"
import mfirstolive from "../Data/Images/Men/IMG_8124.JPG"
import msecondolive from "../Data/Images/Men/IMG_8243.JPG"
import mfirstblue from "../Data/Images/Men/IMG_8258.JPG"
import msecondblue from "../Data/Images/1_side.JPG"
import mfirstnavy from "../Data/Images/Men/IMG_8130.JPG"
import msecondnavy from "../Data/Images/Men/IMG_8129.JPG"

// women
import wfirstolive from "../Data/Images/women/IMG_8131.JPG"
import wsecondolive from "../Data/Images/women/IMG_8133.JPG"
import wfirstblue from "../Data/Images/women/IMG_8127.JPG"
import wsecondblue from "../Data/Images/women/IMG_8128.JPG"
import wfirstnavy from "../Data/Images/women/IMG_8151.JPG"
import wsecondnavy from "../Data/Images/women/IMG_8256.JPG"

const men =[
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '00:00',
    imageSrc: mfirstblack,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    color: ["#000"],
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '00:00',
    imageSrc: msecondblack,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    color: ["#000"],
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '00:00',
    imageSrc: mfirstolive,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    color: ["#436850"],
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: msecondolive,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#436850"],
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: mfirstblue,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#1D24CA"],
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: msecondblue,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#1D24CA"],
  },
  {
    id: 7,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: mfirstnavy,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#201658"],
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: msecondnavy,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#201658"],
  },
]
const ProductColors = ({ colors }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-5 h-5 rounded-full m-1"
          style={{ backgroundColor: color, border: "1px solid #ccc" }}
          title={color}
        />
      ))}
    </div>
  );
};
const women =[
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '00:00',
    imageSrc: wfirstolive,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    color: ["#436850"],
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: wsecondolive,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#436850"],
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: wfirstblue,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#1D24CA"],
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: wsecondblue,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#1D24CA"],
  },
  {
    id: 7,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: wfirstnavy,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#201658"],
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '00:00',
    imageSrc: wsecondnavy,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: ["#201658"],
  },
]
const dataArray = {
  '/men': men,
  '/Women': women,
};
const CategoryProducts = (data) => {
  

  return (
    // Container
    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {dataArray[data.location] ? dataArray[data.location].map((product) => (
        <a key={product.id} href={product.href} className="group">
          <div className="aspect-h-1 aspect-w-1 lg:aspect-h-8 lg:aspect-w-7 h-96 overflow-hidden rounded-lg bg-white">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-contain object-center group-hover:opacity-75"
            />
          </div>
          <ProductColors colors={product.color} />
          <p className="mt-1 text-lg font-medium text-center text-gray-900">{product.price}</p>
        </a>
      )) : null}
    </div>
  </div>
</div>



  );
}

export default CategoryProducts;
