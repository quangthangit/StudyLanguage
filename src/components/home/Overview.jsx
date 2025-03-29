export default function Overview() {
  return (
    <div className="w-full max-w-screen-xl text-gray-800 text-center px-4 m-[100px] md:p-0 ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32">
        <div className="text-left md:text-left">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-black">Học tiếng Hàn từ</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Bất kì đâu
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Chọn ngôn ngữ mẹ đẻ của bạn và bắt đầu nào!
          </p>
          <button className="flex items-center gap-3 px-10 py-3 text-blue-800 font-semibold bg-white border-2 border-blue-800 rounded-full shadow-lg hover:bg-blue-800 hover:text-white hover:border-blue-800 active:scale-95 transition-all m-10">
            Chọn ngôn ngữ của bạn
          </button>
        </div>
        <div>
          <img
            src="./images/home-photo.png"
            className="w-auto max-w-md md:max-w-sm lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}