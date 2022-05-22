import React from 'react';

const UserRow = ({user, index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
    );
};

export default UserRow;