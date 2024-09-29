import React from 'react';
import { Link } from 'react-router-dom';
import './AllPro.css'; // Make sure this path is correct

// Import product images
import burgerImage from '../assets/products/burger.jpg';
import pastaImage from '../assets/products/pasta.jpg';
import smoothieImage from '../assets/products/smoothie.jpg';

const AllProComponents = () => {
  const products = [
    { id: 4, name: 'Burger', description: 'Juicy beef burger', price: '$5.00', imageUrl: burgerImage },
    { id: 5, name: 'Pasta', description: 'Freshly made pasta', price: '$3.50', imageUrl: pastaImage },
    { id: 6, name: 'Smoothie', description: 'Fruit smoothie', price: '$4.50', imageUrl: smoothieImage },
  ];

  return (
    <div className='all-pro-container'>
      <h1>All Products</h1>
      <div className='products-section'>
        <ul className='products-list'>
          {products.map(product => (
            <li key={product.id} className='product-item'>
              <img src={product.imageUrl} alt={product.name} className='product-image' />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>{product.price}</strong></p>
            </li>
          ))}
        </ul>
        <div className='button-container'>
          <Link to="/home" className="back-button">Back to Home</Link>
          <Link to="/orders" className="order-button">Order Product</Link>
        </div>
      </div>
    </div>
  );
};

export default AllProComponents;
