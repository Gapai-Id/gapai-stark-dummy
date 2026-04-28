'use client';

import { Calendar, FileText, Users, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

interface QuickAccessItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  iconBg: string;
  iconColor: string;
}

const items: QuickAccessItem[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    label: 'Belajar',
    href: '/dashboard/learning',
    iconBg: 'bg-blue-500',
    iconColor: 'text-white',
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    label: 'Acara',
    href: '/dashboard/events',
    iconBg: 'bg-secondary-500',
    iconColor: 'text-white',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: 'Dokumen',
    href: '/dashboard/documents',
    iconBg: 'bg-primary-500',
    iconColor: 'text-white',
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: 'Komunitas',
    href: '/dashboard/community?from=quickaccess',
    iconBg: 'bg-neutral-700',
    iconColor: 'text-white',
  },
  {
    icon: <Star className="w-5 h-5" />,
    label: 'Alumni',
    href: '/dashboard/alumni',
    iconBg: 'bg-amber-500',
    iconColor: 'text-white',
  },
];

export function QuickAccess() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold font-poppins text-gray-700">Akses cepat</h3>
      <div className="grid grid-cols-5 gap-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-sm`}>
              <span className={item.iconColor}>{item.icon}</span>
            </div>
            <span className="text-2xs font-poppins font-medium text-gray-600 text-center">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
