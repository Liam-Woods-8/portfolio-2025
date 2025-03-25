'use client';

import { useEffect } from 'react';
import TypeWriter from '@/components/ui/TypeWriter';
import PageTransition from '@/components/layout/PageTransition';

const ROLES = [
  'Full Stack Developer',
  'Problem Solver',
  'Design Enthusiast'
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
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative py-16 sm:py-0"
        aria-label="Introduction"
      >
        <div className="section-container">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-sao-torpes flex flex-col sm:flex-row items-center justify-center sm:space-x-4 text-forest">
              <span className="slide-in-left-name mb-2 sm:mb-0">Liam</span>
              <span className="slide-in-right-name">Woods</span>
            </h1>
            <div className="space-y-3 sm:space-y-4">
              <TypeWriter 
                words={ROLES}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-palugada text-gray-600 block min-h-[1.5em]"
                aria-label="Professional roles"
              />
            </div>
            <meta itemProp="name" content="Liam Woods" />
            <meta itemProp="jobTitle" content="Full Stack Developer" />
            <meta itemProp="description" content="Full Stack Developer specializing in React, UI/UX design, and modern web development." />
          </div>
        </div>
      </section>
    </>
  );
} 