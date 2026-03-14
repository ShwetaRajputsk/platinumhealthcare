import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useQuery } from 'react-query';
import { doctorsAPI } from '../../services/api';
import LoadingSpinner from '../ui/LoadingSpinner';

const DoctorsSection = () => {
  // Fetch featured doctors from API
  const { data: doctorsData, isLoading } = useQuery('featuredDoctors', () => 
    doctorsAPI.getAll({ featured: true, limit: 6 })
  );

  const doctors = doctorsData?.data?.data?.doctors || [];

  if (isLoading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-3 text-white text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)' }}>
            Our Medical Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our Expert Doctors
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Our experienced medical professionals are dedicated to providing exceptional healthcare services
          </p>
        </motion.div>

        {/* Doctors Grid - 2 columns horizontal cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {doctors.slice(0, 6).map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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

        {/* View All Doctors Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/doctors">
            <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              View All Doctors
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;
