import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialsCard from './TestimonialsCard';


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

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    return (
        <>
            {/* section that will hold everything in this file */}
            <section className='max-w-screen-xl mx-auto'>
                {/* section for holding the titles in this page */}
                <section className="text-center mb-16">
                    <p className="font-semibold text-xl text-[#19D3AE]">Testimonials</p>
                    <h4 className="text-3xl font-semibold">What people think about us</h4>
                </section>
                {/* section that will hold the testimonials cards */}
                <section>   

                    <Carousel className='mb-40 p-5' responsive={responsive}>
                        {
                                reviews.map(
                                    review => <TestimonialsCard
                                    key={review.userName}
                                    reviews={review}
                                    ></TestimonialsCard>
                                )
                        }
                    </Carousel>

                </section>
            </section>
        </>
    );
};

export default Testimonials;