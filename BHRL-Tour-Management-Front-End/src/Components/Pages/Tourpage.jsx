import React, { useState } from 'react';
import { FaSearch, FaStar, FaCalendarAlt, FaMapMarkerAlt, FaUserFriends, FaCompass } from 'react-icons/fa';
import useScrollToTop from '../../Hooks/useScrollToTop';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const TourPage = () => {
  useScrollToTop();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Static data for categories and tours
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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Experience breathtaking mountain views and challenging trails with expert guides."
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
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Immerse yourself in ancient traditions and visit UNESCO World Heritage sites."
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
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Relax on pristine beaches with crystal clear waters and luxury accommodations."
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
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Witness the great migration and encounter Africa's big five in their natural habitat."
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
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Discover iconic landmarks and vibrant cultures across Europe's most famous cities."
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
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Explore the world's largest rainforest with expert naturalists and indigenous guides."
    }
  ];

  // Filtering logic
  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen w-full ">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-b-2xl py-16 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our World-Class Tours</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Find your next adventure from our collection of curated travel experiences designed for every type of explorer.</p>
        </div>
      </section>
      
      <div className="container mx-auto px-4  py-12">
        {/* Search and Filter Section */}
        <Card className="mb-10 shadow-md border-slate-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              {/* Search Input */}
              <div className="md:col-span-2 relative">
                <Input
                  type="text"
                  placeholder="Search by tour name or destination..."
                  className="pl-10 pr-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              </div>
              
              {/* Category Filters */}
              <div className="md:col-span-2 flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full transition-all duration-300 ${
                      selectedCategory === category.id 
                      ? 'bg-slate-800 hover:bg-slate-700' 
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:px-20  mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-slate-200">
              <div className="relative h-64">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600 text-white">
                  {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
                </Badge>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <FaStar /> <span>{tour.rating}</span>
                </div>
                
                {/* Tour Title and Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <CardTitle className="text-2xl font-bold mb-1">{tour.title}</CardTitle>
                  <div className="flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{tour.location}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4 text-sm">{tour.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-6 border-b pb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-teal-600" /> 
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-teal-600" /> 
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-slate-800">${tour.price}</span>
                    <span className="text-sm text-slate-500">/person</span>
                    <div className="text-xs text-slate-500 mt-1">
                      {tour.reviews} reviews
                    </div>
                  </div>
                  <Button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-300">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredTours.length === 0 && (
          <Card className="text-center py-20 bg-white rounded-lg shadow-md border-slate-200">
            <CardContent>
              <FaCompass className="text-6xl text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No Tours Found</h3>
              <p className="text-slate-500">Try adjusting your search or clearing the filters to see our full range of adventures!</p>
            </CardContent>
          </Card>
        )}
        
        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <nav className="inline-flex rounded-lg shadow-sm">
            <Button variant="outline" className="rounded-r-none" disabled>
              Previous
            </Button>
            <Button variant="default" className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="rounded-l-none">
              Next
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TourPage;