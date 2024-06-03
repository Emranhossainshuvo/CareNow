
const Appointment = () => {
    return (
        <div>
            <section className="pt-52 pb-60 md:flex md:justify-between md:items-center">
                {/* section to hold textx */}
                <section>
                    <h3 className="text-5xl text-center md:text-start mb-3 font-semibold">Appointment <br /> Booking</h3>
                    <p className="mb-7 text-center md:text-start">Sometimes we don&apos;t have enough sit to take you in. Please chose a different time scedule for that perticular appointment or try letter. We highly respect your time and paitience</p>

                </section>
                {/* section to hold the image */}
                <section>
                    <img className="rounded-md" src="https://i.ibb.co/r467FMH/1319.jpg" alt="" />
                </section>
            </section>
            {/* section for holdint the section title */}
            <section style={{backgroundImage: 'url("https://i.ibb.co/k5ZxVhz/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai.jpg")' }} className="text-center h-[30vh] flex flex-col justify-center items-center rounded-md bg-fixed mb-16">
                <p className="font-semibold text-[#19D3AE]">Book Appointment</p>
                <h4 className="text-3xl">Hurry up your sit</h4>
            </section>
            {/* section to hold apointment form and contents */}
            <section className="flex justify-between items-center">
                {/* section to hold the text contents */}
                <section>
                    <section>
                        <h4>Lorem, ipsum.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, aut!</p>
                    </section>
                    <section>
                        <h4>Lorem, ipsum.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, aut!</p>
                    </section>
                    <section>
                        <h4>Lorem, ipsum.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, aut!</p>
                    </section>
                </section>
                {/* section to hold the form */}
                <section className="bg-[#162E2E]">
                    <h3>Scedule an appointment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum.</p>
                    <form className="flex flex-col gap-3">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="submit" />
                    </form>
                </section>
            </section>
        </div>
    );
};

export default Appointment;