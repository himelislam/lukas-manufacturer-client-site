import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="navbar bg-base-100 px-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li className='font-semibold'><a>Home</a></li></Link>
                        <Link to='/dashboard'><li className='font-semibold'><a>Dashboard</a></li></Link>
                        <Link to='/blogs'><li className='font-semibold'><a>Blogs</a></li></Link>
                        <Link to='/portfolio'><li className='font-semibold'><a>Portfolio</a></li></Link>
                    </ul>
                </div>
                <Link to='/'><a class="btn btn-ghost normal-case text-xl"><img src="https://htmldemo.net/lukas/lukas/assets/img/logo.png" alt="" /></a></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Link to='/'><li><a className='font-semibold'>Home</a></li></Link>
                    <Link to='/dashboard'><li><a className='font-semibold'>Dashboard</a></li></Link>
                    <Link to='/blogs'><li className='font-semibold'><a>Blogs</a></li></Link>
                    <Link to='/portfolio'><li className='font-semibold'><a>Portfolio</a></li></Link>
                </ul>
            </div>
            <div class="navbar-end">
                {
                    user ?
                        <Link to='/login' onClick={() => signOut(auth)}><a class="btn">Sign Out</a></Link>
                        :
                        <Link to='/login'><a class="btn">Login</a></Link>
                }
                {
                    user ?
                        <Link to='/dashboard/'><a class="btn btn-primary mx-1">{user?.displayName}</a></Link>
                        :
                        ''
                }
                <label for="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;