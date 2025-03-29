import React from 'react';

const ExamLayout = () => {
    return (

        <main className="flex flex-col items-center justify-center py-12 space-y-8">
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-4">IELTS Simulation Listening test 1</h1>
                <div className="flex space-x-4 mb-6">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Thông tin đề thi
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                        Đáp án/transcript
                    </button>
                </div>
                <div className="bg-white p-4 rounded shadow mb-6">
                    <p className="text-gray-700">
                        Thời gian làm bài: 40 phút | 4 phần thi | 40 câu hỏi | 2620 bình luận
                    </p>
                    <p className="text-gray-700">921129 người đã luyện tập đề thi này</p>
                    <p className="text-red-500 text-sm mt-2">
                        Chú ý: để được quy đổi sang scaled score (ví dụ trên thang điểm 990 cho TOEIC hoặc 9.0 cho IELTS), vui lòng chọn chế độ làm FULL TEST.
                    </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Luyện tập</h2>
                    <p className="text-green-600 text-sm mb-4">
                        🌟 Pro tips: Hình thức luyện tập từng phần và chọn mức thời gian phù hợp sẽ giúp bạn tập trung vào giải đúng các câu hỏi thay vì phải chịu áp lực hoàn thành bài thi.
                    </p>
                    <div className="space-y-4 mb-6">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span>Recording 1 (10 câu hỏi)</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Note/Form Completion</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span>Recording 2 (10 câu hỏi)</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Table Completion</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Multiple Choice</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span>Recording 3 (10 câu hỏi)</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Note/Form Completion</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Table Completion</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span>Recording 4 (10 câu hỏi)</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Summary/Flow chart Completion</span>
                            <span className="ml-2 text-sm text-gray-500">[Listening] Matching</span>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">
                            Giới hạn thời gian (Để trống để làm bài không giới hạn)
                        </label>
                        <select className="w-full p-2 border rounded">
                            <option value="">-- Chọn thời gian --</option>
                            <option value="10">10 phút</option>
                            <option value="20">20 phút</option>
                            <option value="30">30 phút</option>
                        </select>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        LUYỆN TẬP
                    </button>
                </div>
            </div>
        </main>
    );
};
