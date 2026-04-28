'use client';

import { cn } from '@/lib/utils';

type Phase = 'Asesmen' | 'Aktivasi' | 'Pencocokan';

export interface Notification {
  id: string;
  phase: Phase;
  message: string;
  timestamp: string;
  read: boolean;
}

const phaseStyle: Record<Phase, string> = {
  Asesmen: 'bg-blue-100 text-blue-700',
  Aktivasi: 'bg-primary-100 text-primary-700',
  Pencocokan: 'bg-secondary-100 text-secondary-700',
};

interface NotificationItemProps {
  notification: Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const { phase, message, timestamp, read } = notification;

  return (
    <div
      className={cn(
        'flex gap-3 px-4 py-4 border-b border-gray-100 last:border-0 transition-colors',
        !read ? 'bg-white' : 'bg-gray-50',
      )}
    >
      {/* Unread indicator */}
      <div className="flex-shrink-0 pt-1.5">
        <div
          className={cn(
            'w-2 h-2 rounded-full mt-0.5',
            !read ? 'bg-secondary-500' : 'bg-transparent',
          )}
        />
      </div>

      <div className="flex-1 space-y-1.5 min-w-0">
        <span
          className={cn(
            'inline-block text-2xs font-medium font-poppins px-2 py-0.5 rounded-full',
            phaseStyle[phase],
          )}
        >
          {phase}
        </span>
        <p
          className={cn(
            'text-sm font-roboto leading-relaxed',
            !read ? 'text-gray-900' : 'text-gray-500',
          )}
        >
          {message}
        </p>
        <p className="text-2xs text-gray-400 font-roboto">{timestamp}</p>
      </div>
    </div>
  );
}
