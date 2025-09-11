import React from "react";
import { FaMobile, FaGlobe, FaMixcloud, FaDatabase, FaPalette, FaUserShield, FaReact } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const Services = () => {
  const service = [
    {
      icon: FaGlobe,
      title: 'Web Experiences',
      description: 'Stunning web applications that captivate users and drive business growth.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      color: 'from-blue-500 to-cyan-500',
      delay: '0'
    },
    {
      icon: FaMobile,
      title: 'Mobile Mastery',
      description: 'Native and cross-platform apps that users love and can\'t put down.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-purple-500 to-pink-500',
      delay: '200'
    },
    {
      icon: FaMixcloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure cloud solutions that grow with your ambitions.',
      technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
      color: 'from-green-500 to-teal-500',
      delay: '400'
    },
    {
      icon: FaDatabase,
      title: 'Backend Brilliance',
      description: 'Robust server architectures that power your digital dreams.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
      color: 'from-orange-500 to-red-500',
      delay: '600'
    },
    {
      icon: FaPalette,
      title: 'Design Excellence',
      description: 'Beautiful interfaces that tell your story and engage your audience.',
      technologies: ['Figma', 'Adobe XD', 'Framer', 'Principle'],
      color: 'from-pink-500 to-rose-500',
      delay: '800'
    },
    {
      icon: FaUserShield,
      title: 'Security & Quality',
      description: 'Fort Knox-level security with testing that ensures perfection.',
      technologies: ['Cypress', 'Jest', 'OAuth', 'Penetration Testing'],
      color: 'from-indigo-500 to-purple-500',
      delay: '1000'
    }
  ];


  return (
   <section className="px-30 py-24 bg-white relative overflow-hidden">

      <div className="max-w-500 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
            <FaReact className="h-5 w-5 text-purple-500" />
            <span className="text-gray-700 font-medium">What We Create</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just build software – we craft digital experiences that transform businesses 
            and delight users. Every line of code is written with passion, every pixel placed with purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service, index) => (
            <div
              key={index}
              className="group h-100 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-white/50"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating Icon */}
              <div className="relative mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider flex items-center space-x-2">
                  <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                  <span>Technologies</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
            <span className="group-hover:animate-pulse">Let's Create Something Amazing</span>
          </button>
        </div>
      </div>
    </section>  
  );
};

export default Services;
