import React from "react";
import { motion } from "framer-motion"; // ✅ import motion
import { FaCode, FaServer, FaShieldAlt } from "react-icons/fa";

const PageWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-12">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] 
        from-blue-50 via-white to-purple-50 animate-gradient-slow pointer-events-none">
      </div>

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

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;
