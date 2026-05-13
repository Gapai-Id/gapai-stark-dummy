'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { StatusPill } from '@/components/design-system/StatusPill';
import { CheckCircle2, Plane, FileCheck, Briefcase } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
}

const departureChecklist: ChecklistItem[] = [
  { id: '1', title: 'Visa sudah terbit', completed: true },
  { id: '2', title: 'Tiket pesawat sudah dipesan', completed: true },
  { id: '3', title: 'Medical check-up selesai', completed: true },
  { id: '4', title: 'Packing barang bawaan', completed: false },
  { id: '5', title: 'Brief akhir dengan Admin Gapai', completed: false }
];

const todayTasks = [
  {
    id: '1',
    icon: '📋',
    badge: 'Hari ini',
    title: 'Briefing pra-keberangkatan',
    time: '14.00 WIB',
    description: 'Online via Zoom - link sudah dikirim ke email'
  },
  {
    id: '2',
    icon: '🎒',
    badge: 'Reminder',
    title: 'Cek barang bawaan',
    time: 'Sebelum besok',
    description: 'Pastikan semua dokumen dan barang penting sudah siap'
  }
];

export default function DashboardDeparture() {
  const [activeTab, setActiveTab] = useState('beranda');

  const daysUntilDeparture = 7;
  const departureDate = 'Senin, 20 Mei 2026';
  const destination = 'Jepang';
  const destinationEmoji = '🇯🇵';

  const completedCount = departureChecklist.filter(item => item.completed).length;
  const totalCount = departureChecklist.length;

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      <StatusBar name="Sari" />
      <ContextRow message="Tinggal hitungan hari! Pastikan semua siap." />

      <main className="px-5 py-4 space-y-4">
        {/* Countdown Hero Card */}
        <Card variant="inverse" className="relative overflow-hidden py-6">
          <div className="relative z-10 text-center">
            <p className="text-[13px] leading-[20px] text-white/75 mb-2">
              Menuju {destination} {destinationEmoji}
            </p>

            <div className="mb-3">
              <span className="font-bold text-[32px] leading-[40px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                D-{daysUntilDeparture}
              </span>
              <span className="text-[20px] leading-[28px] font-semibold text-white ml-2" style={{ fontFamily: 'var(--font-heading)' }}>
                hari lagi
              </span>
            </div>

            <p className="text-[12px] leading-[18px] text-white/65 mb-4">
              Berangkat {departureDate}
            </p>

            <p className="text-[14px] leading-[22px] text-white/85">
              Perjalanan panjangmu hampir dimulai! Admin Gapai bangga dengan progresmu.
            </p>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] rounded-full bg-white opacity-[0.12] pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-white opacity-[0.08] pointer-events-none" />
        </Card>

        {/* Hari ini Section */}
        <div>
          <h4 className="mb-3 px-1">Hari ini</h4>
          <div className="space-y-3">
            {todayTasks.map((task) => (
              <Card key={task.id} variant="tinted">
                <div className="flex items-start gap-3">
                  <div className="text-[32px] leading-none">{task.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <StatusPill variant="waiting" className="text-[10px] px-2">
                        {task.badge}
                      </StatusPill>
                      <span className="text-[11px] text-[var(--text-muted)]">{task.time}</span>
                    </div>
                    <h4 className="mb-1">{task.title}</h4>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                      {task.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Checklist Persiapan */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h4>Checklist Keberangkatan</h4>
            <span className="text-[12px] text-[var(--text-muted)]">
              {completedCount}/{totalCount}
            </span>
          </div>

          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {departureChecklist.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    index < departureChecklist.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      item.completed
                        ? 'bg-[var(--brand-green-500)] border-[var(--brand-green-500)]'
                        : 'border-[var(--neutral-300)]'
                    }`}
                  >
                    {item.completed && (
                      <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                    )}
                  </div>
                  <span
                    className={`font-medium text-[14px] ${
                      item.completed ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Support Card */}
        <Card variant="default">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0">
              <Plane size={24} className="text-[var(--brand-green-500)]" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Butuh bantuan last-minute?</h4>
              <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-3">
                Admin Gapai siap membantu sampai hari keberangkatanmu.
              </p>
              <Button variant="text" className="h-auto p-0 w-auto">
                Hubungi Admin Gapai →
              </Button>
            </div>
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
