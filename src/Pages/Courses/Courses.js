import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { _id, title, author, details, image_url, total_enroll, rating } = course;
    return (
        <div className="card w-10/12 mx-auto bg-base-100 shadow-xl mb-4">
            <div className="card-body mx-auto">
                <h2 className="card-title">Course: {title}</h2>
                <p>Instructor: {author.name}</p>
                <p>Total Enroll: {total_enroll}</p>
                <Link to={`/course/${_id}/course-details`}><button className="btn btn-success">Details</button></Link>
            </div>
            <div className='w-full h-36 mb-2'>
                <figure>
                    <img className='w-10/12 mx-auto rounded-xl' src={image_url} alt={title} />
                </figure>
            </div>
        </div>
    );
};

export default Courses;