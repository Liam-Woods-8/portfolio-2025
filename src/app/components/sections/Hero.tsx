'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="geometric-pattern absolute inset-0 z-0"></div>
      <div className="fixed top-8 left-8 z-50">
        <a 
          href="https://www.linkedin.com/in/liam-woods-8/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl font-sao-torpes hover:opacity-80 transition-opacity"
        >
          LW
        </a>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start mb-8">
            <h1 className="slide-in-left text-8xl md:text-9xl lg:text-[12rem] font-sao-torpes mb-2 text-gradient">
              Liam
            </h1>
            <h1 className="slide-in-right text-8xl md:text-9xl lg:text-[12rem] font-sao-torpes text-gradient">Woods</h1>
          </div>
          <div className="ml-12">
            <p className="text-xl md:text-2xl mb-8 font-honey-salt max-w-2xl">
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