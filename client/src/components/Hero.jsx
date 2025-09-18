import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaShieldAlt, FaStar, } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

// Import your hero image properly
import heroImage from "../assets/img/grp.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="px-6 lg:px-30 py-24 bg-white relative overflow-hidden mt-15"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
        from-blue-50 via-white to-purple-50 animate-gradient-slow pointer-events-none"
      ></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-1/3"
        >
          <FaCode className="h-7 w-7 text-blue-400/50" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/2 right-1/4"
        >
          <FaServer className="h-6 w-6 text-purple-400/50" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4"
        >
          <FaShieldAlt className="h-6 w-6 text-teal-400/50" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen flex justify-center items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <div className="flex items-center space-x-3 text-teal-600 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-md">
              <FaMapMarkerAlt className="h-5 w-5" />
              <span className="font-medium">🇳🇵 Leading IT Solutions Provider</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Transform Your
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient-x">
                Digital Future
              </span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="block text-3xl lg:text-5xl mt-3 text-gray-700"
              >
                with Expert Solutions 🚀
              </motion.span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
              We craft cutting-edge software solutions tailored to your vision.
              From web to mobile, cloud to AI — our team builds the future with you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Get Started */}
              <motion.button
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => navigate("/contact")}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 
                text-white px-8 py-4 rounded-full font-semibold shadow-lg 
                hover:shadow-2xl transition-all flex items-center justify-center space-x-3"
              >
                <span>Get Started</span>
                <FaArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              {/* View Services */}
              <motion.button
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => navigate("/services")}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full 
                font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 
                hover:text-white transition-all hover:shadow-xl"
              >
                <span className="transition-colors">View Services</span>
              </motion.button>
            </div>

            {/* Stats */}
            <dl className="grid grid-cols-3 gap-6 pt-10">
              {[
                { value: "100+", label: "Projects" },
                { value: "95%", label: "Satisfaction" },
                { value: "50+", label: "Experts" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="text-center bg-white/60 backdrop-blur-lg p-4 rounded-2xl shadow-md"
                >
                  <dt className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </dt>
                  <dd className="text-gray-600 font-medium">{stat.label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Right Content */}
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative">
            
            <div className="relative group">
              <img src={heroImage} alt="Hero section illustration of IT team" className="relative rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2 w-full object-cover"/>

              {/* Floating Cards */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg flex items-center space-x-2 border border-gradient-to-r from-blue-400 to-purple-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            
                <span className="text-sm font-medium text-gray-800">
                  Live Projects: 12
                </span>
            
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg flex items-center space-x-2 border border-gradient-to-r from-yellow-400 to-orange-500" >
                <FaStar className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-800">
                  4.9 Rating
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
