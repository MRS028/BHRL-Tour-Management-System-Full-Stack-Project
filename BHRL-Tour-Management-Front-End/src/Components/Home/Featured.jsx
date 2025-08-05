import React from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import useScrollToTop from "../../Hooks/useScrollToTop";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// Data objects for tours and testimonials
const toursData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Mountain Trekking",
    price: 899,
    category: "Adventure",
    duration: "5 days",
    groupSize: "8-12 people",
    rating: 4.8,
    description:
      "Experience breathtaking mountain views and challenging trails with expert guides.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Beach Paradise Escape",
    price: 1250,
    category: "Relaxation",
    duration: "7 days",
    groupSize: "6-10 people",
    rating: 4.9,
    description:
      "Unwind on pristine beaches with crystal clear waters and luxury accommodations.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Serene Lake Getaway",
    price: 950,
    category: "Nature",
    duration: "4 days",
    groupSize: "4-8 people",
    rating: 4.7,
    description:
      "Discover tranquil lakeside retreats with kayaking and wildlife watching opportunities.",
  },
];

const testimonialsData = [
  {
    id: 1,
    name: "Jessica Miller",
    quote:
      "The best vacation I've ever had! Tour With BHRL handled everything perfectly. The guides were amazing.",
    avatar: "JM",
    location: "New York, USA",
    tour: "Mountain Trekking",
  },
  {
    id: 2,
    name: "David Chen",
    quote:
      "An unforgettable experience from start to finish. The itinerary was perfectly planned and truly immersive.",
    avatar: "DC",
    location: "Toronto, Canada",
    tour: "Beach Paradise Escape",
  },
  {
    id: 3,
    name: "Sarah Evans",
    quote:
      "I was a solo traveler and felt completely safe and supported. I met wonderful people and saw incredible sights!",
    avatar: "SE",
    location: "London, UK",
    tour: "Serene Lake Getaway",
  },
];

const featuresData = [
  {
    icon: <FaMapMarkerAlt className="text-4xl text-teal-600" />,
    title: "Amazing Destinations",
    desc: "Handpicked locations across the globe.",
  },
  {
    icon: <FaStar className="text-4xl text-teal-600" />,
    title: "Best Price Guarantee",
    desc: "Competitive prices with no hidden fees.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-teal-600" />,
    title: "Flexible Booking",
    desc: "Easy date changes and cancellations.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-teal-600" />,
    title: "Expert Local Guides",
    desc: "Knowledgeable guides to enrich your journey.",
  },
];

const Featured = () => {
  return (
    <div className="container">
      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Travel With Tour With BHRL
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We provide exceptional travel experiences with unparalleled
              attention to detail and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl h-48 hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className="flex justify-center pt-4 mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl text-slate-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-16 bg-slate-50 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Popular Tours
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our most sought-after travel packages, loved by adventurers like
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.map((tour) => (
              <Card
                key={tour.id}
                className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-full object-cover rounded-t-2xl transform transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 backdrop-blur bg-amber-400/90 text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <FaStar className="text-yellow-700" />
                    <span>{tour.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {tour.category}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {tour.duration}
                    </span>
                  </div>

                  <CardTitle className="text-lg font-bold text-slate-800 mb-1 leading-tight">
                    {tour.title}
                  </CardTitle>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {tour.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-teal-700">
                        ${tour.price}
                        <span className="text-xs text-slate-500 font-normal">
                          {" "}
                          /person
                        </span>
                      </span>
                      <p className="text-xs text-slate-400">{tour.groupSize}</p>
                    </div>

                    <Button className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              className="bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-3 px-8 h-auto rounded-full text-lg text-white font-bold transition-all duration-300 transform hover:scale-105"
            >
              <a href="/tours">View All Tours</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10">
        <div className="container mx-auto md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Real stories from our vibrant community of explorers.
            </p>
          </div>

          <div className="grid grid-cols-1 p-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-slate-50  shadow-md border border-slate-200"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-teal-200 flex items-center justify-center text-teal-800 text-xl font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm text-slate-500 font-medium">
                    Tour: {testimonial.tour}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container p-1 mx-auto md:px-4">
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl shadow-2xl overflow-hidden p-10 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1528543606781-df6e6757b110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
              }}
            ></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                Let's make your travel dreams a reality. Book a tour or get in
                touch with our experts today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-3 px-6 h-auto rounded-full text-lg text-white font-bold transition-all duration-300 transform hover:scale-105"
                >
                  <a href="/tours">Book a Tour</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-500 bg-transparent hover:bg-slate-700 hover:text-white rounded-full text-lg h-auto py-3 px-6 transition-colors"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
