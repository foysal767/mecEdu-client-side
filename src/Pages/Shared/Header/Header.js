import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import RightSideNav from '../RightSideNav/RightSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-primary text-primary-content mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52">
                        <li><Link to='/all-course'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li>
                            {
                                user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut}>Log out</Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </li>
                        <li>
                            <Link to='/profile'>
                                {user?.photoURL ?
                                    <div className=''>
                                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                            <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                                        </div>
                                    </div>
                                    : <FaUser className=''></FaUser>
                                }
                            </Link>
                        </li>
                        <RightSideNav></RightSideNav>
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'><img className='w-10' src="https://www.pngall.com/wp-content/uploads/5/Construction-Engineer.png" alt="" /> MecEdu</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/all-course'>Courses</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 items-center">
                    <li>
                        {
                            user?.uid ?
                                <>
                                    <Link onClick={handleLogOut}>Log out</Link>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }
                    </li>
                    <li>
                        <Link to='/profile'>
                            {user?.photoURL ?
                                <div className=''>
                                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                                    </div>

                                </div>
                                : <FaUser className=''></FaUser>
                            }
                        </Link>
                    </li>
                    <li>
                        <input type="checkbox" className="toggle" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;