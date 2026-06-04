'use client'

import React from 'react';
import { ArrowLeft, Monitor, MapPin, Clock, GraduationCap, Languages, BookOpen } from 'lucide-react';
import { StatusBar } from '@/components/design-system/StatusBar';

interface Training {
  id: string;
  name: string;
  provider: string;
  providerInitial: string;
  format: 'online' | 'offline';
  duration: string;
  price: number;
  thumbnailGradient: string;
  thumbnailIcon: React.ReactNode;
  providerColor: string;
}

const mockTrainings: Training[] = [
  {
    id: '1',
    name: 'Bahasa Jepang Intensif untuk Caregiver',
    provider: 'Lembaga Bahasa International',
    providerInitial: 'LB',
    format: 'online',
    duration: '8 minggu',
    price: 2500000,
    thumbnailGradient: 'from-[var(--brand-green-700)] to-[var(--brand-green-500)]',
    thumbnailIcon: <Languages size={32} className="text-white/80" />,
    providerColor: 'bg-[var(--brand-green-100)] text-[var(--brand-green-700)]',
  },
  {
    id: '2',
    name: 'Persiapan Kaigo Komprehensif',
    provider: 'Pusat Pelatihan Kaigo Indonesia',
    providerInitial: 'PK',
    format: 'offline',
    duration: '12 minggu',
    price: 4200000,
    thumbnailGradient: 'from-[#1e3a5f] to-[#2d5a8e]',
    thumbnailIcon: <GraduationCap size={32} className="text-white/80" />,
    providerColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: '3',
    name: 'Bahasa Jepang N4 Accelerated',
    provider: 'Japan Language Center',
    providerInitial: 'JL',
    format: 'online',
    duration: '6 minggu',
    price: 1800000,
    thumbnailGradient: 'from-[#7c3aed] to-[#a855f7]',
    thumbnailIcon: <BookOpen size={32} className="text-white/80" />,
    providerColor: 'bg-purple-100 text-purple-700',
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function TrainingList() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back to D-S4a')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Pilih Training</h4>
      </div>

      <main className="px-5 py-4 space-y-4 pb-8">
        {/* Context label */}
        <p className="text-[12px] text-[var(--text-secondary)] px-1">
          Training tersedia untuk jalur{' '}
          <span className="font-semibold text-[var(--text-primary)]">Caregiver Jepang</span>
        </p>

        {/* Training cards */}
        {mockTrainings.map((training) => (
          <div
            key={training.id}
            className="bg-white rounded-[16px] border border-[var(--border-subtle)] shadow-sm overflow-hidden cursor-pointer"
            onClick={() => console.log('Navigate to TRV-02', training.id)}
          >
            {/* Thumbnail */}
            <div className={`h-[100px] bg-gradient-to-br ${training.thumbnailGradient} flex items-center justify-center relative overflow-hidden`}>
              {/* Decorative circles */}
              <div className="absolute top-[-20px] right-[-20px] w-[100px] h-[100px] rounded-full bg-white opacity-[0.08]" />
              <div className="absolute bottom-[-30px] left-[-10px] w-[80px] h-[80px] rounded-full bg-white opacity-[0.06]" />
              <div className="relative z-10">
                {training.thumbnailIcon}
              </div>
              {/* Format badge — overlaid on thumbnail */}
              <div className={`absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold backdrop-blur-sm ${
                training.format === 'online'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/20 text-white'
              }`}>
                {training.format === 'online' ? <Monitor size={10} /> : <MapPin size={10} />}
                {training.format === 'online' ? 'Online' : 'Offline'}
              </div>
            </div>

            {/* Card body */}
            <div className="p-4 space-y-3">
              {/* Provider row */}
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${training.providerColor}`}>
                  {training.providerInitial}
                </div>
                <p className="text-[11px] text-[var(--text-tertiary)] truncate">{training.provider}</p>
              </div>

              {/* Training name */}
              <p className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                {training.name}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-1.5 text-[12px] text-[var(--text-secondary)]">
                <Clock size={13} className="text-[var(--neutral-400)] flex-shrink-0" />
                <span>{training.duration}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-[var(--border-subtle)]" />

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-bold text-[var(--brand-green-700)]">
                  {formatPrice(training.price)}
                </p>
                <span className="text-[13px] font-semibold text-[var(--brand-green-600)]">
                  Lihat Detail →
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
