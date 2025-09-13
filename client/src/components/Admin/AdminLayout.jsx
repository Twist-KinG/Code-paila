
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AuthContext from "../../context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminLayout = () => {
    const { admin, logout } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar for desktop + mobile */}
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            {/* Right side content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex justify-between items-center bg-white px-4 md:px-8 py-4 shadow-md">
                    <div className="flex items-center gap-4">
                        {/* Hamburger for mobile */}
                        <button onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-gray-800 md:hidden focus:outline-none">
                            {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>  
                        <h1 className="text-2xl font-bold text-gray-900">Welcome, {admin?.name}</h1>
                    </div>

                    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">Logout</button>
                </header>

                {/* Main content */}
                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
