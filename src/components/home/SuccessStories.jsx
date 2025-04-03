import React from "react";

export default function SuccessStories({ stories }) {
    return (
        <section className="w-full bg-blue-600 py-12">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-2xl font-bold text-white">Success Stories</h2>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start p-6 bg-blue-500 rounded-lg shadow-md text-white"
                    >
                        {/* Avatar */}
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full text-lg font-bold">
                                {story.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold">{story.name}</h3>
                                <p className="text-sm">{story.score}</p>
                            </div>
                        </div>
                        {/* Feedback */}
                        <p className="text-sm mb-4">{story.feedback}</p>
                        {/* Stars */}
                        <div className="flex">
                            {Array.from({ length: story.stars }).map((_, starIndex) => (
                                <svg
                                    key={starIndex}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-yellow-400"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}