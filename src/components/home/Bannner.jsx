import React, { useState, useEffect } from "react";

export default function Banner() {
    const banners = [
        {
            title: "Khám phá sản phẩm mới!",
            description:
                "Sản phẩm này mang đến trải nghiệm chưa từng có, nhanh chóng và hiệu quả. Đừng bỏ lỡ!",
            buttonText: "Khám Phá Ngay",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAczXB4IdREpnmtnc2k_zSXEWGDAk-VWzUw&s",
        },
        {
            title: "Khám phá sản phẩm mới!",
            description:
                "Sản phẩm này mang đến trải nghiệm chưa từng có, nhanh chóng và hiệu quả. Đừng bỏ lỡ!",
            buttonText: "Khám Phá Ngay",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAczXB4IdREpnmtnc2k_zSXEWGDAk-VWzUw&s",
        },
        {
            title: "Khám phá sản phẩm mới!",
            description:
                "Sản phẩm này mang đến trải nghiệm chưa từng có, nhanh chóng và hiệu quả. Đừng bỏ lỡ!",
            buttonText: "Khám Phá Ngay",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAczXB4IdREpnmtnc2k_zSXEWGDAk-VWzUw&s",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
                setFade(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(false);
        }, 500);
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto p-3">
            <div
                className="relative w-full max-w-screen-2xl mx-auto bg-gradient-to-r from-indigo-900 to-blue-600 text-white py-16 px-12 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg"
                style={{ minHeight: "300px" }}
            >
                <div
                    className={`md:w-1/2 text-center md:text-left transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <h1 className="text-4xl font-bold mb-4">{banners[currentIndex].title}</h1>
                    <p className="text-lg mb-6">{banners[currentIndex].description}</p>
                    <a
                        href="#"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
                    >
                        {banners[currentIndex].buttonText}
                    </a>
                </div>

                <div
                    className={`md:w-1/2 flex justify-center mt-6 md:mt-0 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <img
                        src={banners[currentIndex].imageUrl}
                        alt="Sản phẩm"
                        className="rounded-lg shadow-xl w-96"
                    />
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {banners.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-400"
                                } transition-all`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
