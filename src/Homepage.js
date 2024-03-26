import React, { useState } from 'react';
import './Homepage.css';
import logoIcon from './img/p1.jpg';
import slideShowImage1 from './img/p2.jpg';
import slideShowImage2 from './img/p3.jpg';
import slideShowImage3 from './img/p4.jpg';
import slideShowImage4 from './img/p5.jpg';

const Homepage = ({ logout }) => {

  const imageLinks = [slideShowImage1, slideShowImage2, slideShowImage3, slideShowImage4];
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

          <div className="logo-section">
              <img src={logoIcon} alt="Logo" className="logo"/>
          </div>

          <div className="topbar">
              <ul className="top-links">
                  <li><a href="/contact" style={{color: 'white'}}>Contact us</a></li>
                  <li><a href="/about" style={{color: 'white'}}>About us</a></li>
                  <li><a href="/shops" style={{color: 'white'}}>Shops</a></li>
                  <li><a href="/shoppingcart" style={{color: 'white'}}>Shopping Cart</a></li>
                  <li><a href="/login" style={{color: 'white'}}>Logout</a></li>
              </ul>
          </div>

          <div className="slideshow-container">
              <button className="arrow prev" onClick={prevSlide}>&lt;</button>
              <div className="slides">
                  {currentIndices.map((index) => (
                      <a
                          key={index}
                          href="#" // Acesta este locul unde veți adăuga linkul corespunzător fiecărei imagini
                          target="_blank"
                          rel="noopener noreferrer"
                          className="slide-link"
                          style={{
                              margin: '0 5px',
                              display: 'block',
                              flex: '0 0 calc(33.333% - 10px)',
                              borderRadius: '8px'
                          }}
                      >
                          <img
                              src={imageLinks[index]}
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

          <div className="Our-categories">

          </div>

          <div className="Accesories">

          </div>

          <div className="social-media">
              <span>Twitter</span>
              <span>Instagram</span>
              <span>Facebook</span>
          </div>

          <div className="points-of-interest">
              <div className="point1">Subscribe to our Newsletter</div>
              <div className="point2">Featured Images</div>
          </div>

      </div>
  );
};

export default Homepage;
