import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [users,loading] = useState([]);
  const {loginUser} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);

      toast.success("Login successful!");
      navigate(from, {replace: true});  
    }).catch((err) => {
      Swal.fire({
        title: "Login Failed",
        text: err.message,
        icon: "error",
        timer: 1500,
      })
      console.log(err)});
    console.log('Login data:', data);
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Field with Toggle */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters required" },
                })}
                className="w-full mt-2 px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <span
                className="absolute top-[70%] right-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
              {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
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
            <Link to="/auth/register" className="text-green-700 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
