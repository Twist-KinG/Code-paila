import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaArrowLeft } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(location.state?.blog || null);
  const [loading, setLoading] = useState(!blog);

  useEffect(() => {
    if (!blog) {
      const fetchBlog = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
          const data = await res.json();
          setBlog(data);
        } catch (err) {
          console.error("Failed to fetch blog:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    } else {
      setLoading(false);
    }
  }, [id, blog]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gray-50 mt-5">
      {/* Mobile Back Button */}
      <div className="sm:hidden mb-6">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-2 text-blue-600 font-medium">
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto text-center mb-14">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
          <FaUser className="h-5 w-5 text-yellow-500" />
          <span className="text-gray-700 font-medium">{blog.title}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
            Blog Details
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dive into the full story, insights, and expertise behind this blog post.
        </p>
      </div>

      {/* Blog Content */}
      <div className="max-w-screen-xl mx-auto">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 sm:h-96 object-cover rounded-2xl mb-8"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-gray-600 mb-6">

          <div className="flex items-center gap-2">
            <FaUser className="text-gray-900" />
            <span>{blog.author || "Unknown Author"}</span>
          </div>

          <div>{new Date(blog.createdAt).toLocaleDateString()}</div>

        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">{blog.summary}</p>

        {blog.content && (
          <div className="mt-6 text-gray-800 prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

        )}

      </div>

    </section>

  );
};

export default BlogDetail;
