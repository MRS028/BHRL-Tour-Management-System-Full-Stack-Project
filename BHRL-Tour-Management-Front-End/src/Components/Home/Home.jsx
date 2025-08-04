import React from 'react';
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import useScrollToTop from '../../Hooks/useScrollToTop'; // Assuming this hook exists
import { Button } from '../ui/button'; // Assuming you have a ShadCN/UI button or similar

const Home = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen pt-10 bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full -mt-20 md:-mt-24 pt-20 md:pt-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-slate-900/20"></div>
        <div className="relative container mx-auto px-4 py-32 md:py-48 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-down">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-10 animate-fade-in-up">
            Explore breathtaking destinations with our expertly crafted tours, designed to create memories that last a lifetime.
          </p>
          <Button asChild className='bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-3 px-8 h-auto rounded-full text-lg text-white font-bold transition-all duration-300 transform hover:scale-105 animate-fade-in-up'>
            <a href="/tours">Explore Tours</a>
          </Button>
        </div>
      </section>

      <div className='container'>
        {/* Features Section */}
      <section className="py-20 max-w-7xl mx-auto ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Travel With TravelX</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We provide exceptional travel experiences with unparalleled attention to detail and customer satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaMapMarkerAlt className="text-4xl text-teal-600" />, title: "Amazing Destinations", desc: "Handpicked locations across the globe." },
              { icon: <FaStar className="text-4xl text-teal-600" />, title: "Best Price Guarantee", desc: "Competitive prices with no hidden fees." },
              { icon: <FaCalendarAlt className="text-4xl text-teal-600" />, title: "Flexible Booking", desc: "Easy date changes and cancellations." },
              { icon: <FaUserFriends className="text-4xl text-teal-600" />, title: "Expert Local Guides", desc: "Knowledgeable guides to enrich your journey." }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="flex justify-center mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 bg-slate-50 max-w-7xl mx-auto ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Popular Tours</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Our most sought-after travel packages, loved by adventurers like you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', title: 'Mountain Trekking', price: 899}, 
              {img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', title: 'Beach Paradise Escape', price: 1250}, 
              {img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', title: 'Serene Lake Getaway', price: 950}
            ].map((tour) => (
              <div key={tour.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar /> <span>4.8</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full">Adventure</span>
                  <h3 className="text-2xl font-bold text-slate-800 my-3">{tour.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal-700">${tour.price} <span className="text-sm font-normal text-slate-500">/person</span></span>
                    <Button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-300">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className='bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-3 px-8 h-auto rounded-full text-lg text-white font-bold transition-all duration-300 transform hover:scale-105'>
              <a href="/tours">View All Tours</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 ">
        <div className="container mx-auto md:px-20 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Real stories from our vibrant community of explorers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Jessica Miller', quote: "The best vacation I've ever had! TravelX handled everything perfectly. The guides were amazing.", avatar: 'JM' },
              { name: 'David Chen', quote: 'An unforgettable experience from start to finish. The itinerary was perfectly planned and truly immersive.', avatar: 'DC' },
              { name: 'Sarah Evans', quote: 'I was a solo traveler and felt completely safe and supported. I met wonderful people and saw incredible sights!', avatar: 'SE' }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-teal-200 flex items-center justify-center text-teal-800 text-xl font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                    <div className="flex text-amber-400 mt-1">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
              <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl shadow-2xl overflow-hidden p-12 text-center">
                  <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1528543606781-df6e6757b110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"}}></div>
                  <div className="relative">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
                      <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                          Let's make your travel dreams a reality. Book a tour or get in touch with our experts today!
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                          <Button asChild className='bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-3 px-6 h-auto rounded-full text-lg text-white font-bold transition-all duration-300 transform hover:scale-105'>
                              <a href="/tours">Book a Tour</a>
                          </Button>
                          <Button asChild variant="outline" className="border-slate-500 bg-transparent hover:bg-slate-700 hover:text-white rounded-full text-lg h-auto py-3 px-6 transition-colors">
                            <a href="/contact">Contact Us</a>
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </div>

    </div>
  );
};

export default Home;