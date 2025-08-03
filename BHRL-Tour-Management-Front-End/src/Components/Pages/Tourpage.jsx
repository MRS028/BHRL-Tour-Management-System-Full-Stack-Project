import { useScroll } from 'framer-motion';
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar, FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import useScrollToTop from '../../Hooks/useScrollToTop';

const TourPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
useScrollToTop();
  
  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'relaxation', name: 'Relaxation' },
    { id: 'wildlife', name: 'Wildlife' }
  ];

  const tours = [
    {
      id: 1,
      title: "Mountain Trekking Adventure",
      location: "Himalayas, Nepal",
      duration: "5 Days / 4 Nights",
      groupSize: "Max 15",
      price: 899,
      rating: 4.8,
      reviews: 128,
      category: "adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "Cultural Heritage Tour",
      location: "Kyoto, Japan",
      duration: "7 Days / 6 Nights",
      groupSize: "Max 12",
      price: 1299,
      rating: 4.9,
      reviews: 95,
      category: "cultural",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: "Tropical Beach Retreat",
      location: "Maldives",
      duration: "6 Days / 5 Nights",
      groupSize: "Max 20",
      price: 1599,
      rating: 4.7,
      reviews: 87,
      category: "relaxation",
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 4,
      title: "African Safari Experience",
      location: "Serengeti, Tanzania",
      duration: "8 Days / 7 Nights",
      groupSize: "Max 10",
      price: 2199,
      rating: 5.0,
      reviews: 112,
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 5,
      title: "European Cities Explorer",
      location: "Paris, Rome & Barcelona",
      duration: "10 Days / 9 Nights",
      groupSize: "Max 25",
      price: 1899,
      rating: 4.6,
      reviews: 156,
      category: "cultural",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 6,
      title: "Amazon Rainforest Expedition",
      location: "Brazil",
      duration: "7 Days / 6 Nights",
      groupSize: "Max 8",
      price: 1799,
      rating: 4.9,
      reviews: 73,
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All Tours of BHRL</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our wide range of carefully crafted travel experiences</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-row md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search tours or destinations..."
                className="w-full p-2 pl-7 pr-4 outline-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-2 text-gray-700" />
            </div>
            
            <div className="flex items-center">
              <FaFilter className="text-gray-600 mr-2" />
              <select
                className="p-2 rounded-lg text-gray-400 border outline-none border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option className='text-gray-600' key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${tour.image}')` }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded">
                      {categories.find(cat => cat.id === tour.category)?.name}
                    </span>
                  </div>
                  <div className="flex items-center font-semibold text-yellow-500">
                    <FaStar className="mr-1" />
                    <span>{tour.rating}</span>
                    <span className="text-gray-700  ml-1">({tour.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-green-700" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-green-700" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUserFriends className="mr-2 text-green-700" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">${tour.price}</span>
                  <button className="bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-800 mb-2">No tours found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow">
            <button className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="py-2 px-4 bg-green-700 text-white border border-green-700">
              1
            </button>
            <button className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TourPage;