import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UserComponents = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        contact_number: '',
        password: '',
        role: '',
        status: ''
    });
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getUserById(id).then((response) => {
                setUser(response.data);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [id]);

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {};

        if (!user.name.trim()) {
            errorsCopy.name = 'Name is required';
            valid = false;
        }
        if (!user.email.trim()) {
            errorsCopy.email = 'Email is required';
            valid = false;
        }
        // Add validation for other fields as needed

        setErrors(errorsCopy);
        return valid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            updateUser(id, user).then((response) => {
                console.log(response.data);
                navigate('/users');
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    return (
        <div style={{ backgroundColor: '#E6E6FA', minHeight: '100vh', padding: '20px' }}>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <div className='card-body'>
                        <h2 className='text-center'>Update User</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name:</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={user.name}
                                    onChange={handleChange}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder='User Name'
                                />
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={user.email}
                                    onChange={handleChange}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder='User Email'
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Contact Number:</label>
                                <input
                                    type='text'
                                    name='contact_number'
                                    value={user.contact_number}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='User Contact Number'
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password:</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={user.password}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='User Password'
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Role:</label>
                                <input
                                    type='text'
                                    name='role'
                                    value={user.role}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='User Role'
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Status:</label>
                                <input
                                    type='text'
                                    name='status'
                                    value={user.status}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='User Status'
                                />
                            </div>

                            <button type='submit' className='btn btn-success'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserComponents;
