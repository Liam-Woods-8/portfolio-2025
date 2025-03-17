'use client';

import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-['Sao_Torpes'] mb-6">
          <span className="animate-slide-in-left">Liam</span>
          <span className="animate-slide-in-right">Woods</span>
        </h1>
        <p className="text-xl mb-8">Software Developer</p>
        <div className="flex gap-4">
          <Button>View Projects</Button>
          <Button variant="secondary">Contact Me</Button>
        </div>
      </div>
    </section>
  );
} 