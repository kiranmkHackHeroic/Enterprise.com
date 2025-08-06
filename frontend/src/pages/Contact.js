import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: response.data.message
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'contact@enterprise.com',
      link: 'mailto:contact@enterprise.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '123 Business Avenue, Enterprise City, EC 12345',
      link: 'https://maps.google.com/?q=123+Business+Avenue,+Enterprise+City,+EC+12345'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/company/enterprise', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/enterprise', label: 'Twitter' },
    { icon: FaFacebook, href: 'https://facebook.com/enterprise', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com/enterprise', label: 'Instagram' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Enterprise Solutions Inc.</title>
        <meta name="description" content="Get in touch with Enterprise Solutions Inc. Contact us for innovative technology solutions, digital transformation, and enterprise consulting services." />
        <meta name="keywords" content="contact enterprise solutions, get quote, technology consulting, digital transformation inquiry" />
      </Helmet>

      <div className="contact">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <h1>Get In Touch</h1>
              <p>
                Ready to transform your business? We'd love to hear from you. 
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="section contact-main">
          <div className="container">
            <div className="contact-content">
              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {submitStatus && (
                  <div className={`alert alert-${submitStatus.type}`}>
                    {submitStatus.type === 'success' ? (
                      <FaCheckCircle className="alert-icon" />
                    ) : (
                      <FaExclamationCircle className="alert-icon" />
                    )}
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                      <option value="Custom Development">Custom Development</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="IT Consulting">IT Consulting</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                      placeholder="Tell us about your project or inquiry..."
                      rows="6"
                    ></textarea>
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary btn-lg contact-submit ${isSubmitting ? 'btn-loading' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="btn-icon" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-info-section">
                <div className="contact-info-header">
                  <h3>Contact Information</h3>
                  <p>We're here to help and answer any questions you might have.</p>
                </div>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-item">
                      <div className="contact-info-icon">
                        <info.icon />
                      </div>
                      <div className="contact-info-content">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="contact-info-link"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p>{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-section">
                  <h4>Follow Us</h4>
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

                <div className="contact-card">
                  <h4>Ready to Get Started?</h4>
                  <p>Schedule a free consultation to discuss your project requirements.</p>
                  <a href="tel:+15551234567" className="btn btn-outline">
                    <FaPhone className="btn-icon-left" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4037927789314!2d-75.16903638433378!3d39.95233797942063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c88f4b5e4b9b%3A0x1234567890123456!2s123%20Business%20Ave%2C%20Philadelphia%2C%20PA%2019102!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enterprise Solutions Office Location"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
