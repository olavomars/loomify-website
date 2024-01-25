'use client';
import Cursor from '@/components/shared/Cursor';
import Hero from '../sections/Hero';

export default function Home() {
  return (
    <main className='w-full relative h-full flex flex-col items-center'>
      <div className='w-full h-full flex flex-row justify-center max-w-screen-xl '>
        <Hero />
      </div>
      <Cursor />
    </main>
  );
}
