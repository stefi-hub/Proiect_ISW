import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link component
import './contact.css';
import logoIcon from "./img/p1.jpg";

const Contact = ({ userName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose the email body with form data
    const subject = 'Regarding Your Inquiry';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nQuestion: ${formData.question}`;
    // Generate mailto link
    const emailLink = `mailto:musicshop@major.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Redirect user to email client
    window.location.href = emailLink;
  };

  return (
    <div className="contactpage">
      <div className="contact_background"></div>
      <div className="content-center">
          <div className="logo-section">
              <img src={logoIcon} alt="Logo" className="logo"/>
          </div>
          <div className="welcome-message">
              Hello, {userName}!
          </div>
      </div>

      <div className="topbar1">
          <ul className="top-links">
              <li><Link to="/contact" style={{color: 'white'}}>Contact us ✉️</Link></li>
              <li><Link to="/about" style={{color: 'white'}}>About us 📄</Link></li>
              <li><Link to="/shops" style={{color: 'white'}}>Shops 📌</Link></li>
              <li><Link to="/shoppingcart" style={{color: 'white'}}>Shopping Cart 🛒</Link></li>
              <li><Link to="/" style={{color: 'white'}}>Logout ↪</Link></li>
          </ul>
      </div>

      <div className="contact-section-description">
          <div className="inner-description">
              Welcome to our Contact Us page! Have a question, feedback, or just want to say hello? We'd love to
              hear from you! Feel free to reach out using the contact form below, and our team will get back to you
              as soon as possible.
              Alternatively, you can find our contact information listed below if you prefer to connect with us via
              email or phone. We're here to assist you with anything you need.
              Thank you for visiting!
          </div>
      </div>

      <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                  <label htmlFor="question">Your Question</label>
                  <textarea id="question" name="question" rows="4" value={formData.question} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>

      <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:musicshop@major.com">musicshop@major.com</a></p>
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
};

export default Contact;
