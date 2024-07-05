import Review from './Review';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const {data:reviews, isLoading} = useQuery('reviews', ()=> fetch('https://lukas-manufacturer-server-site.vercel.app/review').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='px-10 py-20 2xl:py-40 bg-black'>
            <div className='mx-auto mb-10'>
            {/* <span className="text-lg text-secondary font-bold">Reviews That Always Matter for us</span>
            <h2 className="mb-24 text-center text-5xl font-bold font-heading">Reviews</h2> */}
            <h2 className="text-2xl font-bold tracking-tight text-gray-100">Reviews That Always Matter for us</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews?.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;