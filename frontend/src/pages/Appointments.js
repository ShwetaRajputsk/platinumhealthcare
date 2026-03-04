import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  ChevronDown,
  Star,
  MapPin,
  Shield
} from 'lucide-react';
import Button from '../components/ui/Button';
import { doctorsAPI, servicesAPI, appointmentsAPI } from '../services/api';
import toast from 'react-hot-toast';

const Appointments = () => {
  const [step, setStep] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientAge: '',
    gender: '',
    reason: '',
    notes: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    insuranceProvider: '',
    insuranceNumber: ''
  });

  // Mock data for demonstration
  const mockDoctors = [
    {
      _id: '1',
      name: 'Dr. Ahmed Hassan',
      specialization: 'General Medicine',
      department: { name: 'General Medicine', color: '#0ea5e9' },
      consultationFee: 250,
      rating: 4.9,
      experience: 15,
      image: null,
      availability: [
        { day: 'Monday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Tuesday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Wednesday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Thursday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Friday', isAvailable: true, startTime: '09:00', endTime: '15:00' }
      ]
    },
    {
      _id: '2',
      name: 'Dr. Sarah Al-Zahra',
      specialization: 'Pediatrics',
      department: { name: 'Pediatrics', color: '#22c55e' },
      consultationFee: 300,
      rating: 4.8,
      experience: 12,
      image: null,
      availability: [
        { day: 'Sunday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Monday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Tuesday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Wednesday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Thursday', isAvailable: true, startTime: '10:00', endTime: '16:00' }
      ]
    },
    {
      _id: '3',
      name: 'Dr. Maria Rodriguez',
      specialization: 'Gynecology',
      department: { name: 'Gynecology', color: '#f59e0b' },
      consultationFee: 350,
      rating: 4.9,
      experience: 18,
      image: null,
      availability: [
        { day: 'Sunday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Monday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Tuesday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Thursday', isAvailable: true, startTime: '09:00', endTime: '17:00' },
        { day: 'Friday', isAvailable: true, startTime: '09:00', endTime: '15:00' }
      ]
    },
    {
      _id: '4',
      name: 'Dr. Omar Al-Rashid',
      specialization: 'Dermatology',
      department: { name: 'Dermatology', color: '#ef4444' },
      consultationFee: 400,
      rating: 4.7,
      experience: 20,
      image: null,
      availability: [
        { day: 'Sunday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Monday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Wednesday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Thursday', isAvailable: true, startTime: '10:00', endTime: '18:00' },
        { day: 'Friday', isAvailable: true, startTime: '10:00', endTime: '16:00' }
      ]
    }
  ];

  const mockServices = [
    { _id: '1', name: 'General Consultation', duration: 30, price: { min: 200, max: 300 } },
    { _id: '2', name: 'Child Health Check-up', duration: 45, price: { min: 250, max: 350 } },
    { _id: '3', name: 'Women\'s Health Screening', duration: 60, price: { min: 300, max: 400 } },
    { _id: '4', name: 'Skin Consultation', duration: 45, price: { min: 350, max: 500 } }
  ];

  useEffect(() => {
    // Use mock data for now
    setDoctors(mockDoctors);
    setServices(mockServices);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    const start = new Date(`2024-01-01T${startTime}:00`);
    const end = new Date(`2024-01-01T${endTime}:00`);
    
    while (start < end) {
      slots.push(start.toTimeString().slice(0, 5));
      start.setMinutes(start.getMinutes() + 30);
    }
    
    return slots;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
    
    if (selectedDoctor && date) {
      const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
      const dayAvailability = selectedDoctor.availability.find(avail => 
        avail.day === dayName && avail.isAvailable
      );
      
      if (dayAvailability) {
        const slots = generateTimeSlots(dayAvailability.startTime, dayAvailability.endTime);
        setAvailableSlots(slots);
      } else {
        setAvailableSlots([]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const appointmentData = {
        ...formData,
        doctor: selectedDoctor._id,
        service: selectedService?._id,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Appointment booked successfully! You will receive a confirmation email shortly.');
      setStep(4); // Success step
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !selectedDepartment || doctor.department.name === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(doctors.map(doctor => doctor.department.name))];

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment - Platinum Healthcare UAE | Online Booking</title>
        <meta name="description" content="Book your appointment online at Platinum Healthcare UAE. Easy scheduling with our expert doctors in Al Qusais, Dubai. Available slots and instant confirmation." />
        <meta name="keywords" content="book appointment dubai, online medical booking, platinum healthcare appointment, al qusais clinic booking" />
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
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Appointment
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Schedule Your{' '}
                <span className="text-primary-600">Healthcare Visit</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Book your appointment with our expert doctors in just a few simple steps. 
                Choose your preferred doctor, date, and time for a convenient healthcare experience.
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      step >= stepNum 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-12 h-1 mx-2 transition-all duration-200 ${
                        step > stepNum ? 'bg-primary-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-8 mt-4 text-sm text-gray-600">
                <span className={step >= 1 ? 'text-primary-600 font-medium' : ''}>Select Doctor</span>
                <span className={step >= 2 ? 'text-primary-600 font-medium' : ''}>Choose Date & Time</span>
                <span className={step >= 3 ? 'text-primary-600 font-medium' : ''}>Patient Details</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Doctor</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Choose from our team of experienced specialists
                  </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 space-y-4">
                  <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search doctors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    />
                  </div>

                  <div className="max-w-xs mx-auto">
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    >
                      <option value="">All Departments</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Doctors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredDoctors.map((doctor) => (
                    <motion.div
                      key={doctor._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`group cursor-pointer ${
                        selectedDoctor?._id === doctor._id ? 'ring-2 ring-primary-500' : ''
                      }`}
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all duration-300 group-hover:-translate-y-2">
                        <div className="text-center mb-6">
                          <div 
                            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                            style={{ backgroundColor: doctor.department.color }}
                          >
                            {doctor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                          <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                          
                          <div 
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: doctor.department.color }}
                          >
                            {doctor.department.name}
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Experience:</span>
                            <span className="font-medium">{doctor.experience} years</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Rating:</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{doctor.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Consultation Fee:</span>
                            <span className="font-medium text-primary-600">AED {doctor.consultationFee}</span>
                          </div>
                        </div>

                        <Button 
                          variant={selectedDoctor?._id === doctor._id ? "primary" : "outline"}
                          size="sm"
                          className="w-full"
                        >
                          {selectedDoctor?._id === doctor._id ? 'Selected' : 'Select Doctor'}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {selectedDoctor && (
                  <div className="text-center mt-12">
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={() => setStep(2)}
                    >
                      Continue to Date & Time
                    </Button>
                  </div>
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Date & Time</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Select your preferred appointment date and time with Dr. {selectedDoctor?.name}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Date Selection */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Select Date</h3>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => handleDateChange(e.target.value)}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-lg"
                      />
                      
                      {selectedDate && (
                        <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                          <h4 className="font-medium text-primary-900 mb-2">Selected Date:</h4>
                          <p className="text-primary-700">
                            {new Date(selectedDate).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Times</h3>
                      
                      {!selectedDate && (
                        <div className="text-center py-12 text-gray-500">
                          <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                          <p>Please select a date first</p>
                        </div>
                      )}

                      {selectedDate && availableSlots.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                          <p>No available slots for this date</p>
                        </div>
                      )}

                      {availableSlots.length > 0 && (
                        <div className="grid grid-cols-3 gap-3">
                          {availableSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                selectedTime === time
                                  ? 'bg-primary-600 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Select Service (Optional)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service._id}
                          onClick={() => setSelectedService(service)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            selectedService?._id === service._id
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900 mb-2">{service.name}</h4>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>{service.duration} minutes</span>
                            <span>AED {service.price.min}-{service.price.max}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="flex justify-center space-x-4 mt-12">
                      <Button 
                        variant="outline" 
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        variant="primary" 
                        size="lg"
                        onClick={() => setStep(3)}
                      >
                        Continue to Patient Details
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Details</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Please provide your information to complete the booking
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="bg-gray-50 rounded-3xl p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="patientEmail"
                            value={formData.patientEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="patientPhone"
                            value={formData.patientPhone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="+971 50 123 4567"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age *
                          </label>
                          <input
                            type="number"
                            name="patientAge"
                            value={formData.patientAge}
                            onChange={handleInputChange}
                            required
                            min="0"
                            max="150"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="Enter your age"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender *
                          </label>
                          <div className="flex space-x-6">
                            {['male', 'female', 'other'].map((gender) => (
                              <label key={gender} className="flex items-center">
                                <input
                                  type="radio"
                                  name="gender"
                                  value={gender}
                                  checked={formData.gender === gender}
                                  onChange={handleInputChange}
                                  className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                                />
                                <span className="ml-2 text-gray-700 capitalize">{gender}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Medical Information */}
                    <div className="bg-gray-50 rounded-3xl p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Medical Information</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Reason for Visit
                          </label>
                          <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
                            placeholder="Please describe your symptoms or reason for the visit..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Notes
                          </label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
                            placeholder="Any additional information you'd like to share..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-gray-50 rounded-3xl p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Emergency Contact</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Name
                          </label>
                          <input
                            type="text"
                            name="emergencyContact.name"
                            value={formData.emergencyContact.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="Emergency contact name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Phone
                          </label>
                          <input
                            type="tel"
                            name="emergencyContact.phone"
                            value={formData.emergencyContact.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="+971 50 123 4567"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Relationship
                          </label>
                          <select
                            name="emergencyContact.relationship"
                            value={formData.emergencyContact.relationship}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                          >
                            <option value="">Select relationship</option>
                            <option value="spouse">Spouse</option>
                            <option value="parent">Parent</option>
                            <option value="child">Child</option>
                            <option value="sibling">Sibling</option>
                            <option value="friend">Friend</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Insurance Information */}
                    <div className="bg-gray-50 rounded-3xl p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Insurance Information (Optional)</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Insurance Provider
                          </label>
                          <input
                            type="text"
                            name="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="e.g., Dubai Health Authority"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Insurance Number
                          </label>
                          <input
                            type="text"
                            name="insuranceNumber"
                            value={formData.insuranceNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                            placeholder="Insurance policy number"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Appointment Summary */}
                    <div className="bg-primary-50 rounded-3xl p-8 border border-primary-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Appointment Summary</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Doctor:</span>
                          <span className="font-medium">{selectedDoctor?.name}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Specialization:</span>
                          <span className="font-medium">{selectedDoctor?.specialization}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">
                            {new Date(selectedDate).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>
                        
                        {selectedService && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-medium">{selectedService.name}</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center pt-4 border-t border-primary-200">
                          <span className="text-gray-600">Consultation Fee:</span>
                          <span className="font-bold text-primary-600 text-lg">AED {selectedDoctor?.consultationFee}</span>
                        </div>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-center space-x-4">
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        variant="primary" 
                        size="lg"
                        disabled={isSubmitting}
                        icon={isSubmitting ? null : <CheckCircle className="w-5 h-5" />}
                        iconPosition="right"
                      >
                        {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="bg-green-50 rounded-3xl p-12 border border-green-200">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Appointment Booked Successfully!
                  </h2>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Your appointment has been confirmed. You will receive a confirmation email shortly 
                    with all the details and instructions for your visit.
                  </p>

                  <div className="bg-white rounded-2xl p-6 mb-8 text-left">
                    <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-medium">{selectedDoctor?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">
                          {new Date(selectedDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Patient:</span>
                        <span className="font-medium">{formData.patientName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={() => {
                        setStep(1);
                        setSelectedDoctor(null);
                        setSelectedService(null);
                        setSelectedDate('');
                        setSelectedTime('');
                        setFormData({
                          patientName: '',
                          patientEmail: '',
                          patientPhone: '',
                          patientAge: '',
                          gender: '',
                          reason: '',
                          notes: '',
                          emergencyContact: { name: '', phone: '', relationship: '' },
                          insuranceProvider: '',
                          insuranceNumber: ''
                        });
                      }}
                    >
                      Book Another Appointment
                    </Button>
                    
                    <div className="text-sm text-gray-500">
                      Need help? Contact us at +971 4 234 5678
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Features Section */}
        {step !== 4 && (
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Book With Us?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the convenience of modern healthcare booking
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Calendar,
                    title: 'Easy Booking',
                    description: 'Book appointments online 24/7 with instant confirmation'
                  },
                  {
                    icon: Clock,
                    title: 'Flexible Timing',
                    description: 'Choose from available time slots that fit your schedule'
                  },
                  {
                    icon: Shield,
                    title: 'Secure & Private',
                    description: 'Your personal information is protected and confidential'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Instant Confirmation',
                    description: 'Get immediate confirmation and email reminders'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Appointments;