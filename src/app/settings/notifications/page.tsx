'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const EVENT_FREQUENCIES = ['1 hari sebelumnya', '3 jam sebelumnya', 'Keduanya'] as const;
type EventFrequency = typeof EVENT_FREQUENCIES[number];

interface ToggleRowProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  locked?: boolean;
  lockedReason?: string;
}

function ToggleRow({ label, description, checked, onChange, locked, lockedReason }: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div className="flex-1 min-w-0 space-y-0.5">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-semibold font-poppins text-gray-800">{label}</p>
          {locked && <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
        </div>
        {description && (
          <p className="text-xs text-gray-400 font-sans leading-relaxed">{description}</p>
        )}
        {locked && lockedReason && (
          <p className="text-xs text-primary-600 font-sans">{lockedReason}</p>
        )}
      </div>
      <button
        onClick={() => !locked && onChange(!checked)}
        disabled={locked}
        className={cn(
          'relative w-11 h-6 rounded-full transition-colors shrink-0 mt-0.5',
          checked ? 'bg-primary-600' : 'bg-gray-200',
          locked && 'opacity-60 cursor-not-allowed'
        )}
        aria-checked={checked}
        role="switch"
      >
        <span className={cn(
          'absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1'
        )} />
      </button>
    </div>
  );
}

export default function NotificationPreferencesPage() {
  const [docExpiryOn] = useState(true);
  const [eventReminderFreq, setEventReminderFreq] = useState<EventFrequency>('1 hari sebelumnya');
  const [learningContentOn, setLearningContentOn] = useState(true);
  const [communityOn, setCommunityOn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/profile" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <div className="w-8" />
          </div>
          <div className="px-4 pt-4 pb-8 space-y-1">
            <p className="text-sm text-white/60 font-sans">Pengaturan</p>
            <h1 className="text-2xl font-bold font-poppins text-white">Notifikasi WhatsApp</h1>
            <p className="text-sm text-white/60 font-sans">Atur notifikasi yang kamu terima.</p>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-4">

          {/* Umum */}
          <div className="bg-white rounded-2xl shadow-sm px-4">
            <p className="pt-4 pb-2 text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">Umum</p>
            <ToggleRow
              label="Pengingat Dokumen"
              description="Notifikasi jika dokumen mendekati tanggal kedaluwarsa."
              checked={docExpiryOn}
              onChange={() => {}}
              locked
              lockedReason="Notifikasi ini tidak bisa dinonaktifkan demi kelancaran prosesmu."
            />
          </div>

          {/* Activation */}
          <div className="bg-white rounded-2xl shadow-sm px-4">
            <p className="pt-4 pb-2 text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">Activation</p>

            {/* Event Reminder — frequency only, no on/off */}
            <div className="py-4 space-y-3 border-b border-gray-50">
              <div className="space-y-0.5">
                <p className="text-sm font-semibold font-poppins text-gray-800">Pengingat Acara</p>
                <p className="text-xs text-gray-400 font-sans">Dikirim sebelum acara yang kamu daftarkan dimulai.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {EVENT_FREQUENCIES.map(freq => (
                  <button
                    key={freq}
                    onClick={() => setEventReminderFreq(freq)}
                    className={cn(
                      'px-3 py-1.5 rounded-xl text-xs font-poppins font-medium transition-all active:scale-95',
                      eventReminderFreq === freq
                        ? 'bg-primary-700 text-white'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    )}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            <ToggleRow
              label="Konten Belajar Baru"
              description="Notifikasi ketika ada konten baru di Learning Content."
              checked={learningContentOn}
              onChange={setLearningContentOn}
            />

            <div className="border-t border-gray-50">
              <ToggleRow
                label="Aktivitas Komunitas"
                description="Notifikasi ketika ada komentar baru di postinganmu."
                checked={communityOn}
                onChange={setCommunityOn}
              />
            </div>
          </div>

          <p className="text-xs text-gray-400 font-sans text-center px-4 leading-relaxed">
            Perubahan disimpan otomatis. Kamu bisa mengubah preferensi ini kapan saja.
          </p>
        </div>
      </div>

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link href="/dashboard" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Beranda</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-primary-600">
            <User className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-2xs font-semibold font-poppins">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
