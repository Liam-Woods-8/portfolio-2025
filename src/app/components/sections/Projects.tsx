'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { PROJECTS } from '@/app/lib/constants';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ImagePlaceholder = dynamic(() => import('../ui/ImagePlaceholder'), {
  ssr: false
});

export default function Projects() {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.5;
        
        if (isInView) {
          ref.style.transform = 'translateY(0)';
          ref.style.opacity = '1';
          ref.style.zIndex = `${index + 1}`;
        } else {
          ref.style.transform = 'translateY(100px)';
          ref.style.opacity = '0.5';
          ref.style.zIndex = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white/80 via-sage/10 to-white/80">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-20 sm:mb-32 md:mb-40">Projects</h2>
        <div className="relative pt-8 sm:pt-12 md:pt-16">
          {PROJECTS.map((project, index) => (
            <article 
              key={index} 
              ref={el => projectRefs.current[index] = el}
              className="project-card group"
              style={{
                transform: 'translateY(100px)',
                opacity: 0.5,
                transition: 'all 0.6s ease-out',
                marginTop: index === 0 ? '0' : '-4rem',
                zIndex: index,
              }}
            >
              <div className="project-content">
                <div className="project-text">
                  <h3 className="font-sao-torpes text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-gradient">{project.title}</h3>
                  <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed text-text/90 font-paulugada">{project.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-sage/40 text-text text-sm rounded-full font-paulugada">{tech}</span>
                    ))}
                  </div>
                  <Link href={project.link} className="hover-reveal inline-block text-base sm:text-lg font-paulugada">
                    View Project
                  </Link>
                </div>
                <div className="project-image">
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 