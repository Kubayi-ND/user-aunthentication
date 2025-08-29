
export const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="mb-4">
          <label className="block text-gray-700">User Management</label>
          <button className="bg-[#02052c] text-white px-4 py-2 rounded-md">
            Manage Users
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Site Settings</label>
          <button className="bg-[#02052c] text-white px-4 py-2 rounded-md">
            Update Settings
          </button>
        </div>
      </div>
    </div>
  );
};
