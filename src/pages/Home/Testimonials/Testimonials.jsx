import { useEffect, useState } from 'react';
import TestimonialsCard from './TestimonialsCard';


const Testimonials = () => {



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

                        <div className=''>
                        {
                                reviews.map(
                                    review => <TestimonialsCard
                                    key={review.userName}
                                    reviews={review}
                                    ></TestimonialsCard>
                                )
                        }
                        </div>

                </section>
            </section>
        </>
    );
};

export default Testimonials;