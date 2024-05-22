import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonials = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <>
            {/* section that will hold everything in this file */}
            <section>
                {/* section for holding the titles in this page */}
                <section className='mb-36'>
                    <h3 className="text-[#19D3AE] font-semibold">Testimonials</h3>
                    <p className="text-3xl font-light">What Our Patients Says</p>
                </section>
                {/* section that will hold the testimonials cards */}
                <section>

                    <Carousel className='mb-40 p-5' responsive={responsive}>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>Winson Herry</h4>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                    </Carousel>

                </section>
            </section>
        </>
    );
};

export default Testimonials;