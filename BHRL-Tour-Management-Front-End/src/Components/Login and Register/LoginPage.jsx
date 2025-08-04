import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "sonner";
import useScrollToTop from "@/Hooks/useScrollToTop";

const LoginPage = () => {
  useScrollToTop();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  // Removed unused 'users' and 'loading' state
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Authentication logic remains unchanged
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        toast.success("Login successful! Welcome back.");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          title: "Login Failed",
          text: "Please check your email and password.",
          icon: "error",
          confirmButtonColor: "#f59e0b",
          background: "#1e293b",
          color: "#ffffff",
        });
        console.error("Login Error:", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Section - Thematic and Visual */}
        <div className="hidden md:block relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1527631746610-b2225a209262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20"></div>
          <div className="relative flex flex-col justify-end h-full p-10 text-white">
            <h1 className="text-4xl font-bold leading-tight mb-3">
              Welcome Back, Explorer!
            </h1>
            <p className="text-lg text-slate-300">
              Sign in to continue your journey, manage bookings, and discover
              new adventures with Tour With BHRL.
            </p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
            Login to{" "}
            <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              Tour With BHRL
            </span>
          </h2>
          <p className="text-center text-slate-500 mb-8">
            Let's get you back on the road.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-slate-700 font-medium mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 pr-12 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute top-[38px] right-4 text-slate-400 hover:text-slate-600 transition"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Log In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-teal-600 hover:text-teal-700 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
