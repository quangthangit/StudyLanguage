import React from "react";

export default function Empty({ message = "Dữ liệu chưa update", onRetry }) {
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
            <img
                src="https://recmiennam.com/wp-content/uploads/2018/02/hinh-nen-sorry-9.jpg" 
                alt="No Data"
                className="w-50 h-50 rounded-full"
            />
            <p className="text-gray-600 text-lg font-medium">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Thử lại
                </button>
            )}
        </div>
    );
}