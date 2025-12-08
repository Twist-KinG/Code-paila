
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/portfolio");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("Backend returned unexpected:", data);
        }
      } catch (err) {
        console.error("Portfolio fetch error:", err);
      }
    };

    loadProjects();
  }, []);

  const getGradient = (p) =>
    `from-${p.color1 || "blue"}-500 to-${p.color2 || "purple"}-500`;

  return (
    <section
      id="portfolio"
      className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden mt-5"
    >
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">Our Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
              Portfolio
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Each project tells a story of innovation, dedication, and the relentless pursuit of excellence.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Color Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getGradient(
                    project
                  )} opacity-0 group-hover:opacity-80 transition-all duration-500`}
                ></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 space-x-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                    >
                      <FaExternalLinkAlt className="h-6 w-6" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                    >
                      <FaGithub className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {project.stats.users}
                      </div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-500 flex items-center justify-center space-x-1">
                        <FaStar className="h-4 w-4" />
                        <span>{project.stats.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 flex items-center justify-center space-x-1">
                        <HiTrendingUp className="h-4 w-4" />
                        <span>{project.stats.growth}</span>
                      </div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getGradient(
                  project
                )} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-20">
          <Link to="/portfolio">
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
              <span className="group-hover:animate-pulse">
                Explore All Projects
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
