import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const InsuranceSection = () => {
  const insurancePartners = [
    {
      name: 'Inaya Hospital Network',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087870/insurance-logos/Inaya-hospital-and-clinic-insurance-list-Dubai-Abu-Dhabi-Ras-Al-Khaimah.png'
    },
    {
      name: 'Fathima Healthcare Management',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087872/insurance-logos/fathima-healthcare-management---fmc-network.png'
    },
    {
      name: 'Lifeline TPA',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087873/insurance-logos/lifelinetpa_logo.jpg'
    },
    {
      name: 'Insurance Partner 4',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087874/insurance-logos/rectangle_710.webp'
    },
    {
      name: 'Insurance Partner 5',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087875/insurance-logos/rectangle_711.webp'
    },
    {
      name: 'Insurance Partner 6',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087876/insurance-logos/rectangle_712.webp'
    },
    {
      name: 'Insurance Partner 7',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087876/insurance-logos/rectangle_713.webp'
    },
    {
      name: 'Insurance Partner 8',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760087877/insurance-logos/unnamed.png'
    },
    {
      name: 'SAICO Insurance',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760092364/insurance-logos/SAICO_Insurance_New.png'
    },
    {
      name: 'Aafiya Insurance',
      logo: 'https://res.cloudinary.com/dwl2sn51j/image/upload/v1760091894/insurance-logos/Aafiya_Insurance.png'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Insurance Partners
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We Accept Major <span className="text-primary-600">Insurance Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading insurance providers to make quality healthcare accessible and affordable for you
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {insurancePartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Don't see your insurance provider? Contact us to verify coverage.
          </p>
          <a
            href="tel:+97143412774"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
          >
            Call us at +971 4 341 2774
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceSection;
