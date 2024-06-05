import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (
        <div className=" font-all">
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;