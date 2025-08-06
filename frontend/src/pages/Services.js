import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaCogs, 
  FaLightbulb,
  FaArrowRight,
  FaCheck,
  FaRocket
} from 'react-icons/fa';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from the API
    // For now, we'll use static data
    const servicesData = [
      {
        id: 1,
        title: 'Digital Transformation',
        description: 'Comprehensive digital transformation services to modernize your business operations and improve efficiency.',
        icon: 'digital-transformation',
        IconComponent: FaCogs,
        features: [
          'Legacy System Modernization',
          'Process Automation',
          'Digital Strategy Consulting',
          'Change Management'
        ],
        category: 'Consulting',
        pricing: 'Custom Quote',
        duration: '3-12 months'
      },
      {
        id: 2,
        title: 'Custom Software Development',
        description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
        icon: 'code',
        IconComponent: FaCode,
        features: [
          'Web Application Development',
          'Mobile App Development',
          'API Integration',
          'Software Maintenance'
        ],
        category: 'Development',
        pricing: 'Starting at $25k',
        duration: '2-8 months'
      },
      {
        id: 3,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and services to enhance your business flexibility and reduce costs.',
        icon: 'cloud',
        IconComponent: FaCloud,
        features: [
          'Cloud Architecture Design',
          'Multi-Cloud Management',
          'DevOps Implementation',
          'Cloud Security'
        ],
        category: 'Infrastructure',
        pricing: 'Starting at $15k',
        duration: '1-6 months'
      },
      {
        id: 4,
        title: 'Data Analytics & AI',
        description: 'Advanced analytics and artificial intelligence solutions to unlock insights from your data.',
        icon: 'analytics',
        IconComponent: FaChartLine,
        features: [
          'Business Intelligence',
          'Machine Learning Models',
          'Data Visualization',
          'Predictive Analytics'
        ],
        category: 'Analytics',
        pricing: 'Starting at $30k',
        duration: '2-10 months'
      },
      {
        id: 5,
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
        icon: 'security',
        IconComponent: FaShieldAlt,
        features: [
          'Security Assessment',
          'Threat Monitoring',
          'Compliance Management',
          'Incident Response'
        ],
        category: 'Security',
        pricing: 'Starting at $20k',
        duration: '1-4 months'
      },
      {
        id: 6,
        title: 'IT Consulting',
        description: 'Strategic IT consulting services to align technology with your business objectives.',
        icon: 'consulting',
        IconComponent: FaLightbulb,
        features: [
          'Technology Strategy',
          'System Integration',
          'Performance Optimization',
          'Change Management'
        ],
        category: 'Consulting',
        pricing: 'Starting at $10k',
        duration: '1-3 months'
      }
    ];

    setServices(servicesData);
    setLoading(false);
  }, []);

  const categories = ['All', 'Consulting', 'Development', 'Infrastructure', 'Analytics', 'Security'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  if (loading) {
    return (
      <div className="services-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Services - Enterprise Solutions Inc.</title>
        <meta name="description" content="Comprehensive technology services including digital transformation, cloud solutions, cybersecurity, custom development, and IT consulting." />
        <meta name="keywords" content="enterprise services, digital transformation, cloud solutions, cybersecurity, software development, IT consulting" />
      </Helmet>

      <div className="services">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content">
              <h1>Our Services</h1>
              <p>
                Comprehensive technology solutions designed to transform your business 
                and drive sustainable growth in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section services-overview">
          <div className="container">
            <div className="section-header text-center">
              <h2>What We Offer</h2>
              <p>End-to-end technology services to meet all your business needs</p>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              {filteredServices.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-header">
                    <div className="service-icon">
                      <service.IconComponent />
                    </div>
                    <div className="service-meta">
                      <span className="service-category">{service.category}</span>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                  </div>

                  <p className="service-description">{service.description}</p>

                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <FaCheck className="feature-check" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-details">
                    <div className="service-pricing">
                      <span className="pricing-label">Investment:</span>
                      <span className="pricing-value">{service.pricing}</span>
                    </div>
                    <div className="service-duration">
                      <span className="duration-label">Timeline:</span>
                      <span className="duration-value">{service.duration}</span>
                    </div>
                  </div>

                  <div className="service-actions">
                    <Link to="/contact" className="btn btn-primary">
                      Get Quote
                      <FaArrowRight className="btn-icon" />
                    </Link>
                    <button className="btn btn-outline learn-more-btn">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section process-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Process</h2>
              <p>How we deliver exceptional results for our clients</p>
            </div>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Discovery & Analysis</h3>
                  <p>We begin by understanding your business needs, challenges, and goals through comprehensive analysis.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Strategy & Planning</h3>
                  <p>Our experts develop a tailored strategy and detailed project plan aligned with your objectives.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Implementation</h3>
                  <p>We execute the project using agile methodologies, ensuring quality and timely delivery.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Testing & Optimization</h3>
                  <p>Rigorous testing and optimization ensure the solution meets all requirements and performs optimally.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Launch & Support</h3>
                  <p>We ensure smooth deployment and provide ongoing support to maximize your investment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content text-center">
              <FaRocket className="cta-icon" />
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Let's discuss how our services can help you achieve your digital transformation goals. 
                Get a free consultation and custom quote today.
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

      <style jsx>{`
        .services {
          padding-top: 80px;
        }

        /* Loading State */
        .services-loading {
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid var(--light-gray);
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto var(--spacing-lg);
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Hero Section */
        .services-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .services-hero-content h1 {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .services-hero-content p {
          font-size: var(--font-size-lg);
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Services Overview */
        .services-overview {
          background: var(--light-gray);
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-3xl);
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: var(--spacing-sm) var(--spacing-lg);
          border: 2px solid var(--medium-gray);
          background: var(--white);
          color: var(--dark-gray);
          border-radius: var(--border-radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary-color);
          color: var(--white);
          border-color: var(--primary-color);
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }

        .service-card {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-2xl);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
          border: 1px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary-color);
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
          border-radius: var(--border-radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: var(--font-size-xl);
          flex-shrink: 0;
        }

        .service-meta {
          flex: 1;
        }

        .service-category {
          background: var(--light-gray);
          color: var(--primary-color);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius-sm);
          font-size: var(--font-size-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .service-title {
          margin: var(--spacing-sm) 0 0 0;
          color: var(--black);
          font-size: var(--font-size-xl);
        }

        .service-description {
          color: var(--dark-gray);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }

        .service-features {
          margin-bottom: var(--spacing-lg);
        }

        .service-features h4 {
          color: var(--black);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-base);
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          color: var(--dark-gray);
        }

        .feature-check {
          color: var(--success-color);
          font-size: var(--font-size-sm);
          flex-shrink: 0;
        }

        .service-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          padding: var(--spacing-md);
          background: var(--light-gray);
          border-radius: var(--border-radius-md);
        }

        .service-pricing,
        .service-duration {
          text-align: center;
        }

        .pricing-label,
        .duration-label {
          display: block;
          font-size: var(--font-size-xs);
          color: var(--secondary-color);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--spacing-xs);
        }

        .pricing-value,
        .duration-value {
          display: block;
          font-weight: 600;
          color: var(--black);
          font-size: var(--font-size-sm);
        }

        .service-actions {
          display: flex;
          gap: var(--spacing-sm);
        }

        .service-actions .btn {
          flex: 1;
          text-align: center;
          font-size: var(--font-size-sm);
          padding: var(--spacing-sm) var(--spacing-md);
        }

        .btn-icon {
          margin-left: var(--spacing-xs);
          font-size: var(--font-size-xs);
        }

        /* Process Section */
        .process-section {
          background: var(--white);
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-2xl);
        }

        .process-step {
          text-align: center;
          position: relative;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          font-weight: 800;
          margin: 0 auto var(--spacing-lg);
          position: relative;
          z-index: 2;
        }

        .step-content h3 {
          margin-bottom: var(--spacing-md);
          color: var(--black);
        }

        .step-content p {
          color: var(--dark-gray);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          color: var(--white);
        }

        .cta-icon {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .cta-content h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .cta-content p {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-2xl);
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-section .btn-outline {
          border-color: var(--white);
          color: var(--white);
        }

        .cta-section .btn-outline:hover {
          background-color: var(--white);
          color: var(--primary-color);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-actions {
            flex-direction: column;
          }

          .process-steps {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions .btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .category-filter {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: var(--spacing-sm);
          }

          .filter-btn {
            white-space: nowrap;
            flex-shrink: 0;
          }

          .service-card {
            padding: var(--spacing-lg);
          }

          .service-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
