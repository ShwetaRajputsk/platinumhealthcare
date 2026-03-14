import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0e7490 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #22d3ee, transparent)', filter: 'blur(60px)' }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #6366f1, transparent)', filter: 'blur(60px)' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(80px)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-300 text-sm font-semibold">Welcome to Platinum Healthcare</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Trusted Partner for
              <span className="block mt-2" style={{ background: 'linear-gradient(90deg, #22d3ee, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Comprehensive Wellness
              </span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              Experience exceptional healthcare services at Platinum Healthcare Clinic, Al Qusais.
              We deliver world-class medical care with genuine compassion, integrating U.S. healthcare
              standards with cutting-edge technology.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {['Expert Doctors', '15+ Specialties', 'Modern Facility', '24/7 Support'].map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium text-white/80 border border-white/20 bg-white/10 backdrop-blur-sm">
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointments">
                <button className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
                  Book Appointment
                </button>
              </Link>
              <Link to="/departments">
                <button className="px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-105 w-full sm:w-auto">
                  Our Specialties
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-3xl opacity-30" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-400/30">
              <img
                alt="Platinum Healthcare Clinic"
                className="w-auto h-auto max-h-[580px]"
                src="/images/heroimg.png"
                onError={(e) => { e.target.src = '/images/rectangle_684.webp'; }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
