'use client'

import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/design-system/Button';
import { Card } from '@/components/design-system/Card';

const PHYSICAL_CONDITIONS: Record<string, string[]> = {
  Cook: [
    'Memiliki tato yang terlihat di tangan, lengan, atau leher saat memakai seragam',
    'Memiliki tindikan (piercing) di wajah yang tidak dapat dilepas saat bekerja',
    'Tidak mampu berdiri selama 8 jam atau lebih per shift',
    'Memiliki kondisi fisik lain yang dibatasi oleh regulasi dapur di Eropa',
  ],
  'Kitchen Assistant': [
    'Memiliki tato yang terlihat di tangan, lengan, atau leher saat memakai seragam',
    'Memiliki tindikan (piercing) di wajah yang tidak dapat dilepas saat bekerja',
    'Tidak mampu berdiri selama 8 jam atau lebih per shift',
    'Memiliki kondisi fisik lain yang dibatasi oleh regulasi dapur di Eropa',
  ],
  Waiter: [
    'Memiliki tato yang terlihat di tangan, lengan, atau leher saat memakai seragam',
    'Memiliki tindikan (piercing) di wajah yang tidak dapat dilepas saat bekerja',
    'Tidak mampu berdiri atau berjalan aktif selama 8 jam atau lebih per shift',
    'Memiliki kondisi fisik lain yang dibatasi oleh standar restoran di Eropa',
  ],
};

const DEFAULT_CONDITIONS = [
  'Memiliki tato yang terlihat di tangan, lengan, atau leher saat memakai seragam',
  'Memiliki tindikan (piercing) di wajah yang tidak dapat dilepas saat bekerja',
  'Tidak mampu berdiri selama 8 jam atau lebih per shift',
  'Memiliki kondisi fisik lain yang dibatasi oleh regulasi di negara tujuan',
];

interface Props {
  selectedJaker?: string;
  onConfirm?: () => void;
  onExclude?: () => void;
  onBack?: () => void;
}

export default function PreAssessmentPhysicalConditions({
  selectedJaker = 'Cook',
  onConfirm,
  onExclude,
  onBack,
}: Props) {
  const conditions = PHYSICAL_CONDITIONS[selectedJaker] ?? DEFAULT_CONDITIONS;

  const handleNo = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      console.log(`Physical condition confirmed NO → POST /enrollments → Assessment`);
    }
  };

  const handleYes = () => {
    if (onExclude) {
      onExclude();
    } else {
      console.log(`Physical condition declared YES → remove ${selectedJaker}, back to PA-09 Results`);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => onBack ? onBack() : console.log('Go back to PA-09 Results')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 flex flex-col space-y-5">
        {/* Icon + title */}
        <div>
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
            <AlertTriangle size={24} className="text-amber-500" />
          </div>
          <h2 className="mb-1">Satu Hal Sebelum Kamu Mulai</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Jalur <span className="font-semibold text-[var(--text-primary)]">{selectedJaker}</span> memiliki syarat kondisi fisik dari employer. Ceritakan kondisimu dengan jujur.
          </p>
        </div>

        {/* Conditions list */}
        <Card variant="default">
          <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-3">
            Apakah kamu memiliki salah satu kondisi berikut?
          </p>
          <div className="space-y-2.5">
            {conditions.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--neutral-400)] mt-[7px] flex-shrink-0" />
                <p className="text-[13px] leading-[20px] text-[var(--text-primary)]">{c}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="tinted">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Jika ada kondisi di atas, kami akan membantu mencarikan jalur lain yang lebih sesuai untukmu.
          </p>
        </Card>

        {/* CTAs */}
        <div className="mt-auto space-y-3">
          <Button variant="primary" onClick={handleNo}>
            Tidak, saya bebas dari kondisi ini
          </Button>
          <button
            onClick={handleYes}
            className="w-full py-3 px-4 rounded-[10px] border-[1.5px] border-red-300 bg-red-50 text-[14px] font-medium text-red-600 text-center"
          >
            Ya, saya memiliki kondisi ini
          </button>
        </div>
      </main>
    </div>
  );
}
