
export const AdminDashboard = () => {
  return (
      <div className="  p-8">
      
        <h1 className="text-5xl text-[#012250] font-bold mb-4 p-2">Admin Dashboard</h1>
        <div className="mb-4 border border-gray-300 p-4 rounded-xl">
          {/* <label className="block text-gray-700">User Management</label>
          <button className="bg-[#02052c] text-white px-4 py-2 rounded-md">
            Manage Users
          </button> */}

          <h2 className="text-2xl text-[#012250] font-bold mb-2">User Management</h2>
          
          {/* user list table */}
          <div>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-1 w-10">{/*checkbox for selecting users*/}</th>
                  <th className="border border-gray-300 p-1">User ID</th>
                  <th className="border border-gray-300 p-2">First Names</th>
                  <th className="border border-gray-300 p-2">Last Name</th>
                  <th className="border border-gray-300 p-2">Email Address</th>
                  <th className="border border-gray-300 p-2">Password</th>
                </tr>
                
              </thead>
              <tbody>
                {/* Map through user data and create a row for each user */}
                <tr className="bg-white ">
                  <td className="border border-gray-300 p-2 flex justify-center"><input type="checkbox" className="w-5 h-5" /></td>
                  <td className="border border-gray-300 p-2">{/* User ID */}</td>
                  <td className="border border-gray-300 p-2">{/* Name */}</td>
                  <td className="border border-gray-300 p-2">{/* Email */}</td>
                  <td className="border border-gray-300 p-2">{/* Role */}</td>
                  <td className="border border-gray-300 p-2">{/* Actions */}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
   
  );
};
