import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'Exceptional care and professional service. The doctors are knowledgeable and the staff is very friendly. Highly recommend!',
      service: 'General Consultation',
      featured: true
    },
    {
      id: 2,
      name: 'Mohammed Hassan',
      location: 'Abu Dhabi, UAE',
      rating: 5,
      text: 'Great experience with the pediatric team. My children feel comfortable here and the doctors are excellent.',
      service: 'Pediatrics',
      featured: false
    },
    {
      id: 3,
      name: 'Lisa Johnson',
      location: 'Sharjah, UAE',
      rating: 5,
      text: 'Modern facilities and expert medical care. The appointment booking process is smooth and convenient.',
      service: 'Women\'s Health',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-light via-blue-50/30 to-cyan-50/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-start mb-16"
        >
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              What our patients
              <br />
              <span className="font-semibold">say about us</span> | Reviews |
            </h2>
          </div>
          <div className="text-right">
            <p className="text-gray-600 mb-4 max-w-md">
              Real experiences from our valued patients who 
              trust us with their healthcare needs.
            </p>
            <Link 
              to="/testimonials" 
              className="text-brand-primary hover:text-brand-accent font-medium inline-flex items-center"
            >
              Read all reviews
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`
                ${testimonial.featured ? 'bg-gradient-to-br from-brand-primary to-brand-secondary text-white' : 'bg-white border border-gray-200'} 
                rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                transition-all duration-300 group-hover:-translate-y-2
                min-h-[320px] flex flex-col justify-between
              `}>
                {/* Quote Icon */}
                <div className={`w-12 h-12 ${
                  testimonial.featured ? 'bg-white/20' : 'bg-brand-light'
                } rounded-xl flex items-center justify-center mb-6`}>
                  <Quote className={`w-6 h-6 ${
                    testimonial.featured ? 'text-white' : 'text-brand-primary'
                  }`} />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        testimonial.featured ? 'text-yellow-300' : 'text-yellow-500'
                      } fill-current`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`leading-relaxed mb-6 ${
                  testimonial.featured ? 'text-white/90' : 'text-gray-600'
                }`}>
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="space-y-2">
                  <div className={`font-semibold ${
                    testimonial.featured ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    testimonial.featured ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {testimonial.location}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                    testimonial.featured 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  4.9<span className="text-blue-600">★</span>
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  500<span className="text-blue-600">+</span>
                </div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  98<span className="text-blue-600">%</span>
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  24<span className="text-blue-600">/7</span>
                </div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;