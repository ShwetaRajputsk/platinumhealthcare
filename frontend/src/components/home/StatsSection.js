import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      number: '15+',
      label: 'Years of Excellence',
      description: 'Delivering quality healthcare since 2010',
      icon: 'ri-award-line'
    },
    {
      number: '50+',
      label: 'Expert Medical Professionals',
      description: 'Internationally trained specialists',
      icon: 'ri-user-star-line'
    },
    {
      number: '15+',
      label: 'Medical Specialties',
      description: 'Comprehensive healthcare services',
      icon: 'ri-hospital-line'
    },
    {
      number: '10K+',
      label: 'Patients Treated Annually',
      description: 'Trusted by thousands of families',
      icon: 'ri-heart-pulse-line'
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-cyan-500 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <span className="text-white text-xs font-semibold uppercase tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Excellence in Numbers</h2>
          <p className="text-white/90 text-base max-w-2xl mx-auto">
            Measurable excellence in healthcare delivery and patient satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-white/80 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
