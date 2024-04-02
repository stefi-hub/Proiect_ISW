import React from 'react';
import './tutorials.css';
import logoIcon from "./img/p1.jpg";
import tutorial1 from './img/tutorial1.jpg';
import tutorial2 from './img/tutorial2.jpg';
import tutorial3 from './img/tutorial3.jpg';
import tutorial4 from './img/tutorial4.jpg';
import tutorial5 from './img/tutorial5.jpg';
import tutorial6 from './img/tutorial6.jpg';

const Tutorials = () => {

  const tutorials = [
    { src: tutorial1, name: 'Tutorial1', url: 'https://youtu.be/9hxpiFn1DQU/tutorial1' },
    { src: tutorial2, name: 'Tutorial2', url: 'https://youtu.be/37TWriTiCmE/tutorial2' },
    { src: tutorial3, name: 'Tutorial3', url: 'https://youtu.be/MT-DAlvPeOs/tutorial3' },
    { src: tutorial4, name: 'Tutorial4', url: 'https://youtu.be/H1Dvg2MxQn8/tutorial4' },
    { src: tutorial5, name: 'Tutorial5', url: 'https://youtu.be/4Ffq7i-CTcg/tutorial5' },
    { src: tutorial6, name: 'Tutorial6', url: 'https://youtu.be/4y33h81phKU/tutorial6' },
];


  return (
      <div className="tutorialspage">
          <div className="tutorial_background"></div>
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

          <div className="tutorial-section-description">
              <div className="inner-description">
                  This is your ultimate online resource for mastering the guitar and piano! Our selection of tutorials offers you
                  direct links to some of the best lessons available on YouTube, chosen to cater to musicians of all levels.
              </div>
          </div>

          <div className="tutorial-section">
              {[0, 1].map(row => (
                  <div key={row} className="tutorial-row">
                      {tutorials.slice(row * 3, (row + 1) * 3).map(tutorial => (
                          <div key={tutorial.name} className="tutorial-column">
                              <img src={tutorial.src} alt={tutorial.name} className="tutorial-image"/>
                              <div className="tutorial-name">
                                  <a href={tutorial.url} target="_blank" rel="noopener noreferrer"
                                     className="tutorial-link">
                                      {tutorial.name}
                                  </a>
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

export default Tutorials;