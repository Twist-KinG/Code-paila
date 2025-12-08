import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const PortfolioManagement = () => {
  const { admin } = useContext(AuthContext);

  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    technologies: "",
    color: "",
    liveLink: "",
    githubLink: "",
    stats_users: "",
    stats_rating: "",
    stats_growth: "",
    status: "Published",
    isPublic: true,
  });

  const [editId, setEditId] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  // Fetch Projects
  const fetchProjects = async () => {
    if (!admin || !admin.token) return;
    try {
      const res = await fetch("http://localhost:5000/api/admin/portfolio", {
        headers: { Authorization: `Bearer ${admin.token}` },
      });
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [admin]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit Add/Edit Project
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin || !admin.token) return;

    const payload = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      category: formData.category,
      color: formData.color,
      liveLink: formData.liveLink,
      githubLink: formData.githubLink,
      technologies: formData.technologies.split(",").map((t) => t.trim()),
      stats: {
        users: formData.stats_users,
        rating: formData.stats_rating,
        growth: formData.stats_growth,
      },
      status: formData.status,
      isPublic: formData.isPublic,
    };

    try {
      const url = editId
        ? `http://localhost:5000/api/admin/portfolio/${editId}`
        : "http://localhost:5000/api/admin/portfolio";

      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setPopupMessage(editId ? "Project updated successfully" : "Project added successfully");
      setTimeout(() => setPopupMessage(""), 2000);

      setShowForm(false);
      setEditId(null);

      // Reset form
      setFormData({
        title: "",
        description: "",
        image: "",
        category: "",
        technologies: "",
        color: "",
        liveLink: "",
        githubLink: "",
        stats_users: "",
        stats_rating: "",
        stats_growth: "",
        status: "Published",
        isPublic: true,
      });

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit project
  const handleEdit = (project) => {
    setEditId(project._id);

    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
      color: project.color,
      liveLink: project.liveLink,
      githubLink: project.githubLink,
      technologies: project.technologies.join(", "),
      stats_users: project.stats?.users || "",
      stats_rating: project.stats?.rating || "",
      stats_growth: project.stats?.growth || "",
      status: project.status,
      isPublic: project.isPublic,
    });

    setShowForm(true);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/portfolio/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${admin.token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setPopupMessage("Project deleted");
      setTimeout(() => setPopupMessage(""), 2000);

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle Public/Private
  const togglePublic = async (project) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/portfolio/${project._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.token}`,
          },
          body: JSON.stringify({ isPublic: !project.isPublic }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setPopupMessage(
        project.isPublic ? "Project set to private" : "Project set to public"
      );
      setTimeout(() => setPopupMessage(""), 2000);

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 relative">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Portfolio Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>

              <span
                className={`inline-block px-3 py-1 rounded-full font-semibold mb-4 ${project.status === "Published"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                  }`}
              >
                {project.status}
              </span>

              <div className="flex justify-center gap-2 flex-wrap">
                <button
                  onClick={() => togglePublic(project)}
                  className={`px-4 py-1 rounded ${project.isPublic ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                    }`}
                >
                  {project.isPublic ? "Public" : "Private"}
                </button>

                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {editId ? "Edit Project" : "Add Project"}
            </h3>

            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              className="w-full border p-2 rounded mb-3"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="w-full border p-2 rounded mb-3"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              className="w-full border p-2 rounded mb-3"
              value={formData.image}
              onChange={handleChange}
            />

            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              className="w-full border p-2 rounded mb-3"
              value={formData.category}
              onChange={handleChange}
            />

            <label className="block font-semibold mb-1">Technologies (comma separated)</label>
            <input
              type="text"
              name="technologies"
              className="w-full border p-2 rounded mb-3"
              value={formData.technologies}
              onChange={handleChange}
            />

            <label className="block font-semibold mb-1">Gradient Color (e.g. from-blue-500 to-cyan-500)</label>
            <input
              type="text"
              name="color"
              className="w-full border p-2 rounded mb-3"
              value={formData.color}
              onChange={handleChange}
            />

            <label className="block font-semibold mb-1">Live Link</label>
            <input
              type="text"
              name="liveLink"
              className="w-full border p-2 rounded mb-3"
              value={formData.liveLink}
              onChange={handleChange}
            />

            <label className="block font-semibold mb-1">GitHub Link</label>
            <input
              type="text"
              name="githubLink"
              className="w-full border p-2 rounded mb-3"
              value={formData.githubLink}
              onChange={handleChange}
            />

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block font-semibold mb-1">Users</label>
                <input
                  type="text"
                  name="stats_users"
                  className="w-full border p-2 rounded mb-3"
                  value={formData.stats_users}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Rating</label>
                <input
                  type="text"
                  name="stats_rating"
                  className="w-full border p-2 rounded mb-3"
                  value={formData.stats_rating}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Growth</label>
                <input
                  type="text"
                  name="stats_growth"
                  className="w-full border p-2 rounded mb-3"
                  value={formData.stats_growth}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="block font-semibold mb-1">Status</label>
            <select
              name="status"
              className="w-full border p-2 rounded mb-3"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>

            <div className="flex justify-end gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                }}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Popup */}
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

export default PortfolioManagement;
