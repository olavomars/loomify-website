import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import React from 'react';

import { staggerContainer, textVariant } from '@/utils/motion';
import Button from '@/components/shared/Button';

export default function GridPortfolio() {
  return (
    <section>
      <motion.div
        variants={staggerContainer(0.6, 1.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-10'
      >
        <motion.div variants={textVariant(0.7)}>
          <Card />
        </motion.div>
        <motion.div variants={textVariant(0.5)}>
          <Card />
        </motion.div>
        <motion.div variants={textVariant(0.9)}>
          <Card />
        </motion.div>
        <motion.div variants={textVariant(1)}>
          <Card />
        </motion.div>
        <motion.div variants={textVariant(1.2)}>
          <Card />
        </motion.div>
        <motion.div variants={textVariant(1.4)}>
          <Card />
        </motion.div>
      </motion.div>
      <motion.div
        variants={textVariant(0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-full flex my-12 items-center justify-center'
      >
        <Button btnType='primary' text='See work' />
      </motion.div>
    </section>
  );
}
