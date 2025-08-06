import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaUsers,
  FaAward,
  FaGraduationCap
} from 'react-icons/fa';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const teamData = [
      {
        id: 1,
        name: 'John Smith',
        position: 'Chief Executive Officer',
        bio: 'John has over 20 years of experience in enterprise technology and has led the company to become a market leader in digital transformation.',
        image: '/images/team/john-smith.jpg',
        linkedin: 'https://linkedin.com/in/johnsmith',
        twitter: 'https://twitter.com/johnsmith',
        email: 'john.smith@enterprise.com',
        achievements: ['MBA from Harvard', '20+ years in tech leadership', 'Forbes 40 Under 40'],
        expertise: ['Business Strategy', 'Digital Transformation', 'Leadership']
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        position: 'Chief Technology Officer',
        bio: 'Sarah is a technology visionary with expertise in cloud computing, AI, and software architecture. She drives our technical innovation.',
        image: '/images/team/sarah-johnson.jpg',
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson',
        email: 'sarah.johnson@enterprise.com',
        achievements: ['PhD in Computer Science', 'AWS Solutions Architect', '15+ patents'],
        expertise: ['Cloud Architecture', 'Artificial Intelligence', 'Software Engineering']
      },
      {
        id: 3,
        name: 'Michael Chen',
        position: 'VP of Operations',
        bio: 'Michael ensures our operations run smoothly and efficiently. His background in process optimization has streamlined our service delivery.',
        image: '/images/team/michael-chen.jpg',
        linkedin: 'https://linkedin.com/in/michaelchen',
        twitter: 'https://twitter.com/michaelchen',
        email: 'michael.chen@enterprise.com',
        achievements: ['Six Sigma Black Belt', 'PMP Certified', 'Lean Management Expert'],
        expertise: ['Operations Management', 'Process Optimization', 'Quality Assurance']
      },
      {
        id: 4,
        name: 'Emily Rodriguez',
        position: 'Head of Design',
        bio: 'Emily leads our design team with a focus on user experience and innovative design solutions that delight our clients.',
        image: '/images/team/emily-rodriguez.jpg',
        linkedin: 'https://linkedin.com/in/emilyrodriguez',
        twitter: 'https://twitter.com/emilyrodriguez',
        email: 'emily.rodriguez@enterprise.com',
        achievements: ['Design Award Winner', 'Adobe Certified Expert', 'UX Research Specialist'],
        expertise: ['User Experience Design', 'Visual Design', 'Design Systems']
      },
      {
        id: 5,
        name: 'David Wilson',
        position: 'Senior Software Architect',
        bio: 'David designs and oversees the implementation of complex software systems, ensuring scalability and maintainability.',
        image: '/images/team/david-wilson.jpg',
        linkedin: 'https://linkedin.com/in/davidwilson',
        twitter: 'https://twitter.com/davidwilson',
        email: 'david.wilson@enterprise.com',
        achievements: ['Microsoft MVP', 'Certified Solutions Architect', '12+ years experience'],
        expertise: ['Software Architecture', 'System Design', 'Cloud Platforms']
      },
      {
        id: 6,
        name: 'Lisa Thompson',
        position: 'Project Manager',
        bio: 'Lisa excels at managing complex projects and ensuring timely delivery while maintaining the highest quality standards.',
        image: '/images/team/lisa-thompson.jpg',
        linkedin: 'https://linkedin.com/in/lisathompson',
        twitter: 'https://twitter.com/lisathompson',
        email: 'lisa.thompson@enterprise.com',
        achievements: ['PMP Certified', 'Agile Certified', 'Scrum Master'],
        expertise: ['Project Management', 'Agile Methodologies', 'Team Leadership']
      },
      {
        id: 7,
        name: 'Robert Garcia',
        position: 'Cybersecurity Specialist',
        bio: 'Robert protects our clients from cyber threats with his deep expertise in security frameworks and threat analysis.',
        image: '/images/team/robert-garcia.jpg',
        linkedin: 'https://linkedin.com/in/robertgarcia',
        twitter: 'https://twitter.com/robertgarcia',
        email: 'robert.garcia@enterprise.com',
        achievements: ['CISSP Certified', 'Ethical Hacker', 'Security+ Certified'],
        expertise: ['Cybersecurity', 'Threat Analysis', 'Compliance']
      },
      {
        id: 8,
        name: 'Amanda Foster',
        position: 'Data Scientist',
        bio: 'Amanda transforms data into actionable insights using advanced analytics and machine learning techniques.',
        image: '/images/team/amanda-foster.jpg',
        linkedin: 'https://linkedin.com/in/amandafoster',
        twitter: 'https://twitter.com/amandafoster',
        email: 'amanda.foster@enterprise.com',
        achievements: ['PhD in Data Science', 'Kaggle Master', 'Google Analytics Expert'],
        expertise: ['Data Science', 'Machine Learning', 'Statistical Analysis']
      }
    ];

    setTeamMembers(teamData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="team-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading team...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Team - Enterprise Solutions Inc.</title>
        <meta name="description" content="Meet the talented team behind Enterprise Solutions Inc. Our experts in technology, design, and business strategy drive innovation and deliver exceptional results." />
        <meta name="keywords" content="enterprise team, technology experts, leadership team, software engineers, designers, consultants" />
      </Helmet>

      <div className="team">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <div className="team-hero-content">
              <h1>Meet Our Team</h1>
              <p>
                The brilliant minds behind our success. Our diverse team of experts brings 
                together decades of experience in technology, design, and business strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="section team-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <FaGraduationCap />
                </div>
                <div className="stat-number">200+</div>
                <div className="stat-label">Years Combined Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <FaAward />
                </div>
                <div className="stat-number">25+</div>
                <div className="stat-label">Industry Certifications</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section team-main">
          <div className="container">
            <div className="section-header text-center">
              <h2>Leadership Team</h2>
              <p>The experienced leaders driving our vision and innovation</p>
            </div>

            <div className="team-grid">
              {teamMembers.map(member => (
                <div key={member.id} className="team-card">
                  <div className="team-image">
                    <div className="image-placeholder">
                      <FaUsers size={40} />
                    </div>
                    <div className="team-overlay">
                      <div className="social-links">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                          </a>
                        )}
                        {member.twitter && (
                          <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaTwitter />
                          </a>
                        )}
                        <a href={`mailto:${member.email}`} className="social-link">
                          <FaEnvelope />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="team-content">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                    <p className="team-bio">{member.bio}</p>

                    <div className="team-expertise">
                      <h4>Expertise:</h4>
                      <div className="expertise-tags">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="expertise-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="team-achievements">
                      <h4>Achievements:</h4>
                      <ul>
                        {member.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section culture-section">
          <div className="container">
            <div className="culture-content">
              <div className="culture-text">
                <h2>Our Culture</h2>
                <p>
                  We believe that great technology comes from great people. Our culture is built 
                  on collaboration, innovation, and continuous learning. We foster an environment 
                  where every team member can thrive and contribute to our shared success.
                </p>
                <div className="culture-values">
                  <div className="culture-value">
                    <h4>Innovation First</h4>
                    <p>We encourage creative thinking and bold ideas that push boundaries.</p>
                  </div>
                  <div className="culture-value">
                    <h4>Continuous Learning</h4>
                    <p>We invest in our team's growth through training and development programs.</p>
                  </div>
                  <div className="culture-value">
                    <h4>Work-Life Balance</h4>
                    <p>We support flexible work arrangements and prioritize well-being.</p>
                  </div>
                </div>
              </div>
              <div className="culture-visual">
                <div className="culture-image">
                  <div className="image-placeholder">
                    <FaUsers size={60} />
                    <p>Our team collaborating in our modern office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="section join-team-section">
          <div className="container">
            <div className="join-team-content text-center">
              <h2>Join Our Team</h2>
              <p>
                Are you passionate about technology and innovation? We're always looking for 
                talented individuals to join our growing team.
              </p>
              <div className="join-team-actions">
                <Link to="/careers" className="btn btn-primary btn-lg">
                  View Open Positions
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .team {
          padding-top: 80px;
        }

        /* Loading State */
        .team-loading {
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
        .team-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: var(--white);
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .team-hero-content h1 {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .team-hero-content p {
          font-size: var(--font-size-lg);
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Team Stats */
        .team-stats {
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
          background: var(--light-gray);
          border-radius: var(--border-radius-lg);
          transition: all var(--transition-normal);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          background: var(--white);
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

        /* Team Main */
        .team-main {
          background: var(--light-gray);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .team-card {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .team-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .team-overlay {
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

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }

        .social-link {
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

        .social-link:hover {
          background: var(--white);
          color: var(--primary-color);
          transform: scale(1.1);
        }

        .team-content {
          padding: var(--spacing-xl);
        }

        .team-name {
          margin-bottom: var(--spacing-xs);
          color: var(--black);
          font-size: var(--font-size-lg);
        }

        .team-position {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .team-bio {
          color: var(--dark-gray);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }

        .team-expertise,
        .team-achievements {
          margin-bottom: var(--spacing-lg);
        }

        .team-expertise h4,
        .team-achievements h4 {
          color: var(--black);
          margin-bottom: var(--spacing-sm);
          font-size: var(--font-size-sm);
          font-weight: 600;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .expertise-tag {
          background: var(--light-gray);
          color: var(--primary-color);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius-sm);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }

        .team-achievements ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .team-achievements li {
          color: var(--dark-gray);
          font-size: var(--font-size-sm);
          margin-bottom: var(--spacing-xs);
          position: relative;
          padding-left: var(--spacing-md);
        }

        .team-achievements li::before {
          content: '🏆';
          position: absolute;
          left: 0;
        }

        /* Culture Section */
        .culture-section {
          background: var(--white);
        }

        .culture-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }

        .culture-text h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--black);
        }

        .culture-text > p {
          font-size: var(--font-size-lg);
          color: var(--dark-gray);
          margin-bottom: var(--spacing-2xl);
          line-height: 1.7;
        }

        .culture-values {
          display: grid;
          gap: var(--spacing-lg);
        }

        .culture-value h4 {
          color: var(--primary-color);
          margin-bottom: var(--spacing-sm);
        }

        .culture-value p {
          color: var(--dark-gray);
          margin: 0;
        }

        .culture-visual {
          display: flex;
          justify-content: center;
        }

        .culture-image {
          width: 300px;
          height: 300px;
          background: var(--light-gray);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .culture-image .image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--primary-color);
          text-align: center;
          padding: var(--spacing-lg);
        }

        .culture-image p {
          margin-top: var(--spacing-md);
          font-size: var(--font-size-sm);
          color: var(--dark-gray);
        }

        /* Join Team Section */
        .join-team-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          color: var(--white);
        }

        .join-team-content h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .join-team-content p {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-2xl);
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .join-team-actions {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .join-team-section .btn-outline {
          border-color: var(--white);
          color: var(--white);
        }

        .join-team-section .btn-outline:hover {
          background-color: var(--white);
          color: var(--primary-color);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }

          .culture-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }

          .culture-visual {
            order: -1;
          }

          .join-team-actions {
            flex-direction: column;
            align-items: center;
          }

          .join-team-actions .btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .team-content {
            padding: var(--spacing-lg);
          }

          .culture-image {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default Team;
