
const Banner = () => {
    return (
        <>
            {/*section to hold everything  */}
            <section className=" gap-5 max-w-screen-xl mx-auto md:flex md:justify-between md:items-center">
                {/* section to hold textx */}
                <section className="md:w-1/2">
                    <h3 className="text-5xl text-center md:text-start mb-5 font-bold">Your New Smile Starts <br /> Here</h3>
                    <p className="mb-7 text-xl font-medium text-center md:text-start">Keep smiling, because life is a beautiful thing and there&apos;s so much to smile about. Keep smiling, because life is a beautiful thing and there&apos;s so much to smile about. Keep smiling, because life is a beautiful thing and there&apos;s so much to smile about.</p>
                    <section className="w-full flex mb-3 md:justify-start justify-center">
                        <button className="text-white  p-2 rounded-md bg-gradient-to-r from-[#17D2BB] to-[#11D0E2]">Get started</button>
                    </section>
                </section>
                {/* section to hold the image */}
                <section className="md:w-3/5">
                    <img className="rounded-md" src="https://i.ibb.co/WBLcgpC/23913.jpg" alt="" />
                </section>
            </section>
        </>
    );
};

export default Banner;