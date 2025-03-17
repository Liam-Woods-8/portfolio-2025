'use client'

import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
