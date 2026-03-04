const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// Supports both local development (serviceAccountKey.json) and production (environment variables)

let serviceAccount;

// Check if running in production with environment variables
if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
  console.log('🔧 Using Firebase credentials from environment variables');
  serviceAccount = {
    type: 'service_account',
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
    universe_domain: 'googleapis.com'
  };
} else {
  // Try to load from local file for development
  try {
    serviceAccount = require('./serviceAccountKey.json');
    console.log('🔧 Using Firebase credentials from serviceAccountKey.json');
  } catch (error) {
    console.error('⚠️  Firebase credentials not found!');
    console.error('   For local development: Add serviceAccountKey.json to backend/config/');
    console.error('   For production: Set environment variables in Render');
    process.exit(1);
  }
}

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'platinum-healthcare.firebasestorage.app'
});

console.log('✅ Firebase Admin initialized successfully');

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

module.exports = { admin, db, auth, storage };
