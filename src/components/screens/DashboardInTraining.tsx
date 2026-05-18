'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { StatusPill } from '@/components/design-system/StatusPill';
import { BookOpen, CheckCircle2, PlayCircle, Lock } from 'lucide-react';

interface TrainingModule {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  status: 'completed' | 'active' | 'locked';
}

const trainingModules: TrainingModule[] = [
  {
    id: '1',
    title: 'Bahasa Jepang Dasar',
    subtitle: '12 dari 12 pelajaran',
    progress: 100,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Teknik Perawatan Lansia',
    subtitle: '6 dari 10 pelajaran',
    progress: 60,
    status: 'active'
  },
  {
    id: '3',
    title: 'Budaya & Etika Kerja Jepang',
    subtitle: '0 dari 8 pelajaran',
    progress: 0,
    status: 'locked'
  },
  {
    id: '4',
    title: 'Sertifikasi N4',
    subtitle: 'Belum dimulai',
    progress: 0,
    status: 'locked'
  }
];

export default function DashboardInTraining() {

  const completedModules = trainingModules.filter(m => m.status === 'completed').length;
  const totalModules = trainingModules.length;
  const overallProgress = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Kamu sedang dalam tahap pelatihan. Tetap semangat!" />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        {/* Akademi Gapai Progress Card */}
        <Card variant="inverse" className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-green-600)] flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <StatusPill variant="active" className="bg-white/20 text-white border-0">
                Sedang berjalan
              </StatusPill>
            </div>

            <h3 className="text-white mb-1">Pelatihan Akademi Gapai</h3>
            <p className="text-[13px] leading-[20px] text-white/75 mb-4">
              {completedModules} dari {totalModules} modul selesai
            </p>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-[11px] text-white/65">{overallProgress}% progress keseluruhan</p>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] rounded-full bg-white opacity-[0.12] pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-white opacity-[0.08] pointer-events-none" />
        </Card>

        {/* Training Modules */}
        <div>
          <h4 className="mb-3 px-1">Modul Pelatihan</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {trainingModules.map((module, index) => {
                let icon;
                let statusPill;

                if (module.status === 'completed') {
                  icon = <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />;
                  statusPill = { text: 'Selesai', variant: 'done' as const };
                } else if (module.status === 'active') {
                  icon = <PlayCircle size={24} className="text-[var(--brand-green-500)]" />;
                  statusPill = { text: 'Sedang berjalan', variant: 'active' as const };
                } else {
                  icon = <Lock size={24} className="text-[var(--neutral-400)]" />;
                  statusPill = { text: 'Terkunci', variant: 'locked' as const };
                }

                return (
                  <div key={module.id}>
                    <ListRow
                      icon={icon}
                      title={module.title}
                      subtitle={module.subtitle}
                      statusPill={statusPill}
                      showChevron={module.status !== 'locked'}
                      onClick={module.status !== 'locked' ? () => console.log('Open module:', module.id) : undefined}
                    />
                    {module.status === 'active' && module.progress > 0 && (
                      <div className="px-5 pb-3 border-b border-[var(--border-subtle)]">
                        <div className="w-full h-1 bg-[var(--neutral-100)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[var(--brand-green-500)] rounded-full"
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Motivational Card */}
        <Card variant="tinted">
          <div className="space-y-2">
            <h4 className="text-[var(--text-primary)]">Tetap semangat, Sari!</h4>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Kamu sudah menyelesaikan {completedModules} modul. Setiap pelajaran membawamu selangkah lebih dekat ke Jepang. 🇯🇵
            </p>
          </div>
        </Card>

        {/* CTA */}
        <Button variant="primary" onClick={() => console.log('Continue training')}>
          Lanjutkan Pelatihan
        </Button>
      </main>
    </div>
  );
}
