import React from "react";

const AdminControl = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Control</h2>
            <p className="text-gray-700">Super Admin can manage other admins here.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">Admin Name</h3>
                    <p className="text-gray-600 text-lg">Access: Career, Team</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Edit Permissions
                    </button>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">Admin Name</h3>
                    <p className="text-gray-600 text-lg">Access: All Pages</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Edit Permissions
                    </button>
                </div>
                {/* Add more admin cards dynamically later */}
            </div>
        </div>
    );
};

export default AdminControl;
