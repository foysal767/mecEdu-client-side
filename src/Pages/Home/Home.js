import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const CourseDetails = useLoaderData();
    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Total Course: {CourseDetails.length}</h2>
            {
                CourseDetails.map(course => <Courses
                key={course._id}
                course={course}
                ></Courses>)
            }
        </div>
    );
};

export default Home;