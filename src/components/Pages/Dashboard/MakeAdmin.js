import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        fetch('https://infinite-brook-85062.herokuapp.com/user', {
            method: 'GET',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        })
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h2 className='text-center text-bold text-4xl py-4'>Make Admin</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UserRow key={index} index={index} user={user}></UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;