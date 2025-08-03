import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-1 rounded-lg">
                <FaMapMarkerAlt className="h-6 w-6 text-blue-800" />
              </div>
              <h2 className="text-xl font-bold">BHRL Tour Management</h2>
            </div>
            <p className="text-white font-semibold mb-4">
              Creating unforgettable travel experiences since 2010. We specialize in curated tours to the world's most breathtaking destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white font-semibold hover:text-white transition duration-300">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white font-semibold hover:text-white transition duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white font-semibold hover:text-white transition duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white font-semibold hover:text-white transition duration-300">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 text-white  pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-semibold hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-white transition duration-300">Our Tours</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-white transition duration-300">Destinations</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-white transition duration-300">Travel Guides</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-white transition duration-300">Special Offers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2  pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                <span className="text-white font-semibold">Dhaka,Bangladesh</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <span className="text-white font-semibold">+880123123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <span className="text-white font-semibold">info@bhrltours.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2  pb-2">Newsletter</h3>
            <p className="text-white font-semibold mb-4">Subscribe to receive travel tips and special offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 border border-gray-300 mx-2 py-2 w-full rounded-l-lg text-white focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-r-lg transition duration-300">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t  mt-8 pt-6 text-center text-white">
          <p>&copy; {new Date().getFullYear()} BHRL Tour Management. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-300">Cookie Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;