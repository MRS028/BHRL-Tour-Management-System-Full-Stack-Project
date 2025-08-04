import React from 'react';
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import useScrollToTop from '../../Hooks/useScrollToTop';
import { Button } from '../ui/button';

const Home = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative rounded-b-2xl h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-indigo-900 opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl text-green-100 max-w-2xl mb-10">Explore breathtaking destinations with our expertly crafted tours</p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Explore Tours
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Travel With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide exceptional travel experiences with attention to detail and customer satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaMapMarkerAlt className="text-3xl text-green-700" />, title: "Amazing Destinations", desc: "Handpicked locations worldwide" },
              { icon: <FaStar className="text-3xl text-green-700" />, title: "Best Price Guarantee", desc: "Competitive prices with no hidden fees" },
              { icon: <FaCalendarAlt className="text-3xl text-green-700" />, title: "Flexible Booking", desc: "Easy date changes and cancellations" },
              { icon: <FaUserFriends className="text-3xl text-green-700" />, title: "Expert Guides", desc: "Knowledgeable local tour guides" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Tours Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our most sought-after travel experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded">Adventure</span>
                    <div className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mountain Trekking Adventure</h3>
                  <p className="text-gray-600 mb-4">Experience breathtaking mountain views and challenging trails</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-700">$899</span>
                    <button className="bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className='bg-yellow-600 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300'>
              View All Tours
            </Button>
            
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real experiences from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">John Doe</h4>
                    <div className="flex text-yellow-500">
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1" />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"This was the best vacation I've ever had! The tour guides were knowledgeable and the itinerary was perfectly planned."</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
<div className="py-16 bg-gradient-to-r rounded-2xl from-indigo-700 to-fuchsia-600 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
    <p className="text-white max-w-2xl mx-auto mb-8">
      Join thousands of satisfied travelers who have experienced the world with us
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button className='bg-white/10 hover:bg-white/20 border border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 backdrop-blur-sm'>
        Book a Tour
      </Button>
      <Button className='bg-white/10 hover:bg-white/20 border border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 backdrop-blur-sm'>
        Contact Us
      </Button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;