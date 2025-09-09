import { useState } from "react";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-[url(./Background.jpg)] bg-cover">
      <div className="relative  md:w-[950px] h-[550px] rounded-[35px] overflow-hidden shadow-lg bg-white">
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-all duration-700 ${
            isSignUp
              ? "translate-x-full opacity-100 z-10"
              : "-translate-x-0 opacity-0 z-0"
          }`}
        >
          <form className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl text-[#012250] font-bold mb-4">Create new Account</h1>
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-md"
            />
            <input
              type="text"
              placeholder="Surname"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-md"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-md"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-4 outline-none text-md"
            />


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
          <form className="flex flex-col items-center justify-center w-full pb-6">
            <h1 className="text-4xl text-[#012250] font-bold mb-4">Welcome Back</h1>
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-md"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="bg-gray-200 rounded-md p-2 w-full mb-2 outline-none text-md"
            />
            <a className="text-gray-600 text-md mb-4 cursor-pointer hover:underline">
              Forgot your password ?
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
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0099cc] to-[#012250] text-white flex flex-col items-center justify-center p-4 transition-all duration-700  ${isSignUp ?"rounded-r-[110px] rounded-l-[30px]": "rounded-l-[110px] rounded-r-[30px]"}`}> 
            {isSignUp ? (
              <>
                <h1 className="text-5xl text-center font-bold">Already have an Account ?</h1>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="mt-4 px-10 py-3 rounded-lg text-lg uppercase font-semibold hover:scale-105 hover:cursor-pointer underline"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-5xl text-center font-bold">Don't have an Account ?</h1>
                <p className="text-lg mt-2">
                  Register an Account to login to the platform
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="mt-4 px-10 py-3 rounded-lg text-lg uppercase font-semibold hover:scale-105 hover:cursor-pointer underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
          {/* social media platforms */}
          <div className="absolute bottom-2 flex flex-col items-center w-full">
            <div className="flex space-x-4 mb-4 text-gray-600 text-lg">
              <h2 className="text-white font-semibold">Socials : </h2>
              <a href="https://github.com/Kubayi-ND" target="_blank" >
                <div  className="bg-black rounded-full p-1 text-[#bcbcbcff] hover:scale-110" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#bcbcbcff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ntsumi-kubayi/" target="_blank" >
                <div className="bg-blue-600 rounded-md p-1 text-white hover:scale-110" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
              </a>   
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

