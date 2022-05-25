import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <div className="navbar bg-base-100 px-10 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li className='font-semibold'><a>Home</a></li></Link>
                        {user && <Link to='/dashboard'><li className='font-semibold'><a>Dashboard</a></li></Link>}
                        <Link to='/blogs'><li className='font-semibold'><a>Blogs</a></li></Link>
                        <Link to='/portfolio'><li className='font-semibold'><a>Portfolio</a></li></Link>
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost normal-case text-xl"><img src="https://htmldemo.net/lukas/lukas/assets/img/logo.png" alt="" /></a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/'><li><a className='font-semibold'>Home</a></li></Link>
                    {user && <Link to='/dashboard'><li className='font-semibold'><a>Dashboard</a></li></Link>}
                    <Link to='/blogs'><li className='font-semibold'><a>Blogs</a></li></Link>
                    <Link to='/portfolio'><li className='font-semibold'><a>Portfolio</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link to='/login' onClick={handleSignOut}><a className="btn">Sign Out</a></Link>
                        :
                        <Link to='/login'><a className="btn">Login</a></Link>
                }
                {
                    user ?
                        <Link to='/dashboard/'><a className="btn btn-primary mx-1">{user?.displayName}</a></Link>
                        :
                        ''
                }
                <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;