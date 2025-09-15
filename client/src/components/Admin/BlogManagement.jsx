import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { FaUser } from "react-icons/fa";

const BlogManagement = () => {
  const { admin } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
    tags: "",
    status: "Published",
    isPublic: true,
  });
  const [editId, setEditId] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  // Fetch blogs
  const fetchBlogs = async () => {
    if (!admin || !admin.token) return;
    try {
      const res = await fetch("http://localhost:5000/api/admin/blog", {
        headers: { Authorization: `Bearer ${admin.token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch blogs");
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [admin]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin || !admin.token) return;

    try {
      const url = editId
        ? `http://localhost:5000/api/admin/blog/${editId}`
        : "http://localhost:5000/api/admin/admin";
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: JSON.stringify({ ...formData, tags: formData.tags.split(",").map(t => t.trim()) }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");

      setPopupMessage(editId ? "Blog updated successfully" : "Blog added successfully");
      setTimeout(() => setPopupMessage(""), 2000);

      setShowForm(false);
      setEditId(null);
      setFormData({
        title: "",
        summary: "",
        content: "",
        image: "",
        tags: "",
        status: "Published",
        isPublic: true,
      });
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setFormData({
      title: blog.title,
      summary: blog.summary,
      content: blog.content,
      image: blog.image,
      tags: blog.tags.join(", "),
      status: blog.status,
      isPublic: blog.isPublic || true,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/blog/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${admin.token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setPopupMessage(data.message);
      setTimeout(() => setPopupMessage(""), 2000);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const togglePublic = async (blog) => {
    if (!admin || !admin.token) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/blog/${blog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: JSON.stringify({ isPublic: !blog.isPublic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setPopupMessage(blog.isPublic ? "Blog set to private" : "Blog set to public");
      setTimeout(() => setPopupMessage(""), 2000);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Blog Management</h2>
        <button onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Blog
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-2">{blog.summary}</p>
              <span className={`inline-block px-3 py-1 rounded-full font-semibold mb-4 ${blog.status === "Published" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                {blog.status}
              </span>
              <div className="flex justify-center gap-2 flex-wrap">
                <button
                  onClick={() => togglePublic(blog)}
                  className={`px-4 py-1 rounded ${blog.isPublic ? "bg-green-500 text-white" : "bg-gray-400 text-white"}`}>
                  {blog.isPublic ? "Public" : "Private"}
                </button>
                <button onClick={() => handleEdit(blog)}
                  className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500">Edit</button>
                <button onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{editId ? "Edit Blog" : "Add Blog"}</h3>

            <label className="block font-semibold mb-1">Title</label>
            <input type="text" name="title" placeholder="Title" className="w-full border p-2 rounded mb-3"
              value={formData.title} onChange={handleChange} required />

            <label className="block font-semibold mb-1">Summary</label>
            <input type="text" name="summary" placeholder="Summary" className="w-full border p-2 rounded mb-3"
              value={formData.summary} onChange={handleChange} />

            <label className="block font-semibold mb-1">Content</label>
            <textarea name="content" placeholder="Content" className="w-full border p-2 rounded mb-3"
              value={formData.content} onChange={handleChange} required />

            <label className="block font-semibold mb-1">Image URL</label>
            <input type="text" name="image" placeholder="Image URL" className="w-full border p-2 rounded mb-3"
              value={formData.image} onChange={handleChange} />

            <label className="block font-semibold mb-1">Tags</label>
            <input type="text" name="tags" placeholder="Tags, comma separated" className="w-full border p-2 rounded mb-3"
              value={formData.tags} onChange={handleChange} />

            <label className="block font-semibold mb-1">Status</label>
            <select name="status" className="w-full border p-2 rounded mb-3" value={formData.status} onChange={handleChange}>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>

            <div className="flex justify-end gap-2 flex-wrap">
              <button type="button" onClick={() => { setShowForm(false); setEditId(null); }}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
              <button type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
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

export default BlogManagement;
