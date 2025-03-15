'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[var(--background)]/90 backdrop-blur-sm shadow-sm' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            href="/#home" 
            className="font-['Sao_Torpes'] text-2xl text-[var(--deep-blue)] hover:text-[var(--royal-blue)] transition-colors"
          >
            LW
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {['Projects', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`font-['Romana_Light'] text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--yellow)] after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left ${
                  activeSection === item.toLowerCase() ? 'text-[var(--deep-blue)]' : 'text-[var(--royal-blue)]'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
        {['home', 'projects', 'about', 'contact'].map((section) => (
          <Link
            key={section}
            href={`/#${section}`}
            className="group relative flex items-center"
          >
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'bg-[var(--yellow)] scale-125'
                : 'bg-[var(--deep-blue)] opacity-50 hover:opacity-100'
            }`} />
            <span className="absolute right-full mr-4 py-1 px-2 text-sm font-['Romana_Light'] text-[var(--deep-blue)] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 capitalize">
              {section}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 right-4 z-50 md:hidden bg-[var(--background)] p-2 rounded-full shadow-md"
        onClick={() => document.body.classList.toggle('mobile-menu-open')}
      >
        <div className="w-6 h-0.5 bg-[var(--deep-blue)] mb-1.5" />
        <div className="w-6 h-0.5 bg-[var(--deep-blue)] mb-1.5" />
        <div className="w-6 h-0.5 bg-[var(--deep-blue)]" />
      </button>

      {/* Mobile Menu */}
      <div className="fixed inset-0 bg-[var(--background)] z-40 md:hidden transform translate-x-full transition-transform duration-300 mobile-menu">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col gap-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`font-['Sao_Torpes'] text-3xl ${
                  activeSection === item.toLowerCase()
                    ? 'text-[var(--deep-blue)]'
                    : 'text-[var(--royal-blue)]'
                }`}
                onClick={() => document.body.classList.remove('mobile-menu-open')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 