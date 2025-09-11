
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const links = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/profile", label: "Profile" },
    { to: "/admin/admin-control", label: "Admin Control" },
    { to: "/admin/career", label: "Career" },
    { to: "/admin/team", label: "Team" },
    { to: "/admin/services", label: "Services" },
    { to: "/admin/portfolio", label: "Portfolio" },
    { to: "/admin/contact", label: "Contact" },
    { to: "/admin/blog", label: "Blog" },
    { to: "/admin/setting", label: "Setting" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`
                    fixed z-50 top-0 left-0 w-64 h-screen bg-gradient-to-b from-blue-700 to-purple-800 text-white shadow-lg flex flex-col transform transition-transform
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex
                `}
      >
        {/* Logo */}
        <div className="px-6 py-4 border-b border-white/20">
          <h1 className="text-2xl font-bold tracking-wide">Code Paila</h1>
          <p className="text-sm text-gray-200">Admin Panel</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${isActive
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-white/20"
                }`
              }
              onClick={() => setIsOpen(false)} // Close sidebar on mobile
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/20 text-sm text-gray-200">
          © {new Date().getFullYear()} Code Paila
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
