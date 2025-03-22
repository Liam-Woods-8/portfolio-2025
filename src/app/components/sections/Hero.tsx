'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start px-4 md:px-8 lg:px-16 relative overflow-hidden pt-24 md:pt-32">
      <div className="geometric-pattern absolute inset-0 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start mb-8">
            <h1 className="slide-in-left text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] font-sao-torpes mb-2 text-gradient">
              Liam
            </h1>
            <h1 className="slide-in-right text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] font-sao-torpes text-gradient">Woods</h1>
          </div>
          <div className="ml-4 sm:ml-8 md:ml-12">
            <p className="text-lg sm:text-xl md:text-2xl mb-8 font-honey-salt max-w-2xl">
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
      </div>
    </section>
  );
} 