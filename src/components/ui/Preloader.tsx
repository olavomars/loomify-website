'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { preLoaderTexts } from '@/constants';
import { textVariant } from '@/utils/motion';

export default function Preloader({
  isVisible = true,
  timeout = 5000,
}: {
  isVisible: boolean;
  timeout: number;
}) {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setTimeout(() => setVisible(false), timeout - 500);
  });

  const title = preLoaderTexts[0].en[0].title;
  const text = preLoaderTexts[0].en[1].subtitle;

  const words = title?.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 80,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'spring',
        duration: 1.25,

        stiffness: 80,
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className='w-full h-screen flex flex-col-reverse items-center justify-center'>
          <div>
            <motion.h1
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={textVariant(1.4)}
              className='text-2xl font-medium text-secondary'
            >
              {text}
            </motion.h1>
          </div>
          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='text-7xl flex md:flex-row  text-primary font-bold'
          >
            {words?.map((word, index) => (
              <motion.h3 variants={child} className='mr-2' key={index}>
                {word}
              </motion.h3>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
