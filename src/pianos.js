import React from 'react';
import { Link } from 'react-router-dom';
import './pianos.css';
import logoIcon from "./img/p1.jpg";
import arranger from './img/arranger.jpg';
import midi from './img/midi.jpg';
import upright from './img/upright.jpg';
import grand from './img/grand.jpg';
import organ from './img/organ.jpg';
import acordeon from './img/acordeon.jpg';

const Pianos = () => {

    const pianos = [
    { src: arranger, name: 'Arranger' },
    { src: midi, name: 'Midi' },
    { src: upright, name: 'Upright' },
    { src: grand, name: 'Grand' },
    { src: organ, name: 'Organ' },
    { src: acordeon, name: 'Acordeon' },
  ];

  return (
    <div className="pianospage">
        <div className="piano_background"></div>
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

        <div className="piano-section-description">
            <div className="inner-description">
                Discover our select range of pianos, each built with craftsmanship and dedication. Their quality sound and
                exceptional finishes are the perfect choice for any musician.
            </div>
        </div>

        <div className="piano-section">
            {[0, 1].map(row => (
                <div key={row} className="piano-row">
                    {pianos.slice(row * 3, (row + 1) * 3).map(piano => (
                        <div key={piano.name} className="piano-column">
                        <img src={piano.src} alt={piano.name} className="piano-image"/>
                            <div className="piano-name">
                                <Link to={`/product/${piano.name.toLowerCase()}`} className="piano-link">
                                    {piano.name}
                                </Link>
                            </div>
                        </div>
                    ))}
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

export default Pianos;