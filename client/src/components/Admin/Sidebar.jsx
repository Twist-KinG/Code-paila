import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaUserCircle, FaCog } from "react-icons/fa";

const Sidebar = () => {
  
  const links = [
    { to: "/admin", label: "Summary", icon: FaTachometerAlt },
    { to: "/admin/profile", label: "Profile", icon: FaUserCircle },
    { to: "/admin/settings", label: "Settings", icon: FaCog },
  ];


  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-blue-700 to-purple-800 text-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4 border-b border-white/20">
        <h1 className="text-2xl font-bold tracking-wide">Code Paila</h1>
        <p className="text-sm text-gray-200">Admin Panel</p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-white/20"
              }`
            }
          >
            <link.icon className="w-5 h-5" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/20 text-sm text-gray-200">
        © {new Date().getFullYear()} Code Paila
      </div>
    </aside>
  );
};

export default Sidebar;
