import React from 'react';
import { Link } from 'react-router-dom';
import './guitars.css';
import logoIcon from "./img/p1.jpg";
import electric from './img/electric.jpg';
import acoustic from './img/acoustic.jpg';
import clasic from './img/clasic.jpg';
import bass from './img/bass.jpg';
import ukulele from './img/ukulele.jpg';
import banjo from './img/banjo.jpg';

const Guitars = () => {

  const guitars = [
    { src: electric, name: 'Electric' },
    { src: acoustic, name: 'Acoustic' },
    { src: clasic, name: 'Clasic' },
    { src: bass, name: 'Bass' },
    { src: ukulele, name: 'Ukulele' },
    { src: banjo, name: 'Banjo' },
  ];

  return (
      <div className="guitarspage">
          <div className="guitar_background"></div>
          <div className="content-center1">
              <div className="logo-section">
                  <img src={logoIcon} alt="Logo" className="logo"/>
              </div>
              <div className="welcome-message">
                  Hello, username!
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
                  Discover our select range of guitars, each built with craftsmanship and dedication. Their quality sound and
                  exceptional finishes are the perfect choice for any musician.
              </div>
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