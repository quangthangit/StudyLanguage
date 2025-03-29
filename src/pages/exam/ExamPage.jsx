import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExamPage = () => {
    const exams = [
        { id: 1, title: 'New Economy TOEIC test 1', time: '40 phút', users: 921129, comments: 2620 },
        { id: 2, title: 'New Economy TOEIC test 10', time: '40 phút', users: 303321, comments: 741 },
        { id: 3, title: 'New Economy TOEIC test 2', time: '40 phút', users: 375624, comments: 759 },
        { id: 4, title: 'New Economy TOEIC test 3', time: '40 phút', users: 245424, comments: 444 },
        { id: 5, title: 'New Economy TOEIC test 4', time: '40 phút', users: 191751, comments: 397 },
        { id: 6, title: 'New Economy TOEIC test 5', time: '40 phút', users: 165696, comments: 281 },
        { id: 7, title: 'New Economy TOEIC test 6', time: '40 phút', users: 147708, comments: 259 },
        { id: 8, title: 'New Economy TOEIC test 7', time: '40 phút', users: 106176, comments: 204 },
        { id: 9, title: 'New Economy TOEIC test 3', time: '40 phút', users: 245424, comments: 444 },
        { id: 10, title: 'New Economy TOEIC test 4', time: '40 phút', users: 191751, comments: 397 },
        { id: 11, title: 'New Economy TOEIC test 5', time: '40 phút', users: 165696, comments: 281 },
        { id: 12, title: 'New Economy TOEIC test 6', time: '40 phút', users: 147708, comments: 259 },
        { id: 13, title: 'New Economy TOEIC test 7', time: '40 phút', users: 106176, comments: 204 },
        { id: 14, title: 'New Economy TOEIC test 3', time: '40 phút', users: 245424, comments: 444 },
        { id: 15, title: 'New Economy TOEIC test 4', time: '40 phút', users: 191751, comments: 397 },
        { id: 16, title: 'New Economy TOEIC test 5', time: '40 phút', users: 165696, comments: 281 },
        { id: 17, title: 'New Economy TOEIC test 6', time: '40 phút', users: 147708, comments: 259 },
        { id: 18, title: 'New Economy TOEIC test 7', time: '40 phút', users: 106176, comments: 204 },
        { id: 19, title: 'New Economy TOEIC test 6', time: '40 phút', users: 147708, comments: 259 },
        { id: 20, title: 'New Economy TOEIC test 7', time: '40 phút', users: 106176, comments: 204 },
        { id: 21, title: 'New Economy TOEIC test 6', time: '40 phút', users: 147708, comments: 259 },
        { id: 22, title: 'New Economy TOEIC test 7', time: '40 phút', users: 106176, comments: 204 },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Tính toán dữ liệu hiển thị
    const totalPages = Math.ceil(exams.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentExams = exams.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='flex flex-col items-center justify-center space-y-8 p-2'>
            <div className="relative w-full bg-gradient-to-r from-blue-800 to-purple-800 text-white py-16">
                <div className="max-w-screen-xl mx-auto flex flex-col items-start p-3 text-left space-y-6">
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
            <div className="p-6 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Thư viện đề thi</h1>
                <div className="flex space-x-4 mb-6">
                    <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-600">Tất cả</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">IELTS Academic</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">IELTS General</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">TOEIC</button>
                </div>
                <div className="flex flex-row mb-6 gap-1">
                    <input
                        type="text"
                        placeholder="Nhập từ khoá bạn muốn tìm kiếm: tên sách, dạng câu hỏi ..."
                        className="flex-2/3 w-full p-3 border-1 border-gray-200 rounded"
                    />
                    <button className="flex-1/3 font-medium w-full bg-white text-black py-3 rounded border-1 border-gray-200 hover:text-white hover:bg-blue-800">Tìm kiếm</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {currentExams.map((exam) => (
                        <div key={exam.id} className="bg-white p-4 shadow rounded-2xl border-gray-200 border-[1px]">
                            <h2 className="text-lg font-semibold mb-2">{exam.title}</h2>
                            <p className="text-gray-600 text-sm mb-1">⏱ {exam.time} | 👤 {exam.users.toLocaleString()}</p>
                            <p className="text-gray-600 text-sm mb-1">💬 {exam.comments}</p>
                            <p className="text-gray-500 text-sm mb-4">4 phần thi | 40 câu hỏi</p>
                            <div className="flex space-x-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">#IELTS Academic</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">#Listening</span>
                            </div>
                            <button className="mt-4 w-full bg-white text-blue-800 font-medium py-2 rounded-[5px] border-[1px] hover:bg-blue-800 hover:text-white">Chi tiết</button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded ${currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExamPage;