'use client'

import React from 'react';
import { Bell } from 'lucide-react';

interface StatusBarProps {
  name: string;
  onNotificationClick?: () => void;
}

export function StatusBar({ name, onNotificationClick }: StatusBarProps) {
  return (
    <div className="h-[60px] flex items-center justify-between px-5">
      <h2 className="font-bold text-[20px] leading-[28px]">Halo, {name}</h2>
      <button
        onClick={onNotificationClick}
        className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]"
      >
        <Bell size={24} />
      </button>
    </div>
  );
}
