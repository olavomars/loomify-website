import React, { useRef } from 'react';
import Button from '@/components/shared/Button';
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { textVariant } from '@/utils/motion';

import arrowIcon from '../../../public/assets/icons/Arrow-vector.svg';

export default function Hero() {
  const arrowRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: arrowRef,
    offset: ['end end', 'start start'],
  });

  const startRotation = 100;
  const endRotation = -5;

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [startRotation, endRotation]
  );

  return (
    <section>
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-full h-full relative flex flex-col justify-start cursor-default select-none'
      >
        <div>
          <motion.h1
            variants={textVariant(0.5)}
            className='text-[16rem] font-extrabold text-primary'
          >
            Loomify
          </motion.h1>
          <motion.h2
            className='text-secondary font-medium text-5xl leading-tight pl-3 mb-6'
            variants={textVariant(0.7)}
          >
            Your Startup&apos;s Design & Development Ally.
            <br />
            <span className='text-primary font-extrabold'>
              Upgrade Your Process.
            </span>
          </motion.h2>
        </div>
        <motion.div
          variants={textVariant(0.9)}
          className='flex items-center max-w-[400px]'
        >
          <Button btnType='primary' text='Get Started' />
          <Button btnType='secondary' text='Book a Call' />
        </motion.div>
        <div ref={arrowRef}>
          <motion.div
            variants={textVariant(1.1)}
            style={{ rotate }}
            transition={{ type: 'spring', stiffness: 20 }}
            className='absolute right-0 top-[80%]'
          >
            <Image src={arrowIcon} alt='scroll down arrow' />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
