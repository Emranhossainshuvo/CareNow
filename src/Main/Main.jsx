import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;