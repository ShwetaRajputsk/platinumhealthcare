import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What should I bring to my first visit?",
      answer: "Please bring an ID, any relevant medical records, and your insurance information if applicable."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment online through our website, call us directly, or visit our clinic in person."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans. Please contact us to verify if your specific plan is covered."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency care. For urgent medical situations, please call our emergency hotline."
    },
    {
      question: "What languages do your staff speak?",
      answer: "Our multilingual staff speaks English, Arabic, Hindi, Urdu, and several other languages to serve our diverse community."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f0f9ff 100%)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Questions
                <br />
                <span className="font-semibold">and answers</span>
              </h2>
            </div>

            <div className="text-right">
              <p className="text-gray-600 mb-4">
                If you have any other questions, please
                <br />
                let us know.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Contact us
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Large Question Text */}
            <div className="relative">
              <div className="text-8xl font-light text-blue-100 select-none">
                Question
              </div>
              <div className="absolute bottom-0 right-0 text-6xl font-light text-gray-200 select-none">
                swers / Faq
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className={`w-full px-6 py-6 text-left flex items-center justify-between transition-colors duration-200 ${openFAQ === index ? 'bg-gradient-to-r from-cyan-50 to-violet-50' : 'hover:bg-gray-50'}`}
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    className={`w-5 h-5 transform transition-transform duration-200 flex-shrink-0 ${openFAQ === index ? 'rotate-90 text-cyan-500' : 'text-gray-400'}`}
                  />
                </button>
                
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Featured FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What should I bring to my first visit?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Please bring an ID, any relevant medical records, and your 
                    insurance information if applicable.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">— SalvaMedic</span>
                    <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;