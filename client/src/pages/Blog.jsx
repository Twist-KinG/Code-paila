import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const handleNavigate = (blog) => {
    navigate(`/blogs/${blog._id}`, { state: { blog } });
  };

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden mt-5">
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto text-center mb-14">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
          <FaUser className="h-5 w-5 text-yellow-500" />
          <span className="text-gray-700 font-medium">Our Blogs</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
            Blogs
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Explore our expert advice and stories from the field of innovation, technology, and business.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            onClick={() => handleNavigate(blog)}
            className="cursor-pointer group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Blog Image */}
            {blog.image && (
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </div>
            )}

            {/* Blog Content */}
            <div className="p-6 relative z-10">
              <div className="flex items-center gap-3 text-sm text-gray-900 mb-3">
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                {blog.tags?.length > 0 && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{blog.tags[0]}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-900 mb-4">{blog.summary}</p>
              <div className="flex items-center gap-3">
                <FaUser className="text-gray-900" />
                <p className="font-medium text-gray-900">{blog.author || "Unknown Author"}</p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center mt-20">
        <Link to="/blogs">
          <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
            <span className="group-hover:animate-pulse">Explore All Blogs</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
