'use client'

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StatusPill } from './StatusPill';

interface ListRowProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  statusPill?: { text: string; variant: 'done' | 'active' | 'waiting' | 'locked' | 'error' | 'info' };
  showChevron?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ListRow({
  icon,
  title,
  subtitle,
  statusPill,
  showChevron = false,
  onClick,
  className = ''
}: ListRowProps) {
  const height = subtitle ? 'min-h-[80px]' : 'h-[64px]';

  return (
    <div
      className={`${height} flex items-center gap-3 px-5 py-4 border-b border-[var(--border-subtle)] ${
        onClick ? 'cursor-pointer hover:bg-[var(--surface-card-tinted)]' : ''
      } ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {icon}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="font-medium text-[14px] leading-[20px]">{title}</div>
        {subtitle && (
          <div className="text-[13px] leading-[20px] text-[var(--text-muted)] mt-0.5">
            {subtitle}
          </div>
        )}
      </div>

      {statusPill && (
        <StatusPill variant={statusPill.variant}>
          {statusPill.text}
        </StatusPill>
      )}

      {showChevron && (
        <ChevronRight size={20} className="text-[var(--text-muted)] flex-shrink-0" />
      )}
    </div>
  );
}
