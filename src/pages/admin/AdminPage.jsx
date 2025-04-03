import React from "react";

export default function AdminPage() {
    return (
        <div className="container mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Form Elements</h1>
                <nav className="text-gray-600">
                    <a href="#" className="hover:text-blue-600">Home</a> / <span>Form Elements</span>
                </nav>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Default Inputs</h2>
                    <form className="space-y-4">
                        {/* Input Fields */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Input</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Input with Placeholder</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                placeholder="info@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Input</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>Select Option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password Input</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date Picker Input</label>
                            <input
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time Select Input</label>
                            <input
                                type="time"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Input with Payment</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Card number"
                            />
                        </div>
                    </form>
                </div>

                {/* Right Column */}
                {/* <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Input Group</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="flex items-center border border-gray-300 rounded">
                                <span className="px-3 text-gray-500">@</span>
                                <input
                                    type="email"
                                    className="w-full p-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="info@gmail.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <div className="flex items-center border border-gray-300 rounded">
                                <select className="px-3 bg-gray-100 border-r border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                                    <option>US</option>
                                    <option>VN</option>
                                </select>
                                <input
                                    type="tel"
                                    className="w-full p-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                            <input
                                type="url"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                placeholder="http://www.example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">File Input</label>
                            <input
                                type="file"
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    );
}