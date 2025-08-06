const express = require('express');
const router = express.Router();

// GET /api/company/info - Get company information
router.get('/info', (req, res) => {
  res.json({
    name: 'Enterprise Solutions Inc.',
    tagline: 'Innovating Your Business Future',
    description: 'We are a leading enterprise solutions provider, delivering cutting-edge technology and strategic consulting services to help businesses thrive in the digital age.',
    founded: '2010',
    employees: '500+',
    headquarters: 'Enterprise City, EC',
    website: 'https://enterprise.com',
    mission: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in an ever-evolving digital landscape.',
    vision: 'To be the global leader in enterprise transformation, creating a world where every business can achieve its full potential through technology.',
    values: [
      'Innovation - We constantly push boundaries to deliver cutting-edge solutions',
      'Integrity - We conduct business with honesty, transparency, and ethical practices',
      'Excellence - We strive for the highest quality in everything we do',
      'Collaboration - We believe in the power of teamwork and partnerships',
      'Customer Focus - Our clients\' success is our primary goal'
    ],
    certifications: [
      'ISO 9001:2015 Quality Management',
      'ISO 27001:2013 Information Security',
      'SOC 2 Type II Compliance',
      'CMMI Level 5 Certified'
    ],
    awards: [
      'Best Enterprise Solutions Provider 2023',
      'Innovation Excellence Award 2022',
      'Top Workplace Culture 2023',
      'Customer Choice Award 2022'
    ]
  });
});

// GET /api/company/services - Get services information
router.get('/services', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to modernize your business operations and improve efficiency.',
      icon: 'digital-transformation',
      features: [
        'Legacy System Modernization',
        'Cloud Migration Services',
        'Process Automation',
        'Digital Strategy Consulting'
      ],
      category: 'Consulting'
    },
    {
      id: 2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
      icon: 'code',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'API Integration',
        'Software Maintenance'
      ],
      category: 'Development'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to enhance your business flexibility and reduce costs.',
      icon: 'cloud',
      features: [
        'Cloud Architecture Design',
        'Multi-Cloud Management',
        'DevOps Implementation',
        'Cloud Security'
      ],
      category: 'Infrastructure'
    },
    {
      id: 4,
      title: 'Data Analytics & AI',
      description: 'Advanced analytics and artificial intelligence solutions to unlock insights from your data.',
      icon: 'analytics',
      features: [
        'Business Intelligence',
        'Machine Learning Models',
        'Data Visualization',
        'Predictive Analytics'
      ],
      category: 'Analytics'
    },
    {
      id: 5,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      icon: 'security',
      features: [
        'Security Assessment',
        'Threat Monitoring',
        'Compliance Management',
        'Incident Response'
      ],
      category: 'Security'
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Strategic IT consulting services to align technology with your business objectives.',
      icon: 'consulting',
      features: [
        'Technology Strategy',
        'System Integration',
        'Performance Optimization',
        'Change Management'
      ],
      category: 'Consulting'
    }
  ]);
});

// GET /api/company/team - Get team information
router.get('/team', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'John Smith',
      position: 'Chief Executive Officer',
      bio: 'John has over 20 years of experience in enterprise technology and has led the company to become a market leader in digital transformation.',
      image: '/images/team/john-smith.jpg',
      linkedin: 'https://linkedin.com/in/johnsmith',
      email: 'john.smith@enterprise.com'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      bio: 'Sarah is a technology visionary with expertise in cloud computing, AI, and software architecture. She drives our technical innovation.',
      image: '/images/team/sarah-johnson.jpg',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@enterprise.com'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'VP of Operations',
      bio: 'Michael ensures our operations run smoothly and efficiently. His background in process optimization has streamlined our service delivery.',
      image: '/images/team/michael-chen.jpg',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael.chen@enterprise.com'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      bio: 'Emily leads our design team with a focus on user experience and innovative design solutions that delight our clients.',
      image: '/images/team/emily-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily.rodriguez@enterprise.com'
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Senior Software Architect',
      bio: 'David designs and oversees the implementation of complex software systems, ensuring scalability and maintainability.',
      image: '/images/team/david-wilson.jpg',
      linkedin: 'https://linkedin.com/in/davidwilson',
      email: 'david.wilson@enterprise.com'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      position: 'Project Manager',
      bio: 'Lisa excels at managing complex projects and ensuring timely delivery while maintaining the highest quality standards.',
      image: '/images/team/lisa-thompson.jpg',
      linkedin: 'https://linkedin.com/in/lisathompson',
      email: 'lisa.thompson@enterprise.com'
    }
  ]);
});

// GET /api/company/testimonials - Get client testimonials
router.get('/testimonials', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Robert Martinez',
      company: 'TechCorp Industries',
      position: 'CEO',
      content: 'Enterprise Solutions transformed our business operations completely. Their digital transformation expertise helped us increase efficiency by 40% and reduce costs significantly.',
      rating: 5,
      image: '/images/testimonials/robert-martinez.jpg'
    },
    {
      id: 2,
      name: 'Jennifer Lee',
      company: 'Global Manufacturing Ltd.',
      position: 'CTO',
      content: 'The custom software solution they developed for us has revolutionized our inventory management. Excellent team, great communication, and outstanding results.',
      rating: 5,
      image: '/images/testimonials/jennifer-lee.jpg'
    },
    {
      id: 3,
      name: 'Mark Anderson',
      company: 'Financial Services Group',
      position: 'VP Technology',
      content: 'Their cloud migration services were seamless and professional. We experienced zero downtime during the transition and saw immediate performance improvements.',
      rating: 5,
      image: '/images/testimonials/mark-anderson.jpg'
    },
    {
      id: 4,
      name: 'Amanda Foster',
      company: 'Healthcare Solutions Inc.',
      position: 'Director of IT',
      content: 'Enterprise Solutions\' cybersecurity expertise has given us peace of mind. Their proactive approach to security has protected us from multiple threats.',
      rating: 5,
      image: '/images/testimonials/amanda-foster.jpg'
    }
  ]);
});

// GET /api/company/portfolio - Get portfolio/case studies
router.get('/portfolio', (req, res) => {
  res.json([
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]);
});

module.exports = router;
