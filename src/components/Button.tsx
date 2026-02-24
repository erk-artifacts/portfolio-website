import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "bg-neu-base text-neu-text-main font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neu-accent/50";
  
  const variants = {
    primary: "px-8 py-4 rounded-[20px] shadow-neu-flat hover:text-neu-accent active:shadow-neu-pressed",
    icon: "p-4 rounded-full shadow-neu-flat hover:text-neu-accent active:shadow-neu-pressed flex items-center justify-center"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
