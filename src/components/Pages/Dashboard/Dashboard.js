import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-primary text-center'>Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content font-semibold">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                    <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                    {/* {admin && <>
                        <li><Link to='/dashboard/users'>Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;