'use client'

import React from 'react';
import { ArrowLeft, Monitor, Clock, Calendar, CheckCircle2, Lock } from 'lucide-react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Button } from '@/components/design-system/Button';
import { Languages } from 'lucide-react';

const training = {
  name: 'Bahasa Jepang Intensif untuk Caregiver',
  provider: 'Lembaga Bahasa International',
  providerInitial: 'LB',
  providerInitialColor: 'bg-[var(--brand-green-100)] text-[var(--brand-green-700)]',
  providerDescription: 'Pusat pelatihan bahasa Jepang terpercaya dengan pengalaman 15 tahun, spesialis persiapan tenaga kerja kaigo.',
  description: 'Program intensif yang dirancang khusus untuk caregiver yang akan bekerja di Jepang. Fokus pada percakapan kerja, kosakata medis, dan persiapan ujian JLPT N4.',
  format: 'online',
  duration: '8 minggu',
  schedule: 'Senin–Jumat, 19:00–21:00 WIB',
  startDate: 'Mulai 10 Juni 2026',
  price: 2500000,
  curriculum: [
    'Percakapan dasar dan sopan santun di tempat kerja',
    'Kosakata medis dan perawatan lansia',
    'Membaca dan menulis Hiragana & Katakana',
    'Persiapan ujian JLPT N4',
    'Simulasi situasi kerja sehari-hari di Jepang',
  ],
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function TrainingDetail() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back to TRV-01')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Detail Training</h4>
      </div>

      {/* Thumbnail hero */}
      <div className="h-[140px] bg-gradient-to-br from-[var(--brand-green-700)] to-[var(--brand-green-500)] flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div className="absolute top-[-30px] right-[-30px] w-[140px] h-[140px] rounded-full bg-white opacity-[0.08]" />
        <div className="absolute bottom-[-40px] left-[-20px] w-[120px] h-[120px] rounded-full bg-white opacity-[0.05]" />
        <Languages size={44} className="text-white/80 relative z-10" />
      </div>

      <main className="px-5 py-5 space-y-5 pb-8">
        {/* Provider */}
        <div className="flex items-start gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${training.providerInitialColor}`}>
            {training.providerInitial}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-[var(--text-primary)]">{training.provider}</p>
            <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-[16px]">{training.providerDescription}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-subtle)]" />

        {/* Training name + description */}
        <div className="space-y-2">
          <h3 className="text-[var(--text-primary)]">{training.name}</h3>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{training.description}</p>
        </div>

        {/* Quick info */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white border border-[var(--border-subtle)] rounded-xl p-3 flex items-center gap-2">
            <Monitor size={16} className="text-[var(--brand-green-500)] flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[var(--text-tertiary)]">Format</p>
              <p className="text-[12px] font-semibold text-[var(--text-primary)]">Online</p>
            </div>
          </div>
          <div className="flex-1 bg-white border border-[var(--border-subtle)] rounded-xl p-3 flex items-center gap-2">
            <Clock size={16} className="text-[var(--brand-green-500)] flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[var(--text-tertiary)]">Durasi</p>
              <p className="text-[12px] font-semibold text-[var(--text-primary)]">{training.duration}</p>
            </div>
          </div>
          <div className="flex-1 bg-white border border-[var(--border-subtle)] rounded-xl p-3 flex items-center gap-2">
            <Calendar size={16} className="text-[var(--brand-green-500)] flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[var(--text-tertiary)]">Mulai</p>
              <p className="text-[12px] font-semibold text-[var(--text-primary)]">10 Jun</p>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="space-y-3">
          <h4 className="text-[var(--text-primary)]">Yang akan kamu pelajari</h4>
          <div className="space-y-2.5">
            {training.curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[var(--brand-green-500)] flex-shrink-0 mt-0.5" />
                <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white border border-[var(--border-subtle)] rounded-xl p-4 space-y-1">
          <p className="text-[12px] font-semibold text-[var(--text-primary)]">Jadwal Pelaksanaan</p>
          <p className="text-[13px] text-[var(--text-secondary)]">{training.schedule}</p>
          <p className="text-[12px] text-[var(--brand-green-600)] font-medium">{training.startDate}</p>
        </div>

        {/* Delivery info — locked */}
        <div className="flex items-center gap-2.5 bg-[var(--surface-card-tinted)] rounded-xl p-3.5">
          <Lock size={14} className="text-[var(--neutral-400)] flex-shrink-0" />
          <p className="text-[12px] leading-[18px] text-[var(--text-secondary)]">
            Detail lokasi/link pelaksanaan akan ditampilkan setelah pembayaran selesai.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-white border border-[var(--border-subtle)] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] text-[var(--text-secondary)]">Biaya training</p>
            <p className="text-[20px] font-bold text-[var(--brand-green-700)]">{formatPrice(training.price)}</p>
          </div>
          <Button
            variant="primary"
            className="w-full"
            onClick={() => console.log('Navigate to TRV-03')}
          >
            Daftar Sekarang
          </Button>
        </div>
      </main>
    </div>
  );
}
