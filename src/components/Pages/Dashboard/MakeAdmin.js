import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h2 className=''>Make Admin</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Remove User</th>
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