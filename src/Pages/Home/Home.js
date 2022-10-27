import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const CourseDetails = useLoaderData();
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-semibold mb-6'>Total Course: {CourseDetails.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
            {
                CourseDetails.map(course => <Courses
                key={course._id}
                course={course}
                ></Courses>)
            }
            </div>
        </div>
    );
};

export default Home;