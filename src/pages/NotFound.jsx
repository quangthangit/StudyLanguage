import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
        alt="Not Found"
        className="w-80 md:w-96 mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to={"/"}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300 shadow-md"
      >
        Go to Home
      </Link>
    </div>
  );
};

