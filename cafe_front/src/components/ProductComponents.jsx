import React, { useEffect, useState } from 'react';
import { createProduct, getProductById, updateProduct } from '../services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';

const ProductComponents = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const { id } = useParams();
    const [errors, setErrors] = useState({
        description: '',
        name: '',
        price: '',
        status: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getProductById(id).then((response) => {
                setName(response.data.name);
                setDescription(response.data.description);
                setPrice(response.data.price);
                setStatus(response.data.status);
            }).catch(error => {
                console.error('Error fetching product:', error);
            });
        }
    }, [id]);

    function saveOrUpdateProduct(e) {
        e.preventDefault();
        if (validateForm()) {
            const product = { name, description, price, status };
            console.log('Submitting product:', product);
            if (id) {
                updateProduct(id, product).then((response) => {
                    console.log('Update response:', response.data);
                    navigate('/products');
                }).catch(error => {
                    console.error('Update error:', error);
                });
            } else {
                createProduct(product).then((response) => {
                    console.log('Create response:', response.data);
                    navigate('/products');
                }).catch(error => {
                    console.error('Create error:', error);
                });
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if (description.trim()) {
            errorsCopy.description = '';
        } else {
            errorsCopy.description = 'Description is required';
            valid = false;
        }

        if (String(price).trim()) {
            errorsCopy.price = '';
        } else {
            errorsCopy.price = 'Price is required';
            valid = false;
        }

        if (status.trim()) {
            errorsCopy.status = '';
        } else {
            errorsCopy.status = 'Status is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        return id ? <h2 className='text-center'>Update Product</h2> : <h2 className='text-center'>Add Product</h2>;
    }

    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name:</label>
                                <input
                                    type='text'
                                    placeholder='Product name'
                                    name='name'
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Description:</label>
                                <input
                                    type='text'
                                    placeholder='Product description'
                                    name='description'
                                    value={description}
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Price:</label>
                                <input
                                    type='text'
                                    placeholder='Product price'
                                    name='price'
                                    value={price}
                                    className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Status:</label>
                                <input
                                    type='text'
                                    placeholder='Product status'
                                    name='status'
                                    value={status}
                                    className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                {errors.status && <div className='invalid-feedback'>{errors.status}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateProduct}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponents;
