import React from 'react';
import { FiSend, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
            <FiMessageCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700 font-medium">Let's Create Magic Together</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">Transform</span> Your Vision?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your next breakthrough is just a conversation away. Let's discuss how we can turn your digital dreams into stunning reality.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Let's Start Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Amazing</span>
          </h3>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="John"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Email Address</label>
              <input
                type="email"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Project Type</label>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Project Budget</label>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <option>Select budget range</option>
                  <option>Rs. 5,000 - Rs. 10,000</option>
                  <option>Rs. 10,000 - Rs. 25,000</option>
                  <option>Rs. 25,000 - Rs. 50,000</option>
                  <option>Rs. 50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Tell Us About Your Vision</label>
              <textarea
                rows={6}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                placeholder="Describe your project, goals, and how we can help bring your vision to life..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center justify-center space-x-3 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="group-hover:animate-pulse">Send Message & Start the Magic</span>
              <FiSend className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
