'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';
import { FileText, ChevronRight, Info, Calendar } from 'lucide-react';

const CONTEXTUAL_EVENTS = [
  {
    id: 'evt-1',
    title: 'Webinar: Mengenal Proses Pre-Assessment Gapai',
    date: 'Rabu, 21 Mei 2026',
    tag: 'Online',
  },
  {
    id: 'evt-2',
    title: 'Tanya Jawab: Jalur Kerja Eropa untuk Pemula',
    date: 'Sabtu, 24 Mei 2026',
    tag: 'Online',
  },
];

const jakerOptions = [
  {
    id: 'japan-caregiver',
    destination: 'Jepang',
    destinationEmoji: '🇯🇵',
    title: 'Caregiver Jepang',
    employer: 'PT Sakura Care Japan',
    tagline: 'Rawat lansia dengan sistem kerja terstruktur'
  },
  {
    id: 'korea-factory',
    destination: 'Korea Selatan',
    destinationEmoji: '🇰🇷',
    title: 'Factory Worker Korea',
    employer: 'PT Seoul Manufacturing Indo',
    tagline: 'Pekerja pabrik dengan benefit kompetitif'
  },
  {
    id: 'japan-hospitality',
    destination: 'Jepang',
    destinationEmoji: '🇯🇵',
    title: 'Hospitality Jepang',
    employer: 'PT Tokyo Hotels Group',
    tagline: 'Bekerja di hotel dan resort Jepang'
  },
  {
    id: 'taiwan-manufacturing',
    destination: 'Taiwan',
    destinationEmoji: '🇹🇼',
    title: 'Manufacturing Taiwan',
    employer: 'PT Taipei Tech Industries',
    tagline: 'Operator mesin di industri elektronik'
  }
];

export default function DashboardPreAssessment() {

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Yuk mulai assessment untuk kenali jalur yang cocok untukmu!" />

      <main className="px-5 py-4 space-y-4">
        {/* Welcome */}
        <div className="text-center py-2">
          <div className="text-[48px] mb-2">🌍</div>
          <h3 className="mb-2">Selamat datang di Gapai, Sari!</h3>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Ayo mulai perjalananmu bekerja di luar negeri. Langkah pertama: kenali jalur yang paling cocok untukmu.
          </p>
        </div>

        {/* Assessment CTA Card */}
        <Card variant="tinted" className="shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Mulai Pre-Assessment</h4>
              <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                Isi assessment untuk tahu jalur kerja mana yang paling sesuai. Butuh waktu sekitar 15 menit.
              </p>
            </div>
          </div>
          <Button variant="primary" onClick={() => console.log('Start Pre-Assessment → F-01')}>
            Mulai Assessment
          </Button>
        </Card>

        {/* Contextual Events */}
        <div>
          <h4 className="mb-3">Event untukmu</h4>
          <div className="space-y-2">
            {CONTEXTUAL_EVENTS.map((evt) => (
              <button
                key={evt.id}
                onClick={() => console.log(`View event: ${evt.id}`)}
                className="w-full text-left bg-white border-[1.5px] border-[var(--border-default)] rounded-[12px] p-3 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <p className="text-[13px] font-medium text-[var(--text-primary)] mb-1">{evt.title}</p>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-[var(--text-muted)]" />
                    <span className="text-[12px] text-[var(--text-muted)]">{evt.date}</span>
                    <span className="text-[11px] text-[var(--text-brand)] bg-[var(--brand-green-50)] px-1.5 py-0.5 rounded-full font-medium">
                      {evt.tag}
                    </span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
              </button>
            ))}
          </div>
        </div>

        {/* Browsable JaKer List */}
        <div>
          <h4 className="mb-3">Jalur Kerja yang Tersedia</h4>
          <div className="space-y-3">
            {jakerOptions.map((jaker) => (
              <Card
                key={jaker.id}
                variant="cream"
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => console.log(`View JaKer detail: ${jaker.id} (browse mode)`)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <StatusPill variant="destination" className="mb-2">
                      {jaker.destinationEmoji} {jaker.destination}
                    </StatusPill>
                    <h4 className="mb-1">{jaker.title}</h4>
                    <p className="text-[12px] text-[var(--text-muted)] mb-2">
                      {jaker.employer}
                    </p>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                      {jaker.tagline}
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-[var(--text-muted)] flex-shrink-0 mt-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <Card variant="default" className="bg-[var(--accent-blue-100)] border-l-4 border-[var(--accent-blue-700)]">
          <div className="flex gap-3">
            <Info size={20} className="text-[var(--accent-blue-700)] flex-shrink-0 mt-0.5" />
            <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
              Lihat dulu jalur-jalur yang tersedia. Setelah assessment, kami kasih rekomendasi yang paling cocok untukmu!
            </p>
          </div>
        </Card>

        {/* Why Assessment Matters */}
        <Card variant="default">
          <div className="mb-4">
            <h4 className="mb-2">Kenapa assessment penting?</h4>
            <ul className="space-y-2 text-[14px] leading-[22px] text-[var(--text-secondary)]">
              <li className="flex gap-2">
                <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                <span>Kami kenali kekuatan & area pengembanganmu</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                <span>Rekomendasi jalur yang paling cocok untukmu</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                <span>Persiapan lebih matang sebelum berangkat</span>
              </li>
            </ul>
          </div>
          <Button variant="text" onClick={() => console.log('Learn more about assessment')}>
            Pelajari lebih lanjut
          </Button>
        </Card>
      </main>
    </div>
  );
}
