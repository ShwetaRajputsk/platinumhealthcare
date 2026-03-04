import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Phone, Award, Users, CheckCircle, Languages } from 'lucide-react';
import Button from '../components/ui/Button';
import { useQuery } from 'react-query';
import { doctorsAPI } from '../services/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const DoctorDetail = () => {
  const { id } = useParams();

  // Fetch doctor data from API
  const { data: doctorData, isLoading, error } = useQuery(
    ['doctor', id],
    () => doctorsAPI.getById(id)
  );

  const doctor = doctorData?.data?.data?.doctor;

  const formatTime = (time) => {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Doctor not found</p>
          <Link to="/doctors">
            <Button>Back to Doctors</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{doctor.name} - {doctor.specialization} | Platinum Healthcare UAE</title>
        <meta name="description" content={`Book appointment with ${doctor.name}, experienced ${doctor.specialization} specialist at Platinum Healthcare UAE. ${doctor.experience} years of experience.`} />
        <meta name="keywords" content={`${doctor.name}, ${doctor.specialization}, doctor dubai, platinum healthcare, medical specialist`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Back Navigation */}
        <div className="bg-gray-50 py-4">
          <div className="container-custom">
            <Link 
              to="/doctors" 
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Doctors
            </Link>
          </div>
        </div>

        {/* Doctor Profile Header */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Doctor Image & Basic Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 sticky top-8">
                  {/* Doctor Image */}
                  <div className="aspect-w-1 aspect-h-1 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl overflow-hidden h-64">
                      <img 
                        src={doctor.image?.url || '/assets/logo.png'} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/logo.png';
                        }}
                      />
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="text-center space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                      <p className="text-primary-600 font-medium text-lg">{doctor.specialization}</p>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mt-2"
                        style={{ backgroundColor: doctor.department?.color || '#0ea5e9' }}
                      >
                        {doctor.department?.name || 'General'}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>{doctor.experience} years of experience</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link to="/appointments" className="block">
                        <Button variant="primary" size="lg" className="w-full">
                          Book Appointment
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Doctor Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* About */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. {doctor.name.split(' ')[1]}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{doctor.bio}</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary-50 rounded-xl">
                      <Award className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{doctor.experience}</div>
                      <div className="text-sm text-gray-600">Years Exp.</div>
                    </div>
                    <div className="text-center p-4 bg-error-50 rounded-xl">
                      <Languages className="w-6 h-6 text-error-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{doctor.languages?.length || 0}</div>
                      <div className="text-sm text-gray-600">Languages</div>
                    </div>
                  </div>
                </div>

                {/* Qualifications */}
                {doctor.qualifications && doctor.qualifications.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualifications & Education</h2>
                    <div className="space-y-4">
                      {doctor.qualifications.map((qual, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Award className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{qual.degree}</h3>
                            <p className="text-gray-600">{qual.institution}</p>
                            {qual.year && <p className="text-sm text-gray-500">{qual.year}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expertise */}
                {doctor.expertise && doctor.expertise.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {doctor.expertise.map((area, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Languages */}
                {doctor.languages && doctor.languages.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Languages Spoken</h2>
                    <div className="flex flex-wrap gap-3">
                      {doctor.languages.map((language, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Availability */}
                {doctor.availability && doctor.availability.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Availability Schedule</h2>
                    <div className="grid gap-3">
                      {doctor.availability.map((schedule, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-gray-900">{schedule.day}</span>
                          </div>
                          <div>
                            {schedule.isAvailable ? (
                              <span className="text-secondary-600 font-medium">
                                {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                              </span>
                            ) : (
                              <span className="text-gray-400 font-medium">Closed</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Awards & Recognition */}
                {doctor.awards && doctor.awards.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
                    <div className="space-y-3">
                      {doctor.awards.map((award, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl">
                          <Award className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Book Your Appointment?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Schedule your consultation with {doctor.name} today. 
                Same-day appointments are often available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointments">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    icon={<Calendar className="w-5 h-5" />}
                    className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-50"
                  >
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    icon={<Phone className="w-5 h-5" />}
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Contact Us
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

export default DoctorDetail;