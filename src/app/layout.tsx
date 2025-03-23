'use client';

import { useEffect } from 'react';
import { initScrollReveal, initProjectCardEffects } from './utils/animations';
import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Liam Woods | Portfolio',
  description: 'Full Stack Developer crafting exceptional digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initScrollReveal();
    initProjectCardEffects();
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
