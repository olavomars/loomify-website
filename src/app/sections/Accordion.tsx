import AccordionComponent from '@/components/ui/Accordion';
import React from 'react';

export default function AccordionSection() {
  const accordionItems = [
    {
      title: 'Request and Communication',
      content: ['bullet1', 'bullet2', 'bullet3'],
    },
    {
      title: 'Super Fast Delivery',
      content: ['bullet1', 'bullet2', 'bullet3'],
    },
    {
      title: 'Fixed Monthly Rate',
      content: [
        "Pay the <span class='text-primary'>same price every month</span>, no surprises or inconveniences with hiring freelancers or in-house developers/designers!",
        'Mock second argument.',
      ],
    },
    {
      title: 'Flexibility and Scalability',
      content: ['bullet1', 'bullet2', 'bullet3'],
    },
  ];

  return (
    <section className='px-10'>
      <AccordionComponent items={accordionItems} />
    </section>
  );
}
