'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { ProgressPills } from '@/components/design-system/ProgressPills';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const matchReasons = [
  { id: '1', text: 'Bahasa Jepang N4' },
  { id: '2', text: 'Pengalaman 2 thn' },
  { id: '3', text: 'Usia 25–35' }
];

export default function FunnelAcceptanceGate() {
  const [activeTab, setActiveTab] = useState('beranda');

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      {/* Header with back & progress */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center justify-between px-5">
          <button
            onClick={() => console.log('Go back')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
          <ProgressPills currentStep={1} totalSteps={4} />
        </div>
      </div>

      <StatusBar name="Sari" />

      <main className="px-5 py-4 space-y-4">
        <div className="text-center mb-2">
          <h3 className="mb-1">Tinjauan Tawaran</h3>
          <p className="text-[13px] text-[var(--text-muted)]">Langkah 1 dari 4</p>
        </div>

        {/* Match offer hero card */}
        <Card variant="cream" className="p-5">
          <StatusPill variant="destination" className="mb-3">
            Tujuan: Jepang 🇯🇵
          </StatusPill>

          <h2 className="mb-2">PT Sakura Care Japan</h2>
          <h4 className="text-[var(--text-secondary)] mb-3">Caregiver Jepang</h4>

          <div className="bg-white rounded-[12px] p-3 inline-block">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[24px] text-[var(--brand-green-500)]">92%</span>
              <StatusPill variant="done">cocok dengan profilmu</StatusPill>
            </div>
          </div>
        </Card>

        {/* Match details */}
        <div>
          <h4 className="mb-3 px-1">Kenapa kamu cocok</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {matchReasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    index < matchReasons.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <CheckCircle2 size={20} className="text-[var(--brand-green-500)]" />
                  <span className="text-[14px] text-[var(--text-primary)]">{reason.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <Button variant="primary" onClick={() => console.log('Accept offer → F-02')}>
            Terima Tawaran
          </Button>
          <div className="text-center">
            <Button
              variant="text"
              className="text-[var(--semantic-error-700)]"
              onClick={() => console.log('Open decline modal M-02')}
            >
              Tolak tawaran ini
            </Button>
          </div>
        </div>
      </main>

      <BottomNav activeTab={activeTab} variant="4-tab" onTabChange={setActiveTab} />
    </div>
  );
}
