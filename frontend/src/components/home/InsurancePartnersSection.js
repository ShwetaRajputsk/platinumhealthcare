import { motion } from 'framer-motion';

const InsurancePartnersSection = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            We cover all major health insurance policies in the UAE
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {insurancePartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  alt={partner.name}
                  className="w-full h-16 object-contain"
                  src={partner.logo}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsurancePartnersSection;
