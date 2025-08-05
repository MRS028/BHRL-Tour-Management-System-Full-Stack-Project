import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEye,
  FiUser,
  FiMail,
  FiLock,
  FiImage,
} from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useUploadToImgBB from "../../Hooks/useUploadToImgBB"; // ✅ your hook
import useScrollToTop from "@/Hooks/useScrollToTop";
import SocialLogin from "./SocialLogin";

const RegisterPage = () => {
  useScrollToTop();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const uploadToImgBB = useUploadToImgBB(); // ✅ Call your custom hook
  const { createUser, updateUserData, googleSingIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setUploading(true);
    try {
      const uploadedUrl = await uploadToImgBB(file);
      setValue("photoURL", uploadedUrl); // Update form value
      // setImagePreview(uploadedUrl); 
    } catch (err) {
      console.error("Image upload failed", err);
      toast.error("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

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

      await updateUserData(data.name, data.photoURL);

      toast.success("Registration successful! Welcome to Tour With BHRL.");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "An unexpected error occurred. Please try again.",
        confirmButtonColor: "#f59e0b",
        background: "#1e293b",
        color: "#ffffff",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = () => {
    googleSingIn()
      .then((result) => {
        toast.success(`Welcome, ${result.user.displayName} in this website!`);
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:block relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1770&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
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

        {/* Right Form Section */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
            Create an Account
          </h2>
          <p className="text-center text-slate-500 mb-8">
            It's quick, easy, and free!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
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

            {/* Image Upload */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Profile Photo
              </label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
                  isDragActive ? "border-amber-500 bg-amber-50" : "border-slate-300 bg-slate-100"
                }`}
              >
                <input {...getInputProps()} />
                <FiImage className="mx-auto text-4xl text-slate-400 mb-2" />
                {uploading ? (
                  <p className="text-sm text-slate-500">Uploading...</p>
                ) : imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto h-40 w-40 object-fill  rounded-lg"
                  />
                ) : (
                  <p className="text-sm text-slate-500">
                    Drag & drop your photo here, or click to select
                  </p>
                )}
              </div>
              <input type="hidden" {...register("photoURL", { required: "Photo is required" })} />
              {errors.photoURL && (
                <p className="text-red-500 text-sm mt-1">{errors.photoURL.message}</p>
              )}
            </div>

            {/* Email */}
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
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                      message: "Must include uppercase, lowercase, and a number",
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

            {/* Confirm Password */}
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

            {/* Submit Button */}
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

          <SocialLogin handleGoogleSignIn={handleGoogleSignIn} />

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
