'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { Clock, CheckCircle2, FileText, Target } from 'lucide-react';

const assessmentSections = [
  {
    id: '1',
    title: 'Profil & Latar Belakang',
    description: 'Informasi dasar tentang dirimu',
    duration: '3 menit',
    questions: 8
  },
  {
    id: '2',
    title: 'Keahlian & Pengalaman',
    description: 'Kemampuan dan riwayat kerja',
    duration: '5 menit',
    questions: 12
  },
  {
    id: '3',
    title: 'Bahasa & Komunikasi',
    description: 'Kemampuan bahasa yang kamu kuasai',
    duration: '4 menit',
    questions: 10
  },
  {
    id: '4',
    title: 'Preferensi & Ekspektasi',
    description: 'Tujuan dan harapanmu bekerja di luar negeri',
    duration: '3 menit',
    questions: 6
  }
];

export default function DashboardAssessmentFresh() {

  const totalQuestions = assessmentSections.reduce((sum, section) => sum + section.questions, 0);
  const totalDuration = 15;

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Assessment ini membantu kami kenali keahlianmu." />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        {/* Assessment Overview Card */}
        <Card variant="tinted">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Assessment Awal</h4>
              <p className="text-[13px] leading-[20px] text-[var(--text-muted)]">
                {totalQuestions} pertanyaan · ±{totalDuration} menit
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
              <CheckCircle2 size={16} className="text-[var(--brand-green-500)]" />
              <span>Tidak ada jawaban benar/salah</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
              <CheckCircle2 size={16} className="text-[var(--brand-green-500)]" />
              <span>Bisa disimpan dan dilanjutkan kapan saja</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
              <CheckCircle2 size={16} className="text-[var(--brand-green-500)]" />
              <span>Jawab sejujur-jujurnya untuk hasil terbaik</span>
            </div>
          </div>

          <Button variant="primary">
            Mulai Assessment
          </Button>
        </Card>

        {/* What to expect */}
        <div>
          <h4 className="mb-3 px-1">Yang akan kamu isi</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {assessmentSections.map((section, index) => (
                <ListRow
                  key={section.id}
                  icon={
                    <div className="w-6 h-6 rounded-full bg-[var(--neutral-100)] flex items-center justify-center text-[var(--text-muted)] text-xs font-semibold">
                      {index + 1}
                    </div>
                  }
                  title={section.title}
                  subtitle={`${section.description} · ${section.duration}`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Why Assessment Important */}
        <Card variant="default">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0">
              <Target size={24} className="text-[var(--brand-green-500)]" />
            </div>
            <div className="flex-1">
              <h4 className="mb-2">Kenapa assessment penting?</h4>
              <ul className="space-y-2 text-[14px] leading-[22px] text-[var(--text-secondary)]">
                <li className="flex gap-2">
                  <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                  <span>Kami kenali kekuatan & area pengembanganmu</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                  <span>Rekomendasi jalur yang paling cocok</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                  <span>Persiapan lebih matang sebelum berangkat</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
