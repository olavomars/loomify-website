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

  const startRotationSmall = -114;
  const endRotationSmall = -45;

  const startRotationLarge = 15;
  const endRotationLarge = -45;

  let startRotation = startRotationSmall;
  let endRotation = endRotationSmall;

  if (window.innerWidth >= 1024) {
    startRotation = startRotationLarge;
    endRotation = endRotationLarge;
  }

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
        className='w-full h-screen relative flex flex-col justify-center cursor-default select-none'
      >
        <div className='flex flex-col max-lg:items-center max-lg:text-center'>
          <motion.h1
            variants={textVariant(0.5)}
            className='text-6xl lg:text-[16rem] max-lg:mb-6 lg:mb-10 font-extrabold text-primary'
          >
            Loomify
          </motion.h1>
          <motion.h2
            className='text-secondary font-medium text-md lg:text-5xl leading-tight pl-3 mb-6'
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
          className='flex max-lg:flex-col items-center max-w-[400px]'
        >
          <Button btnType='primary' text='Get Started' />
          <Button btnType='secondary' text='Book a Call' />
        </motion.div>
        <div ref={arrowRef}>
          <motion.div
            variants={textVariant(1.1)}
            style={{ rotate }}
            transition={{ type: 'spring', stiffness: 20 }}
            className={`max-lg:left-0 max-lg:top-[80%] max-lg:w-28 absolute right-0 top-[70%]`}
          >
            <Image src={arrowIcon} alt='scroll down arrow' />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
