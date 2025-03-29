import { Link } from "react-router-dom";

export default function VocabBanner() {
    return (
        <div className="relative w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-16">
            <div className="max-w-screen-xl mx-auto flex flex-col items-start text-center space-y-6">
                <h2 className="text-4xl font-bold">
                    Từng vựng theo chủ đề
                </h2>
                <div className="flex items-start space-x-2">
                    <span>Tại đây bạn sẽ tìm thấy các danh sách từ rộng rãi được phân loại theo chủ đề. Mỗi chủ đề bao gồm các tiểu mục sẽ giúp bạn mở rộng kiến thức từ vựng của mình.</span>
                </div>
                <Link to="/vocab/topic">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8 transition-transform duration-200 hover:translate-x-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}