import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-4">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl px-10 py-10 border border-white/40 transition-all duration-300">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-green-800 text-center mb-2 tracking-wide">
          Contact Our Team
        </h1>
        <p className="text-center text-gray-700 mb-6">
          For booking inquiries, tour packages, or general questions — we’re here to help!
        </p>

        {/* Contact Info */}
        <div className="text-left text-sm text-gray-600 mb-8">
          <p><strong>📧 Email:</strong> support@bhrltours.com</p>
          <p><strong>📞 Phone:</strong> +880 123-456-7890</p>
          <p><strong>🕘 Hours:</strong> Sun–Thu, 9:00 AM – 6:00 PM</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="How can we assist you?"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Final Footer Note */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          Our support team typically responds within 1–2 business days. Thank you for reaching out!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
