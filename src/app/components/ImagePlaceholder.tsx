'use client';

import { useEffect, useRef } from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text: string;
  className?: string;
}

export default function ImagePlaceholder({ width, height, text, className = '' }: ImagePlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ffd700');
    gradient.addColorStop(0.5, '#ff6b6b');
    gradient.addColorStop(1, '#4a90e2');

    // Fill background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

  }, [width, height, text]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
    />
  );
} 