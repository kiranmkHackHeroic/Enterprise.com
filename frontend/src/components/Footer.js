import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' }
  ];

  const services = [
    { path: '/services', label: 'Digital Transformation' },
    { path: '/services', label: 'Cloud Solutions' },
    { path: '/services', label: 'Software Development' },
    { path: '/services', label: 'IT Consulting' }
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/company/enterprise', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/enterprise', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://facebook.com/enterprise', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://instagram.com/enterprise', icon: FaInstagram, label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <div className="logo-text">
                <span className="logo-primary">Enterprise</span>
                <span className="logo-secondary">Solutions</span>
              </div>
            </div>
            <p className="footer-description">
              Leading provider of innovative technology solutions for businesses worldwide. 
              We help enterprises transform digitally and achieve their full potential.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/team" className="footer-link">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="footer-link">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Business Avenue<br />Enterprise City, EC 12345</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+15551234567" className="contact-link">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:contact@enterprise.com" className="contact-link">
                  contact@enterprise.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Enterprise Solutions Inc. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/cookies" className="footer-bottom-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
