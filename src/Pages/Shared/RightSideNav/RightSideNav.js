import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
        {
            courses.map(course => <p className='text-violet-400' key={course.id}>
                <Link to={`/courses/${course.id}`}>{course.name}</Link>
            </p>)
        }
        </div>
    );
};

export default RightSideNav;