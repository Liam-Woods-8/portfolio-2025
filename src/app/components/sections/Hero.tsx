'use client';

import dynamic from 'next/dynamic';

const ImagePlaceholder = dynamic(() => import('../ui/ImagePlaceholder'), {
  ssr: false
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center geometric-pattern">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-sao-torpes text-8xl md:text-9xl lg:text-[12rem] mb-8 text-gradient">
            Liam Woods
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div>
              <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-text/90">
                Full Stack Developer crafting exceptional digital experiences through innovative code and creative design solutions
              </p>
              <div className="flex gap-8">
                <a href="#projects" className="btn-primary text-text">View Work</a>
                <a href="#contact" className="btn-secondary text-text">Contact</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-mid-blue/20 to-light-blue/20 rounded-2xl -z-10 blur-xl"></div>
              <ImagePlaceholder
                width={500}
                height={500}
                text="LW"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 