import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
    
        navigate('/'); 
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">Cafe Management System</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            {/* Log Out button */}
                            <li className="nav-item">
                                <button 
                                    className="btn btn-danger" 
                                    onClick={handleLogout} 
                                    style={{ marginLeft: 'auto' }}>
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
