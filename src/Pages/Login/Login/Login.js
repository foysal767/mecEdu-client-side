import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin, githubProviderLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
            })
    }
    return (
        <div className='w-6/12 mx-auto'>
            <form className='mt-6' onSubmit={handleSubmit}>
                <h1 className='text-2xl mb-4'>Please Login</h1>
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
                <p className='text-red-600'>{error}</p>
                <p className='w-8/12 mt-2'>If you have not an account. Please <Link className='text-cyan-400' to='/register'>Register</Link></p>
                <button className='btn btn-accent mt-4' type="submit">Log In</button>
            </form>
            
            <div className="mt-6 mx-auto btn-group btn-group-vertical">
                <button onClick={handleGoogleSignIn} className="btn btn-outline mb-2 justify-between"> Login with Google</button>
                <button onClick={handleGithubSignIn} className="btn btn-accent md:btn-outline mb-2 justify-between"> Login with Github</button>
            </div>
        </div>
    );
};

export default Login;