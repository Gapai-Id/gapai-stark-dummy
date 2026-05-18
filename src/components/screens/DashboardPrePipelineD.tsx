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

// Step 4: After Interview Prep (F-04), next is Pipeline (D-S5c)
const currentStage = 4;
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
    status: 'completed' as const,
    description: 'Bayar komitmen (refundable)'
  },
  {
    id: 'F-04',
    name: 'Interview Prep',
    label: 'Persiapan Wawancara',
    icon: <Clock size={24} />,
    status: 'completed' as const,
    description: 'Persiapan sebelum wawancara'
  }
];

export default function DashboardPrePipelineD() {

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Semua tahap persiapan selesai! Kamu siap untuk wawancara dan proses selanjutnya." />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="PT Sakura Care Japan"
        />

        {/* Progress indicator */}
        <div className="flex justify-center">
          <ProgressPills current={currentStage} total={totalStages} />
        </div>

        {/* Completion celebration */}
        <Card variant="tinted" className="shadow-md">
          <div className="text-center py-4">
            <div className="text-[48px] mb-3">🎉</div>
            <h3 className="mb-2">Tahap Persiapan Selesai!</h3>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-4">
              Kamu sudah melewati semua tahapan persiapan. Sekarang waktunya wawancara dengan employer!
            </p>
            <StatusPill variant="done" className="text-[13px] px-4 py-1.5">
              4 dari 4 tahap selesai ✓
            </StatusPill>
          </div>
        </Card>

        {/* Next: Interview */}
        <Card variant="default" className="shadow-md">
          <h4 className="mb-3">Jadwal Wawancara</h4>
          <div className="bg-[var(--surface-card-cream)] rounded-[8px] p-3 mb-4">
            <div className="flex items-start gap-3 mb-2">
              <Video size={20} className="text-[var(--text-brand)] mt-0.5" />
              <div className="flex-1">
                <p className="text-[13px] text-[var(--text-muted)] mb-1">Wawancara Online</p>
                <p className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">
                  Senin, 19 Mei 2026
                </p>
                <p className="text-[13px] text-[var(--text-secondary)]">10.00 - 11.00 WIB via Zoom</p>
              </div>
            </div>
            <StatusPill variant="active" className="text-[11px] px-2 py-1">
              Terjadwal
            </StatusPill>
          </div>
          <Button variant="primary" onClick={() => console.log('View interview details')}>
            Lihat Detail Wawancara
          </Button>
        </Card>

        {/* Completed stages overview */}
        <div>
          <h4 className="mb-3 px-1">Tahapan yang Sudah Selesai</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {funnelStages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    index < funnelStages.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <CheckCircle2 size={24} className="text-[var(--brand-green-500)] flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="text-[14px] font-semibold mb-0.5">{stage.label}</h5>
                    <p className="text-[12px] text-[var(--text-muted)]">{stage.description}</p>
                  </div>
                  <StatusPill variant="done" className="text-[11px] px-2 py-1">
                    Selesai
                  </StatusPill>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* What's Next */}
        <Card variant="default">
          <h4 className="mb-2">Setelah Wawancara</h4>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-3">
            Jika wawancara berhasil, kamu akan masuk ke tahap <strong>Pipeline</strong> untuk persiapan keberangkatan:
          </p>
          <ul className="space-y-2 text-[14px] leading-[22px] text-[var(--text-secondary)]">
            <li className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Proses visa & dokumen kerja</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Medical check-up & sertifikat kesehatan</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
              <span>Persiapan keberangkatan & tiket</span>
            </li>
          </ul>
        </Card>

        {/* Support */}
        <Card variant="default">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-3">
              Butuh bantuan persiapan wawancara? 💬
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
