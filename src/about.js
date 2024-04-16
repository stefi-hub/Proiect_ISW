import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import StatsImage from './img/shot5.gif';
import logoIcon from "./img/p1.jpg";

const About = ({ userName }) => {
  return (
    <div className="aboutpage">
      <div className="about_background"></div>
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

      <div className="about-us-stats-container">
        <div className="about-us-section">
          <div className="about-us-content">
            <h2>About Us</h2>
            <p><strong>About Us: Your Musical Oasis</strong></p>
            <p>Welcome to Your Musical Oasis, where melody meets mastery, and passion harmonizes with proficiency. We
              are more than just a marketplace for musical instruments; we are a community-driven platform dedicated to
              nurturing the musical aspirations of enthusiasts, beginners, and virtuosos alike.</p>
            <p><strong>Our Mission: Striking the Chords of Creativity</strong></p>
            <p>At Your Musical Oasis, our mission is simple yet profound: to inspire, empower, and connect individuals
              through the universal language of music. We believe that everyone deserves the opportunity to explore
              their musical potential, regardless of age, background, or skill level. Through our curated selection of
              instruments, comprehensive tutorials, and vibrant community forums, we aim to foster a culture of
              creativity and lifelong learning.</p>
            <p><strong>What Sets Us Apart:</strong></p>
            <p>As musicians ourselves, we understand the unique needs and desires of our fellow artists. That's why we
              go beyond merely selling instruments. We offer a symphony of services designed to support every stage of
              your musical journey:</p>
            <p>1. <strong>Expertly Curated Instruments</strong>: From classic guitars to cutting-edge synthesizers, we handpick each
              instrument in our catalog for its quality, craftsmanship, and sonic potential. Whether you're a seasoned
              performer or a budding prodigy, you'll find the perfect instrument to fuel your passion.</p>
            <p>2. <strong>Comprehensive Tutorials</strong>: Learning an instrument should be an enriching and enjoyable experience.
              That's why we provide a wealth of tutorials, guides, and resources to help you master your chosen craft.
              Whether you're strumming your first chords or composing complex symphonies, our expert instructors are
              here to guide you every step of the way.</p>
            <p>3. <strong>Interactive Workshops and Events</strong>: Music is meant to be shared. That's why we host a variety of
              interactive workshops, masterclasses, and live events to bring our community together. Whether you're
              seeking inspiration, feedback, or collaboration, you'll find a welcoming space to connect with fellow
              musicians and creators.</p>
            <p>4. <strong>Personalized Shopping Experience</strong>: We understand that choosing the right instrument is a deeply
              personal decision. That's why our team of musical experts is always on hand to provide personalized
              recommendations, answer your questions, and ensure that you find the perfect instrument to match your
              unique style and preferences.</p>
            <p><strong>Our Commitment: Empowering Dreams, One Note at a Time</strong></p>
            <p>At Your Musical Oasis, we believe that music has the power to transform lives, uplift spirits, and unite
              hearts. That's why we're committed to empowering your dreams, one note at a time. Whether you're a
              seasoned professional or a curious beginner, we invite you to join our vibrant community and embark on a
              musical journey like no other. Together, let's create harmony, inspire greatness, and celebrate the
              timeless beauty of music.</p>
          </div>
        </div>
        <div className="stats-section">
          <h2>Our Stats</h2>
          <img src={StatsImage} alt="Stats Image"/>
          <ul>
            <li><strong>Years in business:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>10</span></li>
            <li><strong>Happy customers served:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>100,000</span></li>
            <li><strong>Products available:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>1000+</span></li>
            <li><strong>Locations:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>3</span></li>
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

export default About;
