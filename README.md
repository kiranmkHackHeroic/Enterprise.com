# Enterprise Portfolio Website

A modern, responsive full-stack website for enterprise portfolios with easy customization capabilities.

## 🌐 Live Demo

**Production Deployment Options:**
- **Frontend**: Deploy to [Vercel](https://vercel.com) (Recommended)
- **Backend**: Deploy to [Railway](https://railway.app) (Recommended)

See `DEPLOYMENT.md` for detailed deployment instructions.

## Features

- **Modern Design**: Clean, professional layout suitable for enterprises
- **Responsive**: Mobile-first design that works on all devices
- **Full Stack**: React frontend with Node.js/Express backend
- **Easy Customization**: Well-structured code for easy modifications
- **Contact Management**: Backend API for handling contact form submissions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Production Ready**: Configured for Vercel + Railway deployment

## Sections Included

- **Home**: Hero section with company overview
- **About Us**: Company history, mission, and vision
- **Services**: Detailed service offerings
- **Portfolio**: Showcase of work and projects
- **Team**: Team member profiles
- **Testimonials**: Client feedback and reviews
- **Contact**: Contact form and company information
- **Blog**: Latest news and updates (optional)

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- CSS3 with modern features
- Responsive design
- Contact form with validation
- Environment variable support

### Backend
- Node.js with Express
- RESTful API
- Email service integration
- Environment configuration
- CORS enabled
- Rate limiting
- Security headers

## 🚀 Deployment Options

### Option 1: Vercel + Railway (Recommended)
```bash
# Run deployment preparation
./deploy-prep.sh

# Then follow DEPLOYMENT.md guide
```

### Option 2: Docker Deployment
```bash
docker-compose up -d
```

## Quick Start

1. Install dependencies for all packages:
   ```bash
   npm run install-all
   ```

2. Start the development servers:
   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
enterprise-portfolio/
├── frontend/          # React frontend application
│   ├── public/        # Static assets
│   ├── src/           # Source code
│   │   ├── components/# Reusable components
│   │   ├── pages/     # Page components
│   │   ├── styles/    # CSS styles
│   │   └── utils/     # Utility functions
├── backend/           # Node.js backend API
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   ├── models/        # Data models
│   └── utils/         # Utility functions
└── docs/              # Documentation
```

## Customization

### Updating Company Information
1. Edit `frontend/src/data/companyData.js` to update company details
2. Replace logo and images in `frontend/public/images/`
3. Update content in respective page components

### Styling
1. Main styles are in `frontend/src/styles/`
2. Component-specific styles are co-located with components
3. CSS variables are used for easy theme customization

### Adding New Sections
1. Create new page component in `frontend/src/pages/`
2. Add route in `frontend/src/App.js`
3. Update navigation in `frontend/src/components/Navigation.js`

## Deployment

### Frontend (React)
- Build: `npm run build`
- Deploy the `build` folder to your hosting service

### Backend (Node.js)
- Set environment variables in production
- Deploy to services like Heroku, Railway, or DigitalOcean

## Environment Variables

Create `.env` files in both frontend and backend directories:

### Backend (.env)
```
PORT=5000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## License

MIT License - feel free to use this for your enterprise needs.

## Support

For customization requests or support, please contact the development team.
