import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Code Paila</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
        <li><Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
