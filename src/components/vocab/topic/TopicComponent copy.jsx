import { Link } from "react-router-dom";

export default function TopicComponent({ topic }) {
    return (
        <div
            className="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-xl font-bold text-green-600">
                            {topic.name.english.charAt(0).toUpperCase()}
                        </span>
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">{topic.name.english}</h3>
                    <p className="text-sm text-gray-500">{topic.name.vietnamese}</p>
                </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{topic.description.english}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 text-blue-500 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m0 0L6 12m6 6l6-6"
                            />
                        </svg>
                        <p>
                            <span className="font-bold text-gray-800">{topic.lessons}</span> Bài học
                        </p>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 text-green-500 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m-7.5 7.5l7.5-7.5-7.5-7.5"
                            />
                        </svg>
                        <p>
                            <span className="font-bold text-gray-800">{topic.words}</span> từ ngữ
                        </p>
                    </div>
                </div>
                <Link
                    to={`/vocab/topic/${topic._id}`}
                    className="text-blue-600 hover:text-blue-700 flex items-center font-medium"
                >
                    <span>Xem chi tiết</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 ml-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}