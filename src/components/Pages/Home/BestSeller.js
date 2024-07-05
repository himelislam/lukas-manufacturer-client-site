import Product from './Product';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const BestSeller = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://lukas-manufacturer-server-site.vercel.app/products').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        // <div className='bg-black px-10 py-20 py-10 2xl:py-40' id='our-product'>
        //     <div className='text-center mx-auto mb-10 '>
        //     <span className="text-lg text-blue-400 font-bold">All The Best Selling Products</span>
        //     <h2 className="mb-24 text-center text-5xl font-bold font-heading">Our Products</h2>
        //     </div>
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        //         {
        //             products?.map(product => <Product key={product._id} product={product}></Product>)
        //         }
        //     </div>
        // </div>

        <div className="bg-black px-10 py-20">
            <div className="">
                <h2 className="text-2xl font-bold tracking-tight text-gray-100">Best Selling Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    {
                        products?.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestSeller;