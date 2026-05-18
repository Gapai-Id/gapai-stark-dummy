'use client'

import React from 'react';
import Image from 'next/image';
import { UserCircle, Bell } from 'lucide-react';

interface StatusBarProps {
  name?: string;
  onAvatarClick?: () => void;
  onNotificationClick?: () => void;
}

export function StatusBar({ onAvatarClick, onNotificationClick }: StatusBarProps) {
  return (
    <div className="h-[60px] flex items-center justify-between px-5 bg-white border-b border-[var(--border-subtle)]">
      <Image
        src="/assets/images/gapai-brand.svg"
        alt="Gapai"
        width={80}
        height={33}
        className="object-contain"
      />
      <div className="flex items-center gap-3">
        <button
          onClick={onAvatarClick}
          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <UserCircle size={24} />
        </button>
        <button
          onClick={onNotificationClick}
          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <Bell size={22} />
        </button>
      </div>
    </div>
  );
}
