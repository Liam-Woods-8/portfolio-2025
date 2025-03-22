'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-sage/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="text-2xl font-sao-torpes text-gradient">
            LW
          </Link>
          <div className="flex space-x-8">
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
      </div>
    </nav>
  );
} 