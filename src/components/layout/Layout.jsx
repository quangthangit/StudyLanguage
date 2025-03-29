import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
