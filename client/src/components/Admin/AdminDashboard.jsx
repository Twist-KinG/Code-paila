import React from "react";
import { FaUsers, FaFileAlt, FaCog, FaChartLine } from "react-icons/fa";

const AdminDashboard = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Manage Users",
      description: "View, edit, and manage all registered users of the platform.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaFileAlt,
      title: "Manage Content",
      description: "Upload, edit, or delete resources and monitor content usage.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaChartLine,
      title: "Analytics",
      description: "View site analytics and track user engagement and growth.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FaCog,
      title: "Settings",
      description: "Update platform settings, admin accounts, and system preferences.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transform hover:-translate-y-1 transition-all`}
          >
            <div
              className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color}`}
            >
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
