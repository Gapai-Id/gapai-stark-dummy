'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { ProgressPills } from '@/components/design-system/ProgressPills';
import { ArrowLeft, Video, Calendar, Clock } from 'lucide-react';

const agendaItems = [
  { id: '1', text: 'Kontrak kerja' },
  { id: '2', text: 'Prosedur visa' },
  { id: '3', text: 'Biaya & refund' },
  { id: '4', text: 'Q&A' }
];

export default function FunnelInfoSession() {
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
          <ProgressPills currentStep={2} totalSteps={4} />
        </div>
      </div>

      <StatusBar name="Sari" />

      <main className="px-5 py-4 space-y-4">
        <div className="text-center mb-2">
          <h3 className="mb-1">Sesi Informasi</h3>
          <p className="text-[13px] text-[var(--text-muted)]">Langkah 2 dari 4</p>
        </div>

        {/* Info session card */}
        <Card variant="tinted">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <h3>Sesi Informasi Wajib</h3>
              <StatusPill variant="waiting">Wajib dihadiri</StatusPill>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[14px] text-[var(--text-primary)]">
                <Calendar size={18} className="text-[var(--brand-green-500)]" />
                <span className="font-medium">Rabu, 14 Mei 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
                <Clock size={18} className="text-[var(--text-muted)]" />
                <span>14.00–16.00 WIB</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
                <Video size={18} className="text-[var(--text-muted)]" />
                <span>Online via Zoom</span>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-[8px] p-3">
            <p className="text-[12px] text-[var(--text-secondary)]">
              📧 Link Zoom sudah dikirim ke email kamu
            </p>
          </div>
        </Card>

        {/* Agenda */}
        <div>
          <h4 className="mb-3 px-1">Apa yang akan dibahas</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {agendaItems.map((item, index) => (
                <ListRow
                  key={item.id}
                  icon={
                    <div className="w-6 h-6 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center text-[var(--brand-green-500)] text-xs font-semibold">
                      {index + 1}
                    </div>
                  }
                  title={item.text}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Button variant="primary" onClick={() => console.log('Register session → confirmation')}>
            Daftar Sesi
          </Button>
        </div>
      </main>

      <BottomNav activeTab={activeTab} variant="4-tab" onTabChange={setActiveTab} />
    </div>
  );
}
