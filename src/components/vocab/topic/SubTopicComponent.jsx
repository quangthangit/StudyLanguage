import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 transition-all duration-300 hover:text-blue-600 hover:scale-110"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export default function SubTopicComponent({ subtopic, index }) {
    const { id } = useParams();
    const topicId = useMemo(() => id, [id]); 
    return (
        <Link 
            to={`/vocab/topic/${topicId}/subcategory/${subtopic?._id}`} 
            className="flex items-center bg-blue-50 rounded-lg shadow-md p-4 mb-4 transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:scale-105"
        >
            <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-110">
                {index}
                <div className="absolute w-14 h-14 border-2 border-blue-800 rounded-full transition-all duration-300 hover:border-purple-600"></div>
            </div>
            <div className="flex-1 ml-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700">
                        {subtopic?.name?.english || "N/A"}
                    </h3>
                    <ArrowIcon />
                </div>
                <p className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-700">
                    {subtopic?.name?.vietnamese || "N/A"}
                </p>
            </div>
        </Link>
    );
}
