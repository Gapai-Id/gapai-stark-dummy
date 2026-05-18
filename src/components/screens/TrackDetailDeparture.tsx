'use client'

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock, Lock } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';
import { StatusBar } from '@/components/design-system/StatusBar';

const departureSteps = [
  {
    id: '1',
    title: 'Konfirmasi tiket pesawat',
    status: 'active' as 'active' | 'locked' | 'completed',
    description: 'Pastikan detail penerbangan: Jakarta → Tokyo, 25 Juni 2026'
  },
  {
    id: '2',
    title: 'Alamat di Jepang',
    status: 'locked' as 'active' | 'locked' | 'completed',
    description: 'Konfirmasi alamat tempat tinggal di Tokyo'
  },
  {
    id: '3',
    title: 'Packing checklist',
    status: 'locked' as 'active' | 'locked' | 'completed',
    description: 'Persiapan barang bawaan dan dokumen penting'
  },
  {
    id: '4',
    title: 'Orientasi pra-keberangkatan',
    status: 'locked' as 'active' | 'locked' | 'completed',
    description: 'Sesi final briefing sebelum berangkat'
  }
];

export default function TrackDetailDeparture() {

  const completedSteps = departureSteps.filter(s => s.status === 'completed').length;
  const totalSteps = departureSteps.length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center justify-between px-5 bg-white border-b border-[var(--border-subtle)]">
        <div className="flex items-center">
          <button
            onClick={() => console.log('Go back to P-01')}
            className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
          >
            <ArrowLeft size={20} />
          </button>
          <h4>Persiapan Keberangkatan</h4>
        </div>
        <StatusPill variant="waiting" className="text-[11px] px-3 py-1">
          Belum dimulai
        </StatusPill>
      </div>

      <main className="px-5 py-4 space-y-4">
        <div>
          <h2 className="mb-1">Persiapan Keberangkatan</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Langkah-langkah sebelum berangkat ke Jepang
          </p>
        </div>

        <Card variant="tinted">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h4>Progress</h4>
              <span className="text-[13px] font-semibold text-[var(--brand-green-500)]">
                {progressPercentage}%
              </span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--brand-green-500)] rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)]">
            {completedSteps} dari {totalSteps} langkah selesai
          </p>
        </Card>

        <Card variant="default">
          <div className="space-y-0 -mx-4">
            {departureSteps.map((step, index) => {
              let icon;
              let statusPill;

              if (step.status === 'completed') {
                icon = <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />;
                statusPill = { text: 'Selesai', variant: 'done' as const };
              } else if (step.status === 'active') {
                icon = <Clock size={24} className="text-[var(--accent-amber-700)]" />;
                statusPill = { text: 'Sedang berjalan', variant: 'waiting' as const };
              } else {
                icon = <Lock size={24} className="text-[var(--neutral-400)]" />;
                statusPill = { text: 'Terkunci', variant: 'locked' as const };
              }

              return (
                <div
                  key={step.id}
                  className={`flex items-start gap-3 px-4 py-4 ${
                    index < departureSteps.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <div className="flex-shrink-0 mt-0.5">{icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[12px] font-semibold text-[var(--text-muted)]">
                        {step.id}.
                      </span>
                      <h5 className="text-[15px] font-semibold">{step.title}</h5>
                    </div>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-2">
                      {step.description}
                    </p>
                    <StatusPill variant={statusPill.variant} className="text-[11px] px-2 py-1">
                      {statusPill.text}
                    </StatusPill>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card variant="default">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-3">
              Ada pertanyaan tentang keberangkatan? 💬
            </p>
            <Button variant="text" onClick={() => console.log('Contact Admin Gapai')}>
              Hubungi Admin Gapai
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
