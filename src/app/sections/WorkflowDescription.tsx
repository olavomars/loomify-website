import WorkflowCard from '@/components/ui/WorkflowCard';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textContainer, textVariant } from '@/utils/motion';
import { text } from 'node:stream/consumers';

export default function WorkflowDescription() {
  return (
    <section className='pointer-events-none'>
      <motion.div
        initial='hidden'
        variants={textVariant(0.5)}
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-full text-secondary flex py-10 flex-col items-center gap-4 justify-center'
      >
        <h2 className='text-3xl'>
          How is the <span className='text-primary'>Workflow?</span>
        </h2>
        <h3>It&apos;s simple, really</h3>
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8'
      >
        <motion.div variants={textVariant(0.5)}>
          <WorkflowCard
            title='Subscribe'
            description="Subscribe to a plan & you'll get access to your private Slack
            channel or work board (trello), whichever you prefer."
          />
        </motion.div>
        <motion.div variants={textVariant(0.7)}>
          <WorkflowCard
            title='Request'
            description="Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 48-72 hours."
          />
        </motion.div>
        <motion.div variants={textVariant(0.9)}>
          <WorkflowCard
            title='Revise'
            description='Need changes? We guarantee unlimited revisions until you are 100% satisfied.  '
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
