import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    };


    return (
        <>
            {/* main div to hold everything in the navbar file */}
            <div className="flex justify-between pt-7 mb-6 p-2 items-center">
                {/* div for left side element such as name and icon */}
                <div>
                    <h3 className="text-2xl font-semibold">CareNow</h3>
                </div>

                <div className={`menu-links absolute md:static top-0 right-5 md:flex ${menuOpen ? 'block' : 'hidden'} text-lg font-medium`}>
                    <ul className="md:flex items-center gap-5">
                        <NavLink to={`/`}><li>Home</li></NavLink>
                        <NavLink to={`/about`}><li>About</li></NavLink>
                        <NavLink to={`appointment`}><li>Appointment</li></NavLink>
                        <li>Reviews</li>
                        <NavLink to={`contact`}>
                            <li>Contact us</li>
                        </NavLink>
                        <li>Login</li>
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