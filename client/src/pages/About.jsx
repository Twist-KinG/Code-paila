import React from "react";
import Img from "../assets/img/bg.png";
import { CiHeart } from "react-icons/ci";

const About = () => {
  return (
    <section className="bg-white p-6">
      {/* Made with Love heading */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center px-4 py-1 m-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
          <CiHeart className="text-red-600 mr-1" size={18} />
          <span className="text-gray-700 text-sm font-medium">Made with Love in Nepal</span>
        </div>
      </div>

      {/* Yellow about heading box */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">About
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Code Paila</span>
        </h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae molestias
          laudantium ducimus tempora voluptate iste delectus laboriosam ipsum velit.
        </p>
      </div>

      {/* Container: Image + Description side by side */}
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img src={Img} alt="Code Paila Team" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Right: Description + Heading */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Where <span className="text-orange-500">Innovation</span> meets <span className="text-green-500">Traditions</span>
          </h2>
          <p className="text-gray-700">
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
