import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin'
const Dashboard = () => {
    const [user] = useAuthState(auth);
    console.log(user, "user from auth");
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 text-black font-semibold">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        !admin && <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        </>
                    }

                    { admin && <>
                        <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;