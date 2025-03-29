export default function VocabLearningCard() {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-3">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center space-x-2 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                                />
                            </svg>
                            <p className="text-xl font-semibold text-black">Từ vựng của bạn</p>
                        </div>
                        <img src="https://clipart-library.com/img/1628609.png" alt="Vocabulary" className="h-24 w-24" />
                    </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-blue-300 to-purple-200 rounded-2xl border border-blue-300 p-6 shadow-lg hover:shadow-xl transition-shadow text-center relative">
                    <div className="flex flex-col items-start">
                        <div className="flex items-start space-x-2 mb-4">
                            <p className="text-xl font-medium text-blue-800">Bắt đầu học theo từng bước</p>
                        </div>
                        <div className="flex items-start space-x-2 mb-4">
                            <button className="flex items-start gap-3 px-10 py-3 text-blue-800 font-semibold bg-blue-200 border-2 border-blue-800 rounded-full shadow-lg hover:bg-blue-800 hover:text-white hover:border-blue-800 active:scale-95 transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                    />
                                </svg>
                                <span>Bắt đầu học</span>
                            </button>
                        </div>
                    </div>
                    <img
                        src="./images/half-earth.png"
                        alt="Earth"
                        className="absolute bottom-0 right-0 w-40 h-40 min-w-20 min-h-20 hidden xl:block"
                        style={{
                            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
                        }}
                    />

                </div>
            </div>
        </div>
    )
}