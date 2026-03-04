import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/assets/logo.png" 
                alt="Platinum Healthcare" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing exceptional healthcare services with compassion and expertise across Dubai and Ras Al Khaimah.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Specialties</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Doctors</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Specialties</h4>
            <ul className="space-y-3">
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">General Medicine</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Aesthetic</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pediatrics</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Gynaecology</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Dermatology</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Lab Services</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">HomeCare</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pharmacy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block">
                    {CONTACT_INFO.phone}
                  </a>
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block">
                    {CONTACT_INFO.mobile}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Platinum Healthcare Group | All Rights Reserved
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <p className="text-gray-400">
                UAE Emergency: <span className="text-white font-semibold">Police - 999</span> | <span className="text-white font-semibold">Ambulance - 998</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;