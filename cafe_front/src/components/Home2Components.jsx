import React from 'react';
import { Link } from 'react-router-dom';
import './Home2.css';
import pizzaImage from '../assets/products/pizza.jpg';
const Home2Components = () => {
  return (
    <div className='home2-container'>
      <h2>"Always Perfect Café" </h2>
      <p>
        Use the navigation links below to log in or sign up to access the system.
      </p>
      
      <ul className='home-button-list'>
        <li>
          <Link to="/login" className="home-button home-button-primary">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="home-button home-button-secondary">Signup</Link>
        </li>
      </ul>

      <section className="best-sellers">
        <h3>Our Best Sellers</h3>
        <p>Discover our top-selling items that our customers love. Register now to view more products and place your order!</p>
        <ul className="best-sellers-list">
          <li>
            <h4>Pizza</h4>
            <img src={pizzaImage} alt="Pizza" className="product-image" />
            <p>
              Our Pizza  is a classic favorite. Made with fresh tomatoes, mozzarella cheese, and basil, 
              it offers a delicious and authentic taste of Italy. The crispy crust and flavorful sauce make it a hit 
              among our customers. Enjoy it with a drizzle of olive oil and a sprinkle of parmesan for an extra touch.
            </p>
          </li>
          
        </ul>
      </section>

      <section className="order-promo">
        <p>
          Don't miss out on our exclusive offers! Sign up today to explore our full range of products and enjoy seamless ordering from the comfort of your home.
        </p>
      </section>
    </div>
  );
};

export default Home2Components;
