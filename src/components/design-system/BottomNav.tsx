'use client'

import React from 'react';
import { Home, FileText, User, Activity } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: 'home' | 'activity' | 'file-text' | 'user';
}

interface BottomNavProps {
  activeTab: string;
  variant: '3-tab' | '4-tab';
  onTabChange?: (tabId: string) => void;
}

const iconMap = {
  'home': Home,
  'activity': Activity,
  'file-text': FileText,
  'user': User
};

const navConfigs = {
  '3-tab': [
    { id: 'beranda', label: 'Beranda', icon: 'home' as const },
    { id: 'dokumen', label: 'Dokumen', icon: 'file-text' as const },
    { id: 'profil', label: 'Profil', icon: 'user' as const }
  ],
  '4-tab': [
    { id: 'beranda', label: 'Beranda', icon: 'home' as const },
    { id: 'aktivitas', label: 'Aktivitas', icon: 'activity' as const },
    { id: 'dokumen', label: 'Dokumen', icon: 'file-text' as const },
    { id: 'profil', label: 'Profil', icon: 'user' as const }
  ]
};

export function BottomNav({ activeTab, variant, onTabChange }: BottomNavProps) {
  const navItems = navConfigs[variant];

  return (
    <nav className="fixed bottom-[36px] left-0 right-0 bg-white border-t border-[var(--border-subtle)] z-40">
      <div className="h-[70px] flex items-center justify-around max-w-[375px] mx-auto">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className="flex flex-col items-center justify-center gap-0.5 flex-1"
            >
              <Icon
                size={24}
                strokeWidth={2}
                className={isActive ? 'text-[var(--text-brand)]' : 'text-[var(--text-muted)]'}
              />
              <span
                className={`font-medium text-[11px] ${
                  isActive ? 'text-[var(--text-brand)]' : 'text-[var(--text-muted)]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
