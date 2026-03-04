import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-cyan-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block">
              <span className="bg-cyan-500/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold">
                Welcome to Platinum Healthcare
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner for
              <span className="text-cyan-500 block mt-2">Comprehensive Wellness</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Experience exceptional healthcare services at Platinum Healthcare Clinic, Al Qusais. 
              We deliver world-class medical care with genuine compassion, integrating U.S. healthcare 
              standards with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointments">
                <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer w-full sm:w-auto">
                  Book Appointment
                </button>
              </Link>
              <Link to="/departments">
                <button className="bg-white text-cyan-500 border-2 border-cyan-500 px-8 py-4 rounded-lg text-base font-semibold hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-center w-full sm:w-auto">
                  Our Specialties
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Image Section */}
          <motion.div 
            className="relative flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main image container - Show image at natural size */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                alt="Platinum Healthcare Clinic"
                className="w-auto h-auto max-h-[600px]"
                src="/images/heroimg.png"
                onError={(e) => {
                  e.target.src = '/images/rectangle_684.webp';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;