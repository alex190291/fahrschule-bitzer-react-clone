import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faGraduationCap, faCar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: faUsers, number: '2000+', label: 'Zufriedene Fahrschüler' },
    { icon: faGraduationCap, number: '95%', label: 'Erfolgsquote' },
    { icon: faCar, number: '15+', label: 'Moderne Fahrzeuge' },
    { icon: faRoad, number: '25+', label: 'Jahre Erfahrung' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
          >
            Fahrschule <span className="text-gradient">Tuttlingen</span>
          </motion.h2>
          
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-heading font-semibold text-primary-600 dark:text-primary-400 mb-8"
          >
            Dein Start in die Freiheit beginnt hier!
          </motion.h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Der Führerschein ist Dein Ticket in die große Freiheit. Spontane Spritztour mit den Kumpels am Wochenende, 
                Shoppingfahrt mit der besten Freundin zum ungünstig gelegenen Outlet-Center oder romantischer Kurzurlaub 
                mit Deinem Partner? Du entscheidest, wo und wann!
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Deine Fahrerlaubnis ist ein entscheidendes Stück Selbstständigkeit und eröffnet Dir völlig neue 
                Möglichkeiten im Privat- und Berufsleben.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Wir möchten Dich auf Deinem Weg in die mobile Zukunft begleiten. Unsere Fahrprofis sind Deine 
                Ansprechpartner in Theorie und Praxis und bringen Dich in kürzester Zeit spielerisch durch die Prüfungen. 
                <strong className="text-primary-600 dark:text-primary-400"> Motorisiert macht das Leben eindeutig mehr Spaß!</strong>
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                <span>Jetzt Termin vereinbaren</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-heading font-bold mb-4">
                  Warum Fahrschule Bitzer?
                </h4>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Erfahrene und geduldige Fahrlehrer</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Moderne Fahrzeuge und Ausstattung</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Flexible Termingestaltung</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Hohe Erfolgsquote bei Prüfungen</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Faire Preise und Finanzierungsmöglichkeiten</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  className="w-8 h-8 text-primary-600 dark:text-primary-400" 
                />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
