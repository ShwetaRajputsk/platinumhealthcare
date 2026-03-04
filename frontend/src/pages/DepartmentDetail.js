import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const DepartmentDetail = () => {
  const { slug } = useParams();

  // All departments data
  const departmentsData = {
    'general-medicine': {
      name: 'General Medicine',
      description: 'Comprehensive primary healthcare services for all ages with expert physicians',
      icon: 'ri-stethoscope-line',
      color: '#0ea5e9',
      overview: 'Our General Medicine department provides comprehensive primary healthcare services for patients of all ages. Our experienced physicians are trained to diagnose and treat a wide range of medical conditions, from common illnesses to chronic diseases.',
      services: [
        'Health Check-ups',
        'Preventive Care',
        'Chronic Disease Management',
        'Acute Illness Treatment',
        'Health Screenings',
        'Vaccination Services',
        'Medical Consultations',
        'Prescription Management'
      ],
      conditions: [
        'Diabetes',
        'Hypertension',
        'Respiratory Infections',
        'Digestive Disorders',
        'Thyroid Disorders',
        'Arthritis',
        'Allergies',
        'General Health Concerns'
      ],
      whyChoose: [
        'Experienced and qualified physicians',
        'Comprehensive health assessments',
        'Personalized treatment plans',
        'Modern diagnostic facilities',
        'Preventive care focus',
        'Continuity of care'
      ]
    },
    'pediatrics': {
      name: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with gentle care',
      icon: 'ri-parent-line',
      color: '#22c55e',
      overview: 'Our Pediatrics department is dedicated to providing specialized healthcare for infants, children, and adolescents. We focus on preventive care, growth monitoring, and treating childhood illnesses with compassion and expertise.',
      services: [
        'Well-Child Visits',
        'Vaccination Programs',
        'Growth & Development Monitoring',
        'Newborn Care',
        'Childhood Illness Treatment',
        'Nutritional Counseling',
        'Behavioral Assessment',
        'School Health Services'
      ],
      conditions: [
        'Common Childhood Illnesses',
        'Respiratory Infections',
        'Allergies',
        'Asthma',
        'Growth Disorders',
        'Developmental Delays',
        'Skin Conditions',
        'Digestive Issues'
      ],
      whyChoose: [
        'Child-friendly environment',
        'Experienced pediatricians',
        'Comprehensive vaccination programs',
        'Growth monitoring expertise',
        'Parent education and support',
        'Gentle and caring approach'
      ]
    },
    'gynecology': {
      name: 'Gynecology',
      description: 'Comprehensive women\'s health and reproductive care services',
      icon: 'ri-women-line',
      color: '#f59e0b',
      overview: 'Our Gynecology department provides comprehensive women\'s health services, from routine screenings to specialized reproductive care. We are committed to supporting women\'s health at every stage of life.',
      services: [
        'Routine Gynecological Exams',
        'Prenatal Care',
        'Family Planning',
        'Menstrual Disorder Treatment',
        'Menopause Management',
        'Pap Smears',
        'Breast Examinations',
        'Reproductive Health Counseling'
      ],
      conditions: [
        'Menstrual Irregularities',
        'PCOS',
        'Endometriosis',
        'Fibroids',
        'Menopause Symptoms',
        'Pregnancy Care',
        'Infertility',
        'Reproductive Health Issues'
      ],
      whyChoose: [
        'Female-focused care',
        'Experienced gynecologists',
        'Comprehensive prenatal services',
        'Modern diagnostic equipment',
        'Privacy and comfort',
        'Holistic approach to women\'s health'
      ]
    },
    'dermatology': {
      name: 'Dermatology',
      description: 'Advanced skin, hair, and nail care with modern treatment options',
      icon: 'ri-hand-heart-line',
      color: '#ef4444',
      overview: 'Our Dermatology department offers comprehensive care for all skin, hair, and nail conditions. We combine medical expertise with advanced treatments to help you achieve healthy, beautiful skin.',
      services: [
        'Skin Consultations',
        'Acne Treatment',
        'Anti-Aging Treatments',
        'Hair Loss Treatment',
        'Skin Cancer Screening',
        'Cosmetic Dermatology',
        'Laser Treatments',
        'Chemical Peels'
      ],
      conditions: [
        'Acne',
        'Eczema',
        'Psoriasis',
        'Rosacea',
        'Hair Loss',
        'Skin Infections',
        'Pigmentation Disorders',
        'Aging Skin'
      ],
      whyChoose: [
        'Board-certified dermatologists',
        'Latest treatment technologies',
        'Personalized skincare plans',
        'Medical and cosmetic services',
        'Advanced diagnostic tools',
        'Comprehensive skin care'
      ]
    },
    'aesthetic-medicine': {
      name: 'Aesthetic Medicine',
      description: 'Professional cosmetic and aesthetic enhancement procedures',
      icon: 'ri-contrast-drop-2-line',
      color: '#ec4899',
      overview: 'Our Aesthetic Medicine department offers professional cosmetic treatments to enhance your natural beauty. Our certified specialists use the latest techniques and premium products for safe, effective results.',
      services: [
        'Botox Injections',
        'Dermal Fillers',
        'Laser Hair Removal',
        'Chemical Peels',
        'Skin Rejuvenation',
        'Anti-Aging Treatments',
        'Body Contouring',
        'Facial Treatments'
      ],
      conditions: [
        'Wrinkles and Fine Lines',
        'Volume Loss',
        'Unwanted Hair',
        'Skin Texture Issues',
        'Pigmentation',
        'Acne Scars',
        'Aging Signs',
        'Skin Laxity'
      ],
      whyChoose: [
        'Certified aesthetic specialists',
        'Premium products and equipment',
        'Natural-looking results',
        'Personalized treatment plans',
        'Safe and effective procedures',
        'Comprehensive aftercare'
      ]
    },
    'laboratory-services': {
      name: 'Laboratory Services',
      description: 'Comprehensive diagnostic testing and analysis with quick results',
      icon: 'ri-test-tube-line',
      color: '#06b6d4',
      overview: 'Our Laboratory Services department provides comprehensive diagnostic testing with state-of-the-art equipment and experienced technicians. We ensure accurate results with quick turnaround times.',
      services: [
        'Blood Tests',
        'Urine Analysis',
        'Hormone Testing',
        'Diabetes Screening',
        'Cholesterol Testing',
        'Thyroid Function Tests',
        'Liver Function Tests',
        'Kidney Function Tests'
      ],
      conditions: [
        'Diabetes Monitoring',
        'Cardiovascular Risk Assessment',
        'Thyroid Disorders',
        'Liver Conditions',
        'Kidney Diseases',
        'Anemia',
        'Infections',
        'Hormonal Imbalances'
      ],
      whyChoose: [
        'Advanced laboratory equipment',
        'Experienced lab technicians',
        'Quick turnaround times',
        'Accurate and reliable results',
        'Comprehensive test panels',
        'Quality assurance protocols'
      ]
    }
  };

  const department = departmentsData[slug];

  if (!department) {
    return (
      <>
        <Helmet>
          <title>Department Not Found - Platinum Healthcare UAE</title>
        </Helmet>
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
            <p className="text-gray-600 mb-8">The department you're looking for doesn't exist.</p>
            <Link to="/services">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{department.name} - Platinum Healthcare UAE</title>
        <meta name="description" content={department.description} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-cyan-50/30 py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:text-cyan-600">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-cyan-600">Services</Link>
                <span>/</span>
                <span className="text-gray-900">{department.name}</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div 
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-medium text-white mb-4"
                    style={{ backgroundColor: department.color }}
                  >
                    Medical Department
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {department.name}
                  </h1>

                  <p className="text-base text-gray-600 mb-6">
                    {department.description}
                  </p>

                  <div className="flex gap-4">
                    <Link to="/appointments">
                      <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors shadow-lg">
                        Book Appointment
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="bg-white text-cyan-500 border-2 border-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>

                <div 
                  className="w-32 h-32 rounded-3xl flex items-center justify-center mx-auto lg:mx-0"
                  style={{ backgroundColor: `${department.color}15` }}
                >
                  <i 
                    className={`${department.icon} text-7xl`}
                    style={{ color: department.color }}
                  ></i>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Department Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Department Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {department.overview}
                  </p>
                </motion.div>

                {/* Services Offered */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Services We Offer</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {department.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${department.color}20` }}
                        >
                          <i className="ri-check-line text-sm" style={{ color: department.color }}></i>
                        </div>
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Conditions Treated */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Conditions We Treat</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {department.conditions.map((condition, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: department.color }}
                        ></div>
                        <span className="text-sm text-gray-600">{condition}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Why Choose Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Us</h3>
                  <div className="space-y-3">
                    {department.whyChoose.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <i className="ri-star-fill text-yellow-400 mt-1"></i>
                        <span className="text-sm text-gray-600">{reason}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-xl p-6 text-white"
                  style={{ background: `linear-gradient(135deg, ${department.color} 0%, ${department.color}dd 100%)` }}
                >
                  <h3 className="text-lg font-bold mb-2">Need Consultation?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Our expert team is ready to help you with your healthcare needs.
                  </p>
                  <Link to="/appointments">
                    <button className="w-full bg-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors" style={{ color: department.color }}>
                      Book Appointment
                    </button>
                  </Link>
                  <Link to="/doctors">
                    <button className="w-full mt-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors" style={{ '--hover-color': department.color }}>
                      View Our Doctors
                    </button>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-xl" style={{ color: department.color }}></i>
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <div className="text-sm font-medium text-gray-900">+971 4 123 4567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-xl" style={{ color: department.color }}></i>
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="text-sm font-medium text-gray-900">info@platinumhealthcare.ae</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-time-line text-xl" style={{ color: department.color }}></i>
                      <div>
                        <div className="text-xs text-gray-500">Hours</div>
                        <div className="text-sm font-medium text-gray-900">24/7 Available</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DepartmentDetail;
