import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { FaUser } from "react-icons/fa";

const AdminControl = () => {
    const { admin } = useContext(AuthContext);
    const [admins, setAdmins] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Admin",
    });
    const [popupMessage, setPopupMessage] = useState("");

    // Fetch admins
    const fetchAdmins = async () => {
        if (!admin || !admin.token) return;
        try {
            const res = await fetch("http://localhost:5000/api/admin/list", {
                headers: { Authorization: `Bearer ${admin.token}` },
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to fetch admins");
            setAdmins(data);
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    useEffect(() => {
        fetchAdmins();
    }, [admin]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!admin || !admin.token) {
            alert("You must be logged in to add an admin");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${admin.token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Error adding admin");

            // Show popup
            setPopupMessage(data.message || "Admin added successfully!");
            setTimeout(() => setPopupMessage(""), 2000); // popup duration

            setShowForm(false);
            fetchAdmins();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        
        <div className="p-4 md:p-8 relative">
           
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                
                <h2 className="text-3xl font-bold text-gray-900">Admin Control</h2>
                
                <button onClick={() => setShowForm(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">+ Add Admin</button>
            </div>

            <p className="text-gray-700 mb-6">
                Super Admin can manage other admins here.
            </p>

            {/* Admin Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {admins.map((adm) => (

                    <div key={adm._id} className="bg-white p-4 rounded-xl shadow-md text-center transform hover:-translate-y-1 transition-all">
                        {/* Profile Photo or Icon */}
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden border-2 border-purple-600 flex items-center justify-center bg-gray-200">
                            {adm.profileImage ? (
                                <img
                                    src={adm.profileImage}
                                    alt={adm.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <FaUser className="w-6 h-6 text-purple-600" />
                            )}
                        </div>

                        <h3 className="text-lg font-semibold mb-1">{adm.name}</h3>
                        <p className="text-gray-600 text-sm">Access: {adm.role}</p>
                        <button className="mt-3 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition text-sm">
                            Edit Permissions
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Admin Modal */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-20 backdrop-blur-xs z-50 px-4">

                    <form onSubmit={handleSubmit} className="bg-white/90 p-6 rounded-xl w-full max-w-md shadow-lg backdrop-blur-sm">
                        
                        <h3 className="text-2xl font-semibold mb-4 text-center">
                            Add New Admin
                        </h3>
                        
                        <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded mb-3"value={formData.name} onChange={handleChange} required/>

                        <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded mb-3" value={formData.email} onChange={handleChange} required />

                        <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded mb-3" value={formData.password} onChange={handleChange} required />

                        <select name="role" className="w-full border p-2 rounded mb-3" value={formData.role} onChange={handleChange}>
                            
                            <option value="SuperAdmin">Super Admin</option>
                            <option value="Admin">Admin</option>
                            <option value="General">General</option>
                            
                        </select>

                        <div className="flex justify-end gap-2 flex-wrap">

                            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
                            
                            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Save</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Success popup */}
            {popupMessage && (
                <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
                    {popupMessage}
                </div>
            )}

            {/* Tailwind animation */}
            <style>
                {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(20px); }
          }
          .animate-fade-in-out {
            animation: fadeInOut 2s ease-in-out forwards;
          }
        `}
            </style>
        </div>
    );
};

export default AdminControl;
