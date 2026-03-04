import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Baby, Users, Droplets, TestTube2, Home, Pill, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const specialties = [
    {
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare services for all ages with experienced general practitioners',
      icon: Stethoscope,
      delay: 0
    },
    {
      title: 'Aesthetic Medicine',
      description: 'Advanced cosmetic treatments and procedures for skin rejuvenation and beauty enhancement',
      icon: Sparkles,
      delay: 100
    },
    {
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with compassionate care',
      icon: Baby,
      delay: 200
    },
    {
      title: 'Gynecology',
      description: "Comprehensive women's health services including prenatal care and gynecological treatments",
      icon: Users,
      delay: 300
    },
    {
      title: 'Dermatology',
      description: 'Expert skin care treatments for medical and cosmetic dermatological conditions',
      icon: Droplets,
      delay: 400
    },
    {
      title: 'Laboratory Services',
      description: 'Comprehensive diagnostic testing with accurate results and quick turnaround times',
      icon: TestTube2,
      delay: 500
    },
    {
      title: 'Home Care Services',
      description: 'Professional medical care delivered in the comfort of your home',
      icon: Home,
      delay: 600
    },
    {
      title: 'Pharmacy',
      description: 'Full-service pharmacy with prescription medications and health products',
      icon: Pill,
      delay: 700
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4 uppercase tracking-wide"
          >
            What We Offer
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Medical Specialties
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive healthcare services delivered by expert specialists using advanced medical technology
          </motion.p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: specialty.delay / 1000 }}
              className="group relative bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl p-8 border border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <specialty.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {specialty.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {specialty.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/departments">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
              View All Specialties
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;