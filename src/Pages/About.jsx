import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useEffect } from 'react';
import Hindawi from '../Data/Images/AboutData/Hindawi.JPG'
import WomenSize from '../Data/Images/AboutData/WomenSize.PNG'
import MenSize from '../Data/Images/AboutData/MenSize.PNG'



function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    // container
    <div>
    <Navbar />
    {/* Container */}
    <div className="flex flex-col md:flex-row w-full justify-between p-5">
      <div className="p-5 md:w-2/3">
        <div className="font-bold text-xl mb-5">I'm Hindawi</div>
        <p>
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
      </div>
      <img src={Hindawi} className="w-full h-2/4 md:w-1/3 p-5" alt="" />
    </div>
    <Footer />
  </div>
  );
}

export default About;