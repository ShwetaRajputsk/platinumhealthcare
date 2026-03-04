import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Award } from 'lucide-react';
import Button from '../ui/Button';

const DepartmentsSection = () => {
  const departments = [
    {
      name: 'General Medicine',
      slug: 'general-medicine',
      description: 'Comprehensive primary healthcare services for all ages with expert physicians',
      icon: 'fas fa-stethoscope',
      color: '#0ea5e9',
      stats: { doctors: 8, patients: '2.5k+' },
      features: ['Health Check-ups', 'Preventive Care', 'Chronic Disease Management']
    },
    {
      name: 'Pediatrics',
      slug: 'pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with gentle care',
      icon: 'fas fa-baby',
      color: '#22c55e',
      stats: { doctors: 6, patients: '1.8k+' },
      features: ['Child Development', 'Vaccinations', 'Growth Monitoring']
    },
    {
      name: 'Gynecology',
      slug: 'gynecology',
      description: 'Comprehensive women\'s health and reproductive care services',
      icon: 'fas fa-female',
      color: '#f59e0b',
      stats: { doctors: 5, patients: '1.2k+' },
      features: ['Women\'s Health', 'Prenatal Care', 'Family Planning']
    },
    {
      name: 'Dermatology',
      slug: 'dermatology',
      description: 'Advanced skin, hair, and nail care with modern treatment options',
      icon: 'fas fa-hand-paper',
      color: '#ef4444',
      stats: { doctors: 4, patients: '900+' },
      features: ['Skin Analysis', 'Cosmetic Procedures', 'Hair Treatment']
    },
    {
      name: 'Aesthetic Medicine',
      slug: 'aesthetic-medicine',
      description: 'Professional cosmetic and aesthetic enhancement procedures',
      icon: 'fas fa-spa',
      color: '#ec4899',
      stats: { doctors: 3, patients: '600+' },
      features: ['Botox & Fillers', 'Laser Treatments', 'Anti-aging']
    },
    {
      name: 'Laboratory Services',
      slug: 'laboratory-services',
      description: 'Comprehensive diagnostic testing and analysis with quick results',
      icon: 'fas fa-flask',
      color: '#06b6d4',
      stats: { tests: '50+', turnaround: '24hrs' },
      features: ['Blood Tests', 'Imaging', 'Health Screenings']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Medical Specialties
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare{' '}
              <span className="text-primary-600">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expert medical departments provide specialized care across all areas of health and wellness, 
              ensuring you receive the best treatment for your specific needs.
            </p>
          </motion.div>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((department, index) => (
            <motion.div
              key={department.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={`/departments/${department.slug}`}
                className="block group h-full"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-white/20 p-8 h-full transition-all duration-300 group-hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: `${department.color}15`, border: `2px solid ${department.color}20` }}
                    >
                      <i 
                        className={`${department.icon} text-2xl`}
                        style={{ color: department.color }}
                      ></i>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight 
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                        style={{ color: department.color }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {department.name}
                    </h3>
                    
                    <p className="text-base text-gray-600 leading-relaxed">
                      {department.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {department.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: department.color }}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm">
                        {department.stats.doctors && (
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>{department.stats.doctors} Doctors</span>
                          </div>
                        )}
                        {department.stats.tests && (
                          <div className="flex items-center space-x-1 text-gray-600">
                            <i className="fas fa-vial w-4 h-4"></i>
                            <span>{department.stats.tests} Tests</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm font-medium" style={{ color: department.color }}>
                        {department.stats.patients || department.stats.turnaround}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Department?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our medical experts are here to guide you to the right specialist for your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/departments">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  View All Departments
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;