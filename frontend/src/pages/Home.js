import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  FaRocket, 
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaArrowRight,
  FaQuoteLeft,
  FaStar
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Animate stats
    const timer = setTimeout(() => {
      setStats({
        projects: 500,
        clients: 150,
        experience: 15,
        satisfaction: 98
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: FaCode,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements and challenges.'
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to enhance flexibility and reduce operational costs.'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.'
    },
    {
      icon: FaChartLine,
      title: 'Data Analytics',
      description: 'Advanced analytics and AI solutions to unlock valuable insights from your data.'
    },
    {
      icon: FaCogs,
      title: 'Digital Transformation',
      description: 'End-to-end transformation services to modernize your business operations.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation Consulting',
      description: 'Strategic guidance to help you leverage cutting-edge technologies for competitive advantage.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Industries',
      position: 'CEO',
      content: 'Enterprise Solutions transformed our business completely. Their expertise in digital transformation helped us increase efficiency by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Manufacturing',
      position: 'CTO',
      content: 'The cloud migration was seamless and professional. We experienced zero downtime and immediate performance improvements.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Financial Services Group',
      position: 'VP Technology',
      content: 'Their cybersecurity solutions have given us complete peace of mind. Outstanding team and exceptional results.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions Inc. - Leading Technology Solutions Provider</title>
        <meta name="description" content="Transform your business with our innovative technology solutions. Digital transformation, cloud services, cybersecurity, and custom development." />
        <meta name="keywords" content="enterprise solutions, digital transformation, cloud services, software development, cybersecurity, IT consulting" />
      </Helmet>

      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
              <h1 className="hero-title">
                Innovating Your 
                <span className="highlight"> Business Future</span>
              </h1>
              <p className="hero-description">
                We are a leading enterprise solutions provider, delivering cutting-edge technology 
                and strategic consulting services to help businesses thrive in the digital age.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started Today
                  <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/portfolio" className="btn btn-outline btn-lg">
                  View Our Work
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">{stats.projects}+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{stats.clients}+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{stats.experience}+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{stats.satisfaction}%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section features">
          <div className="container">
            <div className="section-header text-center">
              <h2>Why Choose Enterprise Solutions?</h2>
              <p>We deliver exceptional value through our comprehensive suite of technology services</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card card">
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section services-preview">
          <div className="container">
            <div className="services-content">
              <div className="services-text">
                <h2>Comprehensive Technology Solutions</h2>
                <p>
                  From digital transformation to cloud migration, we provide end-to-end 
                  technology solutions that drive growth and innovation for your business.
                </p>
                <ul className="services-list">
                  <li><FaRocket /> Digital Transformation</li>
                  <li><FaCloud /> Cloud Solutions & Migration</li>
                  <li><FaCode /> Custom Software Development</li>
                  <li><FaShieldAlt /> Cybersecurity Services</li>
                  <li><FaChartLine /> Data Analytics & AI</li>
                  <li><FaCogs /> IT Consulting & Support</li>
                </ul>
                <Link to="/services" className="btn btn-primary">
                  Explore All Services
                  <FaArrowRight className="btn-icon" />
                </Link>
              </div>
              <div className="services-visual">
                <div className="tech-grid">
                  <div className="tech-item">React</div>
                  <div className="tech-item">Node.js</div>
                  <div className="tech-item">AWS</div>
                  <div className="tech-item">Python</div>
                  <div className="tech-item">Docker</div>
                  <div className="tech-item">Kubernetes</div>
                  <div className="tech-item">PostgreSQL</div>
                  <div className="tech-item">MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section testimonials">
          <div className="container">
            <div className="section-header text-center">
              <h2>What Our Clients Say</h2>
              <p>Don't just take our word for it - hear from our satisfied clients</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card card">
                  <div className="testimonial-content">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-text">{testimonial.content}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-title">{testimonial.position}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Let's discuss how our innovative solutions can help your organization 
                achieve its digital transformation goals.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start Your Project
                  <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/portfolio" className="btn btn-outline btn-lg">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
