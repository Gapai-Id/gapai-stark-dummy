'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';
import { StatusPill } from '@/components/design-system/StatusPill';
import { MessageCircle } from 'lucide-react';

interface AlumniStory {
  id: string;
  author: string;
  destination: string;
  destinationEmoji: string;
  snippet: string;
  batch: string;
}

const alumniStories: AlumniStory[] = [
  {
    id: '1',
    author: 'Rina Wijaya',
    destination: 'JEPANG',
    destinationEmoji: '🇯🇵',
    snippet: 'Bulan pertama di Tokyo sangat menantang, tapi keluarga yang aku rawat sangat baik. Semua pelatihan Akademi Gapai benar-benar berguna!',
    batch: 'Batch 11'
  },
  {
    id: '2',
    author: 'Dewi Lestari',
    destination: 'KOREA',
    destinationEmoji: '🇰🇷',
    snippet: 'Bekerja di Samsung ternyata melebihi ekspektasi. Fasilitasnya bagus dan teamnya supportive. Terima kasih Admin Gapai!',
    batch: 'Batch 10'
  },
  {
    id: '3',
    author: 'Maya Putri',
    destination: 'JEPANG',
    destinationEmoji: '🇯🇵',
    snippet: 'Tips untuk calon alumni: jangan takut bertanya dan rajin latihan bahasa. Komunikasi adalah kunci segalanya di sini.',
    batch: 'Batch 11'
  }
];

export default function DashboardAlumni() {

  const getInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length >= 2) return words[0][0] + words[1][0];
    return name.substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Selamat datang di komunitas Alumni Gapai! 🎉" />

      <main className="px-5 py-4 space-y-4">
        {/* Alumni Identity Hero Card */}
        <Card variant="inverse" className="relative overflow-hidden py-6">
          <div className="relative z-10 text-center">
            <p className="text-[13px] leading-[20px] text-white/75 mb-2">
              Alumni Gapai 🇯🇵
            </p>

            <h1 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Sari Dewi
            </h1>

            <p className="text-[12px] leading-[18px] text-white/65">
              Caregiver Jepang · Batch 12 · Berangkat 20 Mei 2026
            </p>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] rounded-full bg-white opacity-[0.12] pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-white opacity-[0.08] pointer-events-none" />
        </Card>

        {/* Bagikan ceritamu CTA */}
        <Card variant="tinted">
          <div className="space-y-3">
            <h4 className="text-[var(--text-primary)]">Bagikan ceritamu</h4>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Inspirasimu bisa jadi kekuatan teman-temanmu yang sedang mempersiapkan perjalanan mereka.
            </p>
            <Button variant="primary">
              Tulis cerita
            </Button>
          </div>
        </Card>

        {/* Community Stats */}
        <Card variant="default">
          <div className="flex items-center justify-around py-2">
            <div className="text-center">
              <h3 className="text-[var(--text-brand)] mb-1">247</h3>
              <p className="text-[12px] text-[var(--text-muted)]">Alumni aktif</p>
            </div>
            <div className="w-[1px] h-12 bg-[var(--border-subtle)]"></div>
            <div className="text-center">
              <h3 className="text-[var(--text-brand)] mb-1">14</h3>
              <p className="text-[12px] text-[var(--text-muted)]">Negara</p>
            </div>
            <div className="w-[1px] h-12 bg-[var(--border-subtle)]"></div>
            <div className="text-center">
              <h3 className="text-[var(--text-brand)] mb-1">89%</h3>
              <p className="text-[12px] text-[var(--text-muted)]">Berhasil</p>
            </div>
          </div>
        </Card>

        {/* Cerita dari Alumni */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h4>Cerita dari Alumni</h4>
            <Button variant="text" className="h-auto p-0 text-[13px]">
              Lihat semua
            </Button>
          </div>

          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {alumniStories.map((story, index) => (
                <div
                  key={story.id}
                  className={`flex items-start gap-3 px-4 py-4 cursor-pointer hover:bg-[var(--surface-card-tinted)] transition-colors ${
                    index < alumniStories.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                  onClick={() => console.log('Open story:', story.id)}
                >
                  <div
                    className="w-10 h-10 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0 text-white font-semibold text-[13px]"
                  >
                    {getInitials(story.author)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[14px] text-[var(--text-primary)]">
                        {story.author}
                      </span>
                      <StatusPill variant="destination" className="text-[10px] px-2">
                        {story.destinationEmoji} {story.batch}
                      </StatusPill>
                    </div>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] line-clamp-2">
                      {story.snippet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Community Engagement Card */}
        <Card variant="default">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0">
              <MessageCircle size={24} className="text-[var(--brand-green-500)]" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Grup Alumni Batch 12</h4>
              <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-3">
                Tetap terhubung dengan teman-teman se-batch. Berbagi tips, info, dan pengalaman.
              </p>
              <Button variant="text" className="h-auto p-0 w-auto">
                Buka grup →
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
