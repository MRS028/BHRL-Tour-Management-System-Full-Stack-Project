import React from "react";
import {
  FaCompass,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF, // Using FaFacebookF for a cleaner look
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  // Reusable class for social media icon links for a clean, consistent hover effect
  const socialLinkStyle =
    "text-slate-400 hover:text-amber-400 transform hover:-translate-y-1 transition-all duration-300";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-2 rounded-full shadow-md">
                <FaCompass className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                Tour With BHRL
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Crafting unforgettable journeys since 2010. We specialize in
              bespoke tours that immerse you in the world's most breathtaking
              destinations.
            </p>
            <div className="flex space-x-5">
              <a href="#" className={socialLinkStyle} title="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className={socialLinkStyle} title="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className={socialLinkStyle} title="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className={socialLinkStyle} title="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b-2 border-slate-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 hover:pl-2 transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 hover:pl-2 transition-all duration-300"
                >
                  Our Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 hover:pl-2 transition-all duration-300"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 hover:pl-2 transition-all duration-300"
                >
                  Travel Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 hover:pl-2 transition-all duration-300"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b-2 border-slate-700">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-slate-400">
                   Dhaka-1342, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 h-4 w-4 text-amber-400" />
                <a
                  href="tel:+8801712345678"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  +880 171 234-5678
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 h-4 w-4 text-amber-400" />
                <a
                  href="mailto:info@travelexplore.com"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  info@travelexplore.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b-2 border-slate-700">
              Join Our Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Get exclusive deals, travel inspiration, and updates sent straight
              to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-slate-800 border border-slate-600 rounded-l-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity duration-300"
                aria-label="Subscribe to newsletter"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tour With BHRL. All rights
            reserved. Designed with ❤️ in Bangladesh.
          </p>
          <div className="mt-4 flex flex-wrap justify-center space-x-4 md:space-x-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
