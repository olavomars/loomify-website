import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, textVariant } from '@/utils/motion';
import Image from 'next/image';
import openClosedArrow from '../../../public/assets/icons/Open-closed-arrow.svg';

const AccordionItem = ({ isOpen, children }: any) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
      animate={{ opacity: 1, height: isOpen ? 'auto' : 0 }}
      exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
      transition={{
        type: 'tween',
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <div className='p-4 text-2xl'>{children}</div>
    </motion.div>
  );
};

export default function AccordionComponent({ items }: any) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.div
      variants={staggerContainer(0.9, 1.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      {items.map((item: any, index: any) => (
        <motion.div variants={textVariant(0.5)} key={index}>
          <div
            onClick={() => toggleItem(index)}
            className='text-primary my-8 lg:my-12 max-lg:justify-between cursor-pointer text-2xl lg:text-5xl flex gap-6 font-light'
          >
            {item.title}
            <Image
              src={openClosedArrow}
              alt='arrow icon'
              className={openIndex === index ? 'rotate-90' : 'rotate-0'}
            />
          </div>
          <AnimatePresence>
            {index !== items.length - 1 && (
              <div className='h-[1px] w-full bg-primary'></div>
            )}
            <AccordionItem isOpen={openIndex === index} toggle={toggleItem}>
              {item.content.map((bullet: any, index: any) => (
                <motion.div key={index}>
                  <ul className='flex items-start lg:ml-16 my-8 gap-6 text-lg lg:text-xl text-secondary'>
                    <Image src={openClosedArrow} alt='arrow icon' />
                    <li dangerouslySetInnerHTML={{ __html: bullet }}></li>
                  </ul>
                </motion.div>
              ))}
            </AccordionItem>
            {index !== items.length - 1 && (
              <div className='h-[1px] w-full bg-primary'></div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
