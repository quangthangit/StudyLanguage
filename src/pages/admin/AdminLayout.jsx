import { Link, Outlet } from "react-router-dom";
export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-white shadow-md p-4">
                <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
                <nav className="space-y-2">
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                        Overview
                    </a>
                    <Link
                        to={'/admin/type'}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                        Type
                    </Link>
                    <Link
                        to={'/admin/sub-type'}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                        Sub Type
                    </Link>
                    <Link
                        to={'/admin/detail-sub-type'}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                        Detail Sub Type
                    </Link>
                    <Link
                        to={'/admin/topic'}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                        Topic
                    </Link>
                    <Link
                        to={'/admin/sub-topic'}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                        Sub Topic
                    </Link>
                </nav>
            </aside>

            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    )
}