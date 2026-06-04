'use client'

import React from 'react';
import { ArrowLeft, Languages, Monitor, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Button } from '@/components/design-system/Button';

const order = {
  training: {
    name: 'Bahasa Jepang Intensif untuk Caregiver',
    provider: 'Lembaga Bahasa International',
    providerInitial: 'LB',
    format: 'Online',
    duration: '8 minggu',
    price: 2500000,
    thumbnailGradient: 'from-[var(--brand-green-700)] to-[var(--brand-green-500)]',
  },
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function TrainingEnrollSummary() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back to TRV-02')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Ringkasan Pesanan</h4>
      </div>

      <main className="px-5 py-5 space-y-4 pb-8">

        {/* Order card */}
        <div className="bg-white border border-[var(--border-subtle)] rounded-xl overflow-hidden">
          {/* Mini thumbnail */}
          <div className={`h-[72px] bg-gradient-to-br ${order.training.thumbnailGradient} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute top-[-15px] right-[-15px] w-[80px] h-[80px] rounded-full bg-white opacity-[0.08]" />
            <Languages size={28} className="text-white/80 relative z-10" />
          </div>

          {/* Order detail */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[var(--brand-green-100)] flex items-center justify-center text-[9px] font-bold text-[var(--brand-green-700)] flex-shrink-0">
                {order.training.providerInitial}
              </div>
              <p className="text-[11px] text-[var(--text-tertiary)]">{order.training.provider}</p>
            </div>

            <p className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
              {order.training.name}
            </p>

            <div className="flex gap-3 text-[12px] text-[var(--text-secondary)]">
              <div className="flex items-center gap-1">
                <Monitor size={12} className="text-[var(--neutral-400)]" />
                <span>{order.training.format}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} className="text-[var(--neutral-400)]" />
                <span>{order.training.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price breakdown */}
        <div className="bg-white border border-[var(--border-subtle)] rounded-xl p-4 space-y-3">
          <p className="text-[13px] font-semibold text-[var(--text-primary)]">Rincian pembayaran</p>

          <div className="flex items-center justify-between text-[13px]">
            <span className="text-[var(--text-secondary)]">Biaya training</span>
            <span className="text-[var(--text-primary)]">{formatPrice(order.training.price)}</span>
          </div>

          <div className="border-t border-[var(--border-subtle)]" />

          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[var(--text-primary)]">Total pembayaran</span>
            <span className="text-[18px] font-bold text-[var(--brand-green-700)]">{formatPrice(order.training.price)}</span>
          </div>
        </div>

        {/* What happens next */}
        <div className="bg-[var(--surface-card-tinted)] rounded-xl p-4 space-y-2.5">
          <p className="text-[12px] font-semibold text-[var(--text-primary)]">Setelah pembayaran berhasil</p>
          {[
            'Detail lokasi/link training akan terbuka',
            'Tim Gapai akan mencatat pendaftaranmu',
            'Kamu bisa mulai mempersiapkan diri',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[8px] font-bold text-white">{i + 1}</span>
              </div>
              <p className="text-[12px] leading-[18px] text-[var(--text-secondary)]">{item}</p>
            </div>
          ))}
        </div>

        {/* Secure payment note */}
        <div className="flex items-center gap-2 px-1">
          <ShieldCheck size={14} className="text-[var(--brand-green-500)] flex-shrink-0" />
          <p className="text-[11px] text-[var(--text-secondary)]">
            Pembayaran diproses secara aman oleh Xendit
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-2 pt-1">
          <Button
            variant="primary"
            className="w-full"
            onClick={() => console.log('Redirect to Xendit checkout')}
          >
            Lanjut ke Pembayaran
          </Button>
          <p className="text-center text-[11px] text-[var(--text-tertiary)]">
            Kamu akan diarahkan ke halaman pembayaran Xendit
          </p>
        </div>

      </main>
    </div>
  );
}
