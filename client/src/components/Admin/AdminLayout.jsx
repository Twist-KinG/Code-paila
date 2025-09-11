import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AuthContext from "../../context/AuthContext";

const AdminLayout = () => {
    const { admin, logout } = useContext(AuthContext);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Right side content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex justify-between items-center bg-white px-8 py-4 shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Welcome, {admin.name}
                    </h1>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </header>

                {/* Render active admin page */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
