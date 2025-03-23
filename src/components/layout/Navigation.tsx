'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Scroll to top when clicking LW
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="text-2xl font-sao-torpes text-forest cursor-pointer hover:opacity-80 transition-opacity"
          >
            LW
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-forest transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-forest transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-forest transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleLinkClick}
                className={`block text-center text-lg transition-colors duration-200 py-2 ${
                  activeSection === label.toLowerCase()
                    ? 'text-forest font-medium'
                    : 'text-gray-600 hover:text-forest'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 