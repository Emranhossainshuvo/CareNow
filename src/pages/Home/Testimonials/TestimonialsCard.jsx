
const TestimonialsCard = ({reviews}) => {

    const {userName, img, from , review} = reviews || {};

    console.log(reviews)
    return (
        <>
         <div className='rounded-md shadow-black shadow-md me-2 p-8'>
                            <p className='mb-5  '>{review}</p>
                            <div className='flex items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/jRJwGT3/profile-pic.png"/>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[#3A4256] text-lg font-semibold'>{userName}</h4>
                                    <p>{from}</p>
                                </div>
                            </div>
                        </div>   
        </>
    );
};

export default TestimonialsCard;