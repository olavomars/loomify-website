'use client';
import { useState, useEffect } from 'react';

import Cursor from '@/components/shared/Cursor';
import Hero from '../sections/Hero';
import Preloader from '@/components/ui/Preloader';
import Paragraph from '../sections/Paragraph';
import GridPortfolio from '../sections/GridPortfolio';
import AccordionSection from '../sections/Accordion';

const PRELOADER_TIMEOUT = 6000;

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), PRELOADER_TIMEOUT);
  }, []);

  return (
    <>
      {!loading ? (
        <main className='w-full relative h-full flex flex-col items-center'>
          <div className='w-full h-full flex flex-col justify-center max-w-screen-xl '>
            <Hero />
            <Paragraph />
            <GridPortfolio />
            <AccordionSection />
          </div>
          <div className='h-[1500px]'></div>
          <Cursor />
        </main>
      ) : (
        <>
          <Preloader isVisible={loading} timeout={PRELOADER_TIMEOUT} />
        </>
      )}
    </>
  );
}
