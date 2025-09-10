import React from "react";

const Services = () => {
  const services = [
    "Web Development",
    "Mobile App Development",
    "IT Solutions",
    "UI/UX Design",
    "IT Consulting",
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
