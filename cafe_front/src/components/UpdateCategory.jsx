import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the category data from the backend using the ID from URL params
        axios.get(`http://localhost:9091/api/category/${id}`)
            .then(response => {
                console.log('Category data:', response.data); // Debugging the received data
                if (response.data && response.data.name) {
                    setName(response.data.name); // Update the state with the category name
                }
            })
            .catch(error => {
                console.error('There was an error fetching the category!', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCategory = { name };

        console.log('Updating category:', updatedCategory); // Debugging the data to be sent

        axios.put(`http://localhost:9091/api/category/${id}`, updatedCategory)
            .then(response => {
                console.log('Category updated:', response.data);
                navigate('/category'); // Redirect to the category list after updating
            })
            .catch(error => {
                console.error('There was an error updating the category!', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Update Category</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div className="form-group">
                    <label>Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Update the state on input change
                        required
                        style={{ padding: '5px', fontSize: '14px' }} // Optional styling
                    />
                </div>
                <button type="submit" className="btn btn-warning mt-3" style={{ width: '100%' }}>
                    Update Category
                </button>
            </form>
        </div>
    );
};

export default UpdateCategory;
