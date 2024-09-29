// src/pages/OrderSummaryPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSummaryComponents = () => {
    const { state } = useLocation();
    const { customer, order, totalAmount } = state || {};

    return (
        <div className="container" style={{ backgroundColor: '#E6E6FA', padding: '20px', borderRadius: '10px' }}>
            <h2>Order Summary</h2>
            <div className="card my-3">
                <div className="card-header">
                    <h5>Customer Details</h5>
                </div>
                <div className="card-body">
                    <p><strong>Name:</strong> {customer.name}</p>
                    <p><strong>Email:</strong> {customer.email}</p>
                    <p><strong>Contact Number:</strong> {customer.contact_number}</p>
                    <p><strong>Payment Method:</strong> {customer.payment}</p>
                </div>
            </div>

            <div className="card my-3">
                <div className="card-header">
                    <h5>Order Details</h5>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h5>Total Amount: ${totalAmount}</h5>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryComponents;
