'use client'

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'tinted' | 'cream' | 'inverse';
  className?: string;
  onClick?: () => void;
}

export function Card({ children, variant = 'default', className = '', onClick }: CardProps) {
  const baseStyles = 'rounded-[16px] p-4 w-full';

  const variantStyles = {
    default: 'bg-[var(--surface-card)] border border-[var(--border-subtle)]',
    tinted: 'bg-[var(--surface-card-tinted)]',
    cream: 'bg-[var(--surface-card-cream)]',
    inverse: 'bg-[var(--surface-inverse)] text-white'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
