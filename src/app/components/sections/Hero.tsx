'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="geometric-pattern absolute inset-0 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start mb-8">
            <h1 className="slide-in-left text-6xl md:text-7xl lg:text-8xl font-sao-torpes mb-2">Liam</h1>
            <h1 className="slide-in-right text-6xl md:text-7xl lg:text-8xl font-sao-torpes">Woods</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 font-romana-light max-w-2xl">
            Full Stack Developer crafting elegant solutions through code
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary text-base hover:opacity-90">
              View Work
            </a>
            <a href="#contact" className="btn-secondary text-base hover:opacity-90">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 