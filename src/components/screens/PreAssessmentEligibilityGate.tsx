'use client'

import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/design-system/Button';
import { Card } from '@/components/design-system/Card';

const CONDITIONS = [
  'Tuberkulosis (TB)',
  'HIV / AIDS',
];

export default function PreAssessmentEligibilityGate() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to D-S1 Dashboard')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 flex flex-col">
        {/* Icon + Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center mx-auto mb-5">
            <ShieldCheck size={32} className="text-[var(--brand-green-600)]" />
          </div>
          <h2 className="mb-2">Cek Kondisi Kesehatan</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Sebelum memulai, kami perlu memastikan kamu memenuhi syarat kesehatan dasar yang berlaku untuk semua jalur kerja Gapai.
          </p>
        </div>

        {/* Conditions list */}
        <Card variant="default" className="mb-8">
          <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-3">
            Apakah kamu memiliki riwayat kondisi berikut?
          </p>
          <div className="space-y-2.5">
            {CONDITIONS.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--neutral-400)] flex-shrink-0" />
                <p className="text-[14px] text-[var(--text-primary)]">{c}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTAs */}
        <div className="mt-auto space-y-3">
          <Button
            variant="primary"
            onClick={() => console.log('Declaration confirmed → PA-03 BasicInfo')}
          >
            Tidak, saya bebas dari kondisi ini
          </Button>
          <button
            onClick={() => console.log('Has condition → PA-02 Blocked')}
            className="w-full py-3 px-4 rounded-[10px] border-[1.5px] border-[var(--border-default)] text-[14px] text-[var(--text-muted)] text-center"
          >
            Ya, saya memiliki kondisi ini
          </button>
        </div>
      </main>
    </div>
  );
}
