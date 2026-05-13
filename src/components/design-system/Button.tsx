'use client'

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'outline' | 'destructive';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'w-full h-[52px] font-semibold text-base transition-opacity flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-[var(--brand-green-500)] text-white rounded-[12px] disabled:opacity-40',
    secondary: 'bg-white border-[1.5px] border-[var(--brand-green-500)] text-[var(--brand-green-500)] rounded-[12px] disabled:opacity-40',
    text: 'bg-transparent text-[var(--brand-green-500)] disabled:opacity-40',
    outline: 'bg-white border-[1.5px] border-[var(--border-default)] text-[var(--text-primary)] rounded-[12px] disabled:opacity-40',
    destructive: 'bg-[var(--semantic-error-500)] text-white rounded-[12px] disabled:opacity-40'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
