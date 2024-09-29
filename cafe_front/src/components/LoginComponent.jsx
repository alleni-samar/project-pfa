import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/LoginService';  // Ensure the service is correctly defined
import './Login.css';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await login(email, password);

            if (response) {
                // Redirect based on role
                if (response.role === 'ADMIN') {
                    navigate('/dash');  // Redirect to admin dashboard
                } else if (response.role === 'USER') {
                    navigate('/home');  // Redirect to user dashboard
                } else {
                    setError('Unknown role');
                }
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="text-center mt-3">
                        <p className="mb-0">Not a Member? <Link to="/signup" className="btn btn-link">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
