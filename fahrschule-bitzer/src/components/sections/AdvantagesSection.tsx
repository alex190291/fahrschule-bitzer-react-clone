import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLanguage, 
  faCalendarAlt, 
  faFileAlt, 
  faRoute, 
  faDesktop, 
  faVideo, 
  faClock, 
  faCreditCard 
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface Advantage {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const AdvantagesSection: React.FC = () => {
  const advantages: Advantage[] = [
    {
      icon: faLanguage,
      title: "Fahrausbildung in Englisch und Russisch",
      description: "Die Fahrausbildung kann in deutsch, englisch und russisch erfolgen. Die Simulatorausbildung sogar in deutsch, englisch, russisch und türkisch.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: faCalendarAlt,
      title: "Fahrstunden online buchen",
      description: "Du kannst deine Fahrstunden ganz easy online über die Fahrlehren-App buchen – von zu Hause aus.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: faFileAlt,
      title: "Antragsservice",
      description: "Wir erledigen die Behördengänge für Dich",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: faRoute,
      title: "Individueller Ausbildungsplan",
      description: "Wir erstellen einen auf Dich zugeschnittenen Ausbildungsplan vom Start bis zu Deiner Prüfung",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: faDesktop,
      title: "Fahrsimulator",
      description: "Piloten-Training für die Straße. Die Fahrausbildung beginnt mit einem Hightech-Fahrsimulator. Simulator-Flat, fahre sooft Du willst...",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: faVideo,
      title: "Videolernsystem Praxis",
      description: "Alle Stellen, die häufig in der praktischen Prüfung gefahren werden in den Schulungsvideos ansehen. So bist Du perfekt auf die Prüfung...",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: faClock,
      title: "Theorie in 8 Tagen",
      description: "Bei uns kannst Du Deine gesamte Theorieausbildung ständig in 8 Tagen absolvieren. Komm vorbei und informiere Dich.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: faCreditCard,
      title: "Führerscheinfinanzierung",
      description: "Führerschein auch in kleinen Raten abzahlen. Spreche uns einfach auf die Führerscheinfinanzierung an. Wir beraten Dich gerne.",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="advantages" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Deine <span className="text-gradient">Vorteile</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Entdecke die vielen Vorteile, die unsere moderne Fahrschule Dir bietet. 
            Von mehrsprachiger Ausbildung bis hin zu flexiblen Finanzierungsmöglichkeiten.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden"
            >
              <div className="card p-6 h-full relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon 
                    icon={advantage.icon} 
                    className="w-8 h-8 text-white" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              </div>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Bereit für Deinen Führerschein?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Nutze alle unsere Vorteile und starte noch heute Deine Fahrausbildung bei uns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
              >
                Jetzt anmelden
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Beratung vereinbaren
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
