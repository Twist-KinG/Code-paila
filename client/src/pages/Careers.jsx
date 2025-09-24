import React, { useEffect, useState } from "react";

const Careers = () => {
    const [jobOpenings, setJobOpenings] = useState([]);

    // Fetch public careers from backend
    const fetchCareers = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/careers"); // public route
            const data = await res.json();
            setJobOpenings(data);
        } catch (err) {
            console.error("Failed to fetch careers:", err);
        }
    };

    useEffect(() => {
        fetchCareers();
    }, []);

    return (
        <section className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden mt-5">
            <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
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
                    {jobOpenings.length === 0 ? (
                        <p className="text-center col-span-full text-gray-500">
                            No open positions at the moment.
                        </p>

                    ) : (
                            
                            jobOpenings.map((job) => (
                            
                                <div key={job._id} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                                
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {job.title}</h3>
                                
                                    <p className="text-gray-500 mb-2">{job.location}</p>
                                
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold mb-4">
                                    {job.type}</span>
                                
                                    <p className="text-gray-600 mb-6">{job.description}</p>
                                    
                                <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${job.status === "Closed"
                                            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                                            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                                        }`}

                                        disabled={job.status === "Closed"} >
                                        
                                        {job.status}
                                        
                                    </button>
                                    
                            </div>
                        ))
                    )}
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
                        Closed for now
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Careers;
