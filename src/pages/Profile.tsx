
export const Profile = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button className="bg-[#02052c] text-white px-4 py-2 rounded-md">
          Update Profile
        </button>
      </div>
    </div>
  );
};
