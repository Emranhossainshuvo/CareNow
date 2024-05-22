import { FaTooth } from "react-icons/fa6";
import { GiPelvisBone } from "react-icons/gi";
import { LiaToothSolid } from "react-icons/lia";

const Services = () => {
    return (
        <>
            {/* section that will hold everything  */}
            <section className="mb-44">
                {/* section for title  */}
                <section className="text-center mb-16">
                    <p className="font-semibold text-[#19D3AE]">OUR SERVICES</p>
                    <h4 className="text-3xl">Services We Provide</h4>
                </section>
                {/* section for service cards */}
                <section className="grid mb-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* first service */}
                    <section className="shadow-sm rounded-md pt-11 pb-9 px-14 text-center shadow-black ">
                        <FaTooth className="text-7xl mb-8 text-[#11D0E2] w-full mx-auto" />
                        <h5 className="text-[#3A4256] mb-2 text-lg font-semibold">Fluoride Treatment</h5>
                        <p className="">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </section>
                    {/* second service */}
                    <section className="shadow-sm rounded-md pt-11 pb-9 px-14 text-center shadow-black ">
                        <GiPelvisBone className="text-7xl mb-8 text-[#11D0E2] w-full mx-auto" />
                        <h5 className="text-[#3A4256] mb-2 text-lg font-semibold">Cavity Filling</h5>
                        <p className="">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </section>
                    {/* third service */}
                    <section className="shadow-sm rounded-md pt-11 pb-9 px-14 text-center shadow-black ">
                        <LiaToothSolid className="text-7xl mb-8 text-[#11D0E2] w-full mx-auto" />
                        <h5 className="text-[#3A4256] mb-2 text-lg font-semibold">Teeth Whitening</h5>
                        <p className="">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </section>
                </section>
                {/* section for holding hero section */}
                <section className="flex justify-center gap-16 items-center">
                    {/* section to hold the image  */}
                    <section>
                        <img className=" rounded-lg h-[60vh]" src="https://i.ibb.co/8PrCct4/65296.jpg" alt="" />
                    </section>
                    {/* section to hold the texts */}
                    <section className="md:w-1/2">
                        <h4 className="text-[#3A4256] mb-6 text-4xl font-semibold">Exceptional Dental Care, on Your Terms</h4>
                        <p className="text-[#000000] text-sm mb-11">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here&apos;s, making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="text-white p-2 rounded-md bg-gradient-to-r from-[#17D2BB] to-[#11D0E2]">Get started</button>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Services;