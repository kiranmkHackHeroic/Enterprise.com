#!/bin/bash

# Quick deployment preparation script for Vercel + Railway

echo "🚀 Preparing Enterprise Portfolio for Vercel + Railway Deployment"
echo "================================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "✅ Checking project structure..."

# Frontend checks
if [ -d "frontend" ] && [ -f "frontend/package.json" ]; then
    echo "✅ Frontend ready for Vercel"
else
    echo "❌ Frontend not found or missing package.json"
    exit 1
fi

# Backend checks
if [ -d "backend" ] && [ -f "backend/package.json" ] && [ -f "backend/server.js" ]; then
    echo "✅ Backend ready for Railway"
else
    echo "❌ Backend not found or missing files"
    exit 1
fi

echo ""
echo "🔧 Installation and Build Test..."
echo "================================"

# Test frontend build
echo "📦 Testing frontend build..."
cd frontend
npm install --silent
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Frontend builds successfully"
else
    echo "❌ Frontend build failed"
    exit 1
fi

# Test backend
echo "📦 Testing backend..."
cd ../backend
npm install --silent
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed successfully"
else
    echo "❌ Backend dependency installation failed"
    exit 1
fi

cd ..

echo ""
echo "🎉 Deployment Ready!"
echo "==================="
echo ""
echo "Next steps:"
echo "1. Deploy backend to Railway:"
echo "   - Go to railway.app"
echo "   - Create new project from GitHub"
echo "   - Set root directory to 'backend'"
echo "   - Configure environment variables"
echo ""
echo "2. Deploy frontend to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import GitHub repository"
echo "   - Set root directory to 'frontend'"
echo "   - Add REACT_APP_API_URL environment variable"
echo ""
echo "3. See DEPLOYMENT.md for detailed instructions"
echo ""
echo "🌐 Your URLs will be:"
echo "Frontend: https://your-project.vercel.app"
echo "Backend:  https://your-backend.up.railway.app"
