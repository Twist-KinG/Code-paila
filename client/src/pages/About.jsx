import React from "react";
import Img from "../assets/img/bg.png";
import { FiGlobe, FiUsers, FiAward, FiZap, FiHeart } from "react-icons/fi";

const About = () => {
  const features = [
    {
      icon: FiGlobe,
      title: "Global Impact",
      description:
        "Serving clients across 15+ countries from our base in the heart of the Himalayas.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiUsers,
      title: "Dream Team",
      description:
        "Passionate developers, designers, and innovators united by a love for exceptional code.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiAward,
      title: "Excellence Driven",
      description:
        "Award-winning solutions with 99.9% client satisfaction and zero-compromise quality.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FiZap,
      title: "Lightning Fast",
      description:
        "Agile methodologies meet Himalayan efficiency for rapid, transparent delivery.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
 
    <section id="about" className="px-30 py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <FiHeart className="h-5 w-5 text-red-500" />
            <span className="text-gray-700 font-medium">Made with love in Nepal</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              CodePaila
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're not just building software – we're crafting digital experiences that bridge
            the mystical beauty of Nepal with the infinite possibilities of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
            <img
              src={Img}
              alt="Modern Office in Nepal"
              className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-900">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Innovation
              </span>{" "}
              Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                Tradition
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Born in the shadow of the mighty Himalayas, CodePaila represents a new generation
              of software artisans. We blend the timeless wisdom of our ancient culture with
              cutting-edge technology to create solutions that don't just work – they inspire.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission transcends code and pixels. We're here to showcase that extraordinary
              innovation knows no boundaries, and that the next breakthrough in technology might
              just come from the rooftop of the world.
            </p>

            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 p-8 rounded-3xl border border-blue-100">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To establish Nepal as a global epicenter of technological innovation, while creating
                meaningful digital solutions that make the world a little more connected,
                a little more beautiful, and a lot more inspired.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
