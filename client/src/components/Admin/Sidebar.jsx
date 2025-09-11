import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserCircle,
  FaCog,
  FaBriefcase,
  FaRegNewspaper,
  FaServicestack,
  FaAddressBook,
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { to: "/admin", label: "Dashboard", icon: FaTachometerAlt },
    { to: "/admin/profile", label: "Profile", icon: FaUserCircle },
    { to: "/admin/admin-control", label: "Admin Control", icon: FaUserCircle },
    { to: "/admin/career", label: "Career", icon: FaBriefcase },
    { to: "/admin/team", label: "Team", icon: FaUsers },
    { to: "/admin/services", label: "Services", icon: FaServicestack },
    { to: "/admin/portfolio", label: "Portfolio", icon: FaFileAlt },
    { to: "/admin/contact", label: "Contact", icon: FaAddressBook },
    { to: "/admin/blog", label: "Blog", icon: FaRegNewspaper },
    { to: "/admin/setting", label: "Setting", icon: FaCog },
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
