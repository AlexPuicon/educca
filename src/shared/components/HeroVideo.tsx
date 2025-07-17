import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            ¡Tambopata Verde: Un Compromiso de Todos con EDUCCA!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Juntos construimos un futuro sostenible para nuestra región. Únete a nuestras iniciativas y sé parte del cambio.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="btn-primary">
              Conoce Más
            </button>
            <button className="btn-secondary">
              Contacto
            </button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition duration-300"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3l4.5 4.5M15.536 8.464a5 5 0 010 7.072" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;