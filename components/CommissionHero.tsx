import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CommissionHero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('commission-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <Image 
              src="/Smiling Clay Sun Character.png" 
              alt="Mazen Zwin Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
              style={{
                filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.1)'
              }}
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
              We turn code, culture, and chaos into beautiful things.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto">
            Let's create something extraordinary together. Your vision, our expertise.
          </p>
          
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Commission
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-1"
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CommissionHero;
