import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseInfo = () => {
    const courseInfo = useLoaderData();
    const { title, author, department, details, image_url, rating, total_enroll } = courseInfo;
    return (
        <div className="card w-10/12 mx-auto bg-base-200 shadow-xl">
            <div className='w-10/12 mx-auto items-center flex my-4 justify-between'>
                <h1 className='font-medium text-2xl'>Course Name: {title}</h1>
                <button className='btn btn-warning'>Download</button>
            </div>
            <figure className='w-10/12 mx-auto'><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <div>
                    <p className='font-semibold text-xl'>Instructor: {author.name}</p>
                    <p className='font-medium'>Department: {department}</p>
                    <p>Starting Date: {author.starting_date}</p>
                    <p>Total Enroll: {total_enroll}</p>
                    <p className='mb-2'>Rating: {rating.number}</p>
                    <p>Description: {details}</p>
                </div>
                <div className="card-actions mx-auto mt-2">
                    <Link to='/checkout'><button className="btn btn-primary">Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;