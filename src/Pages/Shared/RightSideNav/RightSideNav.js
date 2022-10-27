import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const {providerLogin, githubProviderLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://mec-edu-server-foysal767.vercel.app/all-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e))
    }
    return (
        <div className='mt-4'>
            <div className="btn-group btn-group-vertical">
                <button onClick={handleGoogleSignIn} className="btn btn-outline mb-2 justify-between"> Login with Google</button>
                <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary mb-2 justify-between"> Login with Github</button>
            </div>
            <h1 className='md:text-2xl font-semibold text-green-400 mb-4 md:text-center'>All Courses</h1>
        {
            courses.map(course => <p className='md:text-xl font-medium px-4 py-2 rounded-md bg-green-500 mb-1 md:mb-3' key={course.id}>
                <Link to={`/course-category/${course.id}`}>{course.name}</Link>
            </p>)
        }
        </div>
    );
};

export default RightSideNav;