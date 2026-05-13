'use client'

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';

const visaSteps = [
  {
    id: '1',
    title: 'Pengumpulan dokumen',
    status: 'completed' as const,
    description: 'Paspor, foto, formulir aplikasi'
  },
  {
    id: '2',
    title: 'Pengajuan visa ke kedutaan',
    status: 'completed' as const,
    description: 'Dokumen sudah disubmit ke kedutaan'
  },
  {
    id: '3',
    title: 'Menunggu hasil',
    status: 'active' as const,
    description: 'Proses review oleh pihak kedutaan (7-14 hari kerja)'
  },
  {
    id: '4',
    title: 'Pengambilan paspor',
    status: 'pending' as const,
    description: 'Ambil paspor dengan visa yang sudah disetujui'
  }
];

export default function TrackDetailVisa() {
  const [activeTab, setActiveTab] = useState('beranda');

  const completedSteps = visaSteps.filter(s => s.status === 'completed').length;
  const totalSteps = visaSteps.length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center justify-between px-5">
          <button
            onClick={() => console.log('Go back to P-01')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
          <StatusPill variant="active" className="text-[11px] px-3 py-1">
            Sedang berjalan
          </StatusPill>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-5 py-4 space-y-4">
        {/* Header */}
        <div>
          <h2 className="mb-1">Proses Visa</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Track visa untuk keberangkatan ke Jepang
          </p>
        </div>

        {/* Progress */}
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

        {/* Steps */}
        <Card variant="default">
          <div className="space-y-0 -mx-4">
            {visaSteps.map((step, index) => {
              let icon;
              let statusPill;

              if (step.status === 'completed') {
                icon = <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />;
                statusPill = { text: 'Selesai', variant: 'done' as const };
              } else if (step.status === 'active') {
                icon = <Clock size={24} className="text-[var(--accent-amber-700)]" />;
                statusPill = { text: 'Sedang berjalan', variant: 'waiting' as const };
              } else {
                icon = <Clock size={24} className="text-[var(--neutral-400)]" />;
                statusPill = { text: 'Menunggu', variant: 'locked' as const };
              }

              return (
                <div
                  key={step.id}
                  className={`flex items-start gap-3 px-4 py-4 ${
                    index < visaSteps.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
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

        {/* Help */}
        <Card variant="default">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-3">
              Ada pertanyaan tentang proses visa? 💬
            </p>
            <Button variant="text" onClick={() => console.log('Contact Admin Gapai')}>
              Hubungi Admin Gapai
            </Button>
          </div>
        </Card>
      </main>

      <BottomNav
        activeTab={activeTab}
        variant="4-tab"
        onTabChange={setActiveTab}
      />
    </div>
  );
}
