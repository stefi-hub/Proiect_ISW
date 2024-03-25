import React from 'react';
import './Homepage.css';
import logoIcon from './p1.jpg';
import cartIcon from './p1.jpg';
import slideShowImage1 from './p1.jpg';
import slideShowImage2 from './p2.jpg';
import slideShowImage3 from './p3.jpg';

const Homepage = ({ logout }) => {
  return (
    <div className="homepage">
      <div className="top-bar">
        <span className="contact">CONTACT</span>
        <img src={logoIcon} alt="Logo" className="logo" />
        <button onClick={logout} className="logout-button">LOGOUT</button>
      </div>

      <div className="navbar">
        <ul className="nav-links">
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>TUTORIALS</li>
          <li>SHOPS</li>
          <li>ABOUT-US</li>
          <li>CONTACT-US</li>
        </ul>
        <img src={cartIcon} alt="Shopping Cart" className="cart-icon" />
      </div>

      <div className="slideshow-container">
        {}
        <div className="slide fade">
          <img src={slideShowImage1} alt="Offer 1" />
        </div>
        <div className="slide fade">
          <img src={slideShowImage2} alt="Offer 2" />
        </div>
        <div className="slide fade">
          <img src={slideShowImage3} alt="Offer 3" />
        </div>
      </div>

      <div className="content">
        {}

        {}

        {}
      </div>

      <div className="newsletter-section">
        <div className="newsletter">Subscribe to our Newsletter</div>
        <div className="pictures">Featured Images</div>
      </div>

      <div className="social-media">
        {}
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
    </div>
  );
};

export default Homepage;
