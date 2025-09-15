import React from "react";
import {
  FaMobile,
  FaGlobe,
  FaMixcloud,
  FaDatabase,
  FaPalette,
  FaUserShield,
  FaReact,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  
  const navigate = useNavigate();

  const services = [
    {
      icon: FaGlobe,
      title: "Web Experiences",
      description:
        "Stunning web applications that captivate users and drive business growth.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
      color: "from-blue-500 to-cyan-500",
      delay: "0",
    },
    {
      icon: FaMobile,
      title: "Mobile Mastery",
      description:
        "Native and cross-platform apps that users love and can't put down.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-purple-500 to-pink-500",
      delay: "200",
    },
    {
      icon: FaMixcloud,
      title: "Cloud Architecture",
      description:
        "Scalable, secure cloud solutions that grow with your ambitions.",
      technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
      color: "from-green-500 to-teal-500",
      delay: "400",
    },
    {
      icon: FaDatabase,
      title: "Backend Brilliance",
      description: "Robust server architectures that power your digital dreams.",
      technologies: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
      color: "from-orange-500 to-red-500",
      delay: "600",
    },
    {
      icon: FaPalette,
      title: "Design Excellence",
      description:
        "Beautiful interfaces that tell your story and engage your audience.",
      technologies: ["Figma", "Adobe XD", "Framer", "Principle"],
      color: "from-pink-500 to-rose-500",
      delay: "800",
    },
    {
      icon: FaUserShield,
      title: "Security & Quality",
      description:
        "Fort Knox-level security with testing that ensures perfection.",
      technologies: ["Cypress", "Jest", "OAuth", "Penetration Testing"],
      color: "from-indigo-500 to-purple-500",
      delay: "1000",
    },
  ];

  return (
    <section id="services" className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden mt-5">

      <div className="max-w-screen mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">

            <FaReact className="h-5 w-5 text-purple-500" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              What We Create
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build software – we craft digital experiences that
            transform businesses and delight users. Every line of code is
            written with passion, every pixel placed with purpose.
          </p>
        </div>

        {/* Service Cards */}
        <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {services.map((service, index) => (
            <div role="listitem" key={index} className="group relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-3 hover:rotate-1 border border-white/50"
              style={{ animationDelay: `${service.delay}ms` }}>
              {/* Gradient Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}>
              </div>

              {/* Icon */}
              <div className="relative mb-6 sm:mb-8">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>

                {/* Floating Particle */}
                <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>

              {/* Title + Description */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-2">

                  <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>

                  <span>Technologies</span>
                </h4>

                <div className="flex flex-wrap gap-2">

                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-gradient-to-r ${service.color} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div onClick={() => navigate("/contact")} className="text-center mt-12 sm:mt-16">
          <button
            aria-label="Start a project with us"
            className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-md hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden">
            <span className="relative z-10" >
              Let's Create Something Amazing
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
