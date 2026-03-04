const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// You'll need to download your service account key from Firebase Console
// Go to: Project Settings > Service Accounts > Generate New Private Key

let serviceAccount;
try {
  serviceAccount = require('./serviceAccountKey.json');
} catch (error) {
  console.error('⚠️  Service account key not found. Please add serviceAccountKey.json to backend/config/');
  console.error('   Download it from: Firebase Console > Project Settings > Service Accounts');
}

if (serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'platinum-healthcare.firebasestorage.app'
  });

  console.log('✅ Firebase Admin initialized');
}

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

module.exports = { admin, db, auth, storage };
