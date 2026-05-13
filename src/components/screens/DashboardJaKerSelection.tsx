'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { ChevronRight } from 'lucide-react';

interface JaKerOption {
  id: string;
  destination: string;
  destinationEmoji: string;
  title: string;
  employer: string;
  fitScore: number;
  tagline: string;
}

const jakerOptions: JaKerOption[] = [
  {
    id: '1',
    destination: 'JEPANG',
    destinationEmoji: '🇯🇵',
    title: 'Caregiver Jepang',
    employer: 'PT Sakura Care Japan',
    fitScore: 92,
    tagline: 'Perawat lansia dengan sertifikasi N4'
  },
  {
    id: '2',
    destination: 'KOREA',
    destinationEmoji: '🇰🇷',
    title: 'Factory Worker Korea',
    employer: 'Samsung Electronics',
    fitScore: 85,
    tagline: 'Operator produksi elektronik'
  },
  {
    id: '3',
    destination: 'JEPANG',
    destinationEmoji: '🇯🇵',
    title: 'Hospitality Staff',
    employer: 'Tokyo Hotel Group',
    fitScore: 78,
    tagline: 'Staff hotel & restoran'
  },
  {
    id: '4',
    destination: 'TAIWAN',
    destinationEmoji: '🇹🇼',
    title: 'Manufacturing Taiwan',
    employer: 'TSMC Facilities',
    fitScore: 72,
    tagline: 'Teknisi manufaktur semikonduktor'
  }
];

export default function DashboardJaKerSelection() {
  const [activeTab, setActiveTab] = useState('beranda');

  const getFitColor = (score: number) => {
    if (score >= 85) return 'text-[var(--brand-green-500)]';
    if (score >= 70) return 'text-[var(--accent-amber-700)]';
    return 'text-[var(--text-muted)]';
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      <StatusBar name="Sari" />
      <ContextRow message="Hasil assessmentmu sudah keluar! Pilih jalur yang paling cocok." />

      <main className="px-5 py-4 space-y-4">
        {/* Info Card */}
        <Card variant="tinted">
          <div className="space-y-2">
            <h4 className="text-[var(--text-primary)]">Jalur kerja yang cocok untukmu</h4>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Berdasarkan hasil assessment, kami menemukan {jakerOptions.length} jalur kerja yang sesuai dengan profil dan keahlianmu.
            </p>
          </div>
        </Card>

        {/* JaKer Options List */}
        <div className="space-y-3">
          {jakerOptions.map((jaker) => (
            <Card
              key={jaker.id}
              variant="cream"
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => console.log('Navigate to JaKer detail:', jaker.id)}
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <StatusPill variant="destination" className="mb-2">
                    Tujuan: {jaker.destination} {jaker.destinationEmoji}
                  </StatusPill>

                  <h3 className="mb-1">{jaker.title}</h3>

                  <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-3">
                    {jaker.employer}
                  </p>

                  <p className="text-[13px] leading-[20px] text-[var(--text-muted)]">
                    {jaker.tagline}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="text-right">
                    <div className={`font-bold text-[32px] leading-[36px] ${getFitColor(jaker.fitScore)}`}>
                      {jaker.fitScore}%
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] font-medium">
                      cocok
                    </div>
                  </div>

                  <ChevronRight size={20} className="text-[var(--text-muted)]" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Help Card */}
        <Card variant="default">
          <div className="space-y-3">
            <h4>Butuh bantuan memilih?</h4>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Admin Gapai bisa bantu kamu memahami setiap jalur lebih dalam dan menemukan yang paling sesuai dengan tujuanmu.
            </p>
            <Button variant="text">
              Bicara dengan Admin Gapai
            </Button>
          </div>
        </Card>
      </main>

      <BottomNav
        activeTab={activeTab}
        variant="3-tab"
        onTabChange={setActiveTab}
      />
    </div>
  );
}
