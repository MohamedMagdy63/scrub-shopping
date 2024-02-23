import React, { useState } from "react";
import { Link } from "react-router-dom";
import arabicLogo from "../Data/Images/ArabicLogo.PNG";
import H_Logo from "../Data/Images/H_Logo.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between bg-[#B4B4B8]">
      {/* Logo */}
      <Link to='/' className="flex">
        <img className="w-14 sm-hidden" src={H_Logo} alt="H_Logo" />
        <img className="w-16 mr-5" src={arabicLogo} alt="arabicLogo" />         
      </Link>

      {/* Navigation links for large screens */}
      <ul className=" hidden lg:flex lg:flex-row lg:justify-center lg:font-semibold font-serif text-white lg:space-x-12 lg:text-lg lg:text-center">
        <li className="relative overflow-hidden">
          <Link
            to='/men'
            className="relative text-center z-10 border-b border-transparent hover:border-b-4 hover:border-white transition duration-300 ease-in-out"
          >
            Men
          </Link>
        </li>
        <li className="relative overflow-hidden">
          <Link
            to='/Women'
            className="relative z-10 border-b border-transparent hover:border-b-4 hover:border-white transition duration-300 ease-in-out"
          >
            Women
          </Link>
        </li>
        <li className="relative overflow-hidden">
          <Link
            to='/About'
            className="relative z-10 border-b border-transparent hover:border-b-4 hover:border-white transition duration-300 ease-in-out"
          >
            About
          </Link>
        </li>
      </ul>

      {/* Search bar */}
      <div className="flex items-center w-90 mx-10">
        <div className="ml-auto w-full">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {/* Your search icon */}
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 px-5 pl-10 pr-2 py-2 text-sm rounded-full focus:outline-none focus:ring focus:border-white w-full"
          />
          </div>
        </div>
      </div>


      {/* Menu button for small screens */}
      <div className="lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-white p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Small screen menu */}
      {isMenuOpen && (
        <div className="lg:hidden z-10 absolute top-16 right-0 bg-[#B4B4B8] w-full border-b-4 border-white">
        <ul className="text-white font-semibold text-center p-4">
          <li>
            <Link
              to='/men'
              className="block py-2 transition duration-300 ease-in-out border-b border-transparent hover:border-white"
              onClick={handleMenuToggle}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to='/Women'
              className="block py-2 transition duration-300 ease-in-out border-b border-transparent hover:border-white"
              onClick={handleMenuToggle}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to='/About'
              className="block py-2 transition duration-300 ease-in-out border-b border-transparent hover:border-white"
              onClick={handleMenuToggle}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      
      )}
    </div>
  );
};

export default Navbar;
