import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence', description: 'Delivering quality healthcare since 2010', icon: 'ri-award-line', color: 'from-amber-400 to-orange-500' },
    { number: '50+', label: 'Expert Professionals', description: 'Internationally trained specialists', icon: 'ri-user-star-line', color: 'from-violet-500 to-purple-600' },
    { number: '15+', label: 'Medical Specialties', description: 'Comprehensive healthcare services', icon: 'ri-hospital-line', color: 'from-cyan-400 to-teal-500' },
    { number: '10K+', label: 'Patients Annually', description: 'Trusted by thousands of families', icon: 'ri-heart-pulse-line', color: 'from-rose-400 to-pink-600' }
  ];

  return (
    <section className="py-14 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #164e63 100%)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-3">
            <span className="text-cyan-300 text-xs font-semibold uppercase tracking-widest">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Excellence in Numbers</h2>
          <p className="text-blue-200 text-base max-w-2xl mx-auto">Measurable excellence in healthcare delivery and patient satisfaction</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-center group overflow-hidden"
            >
              {/* Colored top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`}></div>

              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${stat.icon} text-xl text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-300 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
