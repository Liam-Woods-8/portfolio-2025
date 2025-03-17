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

    // Load the font first
    const font = new FontFace('Sao Torpes', 'url(/fonts/SaoTorpes.otf)');
    
    font.load().then(() => {
      // Add the font to the document
      document.fonts.add(font);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#ffd700');
      gradient.addColorStop(0.5, '#ff6b6b');
      gradient.addColorStop(1, '#4a90e2');

      // Fill background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add text with Sao Torpes font
      ctx.fillStyle = 'white';
      const fontSize = Math.min(width, height) * 0.1; // Responsive font size
      ctx.font = `${fontSize}px "Sao Torpes"`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2);

      // Add a subtle text shadow for better readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillText(text, width / 2 + 2, height / 2 + 2);
    }).catch((err) => {
      // Fallback to Arial if font loading fails
      console.error('Font loading failed:', err);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#ffd700');
      gradient.addColorStop(0.5, '#ff6b6b');
      gradient.addColorStop(1, '#4a90e2');

      // Fill background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add text with fallback font
      ctx.fillStyle = 'white';
      const fontSize = Math.min(width, height) * 0.1;
      ctx.font = `${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2);
    });

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