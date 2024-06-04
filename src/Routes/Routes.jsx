import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Appointment from "../pages/Appointment/Appointment";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";


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
            }, 
            {
                path: '/contact', 
                element: <Contact />
            }, 
            {
                path: '/login', 
                element: <Login />
            }, 
            {
                path: "/signup", 
                element: <Signup />
            }
        ]
    },
]);

export default router;