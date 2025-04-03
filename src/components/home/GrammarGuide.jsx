import React from "react";

export default function GrammarGuide({ guides }) {
    return (
        <section className="w-full bg-white py-12">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Grammar Guide</h2>
                <p className="text-gray-600 mt-2">
                    Master English grammar with our comprehensive lessons and interactive exercises.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guides.map((guide, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-blue-600"
                            >
                                <path fillRule="evenodd" d={guide.icon} clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{guide.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{guide.description}</p>
                        <a
                            href={guide.link}
                            className="text-blue-600 text-sm font-medium mt-4 flex items-center hover:underline"
                        >
                            Learn More <span className="ml-1">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}