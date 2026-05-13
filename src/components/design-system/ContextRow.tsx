'use client'

import React from 'react';

interface ContextRowProps {
  message: string;
  className?: string;
}

export function ContextRow({ message, className = '' }: ContextRowProps) {
  return (
    <div className={`h-[56px] flex items-center px-5 bg-[var(--surface-card-tinted)] ${className}`}>
      <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
        {message}
      </p>
    </div>
  );
}
