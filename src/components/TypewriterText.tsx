import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText: React.FC = () => {
  return (
    <motion.h1 
      className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      Front-end Developer
    </motion.h1>
  );
};

export default TypewriterText;
