import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <>
    <div className="flex items-center h-fit w-full p-5 justify-center">
      {/* Navigation links for large screens */}
      <ul className="text-black  flex flex-row justify-center font-semibold text-lg text-center">
        <li className="relative overflow-hidden">
          <Link
            to='/men'
            className="relative p-10"
          >
            Men
          </Link>
        </li>
        <li className="relative overflow-hidden">
          <Link
            to='/Women'
            className="relative p-10"
          >
            Women
          </Link>
        </li>
        <li className="relative overflow-hidden">
          <Link
            to='/About'
            className="relative p-10"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    <a href='https://mohamedmagdy.vercel.app/' className="text-blue-500 p-1 flex items-center justify-center">
      Created By Eng:M-Magdy         
    </a>

    </>
    
  );
};

export default Navbar;
