// // import React from "react";

// // const AdminControl = () => {
// //     return (
// //         <div className="p-8">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Control</h2>
// //             <p className="text-gray-700">Super Admin can manage other admins here.</p>

// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 <div className="bg-white p-6 rounded-2xl shadow-md text-center">
// //                     <h3 className="text-xl font-semibold mb-2">Admin Name</h3>
// //                     <p className="text-gray-600 text-lg">Access: Career, Team</p>
// //                     <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
// //                         Edit Permissions
// //                     </button>
// //                 </div>
// //                 <div className="bg-white p-6 rounded-2xl shadow-md text-center">
// //                     <h3 className="text-xl font-semibold mb-2">Admin Name</h3>
// //                     <p className="text-gray-600 text-lg">Access: All Pages</p>
// //                     <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
// //                         Edit Permissions
// //                     </button>
// //                 </div>
// //                 {/* Add more admin cards dynamically later */}
// //             </div>
// //         </div>
// //     );
// // };

// // export default AdminControl;











// import React, { useState } from "react";

// const AdminControl = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "Admin",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch("/api/admins", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });
//             const data = await res.json();
//             alert(data.message || "Admin created successfully!");
//             setShowForm(false);
//         } catch (err) {
//             console.error(err);
//             alert("Error adding admin");
//         }
//     };

//     return (
//         <div className="p-8">
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-3xl font-bold text-gray-900">Admin Control</h2>
//                 <button
//                     onClick={() => setShowForm(true)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                     + Add Admin
//                 </button>
//             </div>

//             <p className="text-gray-700 mb-6">Super Admin can manage other admins here.</p>

//             {/* Admin Cards */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-2xl shadow-md text-center">
//                     <h3 className="text-xl font-semibold mb-2">Admin Name</h3>
//                     <p className="text-gray-600 text-lg">Access: Career, Team</p>
//                     <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                         Edit Permissions
//                     </button>
//                 </div>
//             </div>

//             {/* Add Admin Modal */}
//             {showForm && (
//                 <div className="fixed inset-0 bg-transparent flex items-center justify-center">
                    
//                     <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl w-96 shadow-lg">

//                         <h3 className="text-2xl font-semibold mb-4">Add New Admin</h3>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             className="w-full border p-2 rounded mb-3"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full border p-2 rounded mb-3"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full border p-2 rounded mb-3"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                         <select
//                             name="role"
//                             className="w-full border p-2 rounded mb-3"
//                             value={formData.role}
//                             onChange={handleChange}
//                         >
//                             <option value="SuperAdmin">Super Admin</option>
//                             <option value="Admin">Admin</option>
//                             <option value="General">General</option>
//                         </select>
//                         <div className="flex justify-end gap-2">
//                             <button
//                                 type="button"
//                                 onClick={() => setShowForm(false)}
//                                 className="px-4 py-2 bg-gray-400 text-white rounded-lg"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminControl;






import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

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

    // Fetch admins
    const fetchAdmins = async () => {
        if (!admin || !admin.token) return;

        try {
            const res = await fetch("http://localhost:5000/api/admin/list", {
                headers: {
                    Authorization: `Bearer ${admin.token}`,
                },
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

    // Form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit new admin
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

            alert(data.message || "Admin added successfully");
            setShowForm(false);
            fetchAdmins();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Admin Control</h2>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    + Add Admin
                </button>
            </div>

            <p className="text-gray-700 mb-6">
                Super Admin can manage other admins here.
            </p>

            {/* Admin Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {admins.map((adm) => (
                    <div
                        key={adm._id}
                        className="bg-white p-6 rounded-2xl shadow-md text-center"
                    >
                        <h3 className="text-xl font-semibold mb-2">{adm.name}</h3>
                        <p className="text-gray-600 text-lg">Access: {adm.role}</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Edit Permissions
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Admin Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-100 p-6 rounded-xl w-96 shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Add New Admin</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full border p-2 rounded mb-3"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border p-2 rounded mb-3"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full border p-2 rounded mb-3"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="role"
                            className="w-full border p-2 rounded mb-3"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="SuperAdmin">Super Admin</option>
                            <option value="Admin">Admin</option>
                            <option value="General">General</option>
                        </select>

                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AdminControl;
