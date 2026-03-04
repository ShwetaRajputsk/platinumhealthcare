import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const AboutSection = () => {
  const features = [
    'Expert Medical Professionals',
    'State-of-the-art Technology',
    'Comprehensive Care',
    'Patient-Centered Approach'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1.5 bg-cyan-100 rounded-full mb-3">
            <span className="text-cyan-600 text-xs font-semibold uppercase tracking-wide">About Our Medical Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Who We Are
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Combining medical excellence with compassionate care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                About our
                <br />
                <span className="font-semibold">medical center</span> | Who we are |
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our experienced team is dedicated to providing comprehensive healthcare services in a modern, comfortable environment. We deliver world-class medical care with genuine compassion, integrating U.S. healthcare standards with cutting-edge technology.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center space-x-4 pt-4">
              <Link to="/about">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  Learn More
                </Button>
              </Link>
              
              <Link 
                to="/contact"
                className="text-cyan-500 hover:text-cyan-600 font-medium inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image - Square */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md mx-auto" style={{ aspectRatio: '1/1' }}>
              <img 
                src="/images/rectangle_692.webp" 
                alt="Modern Healthcare Facility"
                className="w-full h-full object-cover"
                style={{ objectPosition: '65% center' }}
                onError={(e) => {
                  e.target.src = '/assets/logo.png';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;