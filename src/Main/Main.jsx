import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;