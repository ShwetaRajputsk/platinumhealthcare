import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0c4a6e 100%)' }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-6">
            <span className="text-cyan-300 text-sm font-semibold">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Excellence in <span style={{ background: 'linear-gradient(90deg, #22d3ee, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Healthcare</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied patients who trust Platinum Healthcare for their medical needs. 
            Book your appointment today and take the first step towards better health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <button className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/30 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)' }}>
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
