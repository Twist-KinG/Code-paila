import React from 'react';
import { FiSend, FiMessageCircle, FiMapPin, FiPhone, FiMail, FiClock, FiZap, FiGlobe } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMapPin,
    title: 'Our Head Office',
    details: ['Bharatpur, Chitwan 44600', 'Bagmati Province, Nepal 🇳🇵'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiPhone,
    title: 'Let\'s Talk',
    details: ['+977-9761734597',],
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: FiMail,
    title: 'Drop Us a Line',
    details: ['infocodepaila@gmail.com'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FiClock,
    title: 'We\'re Available',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Nepal Standard Time (GMT+5:45)'],
    color: 'from-orange-500 to-red-500'
  }
];

const reasons = [
  {
    icon: FiZap,
    text: 'Lightning-fast delivery with Himalayan efficiency',
    color: 'text-yellow-600'
  },
  {
    icon: FiGlobe,
    text: 'Global standards with local heart and soul',
    color: 'text-blue-600'
  },
  {
    icon: FiMessageCircle,
    text: 'Crystal-clear communication in perfect English',
    color: 'text-green-600'
  },
  {
    icon: FiClock,
    text: 'Perfect timezone overlap for seamless collaboration',
    color: 'text-purple-600'
  }
];

const Contact = () => {
  return (

    <section id="contact" className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden mt-5">
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
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="max-w-xl mx-auto relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="space-y-8">
              <div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <info.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <h4 className="font-bold text-gray-900 mb-6 text-xl">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CodePaila</span>?
                </h4>
                <ul className="space-y-4">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-center space-x-3 group">
                      <reason.icon className={`h-5 w-5 ${reason.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{reason.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="max-w-xl mx-auto relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
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
      </div>
    </section>

  );
};

export default Contact;
