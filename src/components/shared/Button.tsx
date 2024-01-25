import React from 'react';
import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';

const Button: React.FC<ButtonProps> = ({ btnType, text }) => {
  const buttonStyles: Record<string, string> = {
    primary:
      'm-3 bg-transparent border-2 border-primary flex items-center justify-center px-8 py-3 rounded-xl text-primary font-bold text-lg max-w-[200px] hover:bg-primary hover:text-white transition-colors duration-500',
    secondary: 'm-3 text-secondary px-5 ',
  };

  const className: string = buttonStyles[btnType] || '';

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default Button;
