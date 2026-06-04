'use client'

import React from 'react';
import { ArrowLeft, CheckCircle2, Monitor, Clock, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { StatusPill } from '@/components/design-system/StatusPill';

const enrollment = {
  training: {
    name: 'Bahasa Jepang Intensif untuk Caregiver',
    provider: 'Lembaga Bahasa International',
    providerInitial: 'LB',
    format: 'Online',
    duration: '8 minggu',
    schedule: 'Senin–Jumat, 19:00–21:00 WIB',
    startDate: '10 Juni 2026',
    price: 2500000,
    deliveryLink: 'zoom.us/j/89234567',
    deliveryId: 'ID: 892 3456 7',
  },
  paidAt: '4 Juni 2026, 09.14 WIB',
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function TrainingStatus() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back to D-S4b')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Status Training</h4>
      </div>

      <main className="px-5 py-5 space-y-4 pb-8">

        {/* Payment success banner */}
        <div className="bg-[var(--brand-green-700)] rounded-xl p-4 flex items-start gap-3 relative overflow-hidden">
          <div className="absolute top-[-20px] right-[-20px] w-[100px] h-[100px] rounded-full bg-white opacity-[0.08]" />
          <CheckCircle2 size={22} className="text-white flex-shrink-0 mt-0.5 relative z-10" />
          <div className="relative z-10">
            <p className="text-[14px] font-semibold text-white leading-snug">Pendaftaranmu berhasil!</p>
            <p className="text-[12px] text-white/70 mt-0.5">Pembayaran diterima · {enrollment.paidAt}</p>
          </div>
        </div>

        {/* Training info */}
        <div className="bg-white border border-[var(--border-subtle)] rounded-xl p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-5 h-5 rounded-full bg-[var(--brand-green-100)] flex items-center justify-center text-[9px] font-bold text-[var(--brand-green-700)] flex-shrink-0">
                  {enrollment.training.providerInitial}
                </div>
                <p className="text-[11px] text-[var(--text-tertiary)]">{enrollment.training.provider}</p>
              </div>
              <p className="text-[14px] font-semibold text-[var(--text-primary)] leading-snug">
                {enrollment.training.name}
              </p>
            </div>
            <StatusPill variant="active">Terdaftar</StatusPill>
          </div>

          <div className="flex gap-3 text-[12px] text-[var(--text-secondary)]">
            <div className="flex items-center gap-1">
              <Monitor size={12} className="text-[var(--neutral-400)]" />
              <span>{enrollment.training.format}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} className="text-[var(--neutral-400)]" />
              <span>{enrollment.training.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={12} className="text-[var(--neutral-400)]" />
              <span>Mulai {enrollment.training.startDate}</span>
            </div>
          </div>

          <div className="border-t border-[var(--border-subtle)]" />

          <div className="flex items-center justify-between text-[12px]">
            <span className="text-[var(--text-secondary)]">Total dibayar</span>
            <span className="font-semibold text-[var(--text-primary)]">{formatPrice(enrollment.training.price)}</span>
          </div>
        </div>

        {/* Delivery info — unlocked */}
        <div className="space-y-2">
          <p className="text-[12px] font-semibold text-[var(--text-primary)] px-1">Detail Pelaksanaan</p>
          <div className="bg-white border border-[var(--border-subtle)] rounded-xl p-4 space-y-3">
            <div className="space-y-1.5">
              <p className="text-[12px] text-[var(--text-secondary)]">{enrollment.training.schedule}</p>
            </div>
            <div className="border-t border-[var(--border-subtle)]" />
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => console.log('Open Zoom link')}
            >
              <div>
                <p className="text-[13px] font-semibold text-[var(--brand-green-600)]">
                  {enrollment.training.deliveryLink}
                </p>
                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">{enrollment.training.deliveryId}</p>
              </div>
              <ExternalLink size={16} className="text-[var(--brand-green-500)] flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* What's next */}
        <div className="bg-[var(--surface-card-tinted)] rounded-xl p-4 space-y-3">
          <p className="text-[12px] font-semibold text-[var(--text-primary)]">Langkah selanjutnya</p>
          <div className="space-y-2.5">
            {[
              'Ikuti training sesuai jadwal',
              'Tim Gapai akan mencatat penyelesaianmu',
              'Setelah selesai, kamu bisa retake assessment',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[8px] font-bold text-white">{i + 1}</span>
                </div>
                <p className="text-[12px] leading-[18px] text-[var(--text-secondary)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to dashboard */}
        <button
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-xl"
          onClick={() => console.log('Go back to D-S4b')}
        >
          <span className="text-[13px] font-medium text-[var(--text-primary)]">Kembali ke beranda</span>
          <ChevronRight size={16} className="text-[var(--neutral-400)]" />
        </button>

      </main>
    </div>
  );
}
