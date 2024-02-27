import React , {useEffect} from 'react';
import black from "../Data/Images/1.JPG"
import threemodels from "../Data/Images/2.JPG"
import secondBlue from "../Data/Images/1_side.JPG"
import blue from "../Data/Images/4.JPG"
import { Link } from 'react-router-dom';


const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: black,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      src: '/product',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: threemodels,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      src: '/product',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc:secondBlue,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      src: '/product',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc:blue,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      src: '/product',
    },
  ]
  const AllProducts = () => {
    useEffect(() => {
      // Scroll to the top of the page when the component mounts (page loads)
      window.scrollTo(0, 0);
    }, []);
    return (
      <div className="max-w-full">
        <h1 className="text-center font-semibold text-3xl p-5 md:text-4xl lg:text-5xl xl:text-6xl p-10">
          MODERN MEDICAL SCRUBS
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {callouts.map((product) => (
            <Link to={product.src} className="flex items-center justify-center">
              <img src={product.imageSrc} className="h-full" alt={product.imageAlt} />
            </Link>
            
          ))}
        </div>
      </div>
    );
  };
    

export default AllProducts;
