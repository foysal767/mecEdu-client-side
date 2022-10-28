import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full text-center items-center mx-auto my-auto mt-32'>
            <h1 className='mt-8 text-4xl font-bold'>Learning With MecEdu</h1>
            <p className='text-xl mt-8 font-medium'>You Can Purchase Our featured Courses at Any Time</p>
            <Link to='/all-course'><button className='mt-10 btn btn-outline'>Get Started</button></Link>
        </div>
    );
};

export default Home;