import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Patient-Centered Care',
      description: 'Every decision we make prioritizes your health, comfort, and wellbeing above all else.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Excellence & Quality',
      description: 'We maintain the highest standards in medical care through continuous training and quality assurance.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Innovation',
      description: 'Embracing cutting-edge medical technology and treatment methods to deliver superior outcomes.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: 'ri-team-line',
      title: 'Compassion',
      description: 'Treating every patient with empathy, respect, and the dignity they deserve.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    {
      icon: 'ri-user-heart-line',
      number: '10,000+',
      label: 'Patients Treated Annually',
      color: 'bg-teal-500'
    },
    {
      icon: 'ri-stethoscope-line',
      number: '50+',
      label: 'Expert Medical Professionals',
      color: 'bg-cyan-500'
    },
    {
      icon: 'ri-hospital-line',
      number: '7',
      label: 'Medical Specialties',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-star-smile-line',
      number: '4.9/5',
      label: 'Patient Satisfaction Rating',
      color: 'bg-indigo-500'
    },
    {
      icon: 'ri-time-line',
      number: '15+',
      label: 'Years of Excellence',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-shield-check-line',
      number: '100%',
      label: 'ISO Certified Facility',
      color: 'bg-pink-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: 'ri-user-star-line',
      title: 'Internationally Trained Doctors',
      description: 'Our medical team comprises specialists trained at world-renowned institutions across Europe, North America, and Asia.'
    },
    {
      icon: 'ri-microscope-line',
      title: 'State-of-the-Art Technology',
      description: 'We invest in the latest medical equipment and diagnostic tools to ensure accurate diagnoses and effective treatments.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Flexible Appointment Scheduling',
      description: 'Book appointments at your convenience with extended hours and same-day availability for urgent cases.'
    },
    {
      icon: 'ri-shield-cross-line',
      title: 'Comprehensive Insurance Coverage',
      description: 'We accept all major insurance providers in the UAE, making quality healthcare accessible to everyone.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Multilingual Support',
      description: 'Our staff speaks English, Arabic, Hindi, Urdu, and more to ensure clear communication with all patients.'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Prime Location',
      description: 'Conveniently located in Al Qusais with ample parking and easy access via public transportation.'
    }
  ];

  const facilities = [
    {
      title: 'Modern Reception Area',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
    },
    {
      title: 'Advanced Diagnostic Lab',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop'
    },
    {
      title: 'Private Consultation Rooms',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop'
    },
    {
      title: 'Pediatric Care Center',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    },
    {
      title: 'Dental Treatment Suite',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
    },
    {
      title: 'Aesthetic Treatment Room',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop'
    }
  ];

  const certifications = [
    {
      icon: 'ri-award-line',
      title: 'ISO 9001:2015 Certified',
      description: 'International quality management standards'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'DHA Licensed',
      description: 'Dubai Health Authority approved facility'
    },
    {
      icon: 'ri-medal-line',
      title: 'JCI Accredited',
      description: 'Joint Commission International standards'
    },
    {
      icon: 'ri-star-line',
      title: 'Excellence Award 2023',
      description: 'UAE Healthcare Excellence Recognition'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Platinum Healthcare UAE</title>
        <meta name="description" content="Learn about Platinum Healthcare UAE, our mission, values, and commitment to providing exceptional healthcare services in Al Qusais, Dubai." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Platinum Healthcare Team"
            className="w-full h-full object-cover object-center"
            src="/images/Rectangle-692-1.jpg"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=600&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4"
          >
            <span className="text-cyan-300 text-xs font-medium">Excellence in Healthcare Since 2010</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            About Platinum Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-gray-100"
          >
            Delivering world-class medical care with compassion, innovation, and unwavering dedication to your wellbeing
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">15+</div>
              <div className="text-xs text-gray-300 mt-1">Years</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-xs text-gray-300 mt-1">Doctors</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">10K+</div>
              <div className="text-xs text-gray-300 mt-1">Patients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-cyan-50 rounded-full mb-3">
              <span className="text-cyan-600 text-xs font-semibold">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl">
                <img
                  alt="Platinum Healthcare Clinic"
                  className="w-full h-full object-cover"
                  src="/images/rectangle_4249.webp"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=500&fit=crop';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-lg flex-shrink-0 mt-1">
                  <i className="ri-hospital-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Founded in 2010</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Platinum Healthcare began with a simple yet powerful vision: to provide world-class medical care that combines cutting-edge technology with genuine compassion. What started as a small clinic in Al Qusais has grown into one of Dubai's most trusted healthcare providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-lg flex-shrink-0 mt-1">
                  <i className="ri-line-chart-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Continuous Innovation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our journey has been marked by continuous innovation and an unwavering commitment to patient satisfaction. We've expanded our services to include multiple specialties, invested in state-of-the-art medical equipment, and assembled a team of internationally trained healthcare professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-lg flex-shrink-0 mt-1">
                  <i className="ri-award-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Excellence Today</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Today, Platinum Healthcare stands as a beacon of excellence in the UAE healthcare landscape, serving thousands of patients annually with the same dedication and care that defined our founding principles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-cyan-50 rounded-full mb-3">
              <span className="text-cyan-600 text-xs font-semibold">What Drives Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Core Values</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              The principles that guide everything we do at Platinum Healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${value.gradient} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${value.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-cyan-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-3">
              <span className="text-white text-xs font-semibold">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">By The Numbers</h2>
            <p className="text-white/90 text-sm max-w-2xl mx-auto">
              Measurable excellence in healthcare delivery and patient satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 flex items-center justify-center ${stat.color} rounded-lg mb-4`}>
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-cyan-50 rounded-full mb-3">
              <span className="text-cyan-600 text-xs font-semibold">Why Platinum Healthcare</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Discover what sets Platinum Healthcare apart as Dubai's trusted medical partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-cyan-50 rounded-full mb-3">
              <span className="text-cyan-600 text-xs font-semibold">Our Facilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">World-Class Infrastructure</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Take a virtual tour of our modern, patient-friendly facilities designed for your comfort and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={facility.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{facility.title}</h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs">View Details</span>
                    <i className="ri-arrow-right-line text-sm"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-3">
              <span className="text-cyan-300 text-xs font-semibold">Accreditations & Awards</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Certified Excellence</h2>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Recognized by leading healthcare authorities for our commitment to quality and patient safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className={`${cert.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-xs">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Experience Excellence?</h3>
            <p className="text-white/90 text-sm mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied patients who trust Platinum Healthcare for their medical needs
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/appointments">
                <button className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer text-sm">
                  Book Appointment
                </button>
              </Link>
              <Link to="/departments">
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 whitespace-nowrap cursor-pointer text-sm">
                  View Specialties
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
