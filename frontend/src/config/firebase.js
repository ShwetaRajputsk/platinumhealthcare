import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHoL6A3UqWyhVJGMn_zN1CZyajTLsnrNU",
  authDomain: "platinum-healthcare.firebaseapp.com",
  projectId: "platinum-healthcare",
  storageBucket: "platinum-healthcare.firebasestorage.app",
  messagingSenderId: "248707885729",
  appId: "1:248707885729:web:3d042a48355bb0b039dee0",
  measurementId: "G-V6D2C3CH82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
