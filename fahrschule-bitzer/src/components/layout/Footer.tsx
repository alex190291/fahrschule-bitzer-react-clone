import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faHeart,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faGoogle 
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Über uns', href: '#about' },
    { name: 'Vorteile', href: '#advantages' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const services = [
    'Führerschein Klasse B',
    'Führerschein Klasse A',
    'Fahrsimulator',
    'Theorieunterricht',
    'Intensivkurse',
    'Auffrischungsfahrten'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-max py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">FB</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Fahrschule Bitzer</h3>
                  <p className="text-gray-400">Tuttlingen</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Dein zuverlässiger Partner für eine erfolgreiche Fahrausbildung. 
                Mit über 25 Jahren Erfahrung bringen wir Dich sicher ans Ziel.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://maps.google.com/?q=Tuttlingen"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Unsere Leistungen</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-primary-400 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      Musterstraße 123<br />
                      78532 Tuttlingen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary-400" />
                  <a 
                    href="tel:07461/7037313" 
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    07461 / 7037313
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary-400" />
                  <a 
                    href="mailto:info@fahrschule-bitzer.com" 
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    info@fahrschule-bitzer.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="container-max py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>
                  © 2024 Fahrschule Bitzer. Alle Rechte vorbehalten.
                </p>
                <div className="flex items-center space-x-1">
                  <span>Made with</span>
                  <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-500" />
                  <span>in Tuttlingen</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Impressum
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
