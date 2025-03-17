'use client';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text: string;
  className?: string;
}

export default function ImagePlaceholder({ width, height, text, className = '' }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-tr from-purple/10 to-mid-blue/10 rounded-2xl flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <span className="text-4xl font-sao-torpes text-text/50">{text}</span>
    </div>
  );
} 