'use client';

import { useEffect } from 'react';
import { initScrollReveal, initProjectCardEffects } from '../utils/animations';

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initScrollReveal();
    initProjectCardEffects();
  }, []);

  return <>{children}</>;
} 