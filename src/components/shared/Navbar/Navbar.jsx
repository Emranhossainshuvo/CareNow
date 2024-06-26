import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    };


    return (
        <>
            {/* main div to hold everything in the navbar file */}
            <div className="flex max-w-screen-xl mx-auto justify-between pt-2 pb-10 items-center">
                {/* div for left side element such as name and icon */}
                <div>
                    <h3 className="text-2xl font-semibold">CareNow</h3>
                </div>

                <div className={`menu-links absolute md:static top-0 right-5 md:flex ${menuOpen ? 'block' : 'hidden'} text-lg font-medium`}>
                    <ul className="md:flex items-center gap-5">
                        <NavLink to={`/`}><li>Home</li></NavLink>
                        <NavLink to={`/about`}><li>About</li></NavLink>
                        <NavLink to={`appointment`}><li>Appointment</li></NavLink>
                        <NavLink to={`contact`}>
                            <li>Contact</li>
                        </NavLink>
                        <NavLink to={`/login`}>
                            <li>Login</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="menu-icon md:hidden" onClick={handleToggle}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </>
    );
};

export default Navbar;