import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { _id, title, author, department, details, image_url, rating, total_enroll } = courseDetails;
    return (
        <div>
            <div className='card shadow-xl w-10/12 mx-auto bg-base-200 details-top py-8'>
                <div className='flex justify-between w-10/12 mx-auto items-center'>
                    <h2 className='text-xl font-medium'>Download {title} Course Details</h2>
                    <h2>
                        <Pdf targetRef={ref} filename={title}>
                            {({ toPdf }) => <button onClick={toPdf} className='btn btn-warning'>Download <FaFileDownload className='filedownload'></FaFileDownload></button>}
                        </Pdf>
                    </h2>
                </div>
            </div>
            <div ref={ref} className="card w-10/12 mx-auto bg-base-200 shadow-xl mt-6">
                <h1 className='w-8/12 mx-auto text-center font-medium text-2xl mt-6 mb-6'>Course Name: {title}</h1>
                <figure className='w-6/12 mx-auto'><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <p className='font-semibold text-xl'>Instructor: {author.name}</p>
                        <p className='font-medium'>Department: {department}</p>
                        <p>Starting Date: {author.starting_date}</p>
                        <p>Total Enroll: {total_enroll}</p>
                        <p className='mb-2'>Rating: {rating.number}</p>
                        <p>Description: {details.slice(0, 1500)}</p>
                    </div>
                    <div className="card-actions mx-auto mt-2">
                        <Link to={`/course/${_id}/checkout`}><button className="btn btn-primary">Get Premium Access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;