'use client';

import { useEffect } from 'react';
import TypeWriter from '@/components/ui/TypeWriter';
import PageTransition from '@/components/layout/PageTransition';

const ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Problem Solver'
];

export default function Hero() {
  // Scroll to top on initial load for mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <PageTransition />
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-sao-torpes flex flex-col sm:flex-row items-center justify-center sm:space-x-4 text-forest">
            <span className="slide-in-left-name mb-2 sm:mb-0">Liam</span>
            <span className="slide-in-right-name">Woods</span>
          </h1>
          <div className="space-y-2">
            <TypeWriter 
              words={ROLES}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-palugada text-gray-600 block"
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-500 font-palugada mt-4">
              Crafting exceptional digital experiences with modern technologies
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 