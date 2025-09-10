import React from "react";
import Img from "../assets/img/about.jpg";

const About = () => {
  return (
    <section className="bg-white py-6 px-16">
      {/* Heading section */}
      <div className="bg-amber-300 w-full h-20">

      </div>
      {/* Container about section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left: Image */}
        <div className="md:w-1/2">
          <img src={Img} alt="Code Paila Team" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Where <span className="text-orange-500">Innovation</span> meets <span className="text-green-500">Traditions</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Code Paila is an IT company dedicated to creating software, web development solutions, and complete IT services.
            We aim to connect the world through meaningful digital solutions while embracing the rich traditions of Nepal.
          </p>

          {/* Vision Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Our Vision</h3>
            <p className="text-gray-700">
              To establish Nepal as a global epicenter of technological innovation while creating meaningful digital solutions
              that make the whole world more connected, beautiful, and inspired.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
