import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import FloatingChatButton from './components/ui/FloatingChatButton';

// Pages - Lazy loaded for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Doctors = React.lazy(() => import('./pages/Doctors'));
const DoctorDetail = React.lazy(() => import('./pages/DoctorDetail'));
const Departments = React.lazy(() => import('./pages/Departments'));
const DepartmentDetail = React.lazy(() => import('./pages/DepartmentDetail'));
const Services = React.lazy(() => import('./pages/Services'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Appointments = React.lazy(() => import('./pages/Appointments'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Admin Pages
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

function App() {
  const location = useLocation();
  
  // Check if current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Only show Header and Footer for non-admin routes */}
      {!isAdminRoute && <Header />}
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Suspense 
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
              </div>
            }
          >
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Routes location={location}>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:id" element={<DoctorDetail />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/departments/:slug" element={<DepartmentDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </main>
      
      {/* Only show Footer for non-admin routes */}
      {!isAdminRoute && <Footer />}
      
      {/* Floating Chat Button - Show on all non-admin pages */}
      {!isAdminRoute && <FloatingChatButton />}
    </div>
  );
}

export default App;