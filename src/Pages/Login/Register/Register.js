import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                navigate('/')
                handleEmailVerification()
                toast.success('Please verify your Email Address')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <form className='form w-6/12 mx-auto mt-6' onSubmit={handleSubmit}>
            <h1 className='text-2xl'>Please Register</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Full Name</span>
                </label>
                <label className="input-group">
                    <span>Name</span>
                    <input type="text" name='name' placeholder="Enter Your Full Name" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Photo URL</span>
                </label>
                <label className="input-group">
                    <span>Photo URL</span>
                    <input name='photoURL' type="text" placeholder="Enter Your Photo URL" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <label className="input-group">
                    <span>Password</span>
                    <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                </label>
            </div>
            <p className='text-red-600 mt-2'>{error}</p>
            <p className='mt-2'>Already have an account? Please <Link to='/login' className='mt-2 text-cyan-400'>Login</Link></p>
            <button className='btn btn-accent mt-4' type="submit">Register</button>
        </form>
    );
};

export default Register;