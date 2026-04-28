'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { ChevronLeft, Bell, Home, User, Calendar, Clock, MapPin, Monitor, Users, CheckCircle2, Link2, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EventItem } from '../_unit/event-card';

interface DetailEvent extends EventItem {
  description: string;
  agenda?: string[];
  meetingLink?: string;
}

const MOCK_EVENTS: DetailEvent[] = [
  {
    id: '1',
    name: 'Orientasi Keberangkatan Japan Caregiver Batch 3',
    date: '3 Mei 2026',
    time: '10.00 – 12.00 WIB',
    type: 'online',
    rsvpCount: 18,
    status: 'registered',
    description: 'Sesi orientasi wajib bagi seluruh kandidat Japan Caregiver Batch 3. Kamu akan mendapat gambaran lengkap tentang proses keberangkatan, dokumen yang perlu disiapkan, dan apa yang perlu kamu lakukan selama Activation.',
    agenda: [
      'Pembukaan & perkenalan tim Gapai',
      'Overview proses keberangkatan Japan Caregiver',
      'Dokumen wajib & timeline pengumpulan',
      'Sesi tanya jawab',
    ],
    meetingLink: 'https://zoom.us/j/example',
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
    description: 'Workshop interaktif tentang budaya kerja di Jepang — dari etika profesional, cara berkomunikasi dengan atasan, hingga kebiasaan sehari-hari di tempat kerja. Dibawakan oleh alumni Gapai yang sudah bekerja di Jepang selama 3 tahun.',
    agenda: [
      'Nilai-nilai utama budaya kerja Jepang',
      'Komunikasi di tempat kerja: apa yang boleh dan tidak',
      'Kehidupan sehari-hari sebagai pekerja asing',
      'Sharing session dengan alumni',
    ],
  },
  {
    id: '3',
    name: 'Sesi Tanya Jawab: Visa & Dokumen',
    date: '17 Mei 2026',
    time: '14.00 – 15.00 WIB',
    type: 'online',
    rsvpCount: 24,
    status: 'upcoming',
    description: 'Sesi tanya jawab terbuka bersama Tim Compliance Gapai. Ajukan pertanyaan seputar persyaratan visa, dokumen keberangkatan, dan proses verifikasi langsung kepada ahlinya.',
    meetingLink: 'https://zoom.us/j/example2',
  },
  {
    id: '4',
    name: 'Webinar Persiapan Mental Kerja di Luar Negeri',
    date: '12 Apr 2026',
    time: '13.00 – 14.30 WIB',
    type: 'online',
    rsvpCount: 31,
    status: 'attended',
    description: 'Webinar bersama psikolog dan alumni Gapai tentang persiapan mental sebelum bekerja di luar negeri — menghadapi culture shock, homesickness, dan membangun resiliensi di lingkungan baru.',
    meetingLink: 'https://zoom.us/j/example3',
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
    description: 'Workshop bahasa Jepang dasar untuk kebutuhan sehari-hari di tempat kerja — sapaan, instruksi kerja, dan komunikasi dasar dengan rekan dan atasan Jepang.',
  },
];

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const event = MOCK_EVENTS.find(e => e.id === id) ?? MOCK_EVENTS[0];

  const [status, setStatus] = useState(event.status);
  const [rsvpCount, setRsvpCount] = useState(event.rsvpCount);
  const [justRegistered, setJustRegistered] = useState(false);

  const isPast = status === 'attended' || status === 'missed';
  const isRegistered = status === 'registered';

  const handleRsvp = () => {
    setStatus('registered');
    setRsvpCount(c => c + 1);
    setJustRegistered(true);
  };

  const handleCancel = () => {
    setStatus('upcoming');
    setRsvpCount(c => Math.max(0, c - 1));
    setJustRegistered(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard/events" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          <div className="px-4 pt-4 pb-8 space-y-3">
            {/* Type badge */}
            <span className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-medium font-poppins',
              event.type === 'online' ? 'bg-blue-500/20 text-blue-200' : 'bg-secondary-500/20 text-secondary-200'
            )}>
              {event.type === 'online' ? <Monitor className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
              {event.type === 'online' ? 'Online' : 'Offline'}
            </span>

            <h1 className="text-xl font-bold font-poppins text-white leading-snug">{event.name}</h1>

            {/* Meta */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-sm text-secondary-300 font-sans">
                <Calendar className="w-4 h-4 shrink-0" />{event.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-300 font-sans">
                <Clock className="w-4 h-4 shrink-0" />{event.time}
              </div>
              {event.type === 'offline' && event.location && (
                <div className="flex items-center gap-2 text-sm text-white/60 font-sans">
                  <MapPin className="w-4 h-4 shrink-0" />{event.location}
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-white/50 font-sans">
                <Users className="w-4 h-4 shrink-0" />{rsvpCount} orang terdaftar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-4">

          {/* RSVP confirmation */}
          {justRegistered && (
            <div className="flex items-start gap-2.5 bg-primary-50 border border-primary-100 rounded-2xl p-4">
              <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold font-poppins text-primary-700">Kamu terdaftar</p>
                <p className="text-xs text-primary-600 font-sans mt-0.5">Pengingat akan dikirim via WhatsApp sebelum acara dimulai</p>
              </div>
            </div>
          )}

          {/* Meeting link — online only, registered only */}
          {event.type === 'online' && (
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide mb-3">Link Acara</p>
              {isRegistered || isPast ? (
                <a
                  href={event.meetingLink ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                    <Link2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold font-poppins text-blue-700">Buka link acara</p>
                    <p className="text-xs text-blue-500 font-sans truncate">{event.meetingLink}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-poppins text-gray-500">Link tersedia setelah daftar</p>
                    <p className="text-xs text-gray-400 font-sans">Daftar ke event ini untuk mendapatkan akses link</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
            <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide">Tentang Event</p>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">{event.description}</p>
          </div>

          {/* Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide">Agenda</p>
              <div className="space-y-2.5">
                {event.agenda.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold font-poppins text-primary-700">{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-sans leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Sticky CTA ───────────────────────────────────── */}
      {!isPast && (
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-100 px-4 py-3">
          <div className="max-w-lg mx-auto">
            {isRegistered ? (
              <button
                onClick={handleCancel}
                className="w-full py-3.5 rounded-2xl border border-gray-200 text-gray-500 text-sm font-semibold font-poppins hover:bg-gray-50 transition-colors"
              >
                Batal Daftar
              </button>
            ) : (
              <button
                onClick={handleRsvp}
                className="w-full py-3.5 rounded-2xl bg-primary-600 text-white text-sm font-semibold font-poppins hover:bg-primary-700 transition-colors"
              >
                Daftar ke Event Ini
              </button>
            )}
          </div>
        </div>
      )}

      {/* Bottom nav — hidden on mobile when CTA is sticky, shown for past events */}
      {isPast && (
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
      )}
    </div>
  );
}
