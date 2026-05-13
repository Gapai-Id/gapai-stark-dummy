'use client'

import React from 'react';
import { StatusPill } from './StatusPill';

interface JaKerIdentityCardProps {
  destination: string;
  destinationEmoji: string;
  title: string;
  tagline: string;
  className?: string;
}

export function JaKerIdentityCard({
  destination,
  destinationEmoji,
  title,
  tagline,
  className = ''
}: JaKerIdentityCardProps) {
  return (
    <div className={`bg-[var(--surface-card-cream)] rounded-[16px] p-4 relative overflow-hidden ${className}`}>
      <div className="flex gap-4">
        <div className="flex-1">
          <StatusPill variant="destination" className="mb-2">
            Tujuan: {destination} {destinationEmoji}
          </StatusPill>
          <h3 className="mb-1">{title}</h3>
          <p className="text-[13px] leading-[20px] text-[var(--text-muted)]">{tagline}</p>
        </div>
      </div>
    </div>
  );
}
