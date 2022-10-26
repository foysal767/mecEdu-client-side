import React from 'react';

const Courses = ({course}) => {
    console.log(course)
    const { _id, title, author, details, image_url, total_enroll, rating } = course;
    return (
        <div>
            <h1>Course Name: {title}</h1>
            <img src={image_url} alt="" />
        </div>
    );
};

export default Courses;