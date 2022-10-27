import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(error => console.error(error))
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    <span>Name</span>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
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
            <button className='btn btn-accent mt-4' type="submit">Register</button>
        </form>
    );
};

export default Register;