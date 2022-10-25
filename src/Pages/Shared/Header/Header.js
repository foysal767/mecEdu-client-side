import React from 'react';
import { Link } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52">
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><RightSideNav></RightSideNav></li>
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'>MecEdu</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Courses</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 items-center">
                    <li>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;