import axios from 'axios';
import toast from 'react-hot-toast';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    
    // Don't show toast for certain errors
    const silentErrors = [401, 404];
    if (!silentErrors.includes(error.response?.status)) {
      toast.error(message);
    }
    
    // Redirect to login if unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      if (window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
};

// Doctors API
export const doctorsAPI = {
  getAll: (params = {}) => api.get('/doctors', { params }),
  getById: (id) => api.get(`/doctors/${id}`),
  create: (doctorData) => api.post('/doctors', doctorData),
  update: (id, doctorData) => api.put(`/doctors/${id}`, doctorData),
  delete: (id) => api.delete(`/doctors/${id}`),
  toggleStatus: (id) => api.put(`/doctors/${id}/toggle-status`),
};

// Departments API
export const departmentsAPI = {
  getAll: (params = {}) => api.get('/departments', { params }),
  getBySlug: (slug) => api.get(`/departments/${slug}`),
  create: (departmentData) => api.post('/departments', departmentData),
  update: (id, departmentData) => api.put(`/departments/${id}`, departmentData),
  delete: (id) => api.delete(`/departments/${id}`),
};

// Services API
export const servicesAPI = {
  getAll: (params = {}) => api.get('/services', { params }),
  getBySlug: (slug) => api.get(`/services/${slug}`),
  create: (serviceData) => api.post('/services', serviceData),
  update: (id, serviceData) => api.put(`/services/${id}`, serviceData),
  delete: (id) => api.delete(`/services/${id}`),
};

// Testimonials API
export const testimonialsAPI = {
  getAll: (params = {}) => api.get('/testimonials', { params }),
  getById: (id) => api.get(`/testimonials/${id}`),
  create: (testimonialData) => api.post('/testimonials', testimonialData),
  update: (id, testimonialData) => api.put(`/testimonials/${id}`, testimonialData),
  delete: (id) => api.delete(`/testimonials/${id}`),
  approve: (id) => api.put(`/testimonials/${id}/approve`),
  toggleFeatured: (id) => api.put(`/testimonials/${id}/toggle-featured`),
};

// Appointments API
export const appointmentsAPI = {
  getAll: (params = {}) => api.get('/appointments', { params }),
  getById: (id) => api.get(`/appointments/${id}`),
  create: (appointmentData) => api.post('/appointments', appointmentData),
  update: (id, appointmentData) => api.put(`/appointments/${id}`, appointmentData),
  updateStatus: (id, statusData) => api.put(`/appointments/${id}/status`, statusData),
  delete: (id) => api.delete(`/appointments/${id}`),
  getAvailability: (doctorId, date) => 
    api.get(`/appointments/doctor/${doctorId}/availability`, { params: { date } }),
};

// Upload API
export const uploadAPI = {
  uploadImage: (file, folder = 'platinum-healthcare') => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);
    
    return api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteImage: (publicId) => {
    const encodedPublicId = publicId.replace(/\//g, '--');
    return api.delete(`/upload/image/${encodedPublicId}`);
  },
};

// Health check
export const healthAPI = {
  check: () => api.get('/health'),
};

export default api;