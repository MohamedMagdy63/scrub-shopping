
import React  from "react";
import mainImage from "../Data/Images/mainImage.JPG"
const MainLayout= () => {
  return (
    // Container
    <div className="relative h-screen flex items-center justify-center">
      {/* Images */}
      <div className="flex flex-row h-full w-full">
        <img className="w-full h-full lg:object-cover" src={mainImage} alt="mainImage" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Announcement */}
      <div className="absolute flex w-full sm:w-2/4 h-full justify-center items-center ">
      <h1 className="text-4xl sm:text-6xl text-white text-center font-semibold">
          Get your new scrub with a fresh design!
      </h1>
</div>

  </div>

  );
}

export default MainLayout ;
