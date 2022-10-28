import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://mec-edu-server-foysal767.vercel.app/all-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='mt-4 mx-auto'>
                <h1 className='md:text-2xl font-semibold mb-4 md:text-center'>All Courses</h1>
                {
                    courses.map(course => <p className='md:text-xl font-medium px-4 py-2 rounded-md btn-accent mb-1 md:mb-3' key={course.id}>
                        <Link to={`/course-category/${course.id}/course-details`}>{course.name}</Link>
                    </p>)
                }
        </div>
    );
};

export default RightSideNav;