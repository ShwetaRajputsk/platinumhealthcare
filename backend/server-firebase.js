const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Initialize Firebase
const { admin } = require('./config/firebase');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Platinum Healthcare API (Firebase) is running',
    timestamp: new Date().toISOString()
  });
});

// Routes - Firebase versions
app.use('/api/auth', require('./routes/firebase/auth'));
app.use('/api/doctors', require('./routes/firebase/doctors'));
app.use('/api/departments', require('./routes/firebase/departments'));
app.use('/api/services', require('./routes/firebase/services'));
app.use('/api/appointments', require('./routes/firebase/appointments'));
app.use('/api/testimonials', require('./routes/firebase/testimonials'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔥 Using Firebase Firestore`);
});

module.exports = app;
