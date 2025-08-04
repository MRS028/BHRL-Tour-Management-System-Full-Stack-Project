import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiUser,
  FiMail,
  FiLock,
  FiImage,
} from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "sonner";
import useScrollToTop from "@/Hooks/useScrollToTop";

const RegisterPage = () => {
  useScrollToTop();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Assuming signInWithGoogle is available in your useAuth hook
  const { createUser, updateUserData, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // --- Core authentication logic is enhanced but not fundamentally changed ---
  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match!",
        confirmButtonColor: "#f59e0b",
        background: "#1e293b",
        color: "#ffffff",
      });
    }

    setIsSubmitting(true);
    try {
      const res = await createUser(data.email, data.password);
      const loggedInUser = res.user;
      console.log(loggedInUser);

      // Now passing the photoURL from the new form field
      await updateUserData(data.name, data.photoURL);

      toast.success("Registration successful! Welcome to Tour With BHRL.");
      navigate("/"); // Navigate to home page after successful registration
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error.message || "An unexpected error occurred. Please try again.",
        confirmButtonColor: "#f59e0b",
        background: "#1e293b",
        color: "#ffffff",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Handler for Google Sign-In ---
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success(`Welcome, ${result.user.displayName}!`);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
          confirmButtonColor: "#f59e0b",
          background: "#1e293b",
          color: "#ffffff",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Section - Thematic and Visual */}
        <div className="hidden md:block relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20"></div>
          <div className="relative items-center flex flex-col justify-end h-full p-10 text-white">
            <h1 className="text-4xl font-bold leading-tight mb-3">
              Start Your Journey With Us
            </h1>
            <p className="text-lg text-slate-300">
              Create an account to unlock exclusive deals, manage your bookings,
              and join a community of explorers.
            </p>
          </div>
        </div>

        {/* Right Section - Registration Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
            Create an Account
          </h2>
          <p className="text-center text-slate-500 mb-8">
            It's quick, easy, and free!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Form Fields */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  {...register("name", { required: "Full name is required" })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Photo URL
              </label>
              <div className="relative">
                <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="url"
                  {...register("photoURL")}
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                      message:
                        "Must include uppercase, lowercase, and a number",
                    },
                  })}
                  className="w-full pl-10 pr-12 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiEye />
                </button>
              </div>
              {errors.password ? (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              ) : (
                <p className="text-xs text-slate-400 mt-1">
                  Min 6 chars, with uppercase, lowercase & a number.
                </p>
              )}
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="w-full pl-10 pr-12 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiEye />
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-2 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                <FaGoogle className="w-5 h-5 mr-2 text-red-500" /> Continue with
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                <FaGithub className="w-5 h-5 mr-2 text-slate-800" /> Continue
                with GitHub
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-semibold text-teal-600 hover:text-teal-700 hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
