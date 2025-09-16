import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 bg-gray-50 mt-5">
      <div className="max-w-4xl mx-auto">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-2xl mb-8"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <FaUser className="text-gray-900" />
          <span>{blog.author || "Unknown Author"}</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{blog.summary}</p>
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
