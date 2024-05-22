
const Banner = () => {
    return (
        <>
            {/*section to hold everything  */}
            <section className="pt-52 pb-60 md:flex md:justify-between md:items-center">
                {/* section to hold textx */}
                <section>
                    <h3 className="text-5xl text-center md:text-start mb-3 font-semibold">Your New Smile Starts <br /> Here</h3>
                    <p className="mb-7 text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the</p>
                    <section className="w-full flex mb-3 justify-center">
                        <button className="text-white  p-2 rounded-md bg-gradient-to-r from-[#17D2BB] to-[#11D0E2]">Get started</button>
                    </section>
                </section>
                {/* section to hold the image */}
                <section>
                    <img className="rounded-md" src="https://i.ibb.co/GpG6hjf/2309.jpg" alt="" />
                </section>
            </section>
        </>
    );
};

export default Banner;