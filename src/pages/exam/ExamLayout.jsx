import { Outlet } from "react-router-dom";

export default function ExamLayout() {
    return (
        <div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}