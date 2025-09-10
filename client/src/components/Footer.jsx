
import React from "react";
import { Link } from "react-router-dom";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import Logo from "../assets/LogoWord.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", path: "/services" },
    { name: "Mobile Apps", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    // { name: "Cloud Solutions", path: "/services" },
    { name: "Backend Development", path: "/services" },
    // { name: "DevOps Services", path: "/services" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    // { name: "Blog", path: "/blog" },
    // { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebook, color: "hover:bg-blue-600", label: "Facebook" },
    { icon: FaTwitter, color: "hover:bg-blue-400", label: "Twitter" },
    { icon: FaLinkedin, color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: FaGithub, color: "hover:bg-gray-700", label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-500/10 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={Logo}
                alt="CodePaila Logo"
                className="h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                CodePaila
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Crafting digital magic from the heart of the Himalayas. We don't
              just build software – we create experiences that inspire and
              transform.
            </p>

            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with ❤️</span>
              <span>in Nepal</span>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`group bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700/50`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 group-hover:animate-pulse" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {services.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
            </h3>
            <div className="space-y-6">
              <div className="group flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <HiLocationMarker className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Bharatpur, Chitwan
                  </p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Bagmati Province, Nepal
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <HiPhone className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +977-1-4441234
                </p>
              </div>

              <div className="group flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <HiMail className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  hello@CodePaila.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} CodePaila. Crafted with passion in the Himalayas.
              All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              {["Privacy Policy", "Terms of Service"].map(
                (link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
