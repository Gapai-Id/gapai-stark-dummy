'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User, CalendarDays } from 'lucide-react';
import { EventCard, EventItem } from './_unit/event-card';

const INITIAL_EVENTS: EventItem[] = [
  {
    id: '1',
    name: 'Orientasi Keberangkatan Japan Caregiver Batch 3',
    date: '3 Mei 2026',
    time: '10.00 – 12.00 WIB',
    type: 'online',
    rsvpCount: 18,
    status: 'registered',
  },
  {
    id: '2',
    name: 'Workshop Budaya Kerja Jepang',
    date: '10 Mei 2026',
    time: '09.00 – 11.00 WIB',
    type: 'offline',
    location: 'Kantor Gapai, Jakarta Selatan',
    rsvpCount: 12,
    status: 'upcoming',
  },
  {
    id: '3',
    name: 'Sesi Tanya Jawab: Visa & Dokumen',
    date: '17 Mei 2026',
    time: '14.00 – 15.00 WIB',
    type: 'online',
    rsvpCount: 24,
    status: 'upcoming',
  },
  {
    id: '4',
    name: 'Webinar Persiapan Mental Kerja di Luar Negeri',
    date: '12 Apr 2026',
    time: '13.00 – 14.30 WIB',
    type: 'online',
    rsvpCount: 31,
    status: 'attended',
  },
  {
    id: '5',
    name: 'Pembekalan Bahasa Jepang Dasar',
    date: '5 Apr 2026',
    time: '09.00 – 11.00 WIB',
    type: 'offline',
    location: 'Kantor Gapai, Jakarta Selatan',
    rsvpCount: 20,
    status: 'missed',
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [justRegistered, setJustRegistered] = useState<string | null>(null);

  const upcomingEvents = events.filter(e => e.status === 'upcoming' || e.status === 'registered');
  const pastEvents = events.filter(e => e.status === 'attended' || e.status === 'missed');

  const handleRsvp = (id: string) => {
    setEvents(prev => prev.map(e => e.id === id
      ? { ...e, status: 'registered' as const, rsvpCount: e.rsvpCount + 1 }
      : e
    ));
    setJustRegistered(id);
    setTimeout(() => setJustRegistered(null), 5000);
  };

  const handleCancel = (id: string) => {
    setEvents(prev => prev.map(e => e.id === id
      ? { ...e, status: 'upcoming' as const, rsvpCount: Math.max(0, e.rsvpCount - 1) }
      : e
    ));
    if (justRegistered === id) setJustRegistered(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">

          {/* Topbar */}
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image
              src="/assets/images/gapai-logo-green.png"
              alt="Gapai"
              width={72}
              height={24}
              className="h-6 w-auto brightness-0 invert"
            />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          {/* Heading */}
          <div className="px-4 pt-4 pb-8 space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60 font-sans">Aktivitas kohortmu</p>
              <h1 className="text-2xl font-bold font-poppins text-white">Event</h1>
            </div>

            {/* Summary card */}
            <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-secondary-500 flex items-center justify-center shrink-0">
                <CalendarDays className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold font-poppins text-sm">
                  {upcomingEvents.length} event akan datang
                </p>
                <p className="text-white/55 text-xs font-sans mt-0.5">
                  {upcomingEvents.filter(e => e.status === 'registered').length} sudah kamu daftarkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-3">

          {/* Upcoming */}
          <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide px-1">
            Akan Datang
          </p>

          {upcomingEvents.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center space-y-1.5">
              <p className="text-sm font-semibold font-poppins text-gray-600">Belum ada event baru</p>
              <p className="text-xs text-gray-400 font-sans">Tim Growth akan menambahkan event baru untuk jalurmu — pantau terus</p>
            </div>
          ) : (
            upcomingEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onRsvp={handleRsvp}
                onCancel={handleCancel}
                justRegistered={justRegistered === event.id}
              />
            ))
          )}

          {/* Past */}
          {pastEvents.length > 0 && (
            <>
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide px-1 pt-2">
                Riwayat
              </p>
              {pastEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRsvp={handleRsvp}
                  onCancel={handleCancel}
                />
              ))}
            </>
          )}

          {pastEvents.length === 0 && (
            <>
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide px-1 pt-2">
                Riwayat
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center space-y-1.5">
                <p className="text-sm font-semibold font-poppins text-gray-600">Riwayat eventmu akan muncul di sini</p>
                <p className="text-xs text-gray-400 font-sans">Event yang kamu ikuti akan tercatat otomatis setelah kamu RSVP dan hadir</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link href="/dashboard" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Beranda</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <User className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
