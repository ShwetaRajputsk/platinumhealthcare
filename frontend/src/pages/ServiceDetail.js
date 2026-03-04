import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
  const { slug } = useParams();

  // All services data
  const servicesData = {
    'general-consultation': {
      name: 'General Consultation',
      description: 'Comprehensive health assessment and consultation with our expert physicians including vital signs, medical history review, and personalized health recommendations.',
      department: { name: 'General Medicine', color: '#0ea5e9' },
      icon: 'ri-stethoscope-line',
      price: { min: 200, max: 300, currency: 'AED' },
      duration: 30,
      features: [
        'Comprehensive Health Assessment',
        'Medical History Review',
        'Vital Signs Monitoring',
        'Personalized Treatment Plan',
        'Follow-up Recommendations',
        'Prescription Management'
      ],
      details: 'Our general consultation service provides a thorough health assessment by experienced physicians. We take time to understand your medical history, current symptoms, and health concerns to provide accurate diagnosis and effective treatment plans.',
      whatToExpect: [
        'Initial consultation with our physician',
        'Complete physical examination',
        'Discussion of symptoms and concerns',
        'Diagnostic recommendations if needed',
        'Treatment plan and prescriptions',
        'Follow-up scheduling'
      ]
    },
    'child-health-checkup': {
      name: 'Child Health Check-up',
      description: 'Complete pediatric examination and development assessment for children including growth monitoring, developmental milestones, and vaccination updates.',
      department: { name: 'Pediatrics', color: '#22c55e' },
      icon: 'ri-parent-line',
      price: { min: 250, max: 350, currency: 'AED' },
      duration: 45,
      features: [
        'Growth Assessment',
        'Development Screening',
        'Vaccination Review',
        'Nutritional Guidance',
        'Behavioral Assessment',
        'Parent Counseling'
      ],
      details: 'Our pediatric health check-ups ensure your child is growing and developing properly. We monitor physical growth, developmental milestones, and provide guidance on nutrition and care.',
      whatToExpect: [
        'Height and weight measurements',
        'Developmental milestone assessment',
        'Vaccination status review',
        'Nutritional counseling',
        'Vision and hearing screening',
        'Parent education and guidance'
      ]
    },
    'womens-health-screening': {
      name: 'Women\'s Health Screening',
      description: 'Comprehensive gynecological examination and health screening for women including routine screenings and reproductive health consultation.',
      department: { name: 'Gynecology', color: '#f59e0b' },
      icon: 'ri-women-line',
      price: { min: 300, max: 400, currency: 'AED' },
      duration: 60,
      features: [
        'Pelvic Examination',
        'Breast Examination',
        'Pap Smear Test',
        'Health Counseling',
        'Contraception Advice',
        'Menstrual Health Assessment'
      ],
      details: 'Our women\'s health screening provides comprehensive gynecological care with focus on preventive health and early detection of potential issues.',
      whatToExpect: [
        'Complete gynecological examination',
        'Breast health assessment',
        'Cervical cancer screening',
        'Reproductive health consultation',
        'Contraception counseling',
        'Lifestyle and wellness advice'
      ]
    },
    'skin-consultation': {
      name: 'Skin Consultation',
      description: 'Professional skin assessment and personalized treatment planning with comprehensive skin examination and treatment recommendations.',
      department: { name: 'Dermatology', color: '#ef4444' },
      icon: 'ri-hand-heart-line',
      price: { min: 350, max: 500, currency: 'AED' },
      duration: 45,
      features: [
        'Comprehensive Skin Analysis',
        'Treatment Planning',
        'Product Recommendations',
        'Follow-up Care',
        'Skin Type Assessment',
        'Condition Diagnosis'
      ],
      details: 'Our dermatology consultation provides expert assessment of your skin concerns with personalized treatment plans using advanced diagnostic techniques.',
      whatToExpect: [
        'Detailed skin examination',
        'Skin type and condition analysis',
        'Treatment options discussion',
        'Skincare routine recommendations',
        'Product guidance',
        'Follow-up scheduling'
      ]
    },
    'botox-treatment': {
      name: 'Botox Treatment',
      description: 'Professional botox injections for wrinkle reduction and facial rejuvenation performed by certified aesthetic medicine specialists.',
      department: { name: 'Aesthetic Medicine', color: '#ec4899' },
      icon: 'ri-contrast-drop-2-line',
      price: { min: 800, max: 1500, currency: 'AED' },
      duration: 60,
      features: [
        'Expert Consultation',
        'Treatment Planning',
        'Professional Application',
        'Aftercare Instructions',
        'Follow-up Assessment',
        'Touch-up Services'
      ],
      details: 'Our botox treatments are performed by certified specialists using premium products to reduce wrinkles and achieve natural-looking results.',
      whatToExpect: [
        'Initial consultation and assessment',
        'Treatment area marking',
        'Professional botox injection',
        'Immediate aftercare guidance',
        'Post-treatment instructions',
        'Follow-up appointment scheduling'
      ]
    },
    'blood-test-package': {
      name: 'Blood Test Package',
      description: 'Comprehensive blood analysis and health screening package including CBC, lipid profile, liver function, kidney function, and diabetes screening.',
      department: { name: 'Laboratory Services', color: '#06b6d4' },
      icon: 'ri-test-tube-line',
      price: { min: 150, max: 300, currency: 'AED' },
      duration: 15,
      features: [
        'Complete Blood Count (CBC)',
        'Lipid Profile',
        'Liver Function Tests',
        'Kidney Function Tests',
        'HbA1c (Diabetes)',
        'Fast Results'
      ],
      details: 'Our comprehensive blood test package provides detailed analysis of your health markers with quick turnaround time and accurate results.',
      whatToExpect: [
        'Quick blood sample collection',
        'Professional lab processing',
        'Comprehensive test panel',
        'Results within 24 hours',
        'Doctor consultation for results',
        'Health recommendations'
      ]
    },
    'diabetes-management': {
      name: 'Diabetes Management',
      description: 'Comprehensive diabetes care and management program including blood sugar monitoring, medication adjustment, and lifestyle counseling.',
      department: { name: 'Internal Medicine', color: '#8b5cf6' },
      icon: 'ri-heart-pulse-line',
      price: { min: 280, max: 380, currency: 'AED' },
      duration: 45,
      features: [
        'Blood Sugar Monitoring',
        'Medication Review',
        'Diet Planning',
        'Lifestyle Counseling',
        'Complication Screening',
        'Regular Follow-ups'
      ],
      details: 'Our diabetes management program provides comprehensive care to help you control blood sugar levels and prevent complications.',
      whatToExpect: [
        'Blood glucose testing',
        'Medication adjustment',
        'Dietary counseling',
        'Exercise recommendations',
        'Complication screening',
        'Ongoing support and monitoring'
      ]
    },
    'vaccination-program': {
      name: 'Vaccination Program',
      description: 'Complete vaccination services for children and adults including routine immunizations, travel vaccines, and health certificates.',
      department: { name: 'Pediatrics', color: '#22c55e' },
      icon: 'ri-syringe-line',
      price: { min: 100, max: 250, currency: 'AED' },
      duration: 20,
      features: [
        'Routine Vaccines',
        'Travel Vaccines',
        'Health Certificates',
        'Immunization Records',
        'Vaccine Counseling',
        'Schedule Planning'
      ],
      details: 'Our vaccination program ensures you and your family are protected against preventable diseases with up-to-date immunizations.',
      whatToExpect: [
        'Vaccination history review',
        'Vaccine recommendations',
        'Professional administration',
        'Post-vaccination monitoring',
        'Certificate issuance',
        'Next dose scheduling'
      ]
    },
    'laser-hair-removal': {
      name: 'Laser Hair Removal',
      description: 'Advanced laser hair removal treatment using latest technology for safe and effective permanent hair reduction.',
      department: { name: 'Aesthetic Medicine', color: '#ec4899' },
      icon: 'ri-flashlight-line',
      price: { min: 200, max: 800, currency: 'AED' },
      duration: 30,
      features: [
        'Latest Laser Technology',
        'Safe Treatment',
        'Permanent Results',
        'All Skin Types',
        'Multiple Sessions',
        'Professional Care'
      ],
      details: 'Our laser hair removal uses advanced technology to provide safe, effective, and long-lasting hair reduction for all skin types.',
      whatToExpect: [
        'Skin assessment',
        'Treatment area preparation',
        'Laser application',
        'Cooling and comfort measures',
        'Aftercare instructions',
        'Session scheduling'
      ]
    },
    'heart-health-check': {
      name: 'Heart Health Check',
      description: 'Comprehensive cardiovascular assessment including ECG, blood pressure monitoring, and heart health consultation.',
      department: { name: 'Internal Medicine', color: '#8b5cf6' },
      icon: 'ri-heart-line',
      price: { min: 400, max: 600, currency: 'AED' },
      duration: 60,
      features: [
        'ECG Testing',
        'Blood Pressure Monitoring',
        'Cholesterol Check',
        'Heart Health Consultation',
        'Risk Assessment',
        'Lifestyle Recommendations'
      ],
      details: 'Our heart health check provides comprehensive cardiovascular assessment to detect and prevent heart-related conditions.',
      whatToExpect: [
        'Medical history review',
        'ECG recording',
        'Blood pressure measurement',
        'Blood tests for cholesterol',
        'Risk factor assessment',
        'Personalized recommendations'
      ]
    },
    'prenatal-care-package': {
      name: 'Prenatal Care Package',
      description: 'Comprehensive prenatal care program for expecting mothers including regular check-ups, ultrasounds, and health monitoring.',
      department: { name: 'Gynecology', color: '#f59e0b' },
      icon: 'ri-empathize-line',
      price: { min: 500, max: 800, currency: 'AED' },
      duration: 45,
      features: [
        'Regular Check-ups',
        'Ultrasound Scans',
        'Health Monitoring',
        'Nutritional Guidance',
        'Fetal Development Tracking',
        'Birth Planning'
      ],
      details: 'Our prenatal care package provides comprehensive support throughout your pregnancy with regular monitoring and expert guidance.',
      whatToExpect: [
        'Regular prenatal visits',
        'Ultrasound examinations',
        'Fetal growth monitoring',
        'Nutritional counseling',
        'Birth preparation',
        'Ongoing support'
      ]
    },
    'acne-treatment': {
      name: 'Acne Treatment',
      description: 'Specialized acne treatment program including skin analysis, customized treatment plan, and follow-up care for clear skin.',
      department: { name: 'Dermatology', color: '#ef4444' },
      icon: 'ri-user-smile-line',
      price: { min: 300, max: 600, currency: 'AED' },
      duration: 45,
      features: [
        'Skin Analysis',
        'Customized Treatment',
        'Medication Prescription',
        'Follow-up Care',
        'Skincare Routine',
        'Scar Prevention'
      ],
      details: 'Our acne treatment program provides personalized care to clear your skin and prevent future breakouts with proven treatments.',
      whatToExpect: [
        'Detailed skin assessment',
        'Acne type identification',
        'Treatment plan development',
        'Medication prescription',
        'Skincare recommendations',
        'Regular follow-ups'
      ]
    }
  };

  const service = servicesData[slug];

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Service Not Found - Platinum Healthcare UAE</title>
        </Helmet>
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
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
        <title>{service.name} - Platinum Healthcare UAE</title>
        <meta name="description" content={service.description} />
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
                <span className="text-gray-900">{service.name}</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div 
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-medium text-white mb-4"
                    style={{ backgroundColor: service.department.color }}
                  >
                    {service.department.name}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h1>

                  <p className="text-base text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <i className="ri-time-line text-lg" style={{ color: service.department.color }}></i>
                      <span>{service.duration} minutes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <i className="ri-money-dollar-circle-line text-lg" style={{ color: service.department.color }}></i>
                      <span>AED {service.price.min} - {service.price.max}</span>
                    </div>
                  </div>

                  <Link to="/appointments">
                    <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors shadow-lg">
                      Book Appointment
                    </button>
                  </Link>
                </div>

                <div 
                  className="w-32 h-32 rounded-3xl flex items-center justify-center mx-auto lg:mx-0"
                  style={{ backgroundColor: `${service.department.color}15` }}
                >
                  <i 
                    className={`${service.icon} text-7xl`}
                    style={{ color: service.department.color }}
                  ></i>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.details}
                  </p>
                </motion.div>

                {/* What to Expect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                  <div className="space-y-3">
                    {service.whatToExpect.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${service.department.color}20` }}
                        >
                          <i className="ri-check-line text-sm" style={{ color: service.department.color }}></i>
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Service Includes</h3>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.department.color }}
                        ></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white"
                >
                  <h3 className="text-lg font-bold mb-2">Ready to Book?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Schedule your appointment today and take the first step towards better health.
                  </p>
                  <Link to="/appointments">
                    <button className="w-full bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Book Now
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="w-full mt-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                      Contact Us
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
