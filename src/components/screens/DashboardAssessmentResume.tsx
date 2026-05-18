'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { StatusPill } from '@/components/design-system/StatusPill';
import { CheckCircle2, Circle, PlayCircle } from 'lucide-react';

const assessmentSections = [
  {
    id: '1',
    title: 'Profil & Latar Belakang',
    status: 'completed' as const,
    progress: 100
  },
  {
    id: '2',
    title: 'Keahlian & Pengalaman',
    status: 'completed' as const,
    progress: 100
  },
  {
    id: '3',
    title: 'Bahasa & Komunikasi',
    status: 'active' as const,
    progress: 60
  },
  {
    id: '4',
    title: 'Preferensi & Ekspektasi',
    status: 'locked' as const,
    progress: 0
  }
];

export default function DashboardAssessmentResume() {

  const completedSections = assessmentSections.filter(s => s.status === 'completed').length;
  const totalSections = assessmentSections.length;
  const overallProgress = Math.round((completedSections / totalSections) * 100 + 15); // +15 for partial section

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Kamu sudah hampir selesai! Tinggal 2 bagian lagi." />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        {/* Progress Card */}
        <Card variant="tinted">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4>Progress Assessment</h4>
              <span className="text-[13px] font-semibold text-[var(--brand-green-500)]">
                {overallProgress}%
              </span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--brand-green-500)] rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-[12px] text-[var(--text-muted)] mt-2">
              {completedSections} dari {totalSections} bagian selesai
            </p>
          </div>

          <Button variant="primary">
            Lanjutkan Assessment
          </Button>
        </Card>

        {/* Last saved info */}
        <div className="flex items-center gap-2 px-1">
          <span className="text-[12px] text-[var(--text-muted)]">
            Terakhir disimpan: 2 jam lalu
          </span>
        </div>

        {/* Assessment Sections */}
        <div>
          <h4 className="mb-3 px-1">Bagian Assessment</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {assessmentSections.map((section, index) => {
                let icon;
                let statusPill;

                if (section.status === 'completed') {
                  icon = <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />;
                  statusPill = { text: 'Selesai', variant: 'done' as const };
                } else if (section.status === 'active') {
                  icon = <PlayCircle size={24} className="text-[var(--brand-green-500)]" />;
                  statusPill = { text: 'Sedang berjalan', variant: 'active' as const };
                } else {
                  icon = <Circle size={24} className="text-[var(--neutral-400)]" />;
                  statusPill = { text: 'Belum dimulai', variant: 'locked' as const };
                }

                return (
                  <div key={section.id}>
                    <ListRow
                      icon={icon}
                      title={section.title}
                      statusPill={statusPill}
                      showChevron={section.status !== 'locked'}
                      onClick={section.status !== 'locked' ? () => console.log('Open section:', section.id) : undefined}
                    />
                    {section.status === 'active' && section.progress > 0 && (
                      <div className="px-5 pb-3 border-b border-[var(--border-subtle)]">
                        <div className="w-full h-1 bg-[var(--neutral-100)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[var(--brand-green-500)] rounded-full"
                            style={{ width: `${section.progress}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] mt-1">
                          {section.progress}% selesai
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Motivational Card */}
        <Card variant="default">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Kamu sudah hebat sejauh ini! 💪 Selesaikan assessment agar kami bisa persiapkan langkah selanjutnya untukmu.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
