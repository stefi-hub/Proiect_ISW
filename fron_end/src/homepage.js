import React from 'react';
import './homepage.css'; // Make sure to create a corresponding CSS file

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="contact">CONTACT</div>
        <div className="logo">LOGO ICON</div>
        <div className="login">LOGIN</div>
      </header>

      <nav className="navbar">
        <ul>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>TUTORIALS</li>
          <li>SHOPS</li>
          <li>ABOUT-US</li>
          <li>CONTACT-US</li>
        </ul>
        <div className="shopping-cart">SHOPPING CART ICON</div>
      </nav>

      <div className="slideshow">CHANGING COMMERCIAL (SLIDE SHOW OFFERS)</div>

      <section className="best-sellers">
        <h2>BEST SELLERS</h2>
        <div className="product-grid">
          <div className="product">PRODUCT 1 <span>PRICE</span></div>
          <div className="product">PRODUCT 2 <span>PRICE</span></div>
          <div className="product">PRODUCT 3 <span>PRICE</span></div>
        </div>
      </section>

      <section className="our-products">
        <h2>OUR PRODUCTS</h2>
        <div className="product-grid">
          {/* Add product divs here */}
        </div>
      </section>

      <section className="whats-new">
        <h2>WHAT'S NEW</h2>
        <div className="product-grid">
          {/* Add product divs here */}
        </div>
      </section>

      <aside className="sidebar">
        <div className="newsletter">Newsletter</div>
        <div className="pictures">PICTURES</div>
      </aside>

      <footer className="footer">
        <div className="social-media-icons">
          <span>TWITTER</span>
          <span>INSTAGRAM</span>
          <span>FACEBOOK</span>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
