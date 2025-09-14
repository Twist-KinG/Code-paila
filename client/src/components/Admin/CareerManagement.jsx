
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const CareerManagement = () => {
  const { admin } = useContext(AuthContext);
  const [careers, setCareers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Full-Time",
    description: "",
    status: "Closed",
    isPublic: false, // new field
  });
  const [editId, setEditId] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  // Fetch careers
  const fetchCareers = async () => {
    if (!admin || !admin.token) return;
    try {
      const res = await fetch("http://localhost:5000/api/admin/career", {
        headers: { Authorization: `Bearer ${admin.token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch careers");
      setCareers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, [admin]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin || !admin.token) return;

    try {
      const url = editId
        ? `http://localhost:5000/api/admin/career/${editId}`
        : "http://localhost:5000/api/admin/career";
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");

      setPopupMessage(data.message);
      setTimeout(() => setPopupMessage(""), 2000);

      setShowForm(false);
      setEditId(null);
      setFormData({
        title: "",
        location: "",
        type: "Full-Time",
        description: "",
        status: "Closed",
        isPublic: false,
      });
      fetchCareers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (career) => {
    setEditId(career._id);
    setFormData({
      title: career.title,
      location: career.location,
      type: career.type,
      description: career.description,
      status: career.status,
      isPublic: career.isPublic || false,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this career?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/career/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${admin.token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setPopupMessage(data.message);
      setTimeout(() => setPopupMessage(""), 2000);
      fetchCareers();
    } catch (err) {
      console.error(err);
    }
  };

  const togglePublic = async (career) => {
    if (!admin || !admin.token) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/career/${career._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: JSON.stringify({ isPublic: !career.isPublic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setPopupMessage(data.message);
      setTimeout(() => setPopupMessage(""), 2000);
      fetchCareers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Career Management</h2>
        
        <button onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">+ Add Career</button>
      </div>

      {/* Career Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career) => (
          
          <div key={career._id}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
            <p className="text-gray-500 mb-2">{career.location}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold mb-4">
              {career.type}
            </span>
            <p className="text-gray-600 mb-4">{career.description}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full font-semibold mb-4 ${career.status === "Closed"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
                }`}>
              {career.status}
            </span>

            <div className="flex justify-center gap-2 flex-wrap">
              <button
                onClick={() => togglePublic(career)}
                className={`px-4 py-1 rounded ${career.isPublic ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                  }`}>
                {career.isPublic ? "Public" : "Private"}
              </button>

              <button onClick={() => handleEdit(career)}
                className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500">Edit</button>
              
              <button onClick={() => handleDelete(career._id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Delete</button>
              
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {editId ? "Edit Career" : "Add Career"}
            </h3>

            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="w-full border p-2 rounded mb-3"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="w-full border p-2 rounded mb-3"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <label className="block font-semibold mb-1">Type</label>
            <select
              name="type"
              className="w-full border p-2 rounded mb-3"
              value={formData.type}
              onChange={handleChange}>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Placement">Placement</option>
            </select>

            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Job Description"
              className="w-full border p-2 rounded mb-3"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <label className="block font-semibold mb-1">Status</label>
            <select
              name="status"
              className="w-full border p-2 rounded mb-3"
              value={formData.status}
              onChange={handleChange}>
              
              <option value="Closed">Closed</option>
              <option value="Apply Now">Apply Now</option>
            </select>

            <div className="flex justify-end gap-2 flex-wrap">
              <button type="button" onClick={() => { setShowForm(false); setEditId(null);}}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                {editId ? "Update" : "Add"}
              </button>
              
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

export default CareerManagement;
