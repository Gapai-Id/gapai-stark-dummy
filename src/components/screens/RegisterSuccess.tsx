'use client'

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Green hero */}
      <div className="bg-[var(--brand-green-700)] px-5 pt-12 pb-10 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5" />

        {/* Success badge */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle2 size={32} className="text-white" />
          </div>
        </div>

        <h2 className="text-white mb-2">Selamat datang, Sari! 🎉</h2>
        <p className="text-[14px] text-white/80 leading-[22px]">
          Akun kamu sudah siap. Perjalanan menuju kerja di luar negeri dimulai dari sini.
        </p>
      </div>

      {/* Content */}
      <main className="flex-1 px-5 py-5 space-y-4">
        <Card variant="tinted">
          <h4 className="mb-3">Langkah selanjutnya</h4>
          <div className="space-y-3">
            {[
              'Cek kondisi kesehatan dasar — hanya butuh 1 menit',
              'Ceritakan latar belakang dan tujuan kerjamu',
              'Dapatkan rekomendasi jalur kerja yang paling cocok',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] font-bold">{i + 1}</span>
                </div>
                <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-3">
          <Button variant="primary" onClick={() => console.log('Go to PA-01 EligibilityGate')}>
            Mulai Pre-Assessment
          </Button>
          <button
            onClick={() => console.log('Go to D-S1 Dashboard')}
            className="w-full text-[14px] text-[var(--text-muted)] text-center py-2"
          >
            Jelajahi dulu → Ke Beranda
          </button>
        </div>
      </main>
    </div>
  );
}
