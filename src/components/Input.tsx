import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-neu-text-sub text-sm font-medium ml-2">{label}</label>}
      <input
        className={`
          bg-neu-base text-neu-text-main placeholder-neu-text-sub/50
          rounded-[20px] px-6 py-4 shadow-neu-pressed
          focus:outline-none focus:ring-2 focus:ring-neu-accent/50
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-neu-text-sub text-sm font-medium ml-2">{label}</label>}
      <textarea
        className={`
          bg-neu-base text-neu-text-main placeholder-neu-text-sub/50
          rounded-[20px] px-6 py-4 shadow-neu-pressed
          focus:outline-none focus:ring-2 focus:ring-neu-accent/50
          transition-all duration-200 resize-none
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
