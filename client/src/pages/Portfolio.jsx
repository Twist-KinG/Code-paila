import React from "react";

const Portfolio = () => {

  const projects = [
    { name: "E-commerce Website", tech: "React, Node.js" },
    { name: "Mobile App", tech: "Flutter" },
    { name: "admin Dashboard", tech: "React.js, Node.js" },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
