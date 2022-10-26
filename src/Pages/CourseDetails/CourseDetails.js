import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {title, author, department, details, image_url, rating, total_enroll} = courseDetails;
    console.log(courseDetails)
    return (
        <div>
            <h2>Course name: {title}</h2>
            <h2>Instructor name: {author.name}</h2>
            <h2>Department name: {department}</h2>
            <h2>Total enroll: {total_enroll}</h2>
        </div>
    );
};

export default CourseDetails;