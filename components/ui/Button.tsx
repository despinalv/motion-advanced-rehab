import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-motion-subtle text-white border border-white/10 hover:bg-motion-surface",
    ghost: "bg-transparent text-motion-accent hover:text-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};