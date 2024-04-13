import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Homepage.css';
import logoIcon from './img/p1.jpg';
import slideShowImage1 from './img/p2.jpg';
import slideShowImage2 from './img/p3.jpg';
import slideShowImage3 from './img/p4.jpg';
import slideShowImage4 from './img/p5.jpg';
import { PRODUCTS } from './ProductsPage';

const Homepage = ({ userName }) => {

  const accessories = PRODUCTS.filter(product => product.id >= 9 && product.id <= 14);

  const imageLinks = [
    { src: slideShowImage1, url: '/guitars' },
    { src: slideShowImage2, url: '/pianos' },
    { src: slideShowImage3, url: '/tutorials' },
    { src: slideShowImage4, url: 'sheets' }
  ];

  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

  const prevSlide = () => {
    setCurrentIndices(currentIndices.map(index =>
      (index - 1 + imageLinks.length) % imageLinks.length
    ));
  };

  const nextSlide = () => {
    setCurrentIndices(currentIndices.map(index =>
      (index + 1) % imageLinks.length
    ));
  };

  return (
      <div className="homepage">
          <div className="homepage_background"></div>
          <div className="content-center">
              <div className="logo-section">
                  <Link to="/homepage">
                      <img src={logoIcon} alt="Logo" className="logo"/>
                  </Link>
              </div>
              <div className="welcome-message">
                  Hello, {userName}!
              </div>
          </div>

          <div className="topbar">
              <ul className="top-links">
                  <li><a href="/contact" style={{color: 'white'}}>Contact us ✉️</a></li>
                  <li><a href="/about" style={{color: 'white'}}>About us 📄</a></li>
                  <li><a href="/shops" style={{color: 'white'}}>Shops 📌</a></li>
                  <li><a href="/shoppingcart" style={{color: 'white'}}>Shopping Cart 🛒</a></li>
                  <li><a href="/" style={{color: 'white'}}>Logout ↪</a></li>
              </ul>
          </div>

          <div className="slideshow-container">
              <button className="arrow prev" onClick={prevSlide}>&lt;</button>
              <div className="slides">
                  {currentIndices.map((index) => (
                      <a
                          key={index}
                          href={imageLinks[index].url}
                          className="slide-link"
                          style={{
                              margin: '0 5px',
                              display: 'block',
                              flex: '0 0 calc(33.333% - 10px)',
                              borderRadius: '8px'
                          }}
                      >
                          <img
                              src={imageLinks[index].src}
                              alt={`Slide ${index + 1}`}
                              className="slide active"
                              style={{
                                  width: '100%',
                                  height: 'auto',
                                  borderRadius: '8px'
                              }}
                          />
                      </a>
                  ))}
              </div>
              <button className="arrow next" onClick={nextSlide}>&gt;</button>
          </div>

          <div className="accessories-text">
              Accessories
          </div>

          <div className="accessories-description">
              <div className="inner-description1">
                  Discover our select range of accessories, each built with craftsmanship and dedication. Their
                  exceptional finishes are the perfect choice for any musician.
              </div>
          </div>

          <div className="accessories-section">
              {accessories.map((accessory) => (
                  <div key={accessory.id} className="accessory-container">
                      <Link to={`/product/${accessory.name.toLowerCase()}`} className="accessory-link">
                          <img src={accessory.image} alt={accessory.name} className="accessory-image"/>
                          <div className="accessory-name">{accessory.name}</div>
                      </Link>
                  </div>
              ))}
          </div>

          <div className="social-media-text">
              Follow us for more content!
          </div>
          <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                 className="social-media-link">
                  <FontAwesomeIcon icon={faFacebookF}/> Facebook
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-link">
                  <FontAwesomeIcon icon={faTwitter}/> Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                 className="social-media-link">
                  <FontAwesomeIcon icon={faInstagram}/> Instagram
              </a>
          </div>

          <div className="points-of-interest">
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
};

export default Homepage;