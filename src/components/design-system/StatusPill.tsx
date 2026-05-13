'use client'

import React from 'react';

interface StatusPillProps {
  children: React.ReactNode;
  variant: 'done' | 'active' | 'waiting' | 'locked' | 'error' | 'info' | 'destination';
  className?: string;
}

export function StatusPill({ children, variant, className = '' }: StatusPillProps) {
  const baseStyles = 'inline-flex items-center px-[10px] py-[3px] rounded-full font-medium text-[11px]';

  const variantStyles = {
    done: 'bg-[var(--status-done-bg)] text-[var(--status-done-fg)]',
    active: 'bg-[var(--status-active-bg)] text-[var(--status-active-fg)]',
    waiting: 'bg-[var(--status-waiting-bg)] text-[var(--status-waiting-fg)]',
    locked: 'bg-[var(--status-locked-bg)] text-[var(--status-locked-fg)]',
    error: 'bg-[var(--status-error-bg)] text-[var(--status-error-fg)]',
    info: 'bg-[var(--status-info-bg)] text-[var(--status-info-fg)]',
    destination: 'bg-[var(--accent-amber-100)] text-[var(--accent-amber-700)]'
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
