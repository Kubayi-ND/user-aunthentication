import {useState} from 'react';
import {X} from 'lucide-react'

export const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState(false);



  return (
    <div className=" h-screen bg-white p-8">
      <div className="w-full flex justify-between border-b border-gray-300 ">
          <img src="/Logo.png" alt="Logo" className="h-16 mb-2"/>
          <button className="bg-[#02052c] text-white px-4 rounded-md h-10 w-28 hover:scale-105 hover:cursor-pointer">Sign out</button>
        </div>
      <div className=" p-8">
        {/* user information display */}
        <div>
            <h1 className="text-5xl text-[#012250] font-bold mb-4">User Profile Information</h1>
            <h2 className="text-xl font-semibold mb-4">First Name :  </h2>
            <h2 className="text-xl font-semibold mb-4">Last Name : </h2>
            <h2 className="text-xl font-semibold mb-4">Email : </h2>
            <h2 className="text-xl font-semibold mb-4">Password : </h2>
        </div>
        
        

      {updateProfile && (
          <div className='relative w-80 md:w-135 pt-4'>
            <X className='absolute right-0 cursor-pointer hover:scale-105 hover:text-blue-700 ' onClick={() => setUpdateProfile(false)}/>
            <div className="mb-4 mr-6">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4 mr-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
        )}
            <button onClick={() => setUpdateProfile(true)} className="bg-[#02052c] text-white px-4 py-2 rounded-md hover:scale-105 hover:cursor-pointer">
              Update Profile
            </button>   
    </div>
    </div>
  );
};
