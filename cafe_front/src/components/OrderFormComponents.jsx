import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderFormComponents = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        contact_number: '',
        payment: ''
    });
    const [product, setProduct] = useState({
        category: '',
        name: '',
        price: 0,
        quantity: 1,
        total: 0
    });
    const [order, setOrder] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const navigate = useNavigate();

    const handleCustomerChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        if (name === 'quantity') {
            setProduct((prev) => ({
                ...prev,
                [name]: value,
                total: prev.price * value
            }));
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const addProduct = () => {
        const newProduct = { ...product, total: product.price * product.quantity };
        setOrder([...order, newProduct]);
        setTotalAmount(totalAmount + newProduct.total);
        setProduct({
            category: '',
            name: '',
            price: 0,
            quantity: 1,
            total: 0
        });
    };

    const deleteProduct = (index) => {
        const updatedOrder = order.filter((_, i) => i !== index);
        const deletedProduct = order[index];
        setOrder(updatedOrder);
        setTotalAmount(totalAmount - deletedProduct.total);
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        // Navigate to the Order Summary Page with state
        navigate('/order-summary', {
            state: { customer, order, totalAmount }
        });
    };

    return (
        <div style={{ backgroundColor: '#E6E6FA', minHeight: '100vh', padding: '20px' }}>
            <div className="container" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
                {currentStep === 1 && (
                    <div className="card my-3">
                        <div className="card-header">
                            <h5>Customer Details</h5>
                        </div>
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-sm-4">
                                    <label>Name *</label>
                                    <input type="text" className="form-control" name="name" value={customer.name} onChange={handleCustomerChange} required />
                                </div>
                                <div className="col-sm-4">
                                    <label>Email *</label>
                                    <input type="email" className="form-control" name="email" value={customer.email} onChange={handleCustomerChange} required />
                                </div>
                                <div className="col-sm-4">
                                    <label>Contact Number *</label>
                                    <input type="text" className="form-control" name="contact_number" value={customer.contact_number} onChange={handleCustomerChange} required />
                                </div>
                                <div className="col-sm-4">
                                    <label>Payment Method *</label>
                                    <select className="form-control" name="payment" value={customer.payment} onChange={handleCustomerChange} required>
                                        <option value="">Select Payment Method</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Credit Card">Credit Card</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="card my-3">
                        <div className="card-header">
                            <h5>Select Product</h5>
                        </div>
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-sm-3">
                                    <label>Category</label>
                                    <select className="form-control" name="category" value={product.category} onChange={handleProductChange}>
                                        <option value="">Select Category</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="Beverage">Beverage</option>
                                        <option value="pasta">Pasta</option>
                                    </select>
                                </div>
                                <div className="col-sm-3">
                                    <label>Product</label>
                                    <input type="text" className="form-control" name="name" value={product.name} onChange={handleProductChange} />
                                </div>
                                <div className="col-sm-2">
                                    <label>Price</label>
                                    <input type="number" className="form-control" name="price" value={product.price} onChange={handleProductChange} />
                                </div>
                                <div className="col-sm-2">
                                    <label>Quantity</label>
                                    <input type="number" className="form-control" name="quantity" value={product.quantity} onChange={handleProductChange} />
                                </div>
                                <div className="col-sm-2">
                                    <label>Total</label>
                                    <input type="number" className="form-control" name="total" value={product.total} readOnly />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-sm mt-2" onClick={addProduct}>Add</button>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <>
                        <div className="card my-3">
                            <div className="card-body">
                                <h5>Total Amount: ${totalAmount}</h5>
                            </div>
                        </div>

                        <div className="card my-3">
                            <div className="card-header">
                                <h5>Order Summary</h5>
                            </div>
                            <div className="card-body">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.total}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(index)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
                <div className="d-flex justify-content-between my-3">
                    {currentStep > 1 && (
                        <button className="btn btn-secondary" onClick={handlePreviousStep}>Previous</button>
                    )}
                    {currentStep < 3 && (
                        <button className="btn btn-primary" onClick={handleNextStep}>Next</button>
                    )}
                    {currentStep === 3 && (
                        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderFormComponents;
