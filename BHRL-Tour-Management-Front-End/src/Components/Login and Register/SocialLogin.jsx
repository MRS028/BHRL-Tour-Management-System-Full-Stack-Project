import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = ({handleGoogleSignIn}) => {
    return (
        <div>
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
                <FaGoogle className="w-5 h-5 mr-2 text-orange-500" /> Continue with
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
            
        </div>
    );
};

export default SocialLogin;