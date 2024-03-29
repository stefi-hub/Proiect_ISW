import React from 'react';
import './sheets.css';
import logoIcon from "./img/p1.jpg";
import sheet1 from './img/sheet1.jpg';
import sheet2 from './img/sheet2.jpg';
import sheet3 from './img/sheet3.jpg';
import sheet4 from './img/sheet4.jpg';
import sheet5 from './img/sheet5.jpg';
import sheet6 from './img/sheet6.jpg';

const Sheets = () => {

  const sheets = [
    { src: sheet1, name: 'Sheet1', url: '/sheet1.pdf' },
    { src: sheet2, name: 'Sheet2', url: '/sheet2.pdf' },
    { src: sheet3, name: 'Sheet3', url: '/sheet3.pdf' },
    { src: sheet4, name: 'Sheet4', url: '/sheet4.pdf' },
    { src: sheet5, name: 'Sheet5', url: '/sheet5.pdf' },
    { src: sheet6, name: 'Sheet6', url: '/sheet6.pdf' },
  ];


  return (
      <div className="sheetspage">
          <div className="sheet_background"></div>
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

          <div className="sheet-section-description">
              <div className="inner-description">
                  This is your premier destination for top-notch guitar tabs! Our platform is dedicated to helping you play your
                  favorite tunes with ease and precision. With a small collection that spans genres, we bring you the most accurate
                  tabs for beginners and seasoned guitarists alike.
              </div>
          </div>

          <div className="sheet-section">
              {[0, 1].map(row => (
                  <div key={row} className="sheet-row">
                      {sheets.slice(row * 3, (row + 1) * 3).map(sheet => (
                          <div key={sheet.name} className="sheet-column">
                              <img src={sheet.src} alt={sheet.name} className="sheet-image"/>
                              <div className="sheet-name">
                                  <a href={window.location.origin + sheet.url} target="_blank" rel="noopener noreferrer" className="sheet-link">
                                      {sheet.name}
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

export default Sheets;