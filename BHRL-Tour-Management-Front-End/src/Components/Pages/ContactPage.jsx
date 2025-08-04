import React from 'react';

// --- Mocking custom hook and icons for self-contained component ---

const useScrollToTop = () => {
  React.useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.error("Could not scroll to top", e);
    }
  }, []);
};

const FaMapMarkerAlt = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>;
const FaPhone = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>;
const FaEnvelope = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>;
const FaClock = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8l-22.4 30.9c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>;


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
