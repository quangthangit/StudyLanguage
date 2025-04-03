import React from "react";

export default function StatsSection({ stats }) {
    return (
        <section className="w-full bg-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
                        <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}