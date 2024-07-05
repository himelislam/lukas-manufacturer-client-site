import React, { useRef, useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useGlobalState } from '../../../context/GlobalStateContext';

const Navbar = () => {
    const {state, setState} = useGlobalState();
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [collapse, setCollapse] = useState(false)
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const location = useLocation();

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setCollapse(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        setCollapse(false)
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [location]);

    useEffect(()=> {
        fetch(`http://localhost:4000/order/${user?.email}`,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[location, user, state])

    return (
        <nav className="bg-white border-gray-200 dark:bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/'><a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://htmldemo.net/lukas/lukas/assets/img/logo.png" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono">Lukas</span>
                </a></Link>
                {
                    user ?
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button ref={buttonRef} onMouseEnter={() => setCollapse(true)} onClick={() => setCollapse(!collapse)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={user?.photoURL ? user?.photoURL : "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg"} alt="user photo" />
                            </button>
                            <Link to='/dashboard/myorders'><span className='text-gray-300 border-2 border-gray-200 rounded-full text-sm flex items-center justify-center w-5 h-5 mb-5 cursor-pointer'>{orders?.length}</span></Link>
                            {/* <!-- Dropdown menu --> */}
                            <div ref={dropdownRef} className={`${collapse ? 'block' : 'hidden'} z-50 absolute top-10 right-24 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link to='/dashboard'><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/myorders'><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders ({orders?.length})</a></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/addreview'><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Reviews</a></Link>
                                    </li>
                                    <li>
                                        {/* <a onClick={} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a> */}
                                        {
                                            user ?
                                                <Link to='/login' onClick={handleSignOut}><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out</a></Link>
                                                :
                                                <Link to='/login'><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</a></Link>
                                        }
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        :
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button ref={buttonRef} onMouseEnter={() => setCollapse(true)} onClick={() => setCollapse(!collapse)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg" alt="user photo" />
                            </button>
                        </div>
                }

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black">
                        <li>
                            <Link to='/'><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Home</a></Link>
                        </li>
                        <li>
                            <Link to='/'><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</a></Link>
                        </li>
                        <li>
                            <Link to='/blogs'><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a></Link>
                        </li>
                        <li>
                            <Link to='/'><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reviews</a></Link>
                        </li>
                        <li>
                            <Link to='/'><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;