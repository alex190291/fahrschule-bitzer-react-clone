import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCalendarCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaAction: string;
  backgroundGradient: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "Du kannst es kaum abwarten schon bald selbst hinter dem Steuer zu sitzen?",
      subtitle: "Dein Start in die Freiheit beginnt hier!",
      description: "Der Führerschein ist Dein Ticket in die große Freiheit. Wir begleiten Dich auf Deinem Weg in die mobile Zukunft.",
      ctaText: "Jetzt online anmelden",
      ctaAction: "register",
      backgroundGradient: "from-blue-600 to-purple-700"
    },
    {
      id: 2,
      title: "Führerschein machen, so einfach, so schnell, so gut.",
      subtitle: "Professionelle Fahrausbildung in Tuttlingen",
      description: "Unsere Fahrprofis sind Deine Ansprechpartner in Theorie und Praxis und bringen Dich spielerisch durch die Prüfungen.",
      ctaText: "Beratungstermin vereinbaren",
      ctaAction: "consultation",
      backgroundGradient: "from-green-600 to-blue-600"
    },
    {
      id: 3,
      title: "Moderne Fahrausbildung mit neuester Technik",
      subtitle: "Fahrsimulator & Videolernsystem",
      description: "Piloten-Training für die Straße. Die Fahrausbildung beginnt mit einem Hightech-Fahrsimulator.",
      ctaText: "Mehr erfahren",
      ctaAction: "learn-more",
      backgroundGradient: "from-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCTA = (action: string) => {
    switch (action) {
      case 'register':
        // Scroll to contact or open registration form
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'consultation':
        // Scroll to contact
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'learn-more':
        // Scroll to advantages
        document.querySelector('#advantages')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].backgroundGradient} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium mb-6 text-blue-100"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => handleCTA(slides[currentSlide].ctaAction)}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <FontAwesomeIcon 
                  icon={slides[currentSlide].ctaAction === 'register' ? faUserPlus : faCalendarCheck} 
                  className="w-5 h-5" 
                />
                <span>{slides[currentSlide].ctaText}</span>
              </button>

              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Mehr erfahren
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
      </button>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
