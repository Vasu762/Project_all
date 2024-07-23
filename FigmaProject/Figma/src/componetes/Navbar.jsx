import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="xl:px-[275px] relative xl:top-3  max-sm:px-[10px] max-sm:bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* <a href="#" className="text-white text-xl font-bold"></a> */}
        <img className='' src={logo} alt="" />
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-blue-700">Home</a>
          <a href="#" className="text-gray-300">About</a>
          <a href="#" className="text-gray-300">Services</a>
          <a href="#" className="text-gray-300">potfolio</a>
          <a href="#" className="text-gray-300">News</a>
          <a href="#" className="text-gray-300 border-2 border-solid border-gray-300  px-3 rounded-full">Contact</a>
        </div>
        <div className="md:hidden"> 
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6 max-sm:relative max-sm:left-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 space-x-12">
          <a href="#" className="text-gray-300 hover:text-white ">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          <a href="#" className="text-gray-300 hover:text-white">potfolio</a>
          <a href="#" className="text-gray-300 hover:text-white">News</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
