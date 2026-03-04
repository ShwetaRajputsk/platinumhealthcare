import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: 'General Consultation',
      slug: 'general-consultation',
      description: 'Comprehensive health assessment and consultation with our expert physicians including vital signs, medical history review, and personalized health recommendations.',
      department: { name: 'General Medicine', color: '#0ea5e9' },
      icon: 'ri-stethoscope-line',
      price: { min: 200, max: 300, currency: 'AED' },
      duration: 30,
      features: ['Health Assessment', 'Medical History Review', 'Treatment Plan', 'Follow-up Recommendations'],
      featured: true,
      rating: 4.9,
      bookings: '2.5k+'
    },
    {
      name: 'Child Health Check-up',
      slug: 'child-health-checkup',
      description: 'Complete pediatric examination and development assessment for children including growth monitoring, developmental milestones, and vaccination updates.',
      department: { name: 'Pediatrics', color: '#22c55e' },
      icon: 'ri-parent-line',
      price: { min: 250, max: 350, currency: 'AED' },
      duration: 45,
      features: ['Growth Assessment', 'Development Screening', 'Vaccination Review', 'Nutritional Guidance'],
      featured: true,
      rating: 4.8,
      bookings: '1.8k+'
    },
    {
      name: 'Women\'s Health Screening',
      slug: 'womens-health-screening',
      description: 'Comprehensive gynecological examination and health screening for women including routine screenings and reproductive health consultation.',
      department: { name: 'Gynecology', color: '#f59e0b' },
      icon: 'ri-women-line',
      price: { min: 300, max: 400, currency: 'AED' },
      duration: 60,
      features: ['Pelvic Examination', 'Breast Examination', 'Pap Smear', 'Health Counseling'],
      rating: 4.9,
      bookings: '1.2k+'
    },
    {
      name: 'Skin Consultation',
      slug: 'skin-consultation',
      description: 'Professional skin assessment and personalized treatment planning with comprehensive skin examination and treatment recommendations.',
      department: { name: 'Dermatology', color: '#ef4444' },
      icon: 'ri-hand-heart-line',
      price: { min: 350, max: 500, currency: 'AED' },
      duration: 45,
      features: ['Skin Analysis', 'Treatment Planning', 'Product Recommendations', 'Follow-up Care'],
      rating: 4.7,
      bookings: '900+'
    },
    {
      name: 'Botox Treatment',
      slug: 'botox-treatment',
      description: 'Professional botox injections for wrinkle reduction and facial rejuvenation performed by certified aesthetic medicine specialists.',
      department: { name: 'Aesthetic Medicine', color: '#ec4899' },
      icon: 'ri-contrast-drop-2-line',
      price: { min: 800, max: 1500, currency: 'AED' },
      duration: 60,
      features: ['Consultation', 'Treatment Planning', 'Professional Application', 'Aftercare Instructions'],
      featured: true,
      rating: 4.9,
      bookings: '600+'
    },
    {
      name: 'Blood Test Package',
      slug: 'blood-test-package',
      description: 'Comprehensive blood analysis and health screening package including CBC, lipid profile, liver function, kidney function, and diabetes screening.',
      department: { name: 'Laboratory Services', color: '#06b6d4' },
      icon: 'ri-test-tube-line',
      price: { min: 150, max: 300, currency: 'AED' },
      duration: 15,
      features: ['CBC', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'HbA1c'],
      rating: 4.8,
      bookings: '3k+'
    },
    {
      name: 'Diabetes Management',
      slug: 'diabetes-management',
      description: 'Comprehensive diabetes care and management program including blood sugar monitoring, medication adjustment, and lifestyle counseling.',
      department: { name: 'Internal Medicine', color: '#8b5cf6' },
      icon: 'ri-heart-pulse-line',
      price: { min: 280, max: 380, currency: 'AED' },
      duration: 45,
      features: ['Blood Sugar Monitoring', 'Medication Review', 'Diet Planning', 'Lifestyle Counseling'],
      rating: 4.8,
      bookings: '800+'
    },
    {
      name: 'Vaccination Program',
      slug: 'vaccination-program',
      description: 'Complete vaccination services for children and adults including routine immunizations, travel vaccines, and health certificates.',
      department: { name: 'Pediatrics', color: '#22c55e' },
      icon: 'ri-syringe-line',
      price: { min: 100, max: 250, currency: 'AED' },
      duration: 20,
      features: ['Routine Vaccines', 'Travel Vaccines', 'Health Certificates', 'Immunization Records'],
      rating: 4.9,
      bookings: '2k+'
    },
    {
      name: 'Laser Hair Removal',
      slug: 'laser-hair-removal',
      description: 'Advanced laser hair removal treatment using latest technology for safe and effective permanent hair reduction.',
      department: { name: 'Aesthetic Medicine', color: '#ec4899' },
      icon: 'ri-flashlight-line',
      price: { min: 200, max: 800, currency: 'AED' },
      duration: 30,
      features: ['Latest Laser Technology', 'Safe Treatment', 'Permanent Results', 'All Skin Types'],
      rating: 4.7,
      bookings: '1.1k+'
    },
    {
      name: 'Heart Health Check',
      slug: 'heart-health-check',
      description: 'Comprehensive cardiovascular assessment including ECG, blood pressure monitoring, and heart health consultation.',
      department: { name: 'Internal Medicine', color: '#8b5cf6' },
      icon: 'ri-heart-line',
      price: { min: 400, max: 600, currency: 'AED' },
      duration: 60,
      features: ['ECG', 'Blood Pressure Monitoring', 'Cholesterol Check', 'Heart Health Consultation'],
      rating: 4.8,
      bookings: '700+'
    },
    {
      name: 'Prenatal Care Package',
      slug: 'prenatal-care-package',
      description: 'Comprehensive prenatal care program for expecting mothers including regular check-ups, ultrasounds, and health monitoring.',
      department: { name: 'Gynecology', color: '#f59e0b' },
      icon: 'ri-empathize-line',
      price: { min: 500, max: 800, currency: 'AED' },
      duration: 45,
      features: ['Regular Check-ups', 'Ultrasound', 'Health Monitoring', 'Nutritional Guidance'],
      featured: true,
      rating: 4.9,
      bookings: '500+'
    },
    {
      name: 'Acne Treatment',
      slug: 'acne-treatment',
      description: 'Specialized acne treatment program including skin analysis, customized treatment plan, and follow-up care for clear skin.',
      department: { name: 'Dermatology', color: '#ef4444' },
      icon: 'ri-user-smile-line',
      price: { min: 300, max: 600, currency: 'AED' },
      duration: 45,
      features: ['Skin Analysis', 'Customized Treatment', 'Medication', 'Follow-up Care'],
      rating: 4.6,
      bookings: '1.3k+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Services - Platinum Healthcare UAE | Comprehensive Healthcare Solutions</title>
        <meta name="description" content="Discover our comprehensive medical services and treatments at Platinum Healthcare UAE in Al Qusais, Dubai. Expert care across all medical specialties." />
        <meta name="keywords" content="medical services, healthcare treatments, dubai clinic services, platinum healthcare, al qusais medical services" />
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
                <span className="text-cyan-600 text-sm font-semibold">Our Medical Services</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Comprehensive Healthcare Services
              </h1>
              
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                From routine check-ups to specialized treatments, we offer a wide range of medical services to meet all your healthcare needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-6 h-full transition-all duration-300 relative">
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Service Header */}
                    <div className="mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${service.department.color}15` }}
                      >
                        <i 
                          className={`${service.icon} text-2xl`}
                          style={{ color: service.department.color }}
                        ></i>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors duration-200">
                        {service.name}
                      </h3>
                      
                      <div 
                        className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white mb-2"
                        style={{ backgroundColor: service.department.color }}
                      >
                        {service.department.name}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                          <div 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: service.department.color }}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <i className="ri-time-line"></i>
                          <span>{service.duration} min</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <i className="ri-money-dollar-circle-line"></i>
                          <span>AED {service.price.min}-{service.price.max}</span>
                        </div>
                      </div>

                      {service.rating && (
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-1">
                            <i className="ri-star-fill text-yellow-400"></i>
                            <span className="font-medium text-gray-700">{service.rating}</span>
                          </div>
                          <span className="text-gray-500">{service.bookings} bookings</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <Link to={`/services/${service.slug}`} className="flex-1">
                        <button className="w-full bg-white text-cyan-500 border border-cyan-500 px-3 py-2 rounded-full text-xs font-medium hover:bg-cyan-50 transition-colors duration-200">
                          Learn More
                        </button>
                      </Link>
                      <Link to="/appointments" className="flex-1">
                        <button className="w-full bg-cyan-500 text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-cyan-600 transition-colors duration-200">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-3">Ready to Book Your Service?</h2>
              <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive range of medical services and book your appointment today
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointments">
                  <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                    Book Appointment
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200">
                    Get Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
