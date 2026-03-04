# Platinum Healthcare - Deployment Guide

## Prerequisites
- GitHub account
- Netlify account
- Render account
- Firebase project setup

---

## Part 1: Push to GitHub

### 1. Initialize Git (if not already done)
```bash
cd "/Users/shweta/Platinum healthcare"
git init
```

### 2. Add all files
```bash
git add .
```

### 3. Commit
```bash
git commit -m "Initial commit - Platinum Healthcare website"
```

### 4. Add remote repository
```bash
git remote add origin https://github.com/ShwetaRajputsk/platinumhealthcare.git
```

### 5. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

---

## Part 2: Deploy Backend to Render

### 1. Go to Render
- Visit: https://render.com
- Sign up or log in
- Click "New +" → "Web Service"

### 2. Connect Repository
- Connect your GitHub account
- Select repository: `platinumhealthcare`
- Click "Connect"

### 3. Configure Service
```
Name: platinum-healthcare-backend
Region: Choose closest to your users
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: npm start
```

### 4. Add Environment Variables
Click "Advanced" → "Add Environment Variable"

Add these variables:
```
NODE_ENV=production
PORT=10000
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY=your-private-key
```

**Important**: Get Firebase credentials from your `backend/config/serviceAccountKey.json`

### 5. Deploy
- Click "Create Web Service"
- Wait for deployment (5-10 minutes)
- Copy your backend URL (e.g., `https://platinum-healthcare-backend.onrender.com`)

---

## Part 3: Deploy Frontend to Netlify

### 1. Update API Configuration

Before deploying, update the API URL in your frontend:

**File: `frontend/src/services/api.js`**

Find the line with `baseURL` and update it:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

Commit this change:
```bash
git add frontend/src/services/api.js
git commit -m "Update API URL for production"
git push
```

### 2. Go to Netlify
- Visit: https://netlify.com
- Sign up or log in
- Click "Add new site" → "Import an existing project"

### 3. Connect Repository
- Choose "GitHub"
- Authorize Netlify
- Select repository: `platinumhealthcare`

### 4. Configure Build Settings
```
Base directory: frontend
Build command: npm run build
Publish directory: frontend/build
```

### 5. Add Environment Variables
Go to "Site settings" → "Environment variables" → "Add a variable"

Add:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```
(Use the URL from Render deployment)

### 6. Deploy
- Click "Deploy site"
- Wait for deployment (3-5 minutes)
- Your site will be live at: `https://random-name.netlify.app`

### 7. Custom Domain (Optional)
- Go to "Domain settings"
- Click "Add custom domain"
- Follow instructions to connect your domain

---

## Part 4: Verify Deployment

### Test Backend
Visit: `https://your-backend-url.onrender.com/api/doctors`

Should return JSON data.

### Test Frontend
Visit your Netlify URL and check:
- ✅ Home page loads
- ✅ Doctors page shows data
- ✅ Services page works
- ✅ All images load
- ✅ Navigation works

---

## Troubleshooting

### Backend Issues

**Problem**: 500 Internal Server Error
- Check Render logs: Dashboard → Logs
- Verify environment variables are set correctly
- Check Firebase credentials

**Problem**: CORS errors
- Ensure backend has CORS enabled for your Netlify domain
- Update `backend/server-firebase.js` CORS configuration

### Frontend Issues

**Problem**: API calls fail
- Verify `REACT_APP_API_URL` is set correctly in Netlify
- Check browser console for errors
- Ensure backend is running

**Problem**: Images not loading
- Check image paths in code
- Verify images are in `frontend/public/images/` folder
- Check browser console for 404 errors

---

## Post-Deployment Updates

### To update your site:

1. Make changes locally
2. Commit and push:
```bash
git add .
git commit -m "Your update message"
git push
```

3. Render and Netlify will auto-deploy!

---

## Important Notes

⚠️ **Free Tier Limitations**:
- Render free tier: Backend sleeps after 15 min of inactivity (first request may be slow)
- Netlify free tier: 100GB bandwidth/month

🔒 **Security**:
- Never commit `.env` files or `serviceAccountKey.json`
- Keep Firebase credentials secure
- Use environment variables for all secrets

📊 **Monitoring**:
- Check Render logs for backend errors
- Check Netlify logs for build errors
- Monitor Firebase usage in Firebase Console

---

## Support

If you encounter issues:
1. Check logs in Render/Netlify dashboards
2. Verify all environment variables
3. Test API endpoints directly
4. Check browser console for frontend errors

Good luck with your deployment! 🚀
