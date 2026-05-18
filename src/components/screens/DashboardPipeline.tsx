'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Briefcase, Calendar, FileCheck, Users, ChevronRight } from 'lucide-react';

const pipelineItems = [
  {
    id: '1',
    employer: 'Sakura Care Tokyo',
    location: 'Tokyo, Jepang',
    status: 'Interview dijadwalkan',
    statusVariant: 'active' as const,
    date: '15 Mei 2026',
    stage: 'Interview'
  },
  {
    id: '2',
    employer: 'Osaka Senior Living',
    location: 'Osaka, Jepang',
    status: 'Dokumen review',
    statusVariant: 'waiting' as const,
    date: '20 Mei 2026',
    stage: 'Document Review'
  },
  {
    id: '3',
    employer: 'Kyoto Healthcare Group',
    location: 'Kyoto, Jepang',
    status: 'Profil dikirim',
    statusVariant: 'info' as const,
    date: '25 Mei 2026',
    stage: 'Profile Submission'
  }
];

export default function DashboardPipeline() {

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="3 peluang kerja sedang berjalan. Tim akan dampingi setiap prosesnya!" />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        {/* Pipeline Overview */}
        <Card variant="tinted">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4>Pipeline Active</h4>
              <StatusPill variant="active" className="text-[13px] px-3 py-1">
                {pipelineItems.length} peluang
              </StatusPill>
            </div>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Profilmu sedang diproses oleh beberapa employer. Admin Gapai akan bantu koordinasi & persiapan interview.
            </p>
          </div>
          <Button variant="primary" onClick={() => console.log('View P-01 Pipeline Detail')}>
            Lihat Semua Pipeline
          </Button>
        </Card>

        {/* Today's Priority */}
        <div>
          <h4 className="mb-3 px-1">Yang perlu kamu siapkan hari ini</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              <ListRow
                icon={<Calendar size={24} className="text-[var(--accent-amber-700)]" />}
                title="Persiapan Interview Sakura Care"
                subtitle="Interview online 15 Mei jam 10:00"
                statusPill={{ text: 'Urgent', variant: 'waiting' }}
                showChevron={true}
                onClick={() => console.log('Open interview prep')}
              />
              <ListRow
                icon={<FileCheck size={24} className="text-[var(--brand-green-500)]" />}
                title="Cek dokumen untuk Osaka"
                subtitle="Pastikan semua dokumen lengkap"
                showChevron={true}
                onClick={() => console.log('Check documents')}
              />
            </div>
          </Card>
        </div>

        {/* Pipeline Items */}
        <div>
          <h4 className="mb-3 px-1">Semua Peluang di Pipeline</h4>
          <div className="space-y-3">
            {pipelineItems.map((item) => (
              <Card
                key={item.id}
                variant="default"
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => console.log('View pipeline detail:', item.id)}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-[var(--text-muted)]" />
                      <h4 className="text-[15px]">{item.employer}</h4>
                    </div>
                    <p className="text-[13px] text-[var(--text-muted)] mb-2">
                      {item.location}
                    </p>
                    <StatusPill variant={item.statusVariant} className="text-[12px] px-2 py-1">
                      {item.status}
                    </StatusPill>
                  </div>
                  <ChevronRight size={20} className="text-[var(--text-muted)] flex-shrink-0" />
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
                  <Calendar size={14} />
                  <span>Target: {item.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Support */}
        <Card variant="default">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0">
              <Users size={20} className="text-[var(--brand-green-500)]" />
            </div>
            <div className="flex-1">
              <h5 className="text-[14px] font-semibold mb-1">Butuh Bantuan Persiapan?</h5>
              <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-3">
                Konsultasi gratis dengan Career Advisor untuk persiapan interview & dokumen
              </p>
              <Button variant="text" onClick={() => console.log('Book consultation')}>
                Jadwalkan Konsultasi
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
