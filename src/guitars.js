import React from 'react';
import { Link } from 'react-router-dom';
import './guitars.css';
import logoIcon from "./img/p1.jpg";
import { PRODUCTS } from './ProductsPage';

const Guitars = ({ userName }) => {

  const guitars = PRODUCTS.filter(product => product.id >= 15 && product.id <= 20);

  return (
      <div className="guitarspage">
          <div className="guitar_background"></div>
          <div className="content-center1">
              <div className="logo-section">
                  <Link to="/homepage">
                      <img src={logoIcon} alt="Logo" className="logo"/>
                  </Link>
              </div>
              <div className="welcome-message">
                  Hello, {userName}!
              </div>
          </div>

          <div className="topbar1">
              <ul className="top-links">
                  <li><a href="/contact" style={{color: 'white'}}>Contact us ✉️</a></li>
                  <li><a href="/about" style={{color: 'white'}}>About us 📄</a></li>
                  <li><a href="/shops" style={{color: 'white'}}>Shops 📌</a></li>
                  <li><a href="/shoppingcart" style={{color: 'white'}}>Shopping Cart 🛒</a></li>
                  <li><a href="/" style={{color: 'white'}}>Logout ↪</a></li>
              </ul>
          </div>

          <div className="guitar-section-description">
              <div className="inner-description">
                  Discover our select range of guitars, each built with craftsmanship and dedication. Their quality
                  sound and
                  exceptional finishes are the perfect choice for any musician.
              </div>
          </div>

          <div className="guitar-section">
              {guitars.map(guitar => (
                  <div key={guitar.id} className="guitar-column">
                      <Link to={`/product/${guitar.name.toLowerCase().replace(/ /g, '-')}`} className="guitar-link">
                          <img src={guitar.image} alt={guitar.name} className="guitar-image"/>
                          <div className="guitar-name">
                              {guitar.name}
                          </div>
                      </Link>
                  </div>
              ))}
          </div>

          <div className="points-of-interest1">
              <div className="point-column">
                  <div className="point">Terms and conditions</div>
                  <div className="point">Blog</div>
                  <div className="point">Cookie settings</div>
              </div>
              <div className="point-column">
                  <div className="point">Warranty form</div>
                  <div className="point">Confidentiality policy</div>
                  <div className="point">© 2023–2024 Music Instruments</div>
              </div>
          </div>
      </div>
  );
}

export default Guitars;