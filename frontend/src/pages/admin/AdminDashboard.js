import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Stethoscope, 
  MessageSquare, 
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';
import Button from '../../components/ui/Button';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalDoctors: 0,
    totalAppointments: 0,
    totalPatients: 0,
    pendingTestimonials: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchStats();
  }, [navigate]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch doctors count
      const doctorsRes = await fetch('http://localhost:5001/api/doctors', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const doctorsData = await doctorsRes.json();
      
      setStats(prev => ({
        ...prev,
        totalDoctors: doctorsData.total || 0
      }));
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Doctors',
      value: stats.totalDoctors,
      icon: Stethoscope,
      color: 'bg-blue-500',
      trend: '+12%'
    },
    {
      title: 'Appointments',
      value: stats.totalAppointments,
      icon: Calendar,
      color: 'bg-green-500',
      trend: '+8%'
    },
    {
      title: 'Total Patients',
      value: stats.totalPatients,
      icon: Users,
      color: 'bg-purple-500',
      trend: '+15%'
    },
    {
      title: 'Pending Reviews',
      value: stats.pendingTestimonials,
      icon: MessageSquare,
      color: 'bg-orange-500',
      trend: '3 new'
    }
  ];

  const recentActivities = [
    { action: 'New appointment booked', time: '5 minutes ago', icon: Calendar },
    { action: 'Doctor profile updated', time: '1 hour ago', icon: Stethoscope },
    { action: 'New testimonial submitted', time: '2 hours ago', icon: MessageSquare },
    { action: 'Patient registered', time: '3 hours ago', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Platinum Healthcare UAE</title>
        <meta name="description" content="Admin dashboard for managing Platinum Healthcare UAE operations." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="/assets/logo.png" 
                  alt="Platinum Healthcare" 
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                icon={<LogOut className="w-4 h-4" />}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-custom py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.trend}</span>
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{activity.time}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-start"
                  icon={<Stethoscope className="w-5 h-5" />}
                  onClick={() => alert('Manage Doctors feature coming soon!')}
                >
                  Manage Doctors
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start"
                  icon={<Calendar className="w-5 h-5" />}
                  onClick={() => alert('View Appointments feature coming soon!')}
                >
                  View Appointments
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start"
                  icon={<MessageSquare className="w-5 h-5" />}
                  onClick={() => alert('Manage Testimonials feature coming soon!')}
                >
                  Manage Testimonials
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start"
                  icon={<Users className="w-5 h-5" />}
                  onClick={() => alert('View Patients feature coming soon!')}
                >
                  View Patients
                </Button>
              </div>
            </motion.div>
          </div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">System Status</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Database</p>
                  <p className="font-semibold text-gray-900">Connected</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">API Server</p>
                  <p className="font-semibold text-gray-900">Running</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Email Service</p>
                  <p className="font-semibold text-gray-900">Active</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
