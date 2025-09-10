import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaCoffee } from "react-icons/fa";
import { HiOutlineBadgeCheck, HiOutlineHeart } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";

const Team = () => {

    const navigate = useNavigate();
    const teamMembers = [
        {
            name: "Vrastachari Karki",
            role: "Manager",
            image: "./src/assets/img/rajesh.jpg",
            bio: "Great fan of Jonny Sins.Role Model.",
            skills: ["React 4hrs navbar", "Node.js", ".net", "C#", "Leadership","Back in Software Development"],
            achievements: "-20 Projects Led",
            color: "from-blue-500 to-cyan-500",
        },
         {
            name: "Dipesh T.Tamang",
            role: "Senior Backend Developer",
            image: "./src/assets/img/dipesh.jpeg",
            bio: "Transforming Nepal's tech landscape with 10+ years of architectural brilliance.",
            skills: ["React", "Node.js", ".net", "C#", "Leadership"],
            achievements: "20+ Projects Led",
            color: "from-blue-500 to-cyan-500",
        },
         {
            name: "Raj Shrestha",
            role: "Senior Frontend Developer",
            image: "./src/assets/img/razz.jpg",
            bio: "Transforming Nepal's tech landscape with 10+ years of architectural brilliance.",
            skills: ["React", "Node.js", ".net", "C#", "Leadership"],
            achievements: "20+ Projects Led",
            color: "from-blue-500 to-cyan-500",
        },
         {
            name: "Basant Lamichhane",
            role: "Intern",
            image: "./src/assets/img/basant.jpg",
            bio: "Transforming Nepal's tech landscape with 10+ years of architectural brilliance.",
            skills: ["React", "Node.js", ".net", "C#", "Leadership"],
            achievements: "20+ Projects Led",
            color: "from-blue-500 to-cyan-500",
        },
         {
            name: "Subash Dawadi",
            role: "Intern",
            image: "./src/assets/img/subas.jpg",
            bio: "Transforming Nepal's tech landscape with 10+ years of architectural brilliance.",
            skills: ["React", "Node.js", ".net", "C#", "Leadership"],
            achievements: "20+ Projects Led",
            color: "from-blue-500 to-cyan-500",
        },
         {
            name: "Kshitiz Bishwokarma",
            role: "Intern",
            image: "./src/assets/img/kshitiz.jpg",
            bio: "Transforming Nepal's tech landscape with 10+ years of architectural brilliance.",
            skills: ["React", "Node.js", ".net", "C#", "Leadership"],
            achievements: "20+ Projects Led",
            color: "from-blue-500 to-cyan-500",
        },
    ];

    return (
        <section
            id="team"
            className="py-24 relative overflow-hidden"
        >
            {/* Animated Background */}
            {/* <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-4000"></div>
            </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
                        <HiOutlineHeart className="h-5 w-5 text-red-500" />
                        <span className="text-gray-700 font-medium">The Dream Team</span>
                    </div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Meet Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                            Rockstars
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Behind every great project is an even greater team. Meet the passionate individuals who turn coffee into code and dreams into digital reality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-white/50"
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            ></div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Achievement Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                                    <HiOutlineBadgeCheck className="h-5 w-5 text-yellow-500" />
                                </div>

                                {/* Social Links */}
                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                                            title="LinkedIn"
                                        >
                                            <FaLinkedin className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                                            title="Twitter"
                                        >
                                            <FaTwitter className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                                            title="GitHub"
                                        >
                                            <FaGithub className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                        {member.name}
                                    </h3>
                                    <FaCoffee className="h-5 w-5 text-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <p
                                    className={`text-transparent bg-clip-text bg-gradient-to-r ${member.color} font-bold mb-4`}
                                >
                                    {member.role}
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                    {member.bio}
                                </p>

                                {/* Achievement */}
                                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-xl mb-6">
                                    <div className="flex items-center space-x-2">
                                        <HiOutlineBadgeCheck className="h-4 w-4 text-yellow-600" />
                                        <span className="text-yellow-800 font-semibold text-sm">
                                            {member.achievements}
                                        </span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`bg-gradient-to-r ${member.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Particles */}
                            <div className="absolute top-6 left-6 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                            <div className="absolute bottom-20 right-6 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
                        <span className="text-gray-700 font-medium">Want to join our amazing team?</span>
                        <button onClick={() => navigate("/careers")} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            We're Hiring!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
