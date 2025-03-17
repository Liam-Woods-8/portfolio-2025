interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
} 