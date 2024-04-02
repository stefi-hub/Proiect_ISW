import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import logoIcon from "./img/p1.jpg";

const   Contact = () => {

 

  return (
    <div className="contactpage">
      <div className="contact_background"></div>
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

      <div className="contact-section-description">
        <div className="inner-description">
          Welcome to our Contact Us page! Have a question, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out using the contact form below, and our team will get back to you as soon as possible.
          Alternatively, you can find our contact information listed below if you prefer to connect with us via email or phone. We're here to assist you with anything you need.
          Thank you for visiting!


        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="question">Your Question</label>
            <textarea id="question" name="question" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: musicshop@major.com</p>
        <p>Phone: +40 749283617</p>
        <p>Address: 123 Music Street, Brasov, Romania</p>
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

export default Contact;
