import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg"; // Your logo path
import useAuth from "@/Hooks/useAuth"; // Your auth hook path
import Swal from "sweetalert2";

// --- Navigation links remain the same ---
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tours", path: "/tours" },
  { name: "Community", path: "/community" },
  { name: "About Us", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useAuth();

  // --- All authentication logic is untouched ---
  const isLoggedIn = user?.email;
  const isAdmin = user?.role === "admin";
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b", // Amber color for confirm
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      background: '#1e293b', // Slate-800 background for modal
      color: '#ffffff' // White text for modal
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
          background: '#1e293b',
          color: '#ffffff'
        });
        // No need to reload, React state will handle the UI update
      }
    });
  };

  // --- Refreshed Tailwind CSS class strings for the new look ---
  const linkStyle = "px-1 py-2 text-slate-300 hover:text-amber-400 transition-colors duration-300 relative font-medium";
  const activeStyle = "text-amber-400 after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-amber-400 rounded-sm";
  const ctaButton = "font-semibold text-slate-900 bg-gradient-to-r from-amber-400 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105";
  
  return (
    <>
      {/* ===== Top Bar - Minor tweaks for consistency ===== */}
      <div className="bg-gradient-to-r from-teal-700 to-cyan-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-2 text-sm">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@travelexplore.com" className="hover:text-amber-300 transition-colors duration-300">
                  info@travelexplore.com
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+8801712345678" className="hover:text-amber-300 transition-colors duration-300">
                  +880 171 234-5678
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-2 sm:mt-0">
              <div className="flex gap-4 text-white">
                 <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-amber-300 transform hover:scale-110 transition-all duration-300"><i className="fab fa-facebook-f"></i></a>
                 <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter" className="hover:text-amber-300 transform hover:scale-110 transition-all duration-300"><i className="fab fa-twitter"></i></a>
                 <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-amber-300 transform hover:scale-110 transition-all duration-300"><i className="fab fa-instagram"></i></a>
              </div>
              <span className="bg-amber-400 text-teal-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                ✨ Festive Offer Live!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar - Revamped for a Cool, Festive Vibe ===== */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-full shadow-md">
                <img className="h-10 w-10" src={logo} alt="TravelX Logo" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                  TravelX
                </h1>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Your Journey Begins Here
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
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

              {!isLoggedIn ? (
                <Link to="/auth/register" className={ctaButton}>Join Us</Link>
              ) : (
                <div className="relative group">
                  <img
                    src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="Profile"
                    className="h-11 w-11 rounded-full border-2 border-slate-400 group-hover:border-amber-400 cursor-pointer transition-all duration-300"
                  />
                  <div className="absolute right-0 mt-3 hidden group-hover:block w-48 bg-slate-800 text-slate-200 rounded-md shadow-lg z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ring-1 ring-slate-700">
                    <div className="px-4 py-3 border-b border-slate-700">
                      <p className="text-sm font-semibold truncate">{user.displayName || "Welcome"}</p>
                      <p className="text-xs text-slate-400 truncate">{user.email}</p>
                    </div>
                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">Dashboard</Link>
                    {isAdmin && (
                      <Link to="/dashboard/admindashboard" className="block px-4 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">Admin Panel</Link>
                    )}
                    <button onClick={handleLogOut} className="w-full text-left px-4 py-2 text-pink-400 hover:bg-slate-700 transition-colors rounded-b-md">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-300 hover:text-amber-400 focus:outline-none p-2"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 px-4 pt-2 pb-4 space-y-2 text-slate-300 border-t border-slate-700">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? `${linkStyle} ${activeStyle} block py-2` : `${linkStyle} block py-2`
                }
              >
                {name}
              </NavLink>
            ))}
            <div className="border-t border-slate-700 pt-4 space-y-3">
              {!isLoggedIn ? (
                 <Link to="/auth/register" onClick={toggleMenu} className={`${ctaButton} block text-center`}>Join Us</Link>
              ) : (
                <>
                  <Link to="/dashboard" onClick={toggleMenu} className="block py-2 rounded hover:bg-slate-700 px-2">Dashboard</Link>
                  {isAdmin && (
                    <Link to="/dashboard/admindashboard" onClick={toggleMenu} className="block py-2 rounded hover:bg-slate-700 px-2">Admin Panel</Link>
                  )}
                  <button onClick={() => { handleLogOut(); toggleMenu(); }} className="w-full text-left py-2 text-pink-400 rounded hover:bg-slate-700 px-2">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;