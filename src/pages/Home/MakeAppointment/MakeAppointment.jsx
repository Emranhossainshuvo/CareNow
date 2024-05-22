
const MakeAppointment = () => {
    return (
        <>
            {/* this section will hold everything in this page */}
            <section style={{ backgroundImage: "url('https://i.ibb.co/FJwvfTm/2149164339.jpg')" }} className="relative flex bg-cover bg-opacity-70  items-center mb-20 justify-between">
            <div className="absolute inset-0 bg-[#485164] opacity-80"></div>
                {/* section for the image */}
                <section>
                    <img className="max-h-[80vh] relative z-10" src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" alt="" />
                </section>
                {/* section for the text in this hero section */}
                <section className="md:w-1/2 relative z-10 ps-5">
                    <h5 className="text-[#19D3AE]">Appointment</h5>
                    <h4 className="text-white mb-6 text-4xl font-semibold">Make an appointment Today</h4>
                    <p className="text-white text-sm mb-11">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here&apos;s, making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="text-white p-2 rounded-md bg-gradient-to-r from-[#17D2BB] to-[#11D0E2]">Get started</button>
                </section>
            </section>
        </>
    );
};

export default MakeAppointment;