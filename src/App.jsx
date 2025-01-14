import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaPalette, FaMobile, FaRocket, FaInstagram, FaWhatsapp, FaCheck, FaShieldAlt, FaCog, FaBolt, FaMobileAlt, FaPencilAlt } from 'react-icons/fa';

function App() {
  const contactRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos que destacan tu marca."
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas y atractivas que cautivan a tus usuarios."
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Diseño Responsivo",
      description: "Tu sitio web perfecto en cualquier dispositivo."
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Optimización SEO",
      description: "Mejoramos tu visibilidad en los motores de búsqueda."
    }
  ];

  const features = [
    {
      icon: <FaPencilAlt className="text-2xl text-pink-500" />,
      text: "Diseño personalizado y único",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-blue-500" />,
      text: "Optimización para móviles",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaBolt className="text-2xl text-yellow-500" />,
      text: "Velocidad de carga rápida",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-green-500" />,
      text: "Seguridad avanzada",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCog className="text-2xl text-indigo-500" />,
      text: "Soporte técnico continuo",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaCheck className="text-2xl text-red-500" />,
      text: "Actualizaciones periódicas",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')] bg-cover bg-fixed md:bg-fixed bg-center">
      <div className="min-h-screen bg-white/80 backdrop-blur-sm">
        {/* Hero Section */}
        <motion.header 
          className="min-h-screen flex items-center justify-center text-center px-4 py-16 md:py-0 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-4xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Skyline Web
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 px-4 md:px-0"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transformamos tus ideas en experiencias digitales extraordinarias
            </motion.p>

            <motion.div
              className="space-y-4 md:space-y-0 md:space-x-4 mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl w-full md:w-auto transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comienza tu proyecto
              </motion.button>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.header>

        {/* Rest of the sections remain unchanged */}
        {/* Services Section */}
        <section className="py-16 md:py-20 px-4" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800 px-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center md:items-start text-center md:text-left transform hover:scale-105"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-indigo-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <motion.section 
          ref={contactRef}
          className="py-16 md:py-20 px-4 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">¿Listo para empezar?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 px-4 md:px-0">
              Contáctanos hoy y lleva tu presencia digital al siguiente nivel
            </p>
            <motion.a 
              href="https://wa.me/543875816759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg w-full md:w-auto justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
              Contactar
            </motion.a>
          </div>

          {/* Social Media Links */}
          <motion.div 
            className="fixed bottom-8 right-8 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://www.instagram.com/skyline_web_?igsh=MWZyN2Zuc3BlMXpm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://wa.me/543875816759"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp className="text-2xl" />
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;