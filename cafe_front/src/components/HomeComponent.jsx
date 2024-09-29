import React from 'react';
import { Link } from 'react-router-dom';
import './HomeComponents.css'; // Assurez-vous que ce chemin pointe vers votre fichier CSS
import cappImage from '../assets/products/capp.jpg';
import pizzaImage from '../assets/products/pizza.jpg';
import icedImage from '../assets/products/iced.jpg';

const HomeComponent = () => {
  const products = [
    { id: 1, name: 'Pizza', description: 'Nice Pizza', price: '$3.00', imageUrl: pizzaImage },
    { id: 2, name: 'Iced coffee', description: 'Delicious iced coffee', price: '$4.00', imageUrl: icedImage },
    { id: 3, name: 'Cappuccino', description: 'Classic cappuccino with foam', price: '$4.50', imageUrl: cappImage },
  ];

  return (
    <div className='home-container'>
      <h1>Cafe Management System</h1>
      <p>
        Welcome to the Cafe Management System For users! This platform allows you to manage all aspects of your cafe, including inventory, orders, staff, and more.
      </p>

      <div className='products-section'>
        <h2>Featured Products</h2>
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
        <div className="buttons-container">
          <Link to="/orders" className="view-more-button">Order Products</Link>
          <Link to="/allPro" className="view-more-products-button">View More Products</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
