export default function VocabLevels() {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-3">
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
                    <div>
                        <p className="text-2xl font-semibold text-black mb-6">Từ vựng Theo cấp độ</p>
                        <p className="text-[15px] text-black">Tìm từ vựng được sắp xếp theo cấp độ để học dễ dàng hơn.</p>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-black transition-transform duration-200 hover:translate-x-3 hover:scale-110 hover:text-blue-500 mt-4 self-end"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
                <div className="col-span-2 p-2 transition-shadow ">
                    <div className="h-64 overflow-x-auto whitespace-nowrap flex space-x-4 p-4 scrollbar-hidden">
                        <div className="flex flex-col items-center bg-white transition-transform duration-200 min-w-[200px] p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 border border-gray-300">
                            <p className="text-lg font-bold text-black m-3">
                                Topik 1
                            </p>
                            <div>
                                <img src="https://clipart-library.com/img/1628609.png" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white transition-transform duration-200 min-w-[200px] p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 border border-gray-300">
                            <p className="text-lg font-bold text-black m-3">
                                Topik 2
                            </p>
                            <div>
                                <img src="https://th.bing.com/th/id/OIP.tya37xwzmk1lYHo7tegYfwHaFu?w=1600&h=1237&rs=1&pid=ImgDetMain" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white transition-transform duration-200 min-w-[200px] p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 border border-gray-300">
                            <p className="text-lg font-bold text-black m-3">
                                Topik 3
                            </p>
                            <div>
                                <img src="https://th.bing.com/th/id/R.2914fc5d2ce96356904d74aa88120b1e?rik=pnRJKtDKbXWBDQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fbooks-20clip-20art-jixpyXdiE.png&ehk=Hn0Oo4tyYRnOya00zteQCJ6kOl1YUwM7NM1N%2boWzUOQ%3d&risl=&pid=ImgRaw&r=0" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white transition-transform duration-200 min-w-[200px] p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 border border-gray-300">
                            <p className="text-lg font-bold text-black m-3">
                                Topik 4
                            </p>
                            <div>
                                <img src="https://th.bing.com/th/id/R.2914fc5d2ce96356904d74aa88120b1e?rik=pnRJKtDKbXWBDQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fbooks-20clip-20art-jixpyXdiE.png&ehk=Hn0Oo4tyYRnOya00zteQCJ6kOl1YUwM7NM1N%2boWzUOQ%3d&risl=&pid=ImgRaw&r=0" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white transition-transform duration-200 min-w-[200px] p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 border border-gray-300">
                            <p className="text-lg font-bold text-black m-3">
                                Topik 5
                            </p>
                            <div>
                                <img src="https://th.bing.com/th/id/R.2914fc5d2ce96356904d74aa88120b1e?rik=pnRJKtDKbXWBDQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fbooks-20clip-20art-jixpyXdiE.png&ehk=Hn0Oo4tyYRnOya00zteQCJ6kOl1YUwM7NM1N%2boWzUOQ%3d&risl=&pid=ImgRaw&r=0" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white transition-transform duration-200 min-w-[200px] p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 border border-gray-300">
                            <p className="text-lg font-bold text-black m-3">
                                Topik 6
                            </p>
                            <div>
                                <img src="https://th.bing.com/th/id/R.2914fc5d2ce96356904d74aa88120b1e?rik=pnRJKtDKbXWBDQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fbooks-20clip-20art-jixpyXdiE.png&ehk=Hn0Oo4tyYRnOya00zteQCJ6kOl1YUwM7NM1N%2boWzUOQ%3d&risl=&pid=ImgRaw&r=0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}