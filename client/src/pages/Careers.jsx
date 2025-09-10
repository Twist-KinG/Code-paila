import React from "react";

const Careers = () => {
    const jobOpenings = [
        {
            title: "Frontend Developer",
            location: "Remote / Nepal",
            type: "Full-Time",
            description:
                "We are looking for a skilled Frontend Developer to build stunning UIs using React, Tailwind, and modern web technologies.",
        },
        {
            title: "Backend Developer",
            location: "Remote / Nepal",
            type: "Full-Time",
            description:
                "Join our backend team to design APIs, manage databases, and build scalable server-side solutions.",
        },
        {
            title: "UI/UX Designer",
            location: "Remote / Nepal",
            type: "Part-Time",
            description:
                "We are seeking a creative designer to craft intuitive and beautiful user interfaces.",
        },
        {
            title: "Intern - Web Development",
            location: "Remote / Nepal",
            type: "Internship",
            description:
                "An opportunity for freshers or students to gain hands-on experience in web development.",
        },
        {
            title: "Documentation Writer",
            location: "On-Site / Nepal",
            type: "Internship",
            description:
                "An opportunity for freshers or students to gain hands-on experience in documentation.",
        },
    ];

    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        We're building the future of software development in Nepal and globally.
                        Check out our open positions and become a part of our amazing team.
                    </p>
                </div>

                {/* Job Openings */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {jobOpenings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                {job.title}
                            </h3>
                            <p className="text-gray-500 mb-2">{job.location}</p>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold mb-4">
                                {job.type}
                            </span>
                            <p className="text-gray-600 mb-6">{job.description}</p>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                {/* Apply Now */} Closed Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-24">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Can't find your role?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        We’re always looking for talented individuals. Send us your resume and we might reach out!
                    </p>
                    <button className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        {/* Submit Your Resume */} Closed for now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Careers;
