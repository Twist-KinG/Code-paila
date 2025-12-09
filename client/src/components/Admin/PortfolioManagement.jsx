
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const tailwindColors = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald",
  "teal", "cyan", "sky", "blue", "indigo", "violet", "purple",
  "fuchsia", "pink", "rose"
];

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
    color1: "blue",
    color2: "purple",
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

  // Fetch projects
  const fetchProjects = async () => {
    if (!admin?.token) return;

    try {
      const res = await fetch("https://code-paila-official.vercel.app/api/admin/portfolio", {
        headers: { Authorization: `Bearer ${admin.token}` },
      });

      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [admin]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin?.token) return;

    const payload = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      category: formData.category,
      color1: formData.color1,
      color2: formData.color2,
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
        ? `https://code-paila-official.vercel.app/api/admin/portfolio/${editId}`
        : "https://code-paila-official.vercel.app/api/admin/portfolio";

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

      setPopupMessage(editId ? "Project updated" : "Project added");
      setTimeout(() => setPopupMessage(""), 2000);

      setShowForm(false);
      setEditId(null);

      setFormData({
        title: "",
        description: "",
        image: "",
        category: "",
        technologies: "",
        color1: "blue",
        color2: "purple",
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

  // Edit
  const handleEdit = (project) => {
    setEditId(project._id);

    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
      technologies: project.technologies.join(", "),
      color1: project.color1,
      color2: project.color2,
      liveLink: project.liveLink,
      githubLink: project.githubLink,
      stats_users: project.stats?.users || "",
      stats_rating: project.stats?.rating || "",
      stats_growth: project.stats?.growth || "",
      status: project.status,
      isPublic: project.isPublic,
    });

    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await fetch(`https://code-paila-official.vercel.app/api/admin/portfolio/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${admin.token}` },
      });

      setPopupMessage("Project deleted");
      setTimeout(() => setPopupMessage(""), 2000);

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const togglePublic = async (project) => {
    try {
      await fetch(`https://code-paila-official.vercel.app/api/admin/portfolio/${project._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: JSON.stringify({ isPublic: !project.isPublic }),
      });

      setPopupMessage(project.isPublic ? "Set to Private" : "Set to Public");
      setTimeout(() => setPopupMessage(""), 2000);

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 relative">

      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold">Portfolio Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Project
        </button>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={p.image} className="w-full h-64 object-cover" />

            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>

              <div className="flex gap-2 mt-3">
                <button onClick={() => togglePublic(p)} className="px-3 py-1 bg-gray-700 text-white rounded">
                  {p.isPublic ? "Public" : "Private"}
                </button>

                <button onClick={() => handleEdit(p)} className="px-3 py-1 bg-yellow-500 text-white rounded">
                  Edit
                </button>

                <button onClick={() => handleDelete(p._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADD/EDIT FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              {editId ? "Edit Project" : "Add Project"}
            </h3>

            {/* Title */}
            <label className="font-semibold">Title</label>
            <input className="w-full border p-2 rounded mb-2"
              name="title" value={formData.title} onChange={handleChange} />

            {/* Description */}
            <label className="font-semibold">Description</label>
            <textarea className="w-full border p-2 rounded mb-2"
              name="description" value={formData.description} onChange={handleChange} />

            {/* Image */}
            <label className="font-semibold">Image</label>
            <input className="w-full border p-2 rounded mb-2"
              name="image" value={formData.image} onChange={handleChange} />

            {/* Category */}
            <label className="font-semibold">Category</label>
            <input className="w-full border p-2 rounded mb-2"
              name="category" value={formData.category} onChange={handleChange} />

            {/* Technologies */}
            <label className="font-semibold">Technologies (comma separated)</label>
            <input className="w-full border p-2 rounded mb-2"
              name="technologies" value={formData.technologies} onChange={handleChange} />

            {/* ⭐ Added Live Link + GitHub Link fields here */}
            <label className="font-semibold">Live Link</label>
            <input
              className="w-full border p-2 rounded mb-2"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://yourproject.com"
            />

            <label className="font-semibold">GitHub Link</label>
            <input
              className="w-full border p-2 rounded mb-2"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              placeholder="https://github.com/yourrepo"
            />

            {/* Gradient Colors */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label>Gradient Color 1</label>
                <select name="color1" className="w-full border p-2 rounded"
                  value={formData.color1} onChange={handleChange}>
                  {tailwindColors.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label>Gradient Color 2</label>
                <select name="color2" className="w-full border p-2 rounded"
                  value={formData.color2} onChange={handleChange}>
                  {tailwindColors.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <input name="stats_users" placeholder="Users" className="border p-2 rounded"
                value={formData.stats_users} onChange={handleChange} />

              <input name="stats_rating" placeholder="Rating" className="border p-2 rounded"
                value={formData.stats_rating} onChange={handleChange} />

              <input name="stats_growth" placeholder="Growth" className="border p-2 rounded"
                value={formData.stats_growth} onChange={handleChange} />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowForm(false)}>Cancel</button>

              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Popup */}
      {popupMessage && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default PortfolioManagement;
