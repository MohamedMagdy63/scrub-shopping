import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useEffect } from 'react';
import WomenSize from '../Data/Images/AboutData/WomenSize.PNG'
import MenSize from '../Data/Images/AboutData/MenSize.PNG'



function SizeGuide() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    // container
    <div>
      <Navbar />
      {/* Container */}
      <h1 className="text-2xl font-semibold text-gray-900 text-center mt-5">
        Sizes for Men & Women
      </h1>
      <div className="flex flex-col md:flex-row">
        <img className="w-2/4 h-2/4 md:w-1/2 p-5" src={WomenSize} alt="" />
        <img className="w-2/4 h-2/4 md:w-1/2 p-5" src={MenSize} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default SizeGuide;