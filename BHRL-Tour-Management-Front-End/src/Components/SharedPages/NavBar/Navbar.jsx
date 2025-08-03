import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold">BHRL Tour Management</h1>
                <p className="text-xs text-blue-200 hidden sm:block">Explore the World with Us</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center font-bold space-x-8">
            <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
            <Link to="/tours" className="hover:text-blue-200 transition duration-300">Tours</Link>
            <Link to="/destinations" className="hover:text-blue-200 transition duration-300">Community</Link>
            <Link to="/aboutus" className="hover:text-blue-200 transition duration-300">About Us</Link>
            <Link to="/contact" className="hover:text-blue-200 transition duration-300">Contact</Link>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 px-4 py-2 space-y-1">
          <Link to="/" className="block py-2 hover:text-blue-200 transition duration-300" onClick={toggleMenu}>Home</Link>
          <Link to="/tours" className="block py-2 hover:text-blue-200 transition duration-300" onClick={toggleMenu}>Tours</Link>
          <Link to="/destinations" className="block py-2 hover:text-blue-200 transition duration-300" onClick={toggleMenu}>Destinations</Link>
          <Link to="/about" className="block py-2 hover:text-blue-200 transition duration-300" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" className="block py-2 hover:text-blue-200 transition duration-300" onClick={toggleMenu}>Contact</Link>
          <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;