import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Users, Clock, Award, ArrowRight, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    {
      name: 'General Medicine',
      slug: 'general-medicine',
      description: 'Comprehensive primary healthcare services for all ages with expert physicians and modern diagnostic facilities.',
      detailedDescription: 'Our General Medicine department provides comprehensive primary healthcare services, including routine check-ups, preventive care, and treatment of common illnesses. Our experienced physicians are trained to handle a wide range of medical conditions.',
      icon: 'fas fa-stethoscope',
      color: '#0ea5e9',
      stats: { doctors: 8, patients: '2,500+', services: 15 },
      services: [
        'Health Check-ups',
        'Preventive Care',
        'Chronic Disease Management',
        'Health Screenings',
        'Vaccination Programs',
        'Lifestyle Medicine'
      ],
      doctors: [
        { name: 'Dr. Emily Thompson', specialization: 'Family Medicine' },
        { name: 'Dr. Ahmed Hassan', specialization: 'Internal Medicine' },
        { name: 'Dr. Sarah Wilson', specialization: 'Preventive Medicine' }
      ],
      image: null,
      featured: true
    },
    {
      name: 'Pediatrics',
      slug: 'pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with gentle, child-friendly care approaches.',
      detailedDescription: 'Expert pediatric care focusing on the health and development of children from birth through adolescence, including vaccinations, growth monitoring, and treatment of childhood illnesses.',
      icon: 'fas fa-baby',
      color: '#22c55e',
      stats: { doctors: 6, patients: '1,800+', services: 12 },
      services: [
        'Child Development Assessment',
        'Vaccination Programs',
        'Growth Monitoring',
        'Newborn Care',
        'Adolescent Health',
        'Pediatric Emergency Care'
      ],
      doctors: [
        { name: 'Dr. Ahmed Al-Rashid', specialization: 'Pediatrics' },
        { name: 'Dr. Maria Santos', specialization: 'Child Development' },
        { name: 'Dr. Omar Khalil', specialization: 'Pediatric Emergency' }
      ],
      image: null,
      featured: true
    },
    {
      name: 'Gynecology',
      slug: 'gynecology',
      description: 'Comprehensive women\'s health and reproductive care services with experienced female specialists.',
      detailedDescription: 'Comprehensive women\'s health services including routine gynecological exams, prenatal care, family planning, and treatment of reproductive health issues.',
      icon: 'fas fa-female',
      color: '#f59e0b',
      stats: { doctors: 5, patients: '1,200+', services: 10 },
      services: [
        'Gynecological Examinations',
        'Prenatal Care',
        'Family Planning',
        'Reproductive Health',
        'Menopause Management',
        'Women\'s Health Screenings'
      ],
      doctors: [
        { name: 'Dr. Sarah Mitchell', specialization: 'Gynecology & Obstetrics' },
        { name: 'Dr. Aisha Al-Mahmoud', specialization: 'Reproductive Health' },
        { name: 'Dr. Lisa Chen', specialization: 'Maternal Medicine' }
      ],
      image: null,
      featured: true
    },
    {
      name: 'Dermatology',
      slug: 'dermatology',
      description: 'Advanced skin, hair, and nail care with modern treatment options and cosmetic procedures.',
      detailedDescription: 'Advanced dermatological services for diagnosis and treatment of skin conditions, cosmetic procedures, and preventive skin care.',
      icon: 'fas fa-hand-paper',
      color: '#ef4444',
      stats: { doctors: 4, patients: '900+', services: 18 },
      services: [
        'Skin Analysis & Diagnosis',
        'Acne Treatment',
        'Hair Loss Treatment',
        'Cosmetic Procedures',
        'Skin Cancer Screening',
        'Anti-aging Treatments'
      ],
      doctors: [
        { name: 'Dr. Rajesh Patel', specialization: 'Dermatology' },
        { name: 'Dr. Elena Rodriguez', specialization: 'Cosmetic Dermatology' },
        { name: 'Dr. Hassan Ali', specialization: 'Medical Dermatology' }
      ],
      image: null
    },
    {
      name: 'Internal Medicine',
      slug: 'internal-medicine',
      description: 'Adult healthcare and chronic disease management with focus on complex medical conditions.',
      detailedDescription: 'Specialized care for adult patients focusing on prevention, diagnosis, and treatment of internal diseases and chronic conditions.',
      icon: 'fas fa-heartbeat',
      color: '#8b5cf6',
      stats: { doctors: 6, patients: '1,100+', services: 14 },
      services: [
        'Chronic Disease Management',
        'Diabetes Care',
        'Hypertension Treatment',
        'Heart Health',
        'Respiratory Care',
        'Endocrine Disorders'
      ],
      doctors: [
        { name: 'Dr. Fatima Al-Zahra', specialization: 'Internal Medicine' },
        { name: 'Dr. Robert Kim', specialization: 'Cardiology' },
        { name: 'Dr. Nadia Hassan', specialization: 'Endocrinology' }
      ],
      image: null
    },
    {
      name: 'Aesthetic Medicine',
      slug: 'aesthetic-medicine',
      description: 'Professional cosmetic and aesthetic enhancement procedures with latest technology.',
      detailedDescription: 'Non-surgical cosmetic treatments and aesthetic procedures to enhance appearance and boost confidence.',
      icon: 'fas fa-spa',
      color: '#ec4899',
      stats: { doctors: 3, patients: '600+', services: 20 },
      services: [
        'Botox & Fillers',
        'Laser Treatments',
        'Anti-aging Procedures',
        'Skin Rejuvenation',
        'Body Contouring',
        'Hair Restoration'
      ],
      doctors: [
        { name: 'Dr. Michael Chen', specialization: 'Aesthetic Medicine' },
        { name: 'Dr. Sophia Martinez', specialization: 'Cosmetic Procedures' },
        { name: 'Dr. James Wilson', specialization: 'Laser Therapy' }
      ],
      image: null
    },
    {
      name: 'Laboratory Services',
      slug: 'laboratory-services',
      description: 'Comprehensive diagnostic testing and analysis with quick, accurate results.',
      detailedDescription: 'State-of-the-art laboratory services providing accurate and timely diagnostic testing to support patient care.',
      icon: 'fas fa-flask',
      color: '#06b6d4',
      stats: { tests: '50+', turnaround: '24hrs', accuracy: '99.9%' },
      services: [
        'Blood Tests',
        'Urine Analysis',
        'Imaging Services',
        'Health Screenings',
        'Pathology',
        'Microbiology'
      ],
      doctors: [
        { name: 'Dr. Ahmed Farouk', specialization: 'Clinical Pathology' },
        { name: 'Dr. Jennifer Lee', specialization: 'Laboratory Medicine' },
        { name: 'Dr. Khalid Al-Rashid', specialization: 'Microbiology' }
      ],
      image: null
    }
  ];

  // Filter departments based on search
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Medical Departments - Platinum Healthcare UAE | Comprehensive Healthcare Services</title>
        <meta name="description" content="Explore our comprehensive medical departments and specialties at Platinum Healthcare UAE in Al Qusais, Dubai. Expert care across all medical fields." />
        <meta name="keywords" content="medical departments, healthcare services, dubai clinic, al qusais medical center, platinum healthcare specialties" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Stethoscope className="w-4 h-4 mr-2" />
                Our Medical Specialties
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive Healthcare{' '}
                <span className="text-primary-600">Departments</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our expert medical departments provide specialized care across all areas of health and wellness, 
                ensuring you receive the best treatment for your specific needs with state-of-the-art facilities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">7</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Specialists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-error-600 mb-2">10k+</div>
                  <div className="text-sm text-gray-600">Patients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search departments or services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDepartments.map((department, index) => (
                <motion.div
                  key={department.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link 
                    to={`/departments/${department.slug}`}
                    className="block h-full"
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
                        
                        {department.featured && (
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-3">
                            {department.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {department.description}
                          </p>
                        </div>

                        {/* Services Preview */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-700">Key Services:</h4>
                          <div className="space-y-1">
                            {department.services.slice(0, 3).map((service, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: department.color }}
                                ></div>
                                <span>{service}</span>
                              </div>
                            ))}
                            {department.services.length > 3 && (
                              <div className="text-sm text-gray-500">
                                +{department.services.length - 3} more services
                              </div>
                            )}
                          </div>
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
                          
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium" style={{ color: department.color }}>
                              {department.stats.patients || department.stats.turnaround}
                            </span>
                            <ArrowRight 
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                              style={{ color: department.color }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredDepartments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No departments found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Why Choose Our Departments */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Departments?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each department is equipped with state-of-the-art technology and staffed by experienced specialists
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Expert Specialists',
                  description: 'Board-certified doctors with years of experience in their respective fields'
                },
                {
                  icon: Stethoscope,
                  title: 'Advanced Technology',
                  description: 'State-of-the-art medical equipment and diagnostic tools for accurate results'
                },
                {
                  icon: Clock,
                  title: 'Quick Service',
                  description: 'Efficient appointment scheduling and minimal waiting times for all departments'
                },
                {
                  icon: Users,
                  title: 'Comprehensive Care',
                  description: 'Integrated approach with collaboration between different departments'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Need Help Choosing the Right Department?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our medical experts are here to guide you to the right specialist for your healthcare needs. 
                Contact us for a consultation or book an appointment directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointments">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                    className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-50"
                  >
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Departments;