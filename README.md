# Platinum Healthcare Website

A modern, full-stack healthcare website built with React, Node.js, Express, and Firebase.

## 🌟 Features

- **Responsive Design**: Works on all devices
- **Doctor Profiles**: Browse and view detailed doctor information
- **Medical Services**: Comprehensive list of healthcare services
- **Department Pages**: Detailed information about medical departments
- **Appointment Booking**: Easy online appointment scheduling
- **Admin Dashboard**: Manage doctors, services, and appointments
- **Firebase Integration**: Real-time database and authentication

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router v6
- TailwindCSS
- Framer Motion (animations)
- React Query (data fetching)
- React Hot Toast (notifications)
- RemixIcon (icons)

### Backend
- Node.js
- Express.js
- Firebase Admin SDK
- CORS enabled

## 📁 Project Structure

```
platinum-healthcare/
├── frontend/           # React frontend application
│   ├── public/        # Static files
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── utils/       # Utility functions
│   └── package.json
├── backend/           # Node.js backend API
│   ├── config/        # Configuration files
│   ├── routes/        # API routes
│   ├── middleware/    # Express middleware
│   └── server-firebase.js
└── README.md
```

## 🚀 Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase project

### 1. Clone the repository
```bash
git clone https://github.com/ShwetaRajputsk/platinumhealthcare.git
cd platinumhealthcare
```

### 2. Setup Backend
```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Add your Firebase credentials to .env
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install

# Create .env file (optional for local development)
echo "REACT_APP_API_URL=http://localhost:5000" > .env
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Backend runs on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend runs on: http://localhost:3000

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

**Backend**: Deploy to Render
**Frontend**: Deploy to Netlify

## 📝 Environment Variables

### Backend (.env)
```
NODE_ENV=production
PORT=5000
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY=your-private-key
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com
```

## 🔧 Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start server
- `npm run dev` - Start with nodemon (auto-reload)

## 📱 Pages

- **Home** - Landing page with hero, services, doctors, stats
- **About** - About the healthcare center
- **Services** - List of all medical services
- **Service Detail** - Individual service information
- **Doctors** - Browse all doctors
- **Doctor Detail** - Individual doctor profile
- **Departments** - Medical departments
- **Department Detail** - Department information
- **Contact** - Contact form and information
- **Appointments** - Book appointments

## 🎨 Design Features

- Clean, modern UI
- Cyan/Blue color scheme
- Smooth animations
- Responsive grid layouts
- RemixIcon integration
- Compact, professional design

## 🔐 Security

- Environment variables for sensitive data
- Firebase authentication
- CORS protection
- Input validation
- Secure API endpoints

## 📄 License

This project is private and proprietary.

## 👥 Author

**Shweta Rajput**
- GitHub: [@ShwetaRajputsk](https://github.com/ShwetaRajputsk)

## 🤝 Support

For support, email: info@platinumhealthcare.ae

---

Made with ❤️ for Platinum Healthcare, Al Qusais, Dubai
