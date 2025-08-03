import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden mx-4">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-green-900 text-white px-10 py-16">
          <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
          <p className="text-lg opacity-90">
            Login to manage your tour bookings, view itineraries, and explore exciting destinations.
          </p>
          <img
            src="https://i.ibb.co/6sTQMjC/tour-login.png"
            alt="Login Illustration"
            className="w-full mt-8 max-w-xs"
          />
        </div>

        {/* Right Section */}
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Login to BHRL Tours</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-green-700 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
