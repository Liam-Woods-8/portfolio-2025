'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      NAV_LINKS.forEach(({ href, label }) => {
        const section = document.querySelector(href);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
          const sectionBottom = bottom + window.scrollY;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(label.toLowerCase());
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-sao-torpes text-forest">LW</div>
          <div className="space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-lg transition-colors duration-200 ${
                  activeSection === label.toLowerCase()
                    ? 'text-forest font-medium'
                    : 'text-gray-600 hover:text-forest'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="w-8"></div> {/* Spacer for symmetry */}
        </div>
      </div>
    </nav>
  );
} 