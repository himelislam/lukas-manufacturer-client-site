import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index}) => {
    const {email, role} = user;
    const makeAdmin =()=>{
        fetch(`https://lukas-manufacturer-server-site.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast('failed to make an admin')
            }
            return res.json();
        })
        .then(data => {
            if(data.modifiedCount > 0){
                toast('Successfully made as an admin')
            }
        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;