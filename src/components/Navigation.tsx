'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'contact'];
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a
              href="https://www.linkedin.com/in/liamantoniowoods"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-sao-torpes text-[#1a472a] hover:text-[#2d5a3f] transition-colors"
            >
              LW
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { href: '#home', text: 'Home' },
                { href: '#projects', text: 'Projects' },
                { href: '#skills', text: 'Skills' },
                { href: '#contact', text: 'Contact' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-palugada transition-colors duration-300 hover:text-forest ${
                    activeSection === item.href ? 'text-forest font-semibold' : 'text-text/80'
                  }`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-sage/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-forest mb-1.5 transition-transform duration-300" 
                   style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
              <div className="w-6 h-0.5 bg-forest mb-1.5 transition-opacity duration-300"
                   style={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
              <div className="w-6 h-0.5 bg-forest transition-transform duration-300"
                   style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 bg-base/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col gap-8">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-3xl text-[#1a472a] hover:text-[#2d5a3f] transition-colors ${
                  activeSection === item.toLowerCase() ? 'font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-6 hidden lg:flex flex-col">
        {['home', 'projects', 'skills', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="group relative flex items-center"
          >
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'bg-forest scale-125'
                : 'bg-sage opacity-50 hover:opacity-100'
            }`} />
            <span className="absolute right-full mr-4 py-1 px-2 text-sm font-bold text-forest opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 capitalize">
              {section}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navigation; 