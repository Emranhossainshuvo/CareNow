import Banner from "../Banner/Banner";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedSection />
            <Services />
            <MakeAppointment />
           <h3>This is home</h3> 
        </div>
    );
};

export default Home;