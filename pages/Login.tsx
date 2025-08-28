import React, { useState } from "react";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-[#010d48]">
      <div className="relative w-[350px] md:w-[950px] h-[550px] rounded-[30px] overflow-hidden shadow-lg bg-white">
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-all duration-700 ${
            isSignUp
              ? "translate-x-0 opacity-100 z-10"
              : "-translate-x-full opacity-0 z-0"
          }`}
        >
          <form className="flex flex-col items-center justify-center w-full">
            <h1 className="text-xl font-bold mb-4">Create new Account</h1>
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Surname"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-4 outline-none text-sm"
            />

            <div className="flex space-x-4 mb-4 text-gray-600 text-lg">
              
            </div>

            <button
              type="submit"
              className="bg-[#02052c] text-white font-semibold tracking-wide uppercase text-white px-10 py-3 rounded-lg"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-all duration-700 ${
            isSignUp
              ? "translate-x-full opacity-0 z-0"
              : "translate-x-0 opacity-100 z-10"
          }`}
        >
          <form className="flex flex-col items-center justify-center w-full">
            <h1 className="text-xl font-bold mb-4">Welcome Back</h1>
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-sm"
            />
            <a className="text-gray-600 text-sm mb-4 cursor-pointer">
              Forgot your password?
            </a>
            <div className="flex space-x-4 mb-4 text-gray-600 text-lg">
              
            </div>
            <button className="bg-[#02052c] text-white px-10 py-3 rounded-lg text-lg font-semibold tracking-wide uppercase  rounded-lg">
              Sign In
            </button>
          </form>
        </div>

        {/* Sliding Overlay */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1333b6] to-[#9aa7db] text-white flex flex-col items-center justify-center p-6 transition-all duration-700  ${isSignUp ?"rounded-r-[110px] rounded-l-[30px]": "rounded-l-[110px] rounded-r-[30px]"}`}> 
            {isSignUp ? (
              <>
                <h1 className="text-lg font-bold">Already have an Account?</h1>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="mt-4 border border-white px-10 py-4 rounded-lg text-lg uppercase font-semibold"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-lg font-bold">Don't have an Account?</h1>
                <p className="text-sm mt-2">
                  Register an Account to use all site features
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="mt-4 border border-white px-10 py-3 rounded-lg text-lg uppercase font-semibold"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

