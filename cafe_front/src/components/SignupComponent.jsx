import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../services/SignupService';
import './Signup.css';

const SignupComponent = () => {
    const [name, setName] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        const user = { name, contact_number, email, password, role, status };

        try {
            const response = await signupUser(user);

            if (response) {
                navigate('/login'); // Redirect to login page after successful signup
            } else {
                setError('Signup failed. Please check your details and try again.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <h5>Signup</h5>
                </div>
                <div className="card-body">
                    <form className="signup-form" onSubmit={handleSignup}>
                        <div className="mb-2">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Contact Number</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                value={contact_number}
                                onChange={(e) => setContactNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Role</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Status</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
