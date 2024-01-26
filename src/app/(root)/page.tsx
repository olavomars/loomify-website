'use client';
import { useState, useEffect } from 'react';

import Cursor from '@/components/shared/Cursor';
import Hero from '../sections/Hero';
import Preloader from '@/components/ui/Preloader';

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
          {/* <div className='h-[1500px]'></div> */}
          <div className='w-full h-full flex flex-row justify-center max-w-screen-xl '>
            <Hero />
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
