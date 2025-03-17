'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center geometric-pattern">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-sao-torpes text-8xl md:text-9xl lg:text-[12rem] mb-8 text-gradient">
            Liam Woods
          </h1>
          <div className="mt-16">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-text font-bold max-w-2xl">
              Full Stack Developer crafting exceptional digital experiences through innovative code and creative design solutions
            </p>
            <div className="flex gap-8">
              <a href="#projects" className="btn-primary text-lg font-bold">View Work</a>
              <a href="#contact" className="btn-secondary text-lg font-bold">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 