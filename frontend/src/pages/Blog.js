import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  FaCalendar, 
  FaUser, 
  FaArrowRight,
  FaClock,
  FaTag
} from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping digital transformation and how businesses can stay ahead of the curve in an evolving technological landscape.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Digital Transformation',
      slug: 'future-digital-transformation-2024',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure: Best Practices and Lessons Learned',
      excerpt: 'Learn from our experience building cloud infrastructure for enterprise clients and discover best practices for scalability and security.',
      author: 'Michael Chen',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Cloud Solutions',
      slug: 'scalable-cloud-infrastructure-best-practices',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of Remote Work: Protecting Your Business',
      excerpt: 'With remote work becoming the norm, cybersecurity has never been more important. Here\'s how to protect your business in the digital age.',
      author: 'Robert Garcia',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Cybersecurity',
      slug: 'cybersecurity-remote-work-protection',
      featured: true
    },
    {
      id: 4,
      title: 'Machine Learning Applications in Business: Real-World Use Cases',
      excerpt: 'Discover how machine learning is transforming businesses across industries with practical examples and implementation strategies.',
      author: 'Amanda Foster',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Data Science',
      slug: 'machine-learning-business-applications',
      featured: false
    },
    {
      id: 5,
      title: 'The ROI of Custom Software Development: When to Build vs Buy',
      excerpt: 'Making the right decision between custom development and off-the-shelf solutions can significantly impact your business ROI.',
      author: 'David Wilson',
      date: '2023-12-15',
      readTime: '4 min read',
      category: 'Software Development',
      slug: 'roi-custom-software-development',
      featured: false
    },
    {
      id: 6,
      title: 'Agile Project Management: Delivering Success in Enterprise Environments',
      excerpt: 'How agile methodologies can transform enterprise project delivery and improve collaboration between teams.',
      author: 'Lisa Thompson',
      date: '2023-12-10',
      readTime: '5 min read',
      category: 'Project Management',
      slug: 'agile-project-management-enterprise',
      featured: false
    }
  ];

  const categories = ['All', 'Digital Transformation', 'Cloud Solutions', 'Cybersecurity', 'Data Science', 'Software Development', 'Project Management'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Blog - Enterprise Solutions Inc.</title>
        <meta name="description" content="Stay updated with the latest insights on digital transformation, cloud solutions, cybersecurity, and technology trends from Enterprise Solutions Inc." />
        <meta name="keywords" content="enterprise blog, technology insights, digital transformation, cloud computing, cybersecurity, software development" />
      </Helmet>

      <div className="blog">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Our Blog</h1>
              <p>
                Insights, trends, and expert perspectives on technology, digital transformation, 
                and business innovation from our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section featured-posts">
          <div className="container">
            <div className="section-header">
              <h2>Featured Articles</h2>
              <p>Don't miss these highlighted insights from our experts</p>
            </div>

            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-post">
                  <div className="post-image">
                    <div className="image-placeholder">
                      <span className="post-category">{post.category}</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-author">
                        <FaUser className="meta-icon" />
                        {post.author}
                      </span>
                      <span className="post-date">
                        <FaCalendar className="meta-icon" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="post-read-time">
                        <FaClock className="meta-icon" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="post-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More
                      <FaArrowRight className="read-more-icon" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="section all-posts">
          <div className="container">
            <div className="posts-header">
              <div className="section-header">
                <h2>All Articles</h2>
                <p>Explore our complete collection of insights and expertise</p>
              </div>

              {/* Category Filter */}
              <div className="category-filter">
                <FaTag className="filter-icon" />
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

            <div className="posts-layout">
              <div className="posts-main">
                <div className="posts-grid">
                  {filteredPosts.map(post => (
                    <article key={post.id} className="blog-post">
                      <div className="post-image">
                        <div className="image-placeholder">
                          <span className="post-category-tag">{post.category}</span>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-author">{post.author}</span>
                          <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                          <span className="post-read-time">{post.readTime}</span>
                        </div>
                        <h3 className="post-title">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <Link to={`/blog/${post.slug}`} className="btn btn-outline btn-sm">
                          Read Article
                          <FaArrowRight className="btn-icon" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="posts-sidebar">
                <div className="sidebar-section">
                  <h3>Recent Posts</h3>
                  <div className="recent-posts">
                    {recentPosts.map(post => (
                      <div key={post.id} className="recent-post">
                        <div className="recent-post-content">
                          <h4>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>
                          <div className="recent-post-meta">
                            <span>{post.author}</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3>Categories</h3>
                  <div className="category-list">
                    {categories.slice(1).map(category => (
                      <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                        <span className="category-count">
                          ({blogPosts.filter(post => post.category === category).length})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3>Subscribe to Our Newsletter</h3>
                  <p>Get the latest insights delivered to your inbox</p>
                  <form className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="newsletter-input"
                    />
                    <button type="submit" className="btn btn-primary btn-sm">
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section blog-cta">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Inspired by what you've read? Let's discuss how our expertise 
                can help you achieve your digital transformation goals.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started Today
                  <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .blog {
          padding-top: 80px;
        }

        /* Hero Section */
        .blog-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: var(--white);
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .blog-hero-content h1 {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .blog-hero-content p {
          font-size: var(--font-size-lg);
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Featured Posts */
        .featured-posts {
          background: var(--light-gray);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-xl);
        }

        .featured-post {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          transition: all var(--transition-normal);
        }

        .featured-post:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .post-image {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .post-category,
        .post-category-tag {
          background: rgba(255, 255, 255, 0.9);
          color: var(--primary-color);
          padding: var(--spacing-xs) var(--spacing-md);
          border-radius: var(--border-radius-md);
          font-weight: 600;
          font-size: var(--font-size-sm);
        }

        .post-content {
          padding: var(--spacing-xl);
        }

        .post-meta {
          display: flex;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
          color: var(--secondary-color);
          flex-wrap: wrap;
        }

        .post-meta span {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .meta-icon {
          font-size: var(--font-size-xs);
        }

        .post-title {
          margin-bottom: var(--spacing-md);
        }

        .post-title a {
          color: var(--black);
          text-decoration: none;
          font-size: var(--font-size-xl);
          font-weight: 600;
          line-height: 1.3;
          transition: color var(--transition-fast);
        }

        .post-title a:hover {
          color: var(--primary-color);
          text-decoration: none;
        }

        .post-excerpt {
          color: var(--dark-gray);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }

        .read-more {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          transition: all var(--transition-fast);
        }

        .read-more:hover {
          color: var(--primary-dark);
          text-decoration: none;
          transform: translateX(3px);
        }

        .read-more-icon {
          font-size: var(--font-size-sm);
        }

        /* All Posts */
        .all-posts {
          background: var(--white);
        }

        .posts-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--spacing-3xl);
          flex-wrap: wrap;
          gap: var(--spacing-lg);
        }

        .category-filter {
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

        .posts-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-3xl);
        }

        .posts-grid {
          display: grid;
          gap: var(--spacing-xl);
        }

        .blog-post {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: var(--spacing-lg);
          background: var(--light-gray);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
        }

        .blog-post:hover {
          box-shadow: var(--shadow-md);
          background: var(--white);
        }

        .blog-post .post-image {
          height: 150px;
        }

        .blog-post .post-content {
          padding: var(--spacing-lg);
        }

        .blog-post .post-meta {
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
        }

        .blog-post .post-title a {
          font-size: var(--font-size-lg);
        }

        .blog-post .post-excerpt {
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
        }

        /* Sidebar */
        .posts-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
        }

        .sidebar-section {
          background: var(--light-gray);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius-lg);
        }

        .sidebar-section h3 {
          margin-bottom: var(--spacing-lg);
          color: var(--black);
          font-size: var(--font-size-lg);
        }

        .recent-posts {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .recent-post {
          border-bottom: 1px solid var(--medium-gray);
          padding-bottom: var(--spacing-md);
        }

        .recent-post:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .recent-post h4 {
          margin-bottom: var(--spacing-sm);
          font-size: var(--font-size-sm);
        }

        .recent-post h4 a {
          color: var(--black);
          text-decoration: none;
          line-height: 1.4;
        }

        .recent-post h4 a:hover {
          color: var(--primary-color);
        }

        .recent-post-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          font-size: var(--font-size-xs);
          color: var(--secondary-color);
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .category-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          padding: var(--spacing-sm);
          text-align: left;
          cursor: pointer;
          border-radius: var(--border-radius-sm);
          transition: all var(--transition-fast);
          color: var(--dark-gray);
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--primary-color);
          color: var(--white);
        }

        .category-count {
          font-size: var(--font-size-xs);
          opacity: 0.8;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .newsletter-input {
          padding: var(--spacing-sm);
          border: 1px solid var(--medium-gray);
          border-radius: var(--border-radius-sm);
          font-size: var(--font-size-sm);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .sidebar-section p {
          color: var(--dark-gray);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
        }

        /* CTA Section */
        .blog-cta {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          color: var(--white);
        }

        .blog-cta .cta-content h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--white);
        }

        .blog-cta .cta-content p {
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

        .blog-cta .btn-outline {
          border-color: var(--white);
          color: var(--white);
        }

        .blog-cta .btn-outline:hover {
          background-color: var(--white);
          color: var(--primary-color);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }

          .posts-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .posts-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }

          .posts-sidebar {
            order: -1;
          }

          .blog-post {
            grid-template-columns: 1fr;
          }

          .blog-post .post-image {
            height: 150px;
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
          .post-meta {
            flex-direction: column;
            gap: var(--spacing-xs);
          }

          .sidebar-section {
            padding: var(--spacing-lg);
          }

          .blog-post .post-content {
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </>
  );
};

export default Blog;
