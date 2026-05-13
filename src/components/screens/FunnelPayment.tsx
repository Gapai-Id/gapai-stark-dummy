'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { ProgressPills } from '@/components/design-system/ProgressPills';
import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react';

const coveredItems = [
  { id: '1', text: 'Proses dokumen' },
  { id: '2', text: 'Biaya visa' },
  { id: '3', text: 'Asuransi perjalanan' }
];

export default function FunnelPayment() {
  const [activeTab, setActiveTab] = useState('beranda');

  const deadlineDate = 'Jumat, 16 Mei 2026 · 23.59 WIB';
  const daysLeft = 2;
  const hoursLeft = 14;

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
          <ProgressPills currentStep={3} totalSteps={4} />
        </div>
      </div>

      <StatusBar name="Sari" />

      <main className="px-5 py-4 space-y-4">
        <div className="text-center mb-2">
          <h3 className="mb-1">Pembayaran Komitmen</h3>
          <p className="text-[13px] text-[var(--text-muted)]">Langkah 3 dari 4</p>
        </div>

        {/* Timer banner */}
        <Card variant="default" className="bg-[var(--status-waiting-bg)] border-[var(--status-waiting-fg)]">
          <div className="flex items-start gap-3">
            <Clock size={24} className="text-[var(--status-waiting-fg)] flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-[var(--status-waiting-fg)] mb-1">Bayar sebelum:</h4>
              <p className="text-[14px] text-[var(--text-primary)] mb-1">{deadlineDate}</p>
              <p className="text-[13px] font-semibold text-[var(--status-waiting-fg)]">
                {daysLeft} hari {hoursLeft} jam lagi
              </p>
            </div>
          </div>
        </Card>

        {/* Payment info card */}
        <Card variant="default" className="shadow-md">
          <div className="text-center mb-4">
            <h4 className="text-[var(--text-muted)] mb-2">Biaya Komitmen</h4>
            <div className="font-bold text-[32px] leading-[40px] text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Rp 2.500.000
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <CheckCircle2 size={16} className="text-[var(--brand-green-500)]" />
              <span className="text-[14px] text-[var(--brand-green-500)] font-medium">
                Refundable jika tidak berangkat
              </span>
            </div>
          </div>
        </Card>

        {/* What's covered */}
        <div>
          <h4 className="mb-3 px-1">Apa yang sudah termasuk</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {coveredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    index < coveredItems.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <CheckCircle2 size={20} className="text-[var(--brand-green-500)]" />
                  <span className="text-[14px] text-[var(--text-primary)]">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Button variant="primary" onClick={() => console.log('Go to payment gateway')}>
            Bayar Sekarang
          </Button>
        </div>
      </main>

      <BottomNav activeTab={activeTab} variant="4-tab" onTabChange={setActiveTab} />
    </div>
  );
}
