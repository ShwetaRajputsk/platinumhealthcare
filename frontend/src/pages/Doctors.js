import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useQuery } from 'react-query';
import { doctorsAPI } from '../services/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const Doctors = () => {
  // Fetch doctors from API
  const { data: doctorsData, isLoading, error } = useQuery('doctors', () => 
    doctorsAPI.getAll({ isActive: true })
  );

  const doctors = doctorsData?.data?.data?.doctors || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading doctors</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Expert Doctors - Platinum Healthcare UAE | Medical Specialists in Dubai</title>
        <meta name="description" content="Meet our expert medical team at Platinum Healthcare UAE. Find qualified doctors and specialists in Al Qusais, Dubai. Book appointments with experienced physicians." />
        <meta name="keywords" content="doctors dubai, medical specialists, platinum healthcare doctors, al qusais doctors, dubai physicians" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-cyan-50/30 py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-3">
                <span className="text-cyan-600 text-sm font-semibold">Meet Our Expert Medical Team</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Our Doctors
              </h1>
              
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Our experienced medical professionals are dedicated to providing exceptional healthcare services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-6">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex h-full">
                    {/* Doctor Image - Left side */}
                    <div className="w-2/5 bg-gray-50 flex-shrink-0">
                      <img 
                        src={doctor.image?.url || '/assets/logo.png'} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        style={{ minHeight: '280px', maxHeight: '280px' }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/logo.png';
                        }}
                      />
                    </div>

                    {/* Doctor Info - Right side */}
                    <div className="w-3/5 p-5 flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 mb-0.5">
                          {doctor.name}
                        </h2>
                        <p className="text-cyan-500 mb-1.5 text-xs">
                          {Array.isArray(doctor.qualifications) 
                            ? doctor.qualifications.map(q => q.degree).join(', ')
                            : typeof doctor.qualifications === 'string' 
                            ? doctor.qualifications 
                            : 'Medical Professional'}
                        </p>
                        <h3 className="text-gray-900 font-bold mb-2 text-xs uppercase">
                          {doctor.specialization}
                        </h3>
                        <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-3">
                          {doctor.bio || `${doctor.name} is an experienced ${doctor.specialization} providing comprehensive medical care with a focus on patient wellness.`}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Link to="/appointments" className="flex-1">
                          <button className="w-full bg-cyan-500 text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-cyan-600 transition-colors duration-200">
                            Book Appointment
                          </button>
                        </Link>
                        <Link to={`/doctors/${doctor.id}`} className="flex-1">
                          <button className="w-full bg-white text-cyan-500 border border-cyan-500 px-3 py-2 rounded-full text-xs font-medium hover:bg-cyan-50 transition-colors duration-200">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {doctors.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600 mb-6">Please check back later.</p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Doctors;
