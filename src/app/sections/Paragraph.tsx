import { motion, useScroll, useTransform } from 'framer-motion';
import { textVariant } from '@/utils/motion';

import React, { useRef } from 'react';

export default function Paragraph() {
  const container = useRef(null);

  const paragraph =
    'Swap freelancers and agencies for a fixed monthly fee, and get lightning-fast designs that impress.';

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start 0.9', 'start 0.25'],
  });

  const words = paragraph.split(' ');

  const specialWords = ['freelancers', 'agencies', 'fixed', 'monthly'];

  return (
    <motion.div
      variants={textVariant(0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='w-full h-[16rem] mb-12 lg:mb-32 '
    >
      <p
        ref={container}
        className='flex max-lg:text-2xl text-6xl leading-none max-w-screen-xl flex-wrap p-10'
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          const isSpecialWord = specialWords.includes(word.toLowerCase());

          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              isSpecial={isSpecialWord}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </motion.div>
  );
}

const Word = ({ children, progress, range, isSpecial }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className='relative mr-3 mt-3'>
      <span
        className={
          `absolute opacity-[20%]` +
          (isSpecial ? ' text-primary font-bold' : ' text-secondary')
        }
      >
        {children}
      </span>

      <motion.span
        className={isSpecial ? 'text-primary font-bold' : 'text-secondary'}
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
