import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneInTalk, MdOutlineWatchLater } from "react-icons/md";

const FeaturedSection = () => {
    return (
        <>
            {/* this section will hold everything in this page */}
            <section className="grid grid-cols-3 gap-5 mb-32">
                {/* first feature */}

                <section className="flex gap-6 text-white py-12 ps-6 pe-7 rounded-md bg-gradient-to-r from-[#17D2BB] to-[#11D0E2] justify-center items-center">
                    <MdOutlineWatchLater className="text-7xl" />
                    <section>
                        <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </section>
                </section>
                {/* second feature */}
                <section className="flex text-white gap-6 py-12 ps-6 pe-7 rounded-md bg-[#3A4256] justify-center items-center">
                    <FaLocationDot className="text-7xl" />
                    <section>
                        <h4 className="text-xl font-semibold mb-2">Visit our location</h4>
                        <p>Brooklyn, NY 10036, United States</p>
                    </section>
                </section>
                {/* third feature */}
                <section className="flex text-white py-12 gap-6 ps-6 pe-7 rounded-md bg-gradient-to-r from-[#17D2BB] to-[#11D0E2] justify-center items-center">
                    <MdOutlinePhoneInTalk className="text-7xl" />
                    <section>
                        <h4 className="text-xl font-semibold mb-2">Contact us now</h4>
                        <p>+000 123 456789</p>
                    </section>
                </section>
            </section>
        </>
    );
};

export default FeaturedSection;