'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-6">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-sao-torpes flex items-center justify-center space-x-4">
          <span className="slide-in-left-name">Liam</span>
          <span className="slide-in-right-name">Woods</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-palugada text-gray-600">
          Full Stack Developer
        </p>
      </div>
    </section>
  );
} 