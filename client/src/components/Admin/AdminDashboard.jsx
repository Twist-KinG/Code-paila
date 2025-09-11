import React, { useContext } from "react";
import { FaUsers, FaFileAlt, FaCog, FaChartLine } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

const AdminDashboard = () => {
  const { admin, logout } = useContext(AuthContext);

  const features = [
    {
      icon: FaUsers,
      title: "Manage Users",
      description: "View, edit, and manage all registered users of the platform.",
      color: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: FaFileAlt,
      title: "Manage Content",
      description: "Upload, edit, or delete resources and monitor content usage.",
      color: "from-purple-500 to-pink-500",
      delay: 200,
    },
    {
      icon: FaChartLine,
      title: "Analytics",
      description: "View site analytics and track user engagement and growth.",
      color: "from-green-500 to-teal-500",
      delay: 400,
    },
    {
      icon: FaCog,
      title: "Settings",
      description: "Update platform settings, admin accounts, and system preferences.",
      color: "from-orange-500 to-red-500",
      delay: 600,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome, {admin.name}
          </h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white/50"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Gradient Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
              >
                <feature.icon className="h-10 w-10 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
            <span className="group-hover:animate-pulse">Manage Platform</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
