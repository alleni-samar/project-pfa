import React from 'react';
import { useNavigate } from 'react-router-dom';
import adminImage from '../assets/products/admin.png'; 
import './Dash.css';

const DashboardComponent = () => {
    const navigate = useNavigate();

    // Fonction pour naviguer vers une route spécifique
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <nav className="sidebar">
                <h4 className="text-center" style={{ color: '#ADD8E6', fontWeight: '300' }}>Dashboard Admin</h4>
                <img src={adminImage} alt="Admin" className="img-fluid rounded-circle mx-auto d-block my-3" style={{ width: '150px', height: '150px' }} />
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button 
                            className="btn btn-primary w-100 mb-2"
                            onClick={() => handleNavigation('/products')}
                        >
                            Products
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className="btn btn-primary w-100 mb-2"
                            onClick={() => handleNavigation('/category')}
                        >
                            Category
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className="btn btn-primary w-100 mb-2"
                            onClick={() => handleNavigation('/bills')}
                        >
                            Bills
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className="btn btn-primary w-100 mb-2"
                            onClick={() => handleNavigation('/order')}
                        >
                            Orders
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className="btn btn-primary w-100 mb-2"
                            onClick={() => handleNavigation('/users')}
                        >
                            List of users
                        </button>
                    </li>
                </ul>
            </nav>
            
            <div className="main-content">
                <h1 className="text-center" style={{ color: '#ADD8E6'}} >Welcome To Dashboard Admin</h1>
                {/* Additional content can go here */}
            </div>
        </div>
    );
};

export default DashboardComponent;
