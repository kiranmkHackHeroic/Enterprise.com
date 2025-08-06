import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  FaRocket, 
  FaEye, 
  FaHeart,
  FaUsers,
  FaAward,
  FaTrophy,
  FaChartLine,
  FaGlobe,
  FaHandshake,
  FaLightbulb
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, number: '500+', label: 'Projects Completed' },
    { icon: FaGlobe, number: '150+', label: 'Happy Clients' },
    { icon: FaAward, number: '15+', label: 'Years Experience' },
    { icon: FaTrophy, number: '25+', label: 'Awards Won' }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive business transformation.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships.'
    },
    {
      icon: FaTrophy,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, exceeding expectations at every step.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.'
    },
    {
      icon: FaHeart,
      title: 'Customer Focus',
      description: 'Our clients\' success is our primary goal, and we\'re committed to their long-term growth.'
    },
    {
      icon: FaChartLine,
      title: 'Growth',
      description: 'We foster continuous learning and improvement to stay ahead in the ever-evolving tech landscape.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Enterprise Solutions Inc. was established with a vision to transform businesses through technology.'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Successfully completed our first enterprise-level digital transformation project.'
    },
    {
      year: '2015',
      title: 'Cloud Expansion',
      description: 'Expanded our services to include comprehensive cloud solutions and migration services.'
    },
    {
      year: '2018',
      title: 'AI & Analytics',
      description: 'Launched our AI and data analytics division to help clients leverage machine learning.'
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Established international presence and served clients across multiple continents.'
    },
    {
      year: '2023',
      title: 'Innovation Lab',
      description: 'Opened our dedicated innovation lab for emerging technologies and R&D initiatives.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Enterprise Solutions Inc.</title>
        <meta name="description" content="Learn about Enterprise Solutions Inc. - our mission, vision, values, and journey in providing innovative technology solutions for businesses worldwide." />
        <meta name="keywords" content="about enterprise solutions, company history, mission vision values, technology consulting company" />
      </Helmet>

      <div className="about">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <h1>About Enterprise Solutions</h1>
              <p>
                Transforming businesses through innovative technology solutions since 2010. 
                We are passionate about helping organizations achieve their digital transformation goals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section mvv-section">
          <div className="container">
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon">
                  <FaRocket />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success in an ever-evolving digital landscape.
                </p>
              </div>

              <div className="mvv-card">
                <div className="mvv-icon">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the global leader in enterprise transformation, creating a world where 
                  every business can achieve its full potential through technology.
                </p>
              </div>

              <div className="mvv-card">
                <div className="mvv-icon">
                  <FaHeart />
                </div>
                <h3>Our Values</h3>
                <p>
                  Innovation, integrity, excellence, collaboration, and customer focus guide 
                  everything we do as we build lasting partnerships with our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section stats-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Impact in Numbers</h2>
              <p>These numbers reflect our commitment to delivering exceptional results for our clients</p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>
                  Founded in 2010, Enterprise Solutions Inc. began with a simple yet powerful vision: 
                  to bridge the gap between business needs and technology solutions. What started as 
                  a small team of passionate technologists has grown into a leading enterprise solutions 
                  provider serving clients worldwide.
                </p>
                <p>
                  Over the years, we've evolved alongside the technology landscape, continuously 
                  expanding our expertise to include cloud computing, artificial intelligence, 
                  cybersecurity, and digital transformation. Our commitment to innovation and 
                  client success has been the driving force behind our growth.
                </p>
                <p>
                  Today, we're proud to be trusted partners to over 150 organizations, helping 
                  them navigate the complexities of digital transformation and achieve their 
                  business objectives through technology.
                </p>
              </div>
              <div className="story-visual">
                <div className="story-image">
                  <div className="image-placeholder">
                    <FaUsers size={60} />
                    <p>Our team collaborating on innovative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section values-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Core Values</h2>
              <p>These values shape our culture and guide our decisions every day</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <value.icon />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section timeline-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Journey</h2>
              <p>Key milestones in our growth and evolution</p>
            </div>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to Start Your Transformation Journey?</h2>
              <p>
                Let's work together to unlock your business potential through innovative technology solutions.
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn btn-primary btn-lg">
                  Get Started Today
                </a>
                <a href="/team" className="btn btn-outline btn-lg">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about {
          padding-top: 80px;
        }

        /* Hero Section */
        .about-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: var(--white);
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .about-hero-content h1 {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .about-hero-content p {
          font-size: var(--font-size-lg);
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
        }

        /* MVV Section */
        .mvv-section {
          background: var(--light-gray);
        }

        .mvv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .mvv-card {
          background: var(--white);
          padding: var(--spacing-2xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }

        .mvv-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .mvv-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-lg);
          color: var(--white);
          font-size: var(--font-size-2xl);
        }

        .mvv-card h3 {
          margin-bottom: var(--spacing-md);
          color: var(--black);
        }

        /* Stats Section */
        .stats-section {
          background: var(--white);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-xl);
        }

        .stat-card {
          text-align: center;
          padding: var(--spacing-xl);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-md);
          color: var(--white);
          font-size: var(--font-size-xl);
        }

        .stat-number {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          color: var(--dark-gray);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: var(--font-size-sm);
        }

        /* Story Section */
        .story-section {
          background: var(--light-gray);
        }

        .story-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }

        .story-text h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--black);
        }

        .story-text p {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-lg);
          color: var(--dark-gray);
          line-height: 1.7;
        }

        .story-visual {
          display: flex;
          justify-content: center;
        }

        .story-image {
          width: 300px;
          height: 300px;
          background: var(--white);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--primary-color);
          text-align: center;
          padding: var(--spacing-lg);
        }

        .image-placeholder p {
          margin-top: var(--spacing-md);
          font-size: var(--font-size-sm);
          color: var(--dark-gray);
        }

        /* Values Section */
        .values-section {
          background: var(--white);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .value-card {
          text-align: center;
          padding: var(--spacing-xl);
          border-radius: var(--border-radius-lg);
          background: var(--light-gray);
          transition: all var(--transition-normal);
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          background: var(--white);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-md);
          color: var(--white);
          font-size: var(--font-size-lg);
        }

        .value-card h3 {
          margin-bottom: var(--spacing-md);
          color: var(--black);
        }

        .value-card p {
          color: var(--dark-gray);
          line-height: 1.6;
        }

        /* Timeline Section */
        .timeline-section {
          background: var(--light-gray);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-color);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-2xl);
          display: flex;
          align-items: center;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-marker {
          width: 20px;
          height: 20px;
          background: var(--primary-color);
          border-radius: 50%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          border: 4px solid var(--white);
        }

        .timeline-content {
          width: calc(50% - 40px);
          background: var(--white);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: auto;
          margin-left: 0;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          margin-right: 0;
        }

        .timeline-year {
          background: var(--primary-color);
          color: var(--white);
          padding: var(--spacing-xs) var(--spacing-md);
          border-radius: var(--border-radius-sm);
          font-weight: 600;
          display: inline-block;
          margin-bottom: var(--spacing-sm);
          font-size: var(--font-size-sm);
        }

        .timeline-content h3 {
          margin-bottom: var(--spacing-sm);
          color: var(--black);
        }

        .timeline-content p {
          color: var(--dark-gray);
          margin: 0;
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
          .story-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }

          .story-visual {
            order: -1;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            flex-direction: row !important;
          }

          .timeline-marker {
            left: 20px;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px !important;
            margin-right: 0 !important;
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
          .mvv-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .story-image {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
