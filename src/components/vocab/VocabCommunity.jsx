import { useRef } from "react";

export default function VocabCommunity({ topics }) {
    const containerRef = useRef(null);

    const scroll = (direction) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto p-3">
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center space-y-6">
                <div className="w-full text-center">
                    <h2 className="text-2xl font-bold text-black mb-4">
                        Danh Sách Từ Vựng Do Người Dùng Tạo Ra
                    </h2>
                    <p className="text-black ">
                        Các danh sách được cung cấp từ người dùng và sử dụng phổ biến.
                    </p>
                </div>
                <div className="relative w-full">
                    <div
                        ref={containerRef}
                        className="flex overflow-x-auto scrollbar-hide space-x-6 px-4 py-4 w-full scrollbar-hidden"
                        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
                    >
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className="min-w-[220px] max-w-[220px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                                style={{ scrollSnapAlign: "start" }}
                            >
                                <div className="text-4xl mb-2">
                                    <img src={`/images/${topic.image}`} alt={topic.creator} />
                                </div>
                                <h3 className="text-lg font-semibold text-black truncate mb-2">
                                    {topic.title}
                                </h3>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={topic.creatorImage}
                                        alt={topic.creator}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <p className="text-sm text-black">{topic.creator}</p>
                                </div>
                                <div className="flex justify-between w-full text-sm text-black">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                        </svg>
                                        <span>{topic.stats.words}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>

                                        </span>
                                        <span>{topic.stats.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}