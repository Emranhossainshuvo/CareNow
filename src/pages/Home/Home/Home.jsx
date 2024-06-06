import Navbar from "../../../components/shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <div className="h-[100vh] shadow-md shadow-black text-white bg-cover relative bg-fixed" style={{ backgroundImage: "url('https://i.ibb.co/PMgn8CT/quang-tri-nguyen-Vckd-Jzo7ig0-unsplash.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
                <div className="relative z-10">
                    <Navbar />
                    <Banner />
                    <FeaturedSection />
                </div>
            </div>
            <div className=" shadow-md shadow-black text-white bg-cover relative bg-fixed" style={{ backgroundImage: "url('https://i.ibb.co/k5ZxVhz/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
                <div className="relative z-10">
                    <Services />
                </div>
            </div>
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;