import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the backend
        axios.get('http://localhost:9091/api/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Category List</h2>
            <Link to="/add-category" className="btn btn-primary mb-3">Add New Category</Link>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ width: '150px' }}>ID</th>
                        <th  style={{ width: '150px' }}>Name</th>
                        <th style={{ width: '150px' }}>Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                            
                            <td className="d-flex justify-content-center align-items-center">
                         <Link to={`/update-category/${category.id}`} className="btn btn-sm btn-warning">Update</Link>
                           </td>
  
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
