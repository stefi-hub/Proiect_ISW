import React from 'react';
import './Homepage.css';

const Homepage = ({ logout }) => {
  return (
    <div className="homepage">
      <div className="top-bar">
        <span className="contact">CONTACT</span>
        <div className="logo">LOGO ICON</div>
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
        <div className="cart-icon">SHOPPING CART ICON</div>
      </div>

      <div className="slideshow-container">
        CHANGING COMMERCIAL (SLIDE SHOW OFFERS)
      </div>

      <div className="content">
        <div className="best-sellers-section">
          <h2>BEST SELLERS</h2>
          <div className="items">
            {/* Repeat this structure for each best-seller item */}
            <div className="item">
              <div className="item-image">IMAGE</div>
              <div className="item-price">PRICE</div>
            </div>
            {/* ... */}
          </div>
        </div>

        <div className="our-products-section">
          <h2>OUR PRODUCTS</h2>
          <div className="items">
            {/* Repeat this structure for each product item */}
            <div className="item">
              <div className="item-image">IMAGE</div>
            </div>
            {/* ... */}
          </div>
        </div>

        <div className="whats-new-section">
          <h2>WHAT'S NEW</h2>
          <div className="items">
            {/* Repeat this structure for each new item */}
            <div className="item">
              <div className="item-image">IMAGE</div>
            </div>
            {/* ... */}
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <div className="newsletter">Newsletter</div>
        <div className="pictures">PICTURES</div>
      </div>

      <div className="social-media">
        <span>TWITTER ICON</span>
        <span>INSTAGRAM ICON</span>
        <span>FACEBOOK ICON</span>
      </div>
    </div>
  );
};

export default Homepage;
