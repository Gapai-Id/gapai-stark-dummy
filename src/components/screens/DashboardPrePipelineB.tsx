'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { Button } from '@/components/design-system/Button';
import { StatusPill } from '@/components/design-system/StatusPill';
import { ProgressPills } from '@/components/design-system/ProgressPills';
import { CheckCircle2, Circle, Video, CreditCard, FileCheck, Clock } from 'lucide-react';

// Step 2: After Info Session (F-02), next is Payment (F-03)
const currentStage = 2;
const totalStages = 4;

const funnelStages = [
  {
    id: 'F-01',
    name: 'Acceptance Gate',
    label: 'Tinjauan Tawaran',
    icon: <FileCheck size={24} />,
    status: 'completed' as const,
    description: 'Review & terima tawaran kerja'
  },
  {
    id: 'F-02',
    name: 'Info Session',
    label: 'Sesi Informasi',
    icon: <Video size={24} />,
    status: 'completed' as const,
    description: 'Hadiri sesi info dengan employer'
  },
  {
    id: 'F-03',
    name: 'Payment',
    label: 'Pembayaran Komitmen',
    icon: <CreditCard size={24} />,
    status: 'active' as const,
    description: 'Bayar komitmen (refundable)'
  },
  {
    id: 'F-04',
    name: 'Interview Prep',
    label: 'Persiapan Wawancara',
    icon: <Clock size={24} />,
    status: 'locked' as const,
    description: 'Persiapan sebelum wawancara'
  }
];

export default function DashboardPrePipelineB() {

  const currentStageData = funnelStages[currentStage];

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Sesi informasi selesai! Langkah selanjutnya: bayar komitmen untuk lanjut." />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="PT Sakura Care Japan"
        />

        {/* Progress indicator */}
        <div className="flex justify-center">
          <ProgressPills current={currentStage + 1} total={totalStages} />
        </div>

        {/* Current stage CTA */}
        <Card variant="tinted" className="shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0 text-white">
              {currentStageData.icon}
            </div>
            <div className="flex-1">
              <h4 className="mb-1">{currentStageData.label}</h4>
              <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                Bayar Rp 2.500.000 (refundable) untuk konfirmasi komitmenmu
              </p>
            </div>
          </div>
          <Button variant="primary" onClick={() => console.log('Continue to F-03')}>
            Lanjut ke Pembayaran
          </Button>
        </Card>

        {/* Info Session recap */}
        <Card variant="default">
          <h4 className="mb-3">Dari Sesi Informasi</h4>
          <div className="space-y-2 text-[14px] leading-[22px] text-[var(--text-secondary)]">
            <div className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Kontrak kerja 3 tahun dengan gaji ¥180,000 - ¥220,000/bulan</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Akomodasi & asuransi kesehatan ditanggung employer</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Visa proses dibantu oleh Admin Gapai</span>
            </div>
          </div>
        </Card>

        {/* Funnel stages overview */}
        <div>
          <h4 className="mb-3 px-1">Tahapan Persiapan</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {funnelStages.map((stage, index) => {
                let icon;
                let statusPill;

                if (stage.status === 'completed') {
                  icon = <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />;
                  statusPill = { text: 'Selesai', variant: 'done' as const };
                } else if (stage.status === 'active') {
                  icon = <div className="text-[var(--brand-green-500)]">{stage.icon}</div>;
                  statusPill = { text: 'Selanjutnya', variant: 'active' as const };
                } else {
                  icon = <Circle size={24} className="text-[var(--neutral-400)]" />;
                  statusPill = { text: 'Terkunci', variant: 'locked' as const };
                }

                return (
                  <div
                    key={stage.id}
                    className={`flex items-center gap-3 px-4 py-3 ${
                      index < funnelStages.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                    }`}
                  >
                    <div className="flex-shrink-0">{icon}</div>
                    <div className="flex-1">
                      <h5 className="text-[14px] font-semibold mb-0.5">{stage.label}</h5>
                      <p className="text-[12px] text-[var(--text-muted)]">{stage.description}</p>
                    </div>
                    <StatusPill variant={statusPill.variant} className="text-[11px] px-2 py-1">
                      {statusPill.text}
                    </StatusPill>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Payment Info */}
        <Card variant="default">
          <h4 className="mb-2">Tentang pembayaran komitmen</h4>
          <ul className="space-y-2 text-[14px] leading-[22px] text-[var(--text-secondary)]">
            <li className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span><strong>100% refundable</strong> jika kamu tidak jadi berangkat</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Mencakup: proses dokumen, biaya visa, asuransi perjalanan</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Pembayaran aman via bank transfer atau e-wallet</span>
            </li>
          </ul>
        </Card>

        {/* Support */}
        <Card variant="default">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-3">
              Pertanyaan tentang pembayaran? 💬
            </p>
            <Button variant="text" onClick={() => console.log('Contact support')}>
              Hubungi Admin Gapai
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
