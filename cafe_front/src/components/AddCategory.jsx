import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = { name };

        axios.post('http://localhost:9091/api/category', newCategory)
            .then(response => {
                console.log('Category added:', response.data);
                navigate('/category'); // Redirige vers la liste des catégories après l'ajout
            })
            .catch(error => {
                console.error('There was an error adding the category!', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add New Category</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div className="form-group">
                    <label>Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ padding: '5px', fontSize: '14px' }} // Réduction de la taille de l'input
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3" style={{ width: '100%' }}>
                    Add Category
                </button>
            </form>
        </div>
    );
};

export default AddCategory;
