// Brand Colors
export const BRAND_COLORS = {
  primary: '#2563eb',
  secondary: '#0ea5e9',
  accent: '#d946ef',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// Department Icons and Colors
export const DEPARTMENT_ICONS = {
  'general-medicine': { icon: 'fas fa-stethoscope', color: '#2563eb' },
  'pediatrics': { icon: 'fas fa-baby', color: '#10b981' },
  'gynecology': { icon: 'fas fa-female', color: '#f59e0b' },
  'dermatology': { icon: 'fas fa-hand-paper', color: '#ef4444' },
  'internal-medicine': { icon: 'fas fa-heartbeat', color: '#8b5cf6' },
  'aesthetic-medicine': { icon: 'fas fa-spa', color: '#ec4899' },
  'laboratory-services': { icon: 'fas fa-flask', color: '#06b6d4' },
};

// Time Slots
export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
];

// Days of the week
export const DAYS_OF_WEEK = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

// Appointment Status
export const APPOINTMENT_STATUS = {
  pending: { label: 'Pending', color: 'warning', icon: 'fas fa-clock' },
  confirmed: { label: 'Confirmed', color: 'success', icon: 'fas fa-check-circle' },
  cancelled: { label: 'Cancelled', color: 'error', icon: 'fas fa-times-circle' },
  completed: { label: 'Completed', color: 'primary', icon: 'fas fa-check-double' },
  'no-show': { label: 'No Show', color: 'gray', icon: 'fas fa-user-times' },
};

// Priority Levels
export const PRIORITY_LEVELS = {
  low: { label: 'Low', color: 'success' },
  normal: { label: 'Normal', color: 'primary' },
  high: { label: 'High', color: 'warning' },
  urgent: { label: 'Urgent', color: 'error' },
};

// Gender Options
export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

// Languages
export const LANGUAGES = [
  'English', 'Arabic', 'Hindi', 'Urdu', 'French', 'Spanish', 'German', 'Italian'
];

// Insurance Providers (UAE)
export const INSURANCE_PROVIDERS = [
  'ADNIC', 'AXA', 'Cigna', 'Daman', 'Dubai Insurance', 'Emirates Insurance',
  'MetLife', 'Oman Insurance', 'Orient Insurance', 'RAK Insurance',
  'Salama Insurance', 'Sukoon Insurance', 'Takaful Emarat', 'Union Insurance',
  'Watania Insurance', 'Other'
];

// Contact Information
export const CONTACT_INFO = {
  phone: '+971 4 341 2774',
  mobile: '+971 50 748 2774',
  email: 'medone@platinumhealthuae.com',
  address: '#16, Al Fattan Building, Al Qusais, Dubai - UAE',
  workingHours: {
    weekdays: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '10:00 AM - 6:00 PM'
  },
  emergencyPhone: '+971 50 748 2774',
  locations: [
    {
      name: 'Med One Medical Center',
      address: '#16, Al Fattan Building, Al Qusais, Dubai - UAE',
      phone: '+971 4 341 2774',
      mobile: '+971 50 748 2774',
      email: 'medone@platinumhealthuae.com',
      mapLink: 'https://maps.google.com/?q=Platinum+Healthcare+Al+Qusais'
    },
    {
      name: 'Al Hudaibha Medical Center',
      address: '#102, Al Hudaibha Building, Al Nakheel, Ras Al Khaimah - UAE',
      phone: '+971 07 222 2188',
      mobile: '+971 05 0185 0847',
      email: 'contact@platinumhealthuae.com',
      mapLink: 'https://maps.google.com/?q=Al+Hudaibah+Medical+Centre+RAK'
    },
    {
      name: 'Platinum Medical Center',
      address: 'Near Sun & Sand Hypermarket, Sheikh Mohamed Bin Salem Road, Ras Al Khaimah - UAE',
      phone: '+971 07 236 6900',
      mobile: '+971 05 0185 0847',
      email: 'contact@platinumhealthuae.com',
      mapLink: 'https://maps.google.com/?q=Platinum+Medical+Center+LLC+Ras+Al+Khaimah'
    },
    {
      name: 'Platinum Care Ayurvedic Clinic',
      address: '#105, Al Mezan Tower, Al Muhaisnah-4, Dubai - UAE',
      phone: '+971 54 214 2105',
      mobile: '+971 52 323 9489',
      email: 'contact@platinumhealthuae.com',
      mapLink: 'https://maps.google.com/?q=Al+Mezan+Tower+Dubai'
    }
  ]
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/platinumhealthuae',
  instagram: 'https://instagram.com/platinumhealthuae',
  tiktok: 'https://tiktok.com/@platinumhealthuae',
  linkedin: 'https://linkedin.com/company/platinumhealthuae',
  youtube: 'https://youtube.com/@platinumhealthuae',
};

// SEO Meta Data
export const SEO_DEFAULTS = {
  title: 'Platinum Healthcare UAE - Your Trusted Partner for Comprehensive Wellness',
  description: 'Best pediatric, dental, hair, beauty & GP clinic in Al Qusais, Dubai. Expert healthcare services with U.S. standards and genuine empathy.',
  keywords: 'healthcare, clinic, Dubai, Al Qusais, pediatric, dental, beauty, GP, medical services, UAE',
  author: 'Platinum Healthcare UAE',
  image: '/og-image.jpg',
  url: 'https://platinumhealthuae.com',
};

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// File Upload Limits
export const UPLOAD_LIMITS = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
};

// Pagination
export const PAGINATION = {
  defaultLimit: 10,
  maxLimit: 100,
  adminLimit: 20,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  token: 'token',
  user: 'user',
  theme: 'theme',
  language: 'language',
};

// API Endpoints
export const API_ENDPOINTS = {
  auth: '/auth',
  doctors: '/doctors',
  departments: '/departments',
  services: '/services',
  testimonials: '/testimonials',
  appointments: '/appointments',
  upload: '/upload',
  health: '/health',
};

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  server: 'Server error. Please try again later.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  validation: 'Please check your input and try again.',
  upload: 'File upload failed. Please try again.',
  generic: 'Something went wrong. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  login: 'Login successful!',
  logout: 'Logged out successfully!',
  save: 'Saved successfully!',
  update: 'Updated successfully!',
  delete: 'Deleted successfully!',
  create: 'Created successfully!',
  upload: 'Upload successful!',
  appointment: 'Appointment booked successfully!',
  testimonial: 'Thank you for your feedback!',
};