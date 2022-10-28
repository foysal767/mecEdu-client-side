import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const AllCourse = () => {
    const CourseDetails = useLoaderData();
    return (
        <div className=''>
            <h2 className='text-center text-xl md:text-3xl font-semibold mb-6 px-4 py-2 w-1/3 mx-auto rounded-md btn-accent'>Featured Courses</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='md:col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
                        {
                            CourseDetails.map(course => <Courses
                                key={course._id}
                                course={course}
                            ></Courses>)
                        }
                    </div>
                </div>
                <div className='col-span-1 hidden lg:block'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default AllCourse;