'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-sage/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="text-2xl font-sao-torpes text-gradient">
            LW
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-forest transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-forest transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-forest transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

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
                  activeSection === item.href.slice(1) ? 'text-forest font-semibold' : 'text-text/80'
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm transition-all duration-300 overflow-hidden border-b border-sage/30 ${
            isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {[
              { href: '#home', text: 'Home' },
              { href: '#projects', text: 'Projects' },
              { href: '#skills', text: 'Skills' },
              { href: '#contact', text: 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`text-lg font-palugada transition-colors duration-300 hover:text-forest ${
                  activeSection === item.href.slice(1) ? 'text-forest font-semibold' : 'text-text/80'
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 