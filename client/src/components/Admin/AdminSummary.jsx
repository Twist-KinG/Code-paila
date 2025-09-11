import React from "react";
import { FaUsers, FaFileAlt, FaChartLine } from "react-icons/fa";

const AdminSummary = () => {
    const summaryFeatures = [
        {
            icon: FaUsers,
            title: "Total Users",
            description: "120",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: FaFileAlt,
            title: "Total Content",
            description: "75",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: FaChartLine,
            title: "Active Sessions",
            description: "32",
            color: "from-green-500 to-teal-500",
        },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Admin Summary</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {summaryFeatures.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transform hover:-translate-y-1 transition-all"
                    >
                        {/* Icon with gradient */}
                        <div
                            className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color}`}
                        >
                            <feature.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Title & description */}
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminSummary;
