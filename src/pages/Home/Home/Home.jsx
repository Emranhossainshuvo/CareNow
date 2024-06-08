import { Outlet } from "react-router-dom";
import Navbar from "../../../components/shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>

            <Banner />
            <FeaturedSection />

            <Services />

            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;