import { Outlet } from "react-router-dom";

export default function VocabLayout() {
    return (
        <div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}