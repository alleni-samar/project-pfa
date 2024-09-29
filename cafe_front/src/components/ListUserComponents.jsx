import React, { useEffect, useState } from 'react';
import { listUsers } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const ListUserComponents = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Correctly use the navigate hook

  useEffect(() => {
    listUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function updateUser(id) {
    navigate(`/update-user/${id}`); // Correctly use navigate to redirect
  }
  
  return (
    <div className='container'>
      <h2 className='text-center'>List of Users</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User contact_number</th>
            <th>User Email</th>
            <th>User Name</th>
            <th>User Password</th>
            <th>User Role</th>
            <th>User Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.contact_number}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateUser(user.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUserComponents;
