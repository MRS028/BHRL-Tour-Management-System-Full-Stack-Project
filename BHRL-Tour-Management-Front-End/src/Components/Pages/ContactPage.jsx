import useScrollToTop from '@/Hooks/useScrollToTop';
import React from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';


const ContactPage = () => {
  useScrollToTop();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert("Thank you for your message! We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-800 py-16 w-[100%] text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Have questions or need help planning your next trip? We're here for you!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4 md:px-20 ">
          <div className="grid md:grid-cols-2  gap-12 bg-white p-8 rounded-2xl shadow-xl">
            
            {/* Left Column: Contact Info & Map */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact Information</h2>
                <p className="text-slate-500 mb-8">
                  Fill out the form and our team will get back to you within 24 hours. For urgent inquiries, please call us.
                </p>
                <ul className="space-y-6 text-slate-600">
                  <li className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-teal-600 text-xl mt-1 flex-shrink-0" />
                    <span>House-1, Road-3, Dhaka-1342, Bangladesh</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaPhone className="text-teal-600 text-xl" />
                    <a href="tel:+8801712345678" className="hover:text-amber-500 transition-colors">+880 171 234-5678</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaEnvelope className="text-teal-600 text-xl" />
                    <a href="mailto:info@travelexplore.com" className="hover:text-amber-500 transition-colors">info@travelexplore.com</a>
                  </li>
                   <li className="flex items-center gap-4">
                    <FaClock className="text-teal-600 text-xl" />
                    <span>Sun–Thu, 9:00 AM – 6:00 PM (GMT+6)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 h-64 rounded-lg bg-cover bg-center shadow-inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1572455139224-d3638380b4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"}}>
                    <p className='text-center text-3xl text-slate-800 font-bold'>Map</p>{/* Map Visual */}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="How can we assist you today?"
                    className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
                  ></textarea>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
