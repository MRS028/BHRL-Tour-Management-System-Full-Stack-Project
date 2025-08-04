import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import { FaUserCircle } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tours", path: "/tours" },
  { name: "Community", path: "/community" },
  { name: "About Us", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserDropdown = () => setUserDropdown(!userDropdown);

  const linkStyle = "hover:text-green-200 transition duration-300 relative";
  const activeStyle =
    "text-yellow-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400";

  return (
    <nav className="bg-gradient-to-r from-green-700/100 to-green-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white p-1 rounded-lg">
              <img className="h-7 w-7 md:h-8 md:w-8" src={logo} alt="logo" />
            </div>
            <div>
              <h1 className="text-xl font-bold">BHRL Tour Management</h1>
              <p className="text-xs text-green-200 hidden sm:block">
                Explore the World with Us
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-semibold">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  isActive ? `${linkStyle} ${activeStyle}` : linkStyle
                }
              >
                {name}
              </NavLink>
            ))}
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
              Book Now
            </button>
            <Link
              to={"/login"}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Join Us
            </Link>

            {/* User Icon & Dropdown */}
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="text-white text-2xl focus:outline-none hover:text-green-200"
              >
                <FaUserCircle />
              </button>
              {userDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-md z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/admindashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Admin Panel
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                  <Link
                    to={"/login"}
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Join Us
                  </Link>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-200 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 py-2 space-y-1 text-white font-semibold">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} ${activeStyle} block py-2`
                  : `${linkStyle} block py-2`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Mobile User Dropdown Placeholder */}
          <div className="border-t pt-3 ">
            <Link to="/dashboard" onClick={toggleMenu} className="block py-2">
              Dashboard
            </Link>
            <Link
              to="/dashboard/admindashboard"
              onClick={toggleMenu}
              className="block py-2"
            >
              Admin Panel
            </Link>
            <Link to="/profile" onClick={toggleMenu} className="block py-2">
              Profile
            </Link>
            <Link to="/login" onClick={toggleMenu} className="block py-2">
              Login
            </Link>
            <Link to="/register" onClick={toggleMenu} className="block py-2">
              Register
            </Link>
            <button className="w-full text-left py-2">Logout</button>
          </div>
          <Link
            to={"/login"}
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Join Us
          </Link>
          <div className="border-b pt-4 my-2"></div>
          <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
