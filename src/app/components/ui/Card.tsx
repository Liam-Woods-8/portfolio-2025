interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-8 bg-white border border-[#E4EFE7] rounded-2xl ${className}`}>
      {children}
    </div>
  );
} 