'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { preLoaderTexts } from '@/constants';

export default function Preloader({
  isVisible = true,
  timeout = 5000,
}: {
  isVisible: boolean;
  timeout: number;
}) {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setTimeout(() => setVisible(false), timeout - 1000);
  });

  const title = preLoaderTexts[0].en[0].title;
  const text = preLoaderTexts[0].en[1].subtitle;

  const titleLetters = title?.split('');
  const textWords = text?.split(' ');

  const container = (staggerValue: number, delayValue: number) => ({
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerValue,
        delayChildren: delayValue * i,
      },
    }),
  });

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        ease: 'easeInOut',
        stiffness: 80,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'spring',
        duration: 1.25,
        ease: 'easeInOut',
        stiffness: 80,
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className='w-full h-screen flex flex-col-reverse items-center justify-center'>
          <div>
            <motion.div
              variants={container(0.5, 0.01)}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='text-2xl flex md:flex-row  text-row font-medium'
            >
              {textWords?.map((word, index) => (
                <motion.h3 variants={child} className='mr-2' key={index}>
                  {word}
                </motion.h3>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={container(0.05, 2)}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='text-7xl flex md:flex-row  text-primary font-bold'
          >
            {titleLetters?.map((letter, index) => (
              <motion.h3 variants={child} className='mr-2' key={index}>
                {letter}
              </motion.h3>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
