import { Link } from "react-router-dom";

export default function VocabCategorized() {
    return (
        <div className="w-full max-w-screen-xl mx-auto py-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-black">Danh sách từ phân loại</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
                <Link to={`/vocab/categorized/67e656acba22882ff641193e`} className="flex-1 bg-blue-100 rounded-xl shadow-md flex items-center justify-center p-10 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                    <p className="text-2xl font-semibold text-blue-800">Động từ</p>
                </Link>
                <Link to={`/vocab/categorized/67e656e5ba22882ff6411940`} className="flex-1 bg-purple-100 rounded-xl shadow-md flex items-center justify-center p-10 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                    <p className="text-2xl font-semibold text-blue-800">Tính từ</p>
                </Link>
                <Link to={`/vocab/categorized/67e65702ba22882ff6411942`} className="flex-1 bg-yellow-100 rounded-xl shadow-md flex items-center justify-center p-10 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                    <p className="text-2xl font-semibold text-blue-800">Trạng từ</p>
                </Link>
                <Link to={`/vocab/categorized/`} className="flex-1 bg-amber-100 rounded-xl shadow-md flex items-center justify-center p-10 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                    <p className="text-2xl font-semibold text-blue-800">Khác</p>
                </Link>
            </div>
        </div>
    )
}