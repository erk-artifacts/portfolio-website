import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', interactive = false, ...props }) => {
  return (
    <div
      className={`
        bg-neu-base rounded-[24px] shadow-neu-flat
        ${interactive ? 'transition-shadow duration-300 hover:shadow-neu-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
