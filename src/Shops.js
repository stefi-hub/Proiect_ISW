import React from 'react';
import './Shops.css';
import logoIcon from "./img/p1.jpg";
import shopPhoto1 from "./img/sh1.jpg";
import shopPhoto2 from "./img/sh2.jpg";
import shopPhoto3 from "./img/sh3.jpg";
import { Link } from "react-router-dom";

const MapPage = ({ userName }) => {
  const ourShops = [
    { name: 'Guitar Shop Balcescu', url: 'https://www.mcmusic.ro/content/mcmusic-brasov' },
    { name: 'M&C Musical', url: 'https://www.guitarshop.ro/articole/contact.html' },
    { name: 'Spinning - Music', url: 'https://www.facebook.com/p/Spinning-Music-Shop-100054296060639/' },
  ];

  const supplierShops = [
    { name: 'Normans Musical', url: 'https://www.mcmusic.ro/content/mcmusic-brasov' },
    { name: 'National Music', url: 'https://www.unmb.ro/en/' },
    { name: 'LMS Music', url: 'https://evosound.com/' },
  ];

  const associatedShops = [
    { name: 'Evosound', url: 'https://www.mcmusic.ro/content/mcmusic-brasov' },
    { name: 'SoundStil', url: 'https://www.soundstil.ro/' },
    { name: 'Roton Music Brasov', url: 'https://roton.ro/about-us/' },
  ];

  return (
    <div className="mappage">
      <div className="map_background"></div>
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

      <iframe
        src="https://www.google.com.qa/maps/d/u/0/embed?mid=1j4_qVRHnYw1yPeaTov0vVfeBknsFqaw&ehbc=2E312F"
        width="800" // increase width
        height="600" // increase height
        style={{ margin: 'auto', display: 'block' }}
        title="Map"
      ></iframe>

      <div className="shop-locations">
        <img src={shopPhoto1} alt="Shop Photo 1" className="shop-photo" />
        <div className="shop-column">
          <h2>Our Shops</h2>
          <ul className="shop-list">
            {ourShops.map((shop, index) => (
              <li key={index}>
                <a href={shop.url} target="_blank" rel="noopener noreferrer">{shop.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <img src={shopPhoto2} alt="Shop Photo 2" className="shop-photo" />
        <div className="shop-column">
          <h2>Supplier Shops</h2>
          <ul className="shop-list">
            {supplierShops.map((shop, index) => (
              <li key={index}>
                <a href={shop.url} target="_blank" rel="noopener noreferrer">{shop.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <img src={shopPhoto3} alt="Shop Photo 3" className="shop-photo" />
        <div className="shop-column">
          <h2>Associated Shops</h2>
          <ul className="shop-list">
            {associatedShops.map((shop, index) => (
              <li key={index}>
                <a href={shop.url} target="_blank" rel="noopener noreferrer">{shop.name}</a>
              </li>
            ))}
          </ul>
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

export default MapPage;
