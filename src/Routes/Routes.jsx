import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Appointment from "../pages/Appointment/Appointment";
import About from "../pages/About/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/", 
                element: <Home />
            }, 
            {
                path: '/appointment', 
                element: <Appointment />
            }, 
            {
                path: '/about', 
                element: <About />
            }
        ]
    },
]);

export default router;