import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function FooterComponent() {
  const location = useLocation();

  // Fonction pour vérifier si le footer doit être affiché
  const shouldDisplayFooter = () => {
    const path = location.pathname;
    // Liste des chemins où le footer ne doit pas apparaître
    const noFooterPaths = ['/dash', '/bills', '/orders', '/users', 
    '/categories', '/products', '/login', '/signup', '/update-product/3','/save-product',
    '/save-bill','/update-user','/order-summary','/order','/category','/update-category/1',
    '/update-category/2','/update-category/3','/add-category',];

    return !noFooterPaths.includes(path);
  };

  // Si le footer ne doit pas être affiché, retourner null
  if (!shouldDisplayFooter()) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ABOUT</h4>
        <ul>
        <li><a href="mailto:samaralleni29@gmail.com">Contact us</a></li>

          {/* Ajoutez d'autres liens si nécessaire */}
        </ul>
      </div>
      <div className="footer-section">
        <h4>HELP</h4>
        <ul>
          <li><a href="/payments">Payments</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SOCIALS</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/allenisamar/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/alleni-samar" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
