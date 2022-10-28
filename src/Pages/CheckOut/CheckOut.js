import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkout = useLoaderData()
    const { title, image_url } = checkout;
    const handlePurchase =() => {
        toast.success('Congratulations! You Purchase this Course Successfully')
    }
    return (
        <div className='w-10/12 text-center mx-auto mt-6 border-2 border-teal-400 px-4 py-8 rounded-md bg-slate-100'>
            <h1 className='text-2xl text-center font-medium mb-4'>Your Course is: {title}</h1>
            <img className='w-10/12 mx-auto' src={image_url} alt={title} />
            <div className='md:w-8/12 text-center mt-4 md:mt-4 mx-auto md:mx-auto flex justify-between md:justify-between'>
                <Link><button onClick={handlePurchase} className='btn btn-accent'>Purchase</button></Link>
                <Link to='/'><button className='btn btn-accent'>Home</button></Link>
            </div>
        </div>
    );
};

export default CheckOut;