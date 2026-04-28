'use client';

import Link from 'next/link';
import { Calendar, Clock, MapPin, Monitor, Users, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type EventStatus = 'upcoming' | 'registered' | 'attended' | 'missed';
export type EventType = 'online' | 'offline';

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  type: EventType;
  location?: string;
  rsvpCount: number;
  status: EventStatus;
}

interface EventCardProps {
  event: EventItem;
  onRsvp: (id: string) => void;
  onCancel: (id: string) => void;
  justRegistered?: boolean;
}

const statusConfig: Record<EventStatus, { label: string; className: string }> = {
  upcoming: { label: 'Akan datang', className: 'bg-gray-100 text-gray-500' },
  registered: { label: 'Terdaftar', className: 'bg-primary-50 text-primary-700' },
  attended: { label: 'Hadir', className: 'bg-primary-50 text-primary-700' },
  missed: { label: 'Tidak hadir', className: 'bg-gray-100 text-gray-500' },
};

export function EventCard({ event, onRsvp, onCancel, justRegistered }: EventCardProps) {
  const status = statusConfig[event.status];
  const isPast = event.status === 'attended' || event.status === 'missed';

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Color strip for event type */}
      <div className={cn('h-1', event.type === 'online' ? 'bg-blue-500' : 'bg-secondary-500')} />

      <div className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1 min-w-0">
            <Link href={`/dashboard/events/${event.id}`} className="text-sm font-semibold font-poppins text-gray-800 leading-snug hover:text-primary-700 transition-colors block">
              {event.name}
            </Link>
            <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium font-poppins', status.className)}>
              {status.label}
            </span>
          </div>

          {/* Type badge */}
          <span className={cn(
            'shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-medium font-poppins',
            event.type === 'online'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-secondary-50 text-secondary-700'
          )}>
            {event.type === 'online'
              ? <Monitor className="w-3.5 h-3.5" />
              : <MapPin className="w-3.5 h-3.5" />}
            {event.type === 'online' ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          <div className="flex items-center gap-1.5 text-xs text-secondary-600 font-medium font-sans">
            <Calendar className="w-3.5 h-3.5" />
            {event.date}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-secondary-600 font-medium font-sans">
            <Clock className="w-3.5 h-3.5" />
            {event.time}
          </div>
          {event.type === 'offline' && event.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
              <MapPin className="w-3.5 h-3.5" />
              {event.location}
            </div>
          )}
        </div>

        {/* RSVP count */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
          <Users className="w-3.5 h-3.5" />
          {event.rsvpCount} orang terdaftar
        </div>

        {/* CTA — only for upcoming events */}
        {!isPast && (
          <div className="pt-1">
            {event.status === 'upcoming' ? (
              <button
                onClick={() => onRsvp(event.id)}
                className="w-full py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold font-poppins hover:bg-primary-700 transition-colors"
              >
                Daftar
              </button>
            ) : (
              <button
                onClick={() => onCancel(event.id)}
                className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-500 text-sm font-semibold font-poppins hover:bg-gray-50 transition-colors"
              >
                Batal Daftar
              </button>
            )}
          </div>
        )}

        {/* RSVP confirmation — shown immediately after registering */}
        {justRegistered && (
          <div className="flex items-start gap-2.5 bg-primary-50 border border-primary-100 rounded-xl p-3">
            <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold font-poppins text-primary-700">Kamu terdaftar</p>
              <p className="text-xs text-primary-600 font-sans mt-0.5">Pengingat akan dikirim via WhatsApp sebelum acara dimulai</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
