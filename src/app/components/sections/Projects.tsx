'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { PROJECTS } from '@/app/lib/constants';
import dynamic from 'next/dynamic';

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
    <section id="projects" className="py-32 bg-gradient-to-b from-base via-sage/30 to-base">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-40">Projects</h2>
        <div className="relative pt-16">
          {PROJECTS.map((project, index) => (
            <article 
              key={index} 
              ref={el => projectRefs.current[index] = el}
              className="project-card group"
              style={{
                transform: 'translateY(100px)',
                opacity: 0.5,
                transition: 'all 0.6s ease-out',
                marginTop: index === 0 ? '0' : '-6rem',
              }}
            >
              <div className="project-content">
                <div className="project-text">
                  <h3 className="font-sao-torpes text-3xl md:text-4xl mb-6 text-gradient">{project.title}</h3>
                  <p className="text-base md:text-lg mb-6 leading-relaxed text-text/90">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-sage/40 text-text text-sm rounded-full">{tech}</span>
                    ))}
                  </div>
                  <Link href={project.link} className="hover-reveal inline-block text-base md:text-lg">
                    View Project
                  </Link>
                </div>
                <div className="project-image">
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest/10 to-sage/10 -z-10"></div>
                    <ImagePlaceholder
                      width={600}
                      height={400}
                      text={project.title}
                      className="w-full aspect-video object-cover rounded-xl"
                    />
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