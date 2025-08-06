import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaArrowRight,
  FaFilter
} from 'react-icons/fa';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Simulate API call
    const portfolioData = [
      {
        id: 1,
        title: 'E-commerce Platform Modernization',
        client: 'RetailTech Solutions',
        category: 'Digital Transformation',
        description: 'Complete modernization of legacy e-commerce platform, resulting in 60% faster load times and 35% increase in conversions.',
        image: '/images/portfolio/ecommerce-modernization.jpg',
        technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
        duration: '8 months',
        results: [
          '60% faster page load times',
          '35% increase in conversion rates',
          '50% reduction in server costs',
          '99.9% uptime achievement'
        ],
        liveUrl: '#',
        caseStudyUrl: '#'
      },
      {
        id: 2,
        title: 'AI-Powered Analytics Dashboard',
        client: 'DataDriven Corp',
        category: 'Data Analytics & AI',
        description: 'Development of an AI-powered analytics dashboard that provides real-time business insights and predictive analytics.',
        image: '/images/portfolio/ai-analytics-dashboard.jpg',
        technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
        duration: '6 months',
        results: [
          '90% faster data processing',
          '25% improvement in decision-making speed',
          'Real-time insights capability',
          'Predictive accuracy of 95%'
        ],
        liveUrl: '#',
        caseStudyUrl: '#'
      },
      {
        id: 3,
        title: 'Cloud Infrastructure Migration',
        client: 'Enterprise Manufacturing',
        category: 'Cloud Solutions',
        description: 'Migration of on-premise infrastructure to multi-cloud environment with improved scalability and security.',
        image: '/images/portfolio/cloud-migration.jpg',
        technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
        duration: '4 months',
        results: [
          '40% reduction in infrastructure costs',
          '99.99% uptime achieved',
          'Auto-scaling implementation',
          'Enhanced disaster recovery'
        ],
        liveUrl: '#',
        caseStudyUrl: '#'
      },
      {
        id: 4,
        title: 'Mobile Banking Application',
        client: 'SecureBank Financial',
        category: 'Custom Software Development',
        description: 'Development of a secure mobile banking application with biometric authentication and real-time transaction capabilities.',
        image: '/images/portfolio/mobile-banking.jpg',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
        duration: '10 months',
        results: [
          '1M+ downloads in first year',
          '4.8/5 app store rating',
          'Zero security incidents',
          '70% increase in mobile transactions'
        ],
        liveUrl: '#',
        caseStudyUrl: '#'
      },
      {
        id: 5,
        title: 'Cybersecurity Framework Implementation',
        client: 'HealthTech Systems',
        category: 'Cybersecurity',
        description: 'Implementation of comprehensive cybersecurity framework for healthcare data protection and HIPAA compliance.',
        image: '/images/portfolio/cybersecurity-framework.jpg',
        technologies: ['Security Tools', 'Monitoring Systems', 'Compliance Software'],
        duration: '3 months',
        results: [
          '100% HIPAA compliance achieved',
          'Zero security breaches',
          '24/7 threat monitoring',
          'Employee security training program'
        ],
        liveUrl: '#',
        caseStudyUrl: '#'
      },
      {
        id: 6,
        title: 'Supply Chain Optimization Platform',
        client: 'Global Logistics Inc.',
        category: 'Digital Transformation',
        description: 'Digital transformation of supply chain operations with IoT integration and predictive analytics.',
        image: '/images/portfolio/supply-chain.jpg',
        technologies: ['IoT Sensors', 'Machine Learning', 'React', 'Python'],
        duration: '12 months',
        results: [
          '30% reduction in delivery times',
          '25% cost savings',
          'Real-time tracking capability',
          'Predictive maintenance implementation'
        ],
        liveUrl: '#',
        caseStudyUrl: '#'
      }
    ];

    setProjects(portfolioData);
    setLoading(false);
  }, []);

  const categories = ['All', 'Digital Transformation', 'Cloud Solutions', 'Custom Software Development', 'Data Analytics & AI', 'Cybersecurity'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  if (loading) {
    return (
      <div className="portfolio-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Portfolio - Enterprise Solutions Inc.</title>
        <meta name="description" content="Explore our portfolio of successful projects including digital transformation, cloud solutions, cybersecurity, and custom software development." />
        <meta name="keywords" content="enterprise portfolio, case studies, digital transformation projects, cloud migration, software development" />
      </Helmet>

      <div className="portfolio">
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="container">
            <div className="portfolio-hero-content">
              <h1>Our Portfolio</h1>
              <p>
                Discover how we've helped businesses transform and achieve remarkable results 
                through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section portfolio-main">
          <div className="container">
            <div className="portfolio-header">
              <div className="section-header">
                <h2>Success Stories</h2>
                <p>Real projects, real results for real businesses</p>
              </div>

              {/* Category Filter */}
              <div className="portfolio-filter">
                <FaFilter className="filter-icon" />
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="portfolio-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="portfolio-card">
                  <div className="portfolio-image">
                    <div className="image-placeholder">
                      <span className="project-category">{project.category}</span>
                    </div>
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={project.liveUrl} className="portfolio-action" aria-label="View Live Project">
                          <FaExternalLinkAlt />
                        </a>
                        <a href={project.caseStudyUrl} className="portfolio-action" aria-label="View Case Study">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio-content">
                    <div className="portfolio-meta">
                      <span className="portfolio-client">{project.client}</span>
                      <span className="portfolio-duration">{project.duration}</span>
                    </div>

                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>

                    <div className="portfolio-technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="portfolio-results">
                      <h4>Key Results:</h4>
                      <ul>
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="portfolio-footer">
                      <a href={project.caseStudyUrl} className="btn btn-outline btn-sm">
                        Read Case Study
                        <FaArrowRight className="btn-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section portfolio-stats">
          <div className="container">
            <div className="stats-content">
              <div className="stats-text">
                <h2>Portfolio Highlights</h2>
                <p>
                  Our portfolio represents years of successful collaboration with clients 
                  across various industries, delivering measurable results and driving 
                  business transformation.
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Industry Verticals</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$50M+</div>
                  <div className="stat-label">Client ROI Generated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to Create Your Success Story?</h2>
              <p>
                Let's discuss how we can help you achieve similar results for your business. 
                Every great project starts with a conversation.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start Your Project
                  <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .portfolio {
          padding-top: 80px;
        }

        /* Loading State */
        .portfolio-loading {
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

        /* Hero Section */
        .portfolio-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: var(--white);
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .portfolio-hero-content h1 {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .portfolio-hero-content p {
          font-size: var(--font-size-lg);
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Portfolio Main */
        .portfolio-main {
          background: var(--light-gray);
        }

        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--spacing-3xl);
          flex-wrap: wrap;
          gap: var(--spacing-lg);
        }

        .portfolio-filter {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .filter-icon {
          color: var(--primary-color);
        }

        .filter-select {
          padding: var(--spacing-sm) var(--spacing-md);
          border: 2px solid var(--medium-gray);
          border-radius: var(--border-radius-md);
          background: var(--white);
          font-weight: 500;
          cursor: pointer;
        }

        .filter-select:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }

        .portfolio-card {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .portfolio-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .project-category {
          background: rgba(255, 255, 255, 0.9);
          color: var(--primary-color);
          padding: var(--spacing-xs) var(--spacing-md);
          border-radius: var(--border-radius-md);
          font-weight: 600;
          font-size: var(--font-size-sm);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-actions {
          display: flex;
          gap: var(--spacing-md);
        }

        .portfolio-action {
          width: 40px;
          height: 40px;
          background: var(--primary-color);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .portfolio-action:hover {
          background: var(--white);
          color: var(--primary-color);
          transform: scale(1.1);
        }

        .portfolio-content {
          padding: var(--spacing-xl);
        }

        .portfolio-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
        }

        .portfolio-client {
          color: var(--primary-color);
          font-weight: 600;
        }

        .portfolio-duration {
          color: var(--secondary-color);
        }

        .portfolio-title {
          margin-bottom: var(--spacing-md);
          color: var(--black);
          font-size: var(--font-size-lg);
        }

        .portfolio-description {
          color: var(--dark-gray);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }

        .portfolio-technologies,
        .portfolio-results {
          margin-bottom: var(--spacing-lg);
        }

        .portfolio-technologies h4,
        .portfolio-results h4 {
          color: var(--black);
          margin-bottom: var(--spacing-sm);
          font-size: var(--font-size-sm);
          font-weight: 600;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .tech-tag {
          background: var(--light-gray);
          color: var(--primary-color);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius-sm);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }

        .portfolio-results ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .portfolio-results li {
          color: var(--dark-gray);
          font-size: var(--font-size-sm);
          margin-bottom: var(--spacing-xs);
          position: relative;
          padding-left: var(--spacing-md);
        }

        .portfolio-results li::before {
          content: '✓';
          color: var(--success-color);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .portfolio-footer {
          border-top: 1px solid var(--light-gray);
          padding-top: var(--spacing-md);
        }

        /* Portfolio Stats */
        .portfolio-stats {
          background: var(--white);
        }

        .stats-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }

        .stats-text h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--black);
        }

        .stats-text p {
          font-size: var(--font-size-lg);
          color: var(--dark-gray);
          line-height: 1.7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-xl);
        }

        .stat-item {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--light-gray);
          border-radius: var(--border-radius-lg);
        }

        .stat-number {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          color: var(--dark-gray);
          font-weight: 500;
          font-size: var(--font-size-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
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
          .portfolio-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .stats-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }

          .stats-grid {
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
          .portfolio-content {
            padding: var(--spacing-lg);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
          }

          .stat-item {
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio;
