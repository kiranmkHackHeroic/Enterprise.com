# 🚀 Vercel + Railway Deployment Guide

## Overview
This guide will help you deploy your Enterprise Portfolio Website using:
- **Vercel** for the React frontend
- **Railway** for the Node.js backend

## 📋 Prerequisites
- GitHub account
- Vercel account (free)
- Railway account (free)
- Gmail account for email functionality

---

## 🚂 Step 1: Deploy Backend to Railway

### 1.1 Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Connect your GitHub account

### 1.2 Deploy Backend
1. Click "New Project" in Railway
2. Select "Deploy from GitHub repo"
3. Choose your `Enterprise.com` repository
4. Select the `backend` folder as the root directory
5. Railway will automatically detect it's a Node.js project

### 1.3 Configure Environment Variables
In Railway dashboard, go to your project > Variables tab and add:

```bash
NODE_ENV=production
PORT=5000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
CONTACT_EMAIL=contact@yourcompany.com
FRONTEND_URL=https://your-vercel-domain.vercel.app
JWT_SECRET=your-super-secret-jwt-key-here
SESSION_SECRET=your-session-secret-here
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=5
```

### 1.4 Get Railway URL
After deployment, Railway will provide a URL like:
`https://your-backend-name-production.up.railway.app`

**📝 Save this URL - you'll need it for Vercel!**

---

## ⚡ Step 2: Deploy Frontend to Vercel

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Connect your GitHub account

### 2.2 Deploy Frontend
1. Click "New Project" in Vercel
2. Import your `Enterprise.com` repository
3. **Important**: Set the root directory to `frontend`
4. Vercel will auto-detect it's a React app

### 2.3 Configure Environment Variables
In Vercel dashboard, go to your project > Settings > Environment Variables:

```bash
REACT_APP_API_URL=https://your-railway-backend-url.up.railway.app
```

### 2.4 Update Build Settings
Vercel should automatically detect:
- **Framework Preset**: Create React App
- **Root Directory**: frontend
- **Build Command**: npm run build
- **Output Directory**: build

---

## 🔧 Step 3: Final Configuration

### 3.1 Update Railway with Vercel URL
1. Go back to Railway
2. Update the `FRONTEND_URL` environment variable with your Vercel URL
3. Redeploy the backend

### 3.2 Email Configuration
To enable contact form emails:
1. Go to your Gmail account
2. Enable 2-factor authentication
3. Generate an App Password:
   - Google Account > Security > App Passwords
   - Select "Mail" and generate password
4. Use this app password in Railway's `EMAIL_PASS` variable

---

## 🌐 Your Live URLs

After successful deployment:

### Frontend (Vercel)
```
https://your-project-name.vercel.app
```

### Backend (Railway)
```
https://your-backend-name-production.up.railway.app
```

### API Health Check
```
https://your-backend-name-production.up.railway.app/api/health
```

---

## 📱 Features Included

✅ **Responsive Design** - Works on all devices  
✅ **Contact Form** - Sends emails via backend  
✅ **Fast Loading** - Optimized for performance  
✅ **SEO Ready** - Meta tags and structured data  
✅ **Professional Design** - Modern and clean UI  
✅ **Easy Updates** - Just push to GitHub to redeploy  

---

## 🚀 Quick Deploy Commands

If you want to redeploy manually:

```bash
# For frontend (push to main branch)
git add .
git commit -m "Update frontend"
git push origin main

# For backend (push to main branch)
git add .
git commit -m "Update backend"
git push origin main
```

Both Vercel and Railway will automatically redeploy when you push to GitHub!

---

## 🔍 Troubleshooting

### Common Issues:

1. **Contact form not working**
   - Check Railway environment variables
   - Verify Gmail app password
   - Check CORS settings

2. **Frontend not connecting to backend**
   - Verify `REACT_APP_API_URL` in Vercel
   - Check Railway backend URL
   - Ensure CORS allows Vercel domain

3. **Build failures**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Check build logs in platform dashboards

---

## 💡 Next Steps

1. **Custom Domain**: Add your own domain in Vercel settings
2. **SSL Certificate**: Automatic with Vercel and Railway
3. **Analytics**: Add Google Analytics to track visitors
4. **Database**: Add PostgreSQL through Railway for dynamic content
5. **CMS**: Integrate headless CMS for easy content updates

Your enterprise website is now live and professional! 🎉
