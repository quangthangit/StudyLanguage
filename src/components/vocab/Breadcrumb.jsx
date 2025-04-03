import { Link } from "react-router-dom";

export default function Breadcrumb({ links }) {
    return (
        <div className="w-full max-w-screen-xl mx-auto pl-3 pr-3">
            <nav className="text-sm text-gray-600">
                <ul className="flex items-center space-x-2">
                    {links.map((link, index) => (
                        <li key={index} className={index === links.length - 1 ? "text-gray-800 font-medium" : ""}>
                            {link.to ? (
                                <Link to={link.to} className="text-blue-600 hover:underline">
                                    {link.label}
                                </Link>
                            ) : (
                                link.label
                            )}
                            {index < links.length - 1 && <span>/</span>}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
