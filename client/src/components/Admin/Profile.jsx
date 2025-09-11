import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
  const { admin } = useContext(AuthContext);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Admin Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/avatar.png"
            alt="Admin Avatar"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h3 className="text-xl font-semibold">{admin.name}</h3>
            <p className="text-gray-600">{admin.email}</p>
          </div>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Role:</span> {admin.role || "Admin"}
          </p>
          <p>
            <span className="font-semibold">Joined:</span> Jan 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
