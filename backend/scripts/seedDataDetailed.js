const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/User');
const Department = require('../models/Department');
const Doctor = require('../models/Doctor');
const Service = require('../models/Service');
const Testimonial = require('../models/Testimonial');

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Department.deleteMany({});
    await Doctor.deleteMany({});
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    await User.create({
      name: 'Admin',
      email: 'admin@platinumhealthuae.com',
      password: 'admin123456', // Plain password - will be hashed by the model
      role: 'admin'
    });
    console.log('Admin user created');

    // Create departments
    const departments = [
      {
        name: 'General Medicine',
        slug: 'general-medicine',
        description: 'Comprehensive primary healthcare services for all ages',
        detailedDescription: 'Our General Medicine department provides comprehensive primary healthcare services, including routine check-ups, preventive care, and treatment of common illnesses.',
        icon: 'fas fa-stethoscope',
        color: '#0ea5e9',
        order: 1
      },
      {
        name: 'OB & Gynecology',
        slug: 'ob-gynecology',
        description: 'Comprehensive women\'s health and reproductive care',
        detailedDescription: 'Comprehensive women\'s health services including routine gynecological exams, prenatal care, family planning, and treatment of reproductive health issues.',
        icon: 'fas fa-female',
        color: '#f59e0b',
        order: 2
      },
      {
        name: 'Dentistry',
        slug: 'dentistry',
        description: 'Complete dental care and oral health services',
        detailedDescription: 'Comprehensive dental services including general dentistry, cosmetic procedures, orthodontics, and oral surgery.',
        icon: 'fas fa-tooth',
        color: '#06b6d4',
        order: 3
      },
      {
        name: 'Pediatrics',
        slug: 'pediatrics',
        description: 'Specialized healthcare for infants, children, and adolescents',
        detailedDescription: 'Expert pediatric care focusing on the health and development of children from birth through adolescence.',
        icon: 'fas fa-baby',
        color: '#10b981',
        order: 4
      },
      {
        name: 'Aesthetic Medicine',
        slug: 'aesthetic-medicine',
        description: 'Cosmetic and aesthetic enhancement procedures',
        detailedDescription: 'Advanced aesthetic treatments including Botox, dermal fillers, skin rejuvenation, and cosmetic enhancements.',
        icon: 'fas fa-spa',
        color: '#ec4899',
        order: 5
      },
      {
        name: 'Homeopathy',
        slug: 'homeopathy',
        description: 'Natural homeopathic treatments and remedies',
        detailedDescription: 'Traditional complementary and integrative medicine through homeopathy, offering holistic care and natural healing.',
        icon: 'fas fa-mortar-pestle',
        color: '#8b5cf6',
        order: 6
      },
      {
        name: 'Plastic Surgery',
        slug: 'plastic-surgery',
        description: 'Cosmetic and reconstructive surgery',
        detailedDescription: 'Expert plastic surgery services for cosmetic enhancement and reconstructive procedures.',
        icon: 'fas fa-user-md',
        color: '#ef4444',
        order: 7
      }
    ];

    const createdDepartments = await Department.insertMany(departments);
    console.log('Departments created');

    // Create doctors with detailed information
    const doctors = [
      {
        name: 'Dr. Simi Varghese',
        email: 'simi.varghese@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'GP Aesthetic Medicine',
        department: createdDepartments.find(d => d.name === 'Aesthetic Medicine')._id,
        qualifications: [
          { degree: 'MBBS', institution: 'Medical University', year: 2017 },
          { degree: 'Diploma in Aesthetic Medicine', institution: 'Aesthetic Institute', year: 2019 }
        ],
        experience: 5,
        languages: ['English', 'Malayalam', 'Hindi'],
        bio: 'Dr. Simi Varghese is a dedicated General Practitioner specializing in aesthetic medicine with over 5 years of experience practicing in India and nearly 1 year in the UAE.',
        detailedBio: 'Dr. Simi Varghese is a dedicated General Practitioner specializing in aesthetic medicine with over 5 years of experience practicing in India and nearly 1 year in the UAE. She combines clinical expertise with an artistic approach to help patients achieve their aesthetic goals while maintaining their natural beauty.',
        expertise: [
          'Aesthetic Medicine & Cosmetic Procedures',
          'Skin Rejuvenation & Anti-Aging Treatments',
          'Dermal Fillers & Botox',
          'General Medical Consultations',
          'Preventive Healthcare'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760080503/doctors/Dr%20Simi.jpg',
          publicId: 'doctors/Dr Simi'
        },
        consultationFee: 300,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true }
        ],
        rating: { average: 4.9, count: 127 },
        featured: true,
        isActive: true
      },
      {
        name: 'Dr. Muhammad Siraj',
        email: 'muhammad.siraj@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'General & Cosmetic Dentist',
        department: createdDepartments.find(d => d.name === 'Dentistry')._id,
        qualifications: [
          { degree: 'BDS', institution: 'Dental College', year: 2015 },
          { degree: 'Certified Invisalign Provider', institution: 'Invisalign', year: 2018 },
          { degree: 'Veneer Certified', institution: 'Brazil Dental Institute', year: 2019 }
        ],
        experience: 8,
        languages: ['English', 'Arabic', 'Urdu'],
        bio: 'Dr. Muhammad Siraj is a proficient dentist with 8 years of experience. Certified Invisalign Provider and Veneer specialist, committed to transforming smiles.',
        detailedBio: 'Dr. Muhammad Siraj is a highly proficient dentist with 8 years of comprehensive experience in both general and cosmetic dentistry. As a Certified Invisalign Provider and Veneer specialist trained in Brazil, he is committed to transforming smiles and improving oral health through advanced dental techniques and personalized care.',
        expertise: [
          'Invisalign Clear Aligner Treatment',
          'Dental Veneers & Smile Makeovers',
          'Cosmetic Dentistry',
          'Teeth Whitening & Aesthetic Procedures',
          'General Dental Care & Oral Health',
          'Restorative Dentistry'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760089512/doctors/Dr_Muhammad_Siraj_New.png',
          publicId: 'doctors/Dr_Muhammad_Siraj_New'
        },
        consultationFee: 250,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '18:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '18:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '18:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '18:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '18:00', isAvailable: true }
        ],
        rating: { average: 4.8, count: 156 },
        featured: true,
        isActive: true
      },
      {
        name: 'Dr. Susmitha Babu',
        email: 'susmitha.babu@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'Obstetrics & Gynecology',
        department: createdDepartments.find(d => d.name === 'OB & Gynecology')._id,
        qualifications: [
          { degree: 'MBBS', institution: 'Medical College', year: 2002 },
          { degree: 'DGO', institution: 'Medical University', year: 2005 },
          { degree: 'DNB', institution: 'National Board', year: 2007 },
          { degree: 'MRCOG', institution: 'Royal College', year: 2010 },
          { degree: 'FRCOG', institution: 'Royal College', year: 2015 }
        ],
        experience: 22,
        languages: ['English', 'Hindi', 'Malayalam'],
        bio: 'Dr. Susmitha Babu is a specialist in Obstetrics and Gynecology with 22 years of experience. Expert in PCOS, Endometriosis, and high-risk pregnancies.',
        detailedBio: 'Dr. Susmitha Babu is a highly experienced specialist in Obstetrics and Gynecology with an impressive 22 years of clinical practice. She holds prestigious qualifications including FRCOG (Fellow of the Royal College of Obstetricians and Gynaecologists), making her an expert in women\'s healthcare, pregnancy management, and gynecological conditions.',
        expertise: [
          'High-Risk Pregnancy Management',
          'PCOS (Polycystic Ovary Syndrome) Treatment',
          'Endometriosis Management',
          'Fertility & Reproductive Health',
          'Prenatal & Postnatal Care',
          'Gynecological Surgery',
          'Women\'s Health Screening',
          'Menopause Management'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760080508/doctors/Dr%20Sushmita%20Babu.jpg',
          publicId: 'doctors/Dr Sushmita Babu'
        },
        consultationFee: 400,
        availability: [
          { day: 'Sunday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Monday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Tuesday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Wednesday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Thursday', startTime: '10:00', endTime: '18:00', isAvailable: true }
        ],
        rating: { average: 4.9, count: 203 },
        featured: true,
        isActive: true
      },
      {
        name: 'Dr. Mufadila Sabir Faisal',
        email: 'mufadila.faisal@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'General Dentist',
        department: createdDepartments.find(d => d.name === 'Dentistry')._id,
        qualifications: [
          { degree: 'BDS', institution: 'Dental College', year: 2020 }
        ],
        experience: 3,
        languages: ['English', 'Arabic', 'Malayalam'],
        bio: 'Dr. Mufadila is a dedicated General Dentist with 3 years of experience, providing comprehensive oral healthcare to patients of all ages with expertise in preventive dentistry.',
        detailedBio: 'Dr. Mufadila Sabir Faisal is a dedicated General Dentist with 3 years of professional experience. She is passionate about providing comprehensive oral healthcare to patients of all ages, with a special focus on preventive dentistry and patient education. Her gentle approach and attention to detail make her a favorite among families seeking quality dental care.',
        expertise: [
          'Preventive Dentistry & Oral Hygiene',
          'Dental Fillings & Restorations',
          'Root Canal Treatment',
          'Teeth Cleaning & Scaling',
          'Pediatric Dentistry',
          'Dental Extractions',
          'Oral Health Education'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760080511/doctors/Dr%20Mufadila.jpg',
          publicId: 'doctors/Dr Mufadila'
        },
        consultationFee: 200,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true }
        ],
        rating: { average: 4.7, count: 89 },
        featured: false,
        isActive: true
      },
      {
        name: 'Dr. Rishana',
        email: 'rishana@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'General Practitioner',
        department: createdDepartments.find(d => d.name === 'General Medicine')._id,
        qualifications: [
          { degree: 'MBBS', institution: 'Medical University', year: 2015 }
        ],
        experience: 9,
        languages: ['English', 'Arabic', 'Hindi', 'Malayalam'],
        bio: 'Dr. Rishana is an experienced General Practitioner providing comprehensive medical care with a focus on preventive medicine and patient wellness.',
        detailedBio: 'Dr. Rishana is an experienced General Practitioner dedicated to providing comprehensive medical care to patients of all ages. With a strong focus on preventive medicine and patient wellness, she believes in a holistic approach to healthcare that emphasizes disease prevention, health promotion, and early intervention.',
        expertise: [
          'Preventive Medicine & Health Screening',
          'Acute & Chronic Disease Management',
          'Lifestyle Counseling',
          'Vaccination & Immunization',
          'Women\'s Health',
          'Family Medicine',
          'Minor Procedures'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760080516/doctors/Dr%20Rishnana.jpg',
          publicId: 'doctors/Dr Rishnana'
        },
        consultationFee: 250,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true }
        ],
        rating: { average: 4.8, count: 178 },
        featured: false,
        isActive: true
      },
      {
        name: 'Dr. Hasnain',
        email: 'hasnain@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'Homeopathy',
        department: createdDepartments.find(d => d.name === 'Homeopathy')._id,
        qualifications: [
          { degree: 'BHMS', institution: 'Homeopathy College', year: 2016 }
        ],
        experience: 7,
        languages: ['English', 'Arabic', 'Urdu', 'Hindi'],
        bio: 'Dr. Hasnain is a qualified homeopathic practitioner providing holistic healthcare solutions with a focus on natural healing and patient-centered treatment approaches.',
        detailedBio: 'Dr. Hasnain is a qualified homeopathic practitioner committed to providing holistic healthcare solutions through natural healing methods. With a patient-centered approach, he focuses on treating the individual as a whole rather than just addressing symptoms, ensuring comprehensive and sustainable health improvements.',
        expertise: [
          'Classical Homeopathy',
          'Chronic Disease Management',
          'Skin Conditions & Allergies',
          'Digestive Disorders',
          'Respiratory Conditions',
          'Stress & Lifestyle Disorders',
          'Pediatric Homeopathy',
          'Constitutional Treatment'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760080520/doctors/Dr%20Hasnain.jpg',
          publicId: 'doctors/Dr Hasnain'
        },
        consultationFee: 200,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true }
        ],
        rating: { average: 4.7, count: 112 },
        featured: false,
        isActive: true
      },
      {
        name: 'Dr. Ramsha',
        email: 'ramsha@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'General Practitioner',
        department: createdDepartments.find(d => d.name === 'General Medicine')._id,
        qualifications: [
          { degree: 'MBBS', institution: 'UK Medical School', year: 2014 },
          { degree: 'MRCP 1', institution: 'Royal College of Physicians', year: 2017 }
        ],
        experience: 10,
        languages: ['English', 'Urdu', 'Hindi'],
        bio: 'Dr. Ramsha is a UK-licensed General Practitioner with MRCP qualification, providing comprehensive medical care with international standards and expertise.',
        detailedBio: 'Dr. Ramsha is a UK-licensed General Practitioner with MRCP (Member of the Royal College of Physicians) qualification, bringing international standards of medical care to her practice. Her training and experience in the UK healthcare system enable her to provide evidence-based, high-quality medical care to patients of all ages.',
        expertise: [
          'General Medical Consultations',
          'Internal Medicine',
          'Chronic Disease Management',
          'Diagnostic Assessment',
          'Preventive Healthcare',
          'Health Screening & Check-ups',
          'Evidence-Based Treatment'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760080521/doctors/Dr%20Syeda.jpg',
          publicId: 'doctors/Dr Syeda'
        },
        consultationFee: 300,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true }
        ],
        rating: { average: 4.8, count: 145 },
        featured: false,
        isActive: true
      },
      {
        name: 'Dr. Marco Massarelli',
        email: 'marco.massarelli@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'Consultant Plastic Surgeon',
        department: createdDepartments.find(d => d.name === 'Plastic Surgery')._id,
        qualifications: [
          { degree: 'MD', institution: 'University La Sapienza, Rome, Italy', year: 1985 },
          { degree: 'Plastic Surgery Residency', institution: 'Brazilian Society of Plastic Surgery', year: 1990 }
        ],
        experience: 32,
        languages: ['Italian', 'English', 'Portuguese', 'Spanish'],
        bio: 'Dr. Marco Massarelli is a renowned Consultant Plastic Surgeon with 32+ years of international experience, specializing in cosmetic surgery with expertise from Brazil, Italy, UK, Albania, and Dubai.',
        detailedBio: 'Dr. Marco Massarelli, MD, is a very well known and valued Specialist in Plastic Surgery. He worked in Brazil, Italy, United Kingdom, Albania and currently in Dubai. With over 32 years of international experience, Dr. Marco has accumulated great expertise working in different parts of the world. He was trained in Rio de Janeiro, Brazil, where he completed the Residency in Plastic Surgery, focused on Cosmetic Surgery, in the "Clinica Fluminense de Cirurgìa Plàstica" under the supervision of the best Brazilian Plastic Surgeons, ending in 1990. Dr. Marco believes that the best approach to Cosmetic Surgery is to use techniques very well tested in time, able to provide patients with remarkable reliability together with aesthetic results of excellent quality that last over time with characteristics of absolute naturalness.',
        expertise: [
          'Cosmetic Surgery',
          'Facial Plastic Surgery',
          'Body Contouring',
          'Breast Surgery',
          'Botox and Fillers',
          'Aesthetic Medicine',
          'Minimally Invasive Procedures',
          'Skin Rejuvenation'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760092748/doctors/Dr_Marco_Plastic_Surgeon.png',
          publicId: 'doctors/Dr_Marco_Plastic_Surgeon'
        },
        consultationFee: 500,
        availability: [
          { day: 'Sunday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Monday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Tuesday', startTime: '10:00', endTime: '18:00', isAvailable: true },
          { day: 'Wednesday', startTime: '10:00', endTime: '18:00', isAvailable: true }
        ],
        rating: { average: 5.0, count: 234 },
        featured: true,
        isActive: true
      },
      {
        name: 'Dr. Fathima Varikkodan',
        email: 'fathima.varikkodan@platinumhealthuae.com',
        phone: '+971507482774',
        specialization: 'Traditional Complementary & Integrative Medicine',
        department: createdDepartments.find(d => d.name === 'Homeopathy')._id,
        qualifications: [
          { degree: 'DHA Licensed Homeopathy Practitioner', institution: 'Dubai Health Authority', year: 2024 }
        ],
        experience: 6,
        languages: ['English', 'Arabic', 'Malayalam', 'Hindi'],
        bio: 'Dr. Fathima Varikkodan is a DHA-licensed homeopathy practitioner specializing in Traditional Complementary and Integrative Medicine, offering holistic care through natural healing.',
        detailedBio: 'Dr. Fathima Varikkodan is a Dubai Health Authority (DHA) licensed homeopathy practitioner specializing in Traditional Complementary and Integrative Medicine (TCIM). She is dedicated to providing holistic healthcare solutions through natural healing methods, focusing on individualized treatment approaches that address the root causes of health issues while promoting overall wellness.',
        expertise: [
          'Classical Homeopathy',
          'Constitutional Homeopathic Treatment',
          'Chronic Disease Management',
          'Acute Illness Treatment',
          'Women\'s Health Issues',
          'Pediatric Homeopathy',
          'Skin Conditions & Allergies',
          'Digestive System Disorders',
          'Respiratory Conditions',
          'Mental Health & Emotional Wellness'
        ],
        image: {
          url: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1767357452/_DSC7198_chcypb.jpg',
          publicId: 'doctors/_DSC7198_chcypb'
        },
        consultationFee: 200,
        availability: [
          { day: 'Sunday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
          { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true }
        ],
        rating: { average: 4.9, count: 98 },
        featured: false,
        isActive: true
      }
    ];

    await Doctor.insertMany(doctors);
    console.log('Doctors created');

    // Create services
    const services = [
      {
        name: 'General Consultation',
        slug: 'general-consultation',
        description: 'Comprehensive health assessment and consultation',
        department: createdDepartments[0]._id,
        price: { min: 200, max: 300, currency: 'AED' },
        duration: 30,
        isActive: true
      },
      {
        name: 'Dental Check-up',
        slug: 'dental-checkup',
        description: 'Complete dental examination and cleaning',
        department: createdDepartments[2]._id,
        price: { min: 150, max: 250, currency: 'AED' },
        duration: 45,
        isActive: true
      },
      {
        name: 'Gynecology Consultation',
        slug: 'gynecology-consultation',
        description: 'Women\'s health consultation and examination',
        department: createdDepartments[1]._id,
        price: { min: 300, max: 400, currency: 'AED' },
        duration: 45,
        isActive: true
      },
      {
        name: 'Botox Treatment',
        slug: 'botox-treatment',
        description: 'Professional botox injections for wrinkle reduction',
        department: createdDepartments[4]._id,
        price: { min: 800, max: 1500, currency: 'AED' },
        duration: 60,
        isActive: true
      },
      {
        name: 'Homeopathy Consultation',
        slug: 'homeopathy-consultation',
        description: 'Natural homeopathic treatment consultation',
        department: createdDepartments[5]._id,
        price: { min: 150, max: 250, currency: 'AED' },
        duration: 45,
        isActive: true
      }
    ];

    await Service.insertMany(services);
    console.log('Services created');

    // Create testimonials
    const testimonials = [
      {
        name: 'Sarah Ahmed',
        email: 'sarah.ahmed@example.com',
        rating: 5,
        message: 'Excellent service and professional staff. Dr. Simi was very caring and explained everything clearly.',
        isApproved: true,
        isPublished: true
      },
      {
        name: 'Mohammed Ali',
        email: 'mohammed.ali@example.com',
        rating: 5,
        message: 'Best dental experience I\'ve had. Dr. Siraj is highly skilled and made me feel comfortable throughout.',
        isApproved: true,
        isPublished: true
      },
      {
        name: 'Fatima Hassan',
        email: 'fatima.hassan@example.com',
        rating: 5,
        message: 'Dr. Susmitha is an amazing gynecologist. Very professional and compassionate. Highly recommended!',
        isApproved: true,
        isPublished: true
      }
    ];

    await Testimonial.insertMany(testimonials);
    console.log('Testimonials created');

    console.log('\n✅ Seed data created successfully!');
    console.log('Admin login: admin@platinumhealthuae.com / admin123456');
    console.log(`Total Departments: ${createdDepartments.length}`);
    console.log(`Total Doctors: ${doctors.length}`);
    console.log(`Total Services: ${services.length}`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
