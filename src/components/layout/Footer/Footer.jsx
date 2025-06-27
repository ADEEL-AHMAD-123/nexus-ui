import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="nexus-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo/Brand Section */}
          <div className="footer-brand">
            <h2 className="logo">NEXUS</h2>
            <p>
              Empowering your digital transformation through AI-driven, scalable, and secure software solutions.
            </p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>Technologies</li>
              <li>AI Learning</li>
              <li>IT Strategies</li>
              <li>IT Consulting</li>
              <li>Management</li>
              <li>Cloud Migration</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Our Team</li>
              <li>News</li>
              <li>Partner</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-links">
            <h4>Industries</h4>
            <ul>
              <li>Construction</li>
              <li>Healthcare</li>
              <li>Ecommerce</li>
              <li>Fintech</li>
              <li>Logistic</li>
              <li>Travel Industry</li>
              <li>Legal</li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-links">
            <h4>Help</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>FAQ</li>
              <li>Consultation</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NEXUS Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
