'use client';

import { useEffect } from 'react';
import { initScrollReveal, initProjectCardEffects } from '@/lib/animations';
import { ANIMATION_CONFIG } from '@/lib/constants';

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initScrollReveal(ANIMATION_CONFIG.scrollReveal);
    initProjectCardEffects(ANIMATION_CONFIG.projectCards);
  }, []);

  return <>{children}</>;
} 