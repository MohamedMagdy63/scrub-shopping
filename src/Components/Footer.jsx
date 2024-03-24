import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center h-fit w-full p-5 justify-center">
        {/* Navigation links for large screens */}
        <ul className="text-black  flex flex-row justify-center text-lg text-center">
          <li className="relative overflow-hidden">
            <Link
              to='/men'
              className="relative p-5"
            >
              Men
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to='/Women'
              className="relative p-5"
            >
              Women
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to='/About'
              className="relative p-5"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <a href="https://webx-crafters.vercel.app/" className="flex items-center justify-center p-2">
        <span className="uppercase">Created by -</span> 
        <span className="px-1">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">W</span>ebX-Crafters
        </span> 
      </a>
    </div>
  );
};

export default Navbar;
