import React from 'react'
import { FiMapPin, FiChevronRight } from "react-icons/fi";

const Hero = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="flex justify-center items-center">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="flex items-center space-x-3 text-teal-600 bg-teal-50 px-4 py-2 rounded-full w-fit">
                            <FiMapPin className="h-5 w-5" />
                            <span className="font-medium">🇳🇵 Leading IT Solutions Provider</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Transform Your
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient-x">
                                Digital Future
                            </span>
                            <span className="block text-4xl lg:text-5xl mt-2 text-gray-700">
                                with Expert Solutions
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            We deliver cutting-edge software solutions that transform businesses. Our expert team combines technical excellence with innovative thinking to create solutions that drive growth and efficiency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center justify-center space-x-3 transform hover:-translate-y-1 hover:scale-105">
                                <span>Get Started</span>
                                <FiChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
                                <span className="group-hover:animate-pulse">View Services</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    100+
                                </div>
                                <div className="text-gray-600 font-medium">Projects Completed</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    95%
                                </div>
                                <div className="text-gray-600 font-medium">Client Satisfaction</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    50+
                                </div>
                                <div className="text-gray-600 font-medium">Expert Team</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-right">
                        {/* Professional IT Company Image */}
                        <div className="relative z-10">
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                                    alt="Modern IT Company Office"
                                    className="w-full h-[600px] rounded-3xl object-cover shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>

                                {/* Floating Cards */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-800">Live Projects: 12</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        {/* <Star className="h-4 w-4 text-yellow-500" /> */}
                                        <span className="text-sm font-medium text-gray-800">4.9 Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        {/* <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div> */}
                        {/* <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;