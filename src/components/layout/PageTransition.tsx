'use client';

import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white transition-transform duration-700 ${
        isLoading ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="h-full flex items-center justify-center px-4">
        <div className="text-2xl sm:text-3xl font-sao-torpes text-forest animate-pulse">
          LW
        </div>
      </div>
    </div>
  );
} 