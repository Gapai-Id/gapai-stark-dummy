'use client'

import React from 'react';
import { Button } from '@/components/design-system/Button';

interface Props {
  featureName?: string;
  description?: string;
  onGoHome?: () => void;
}

export default function ComingSoon({
  featureName = 'Fitur ini',
  description = 'Sedang dalam pengembangan dan akan segera tersedia.',
  onGoHome,
}: Props) {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <main className="flex-1 px-5 pb-10 flex flex-col items-center justify-center text-center">
        <div className="text-[64px] mb-6">🚧</div>

        <h2 className="mb-3">Segera Hadir</h2>
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-2 max-w-[280px]">
          <span className="font-semibold text-[var(--text-primary)]">{featureName}</span> sedang disiapkan.
        </p>
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-8 max-w-[280px]">
          {description}
        </p>

        <div className="w-full">
          <Button
            variant="primary"
            onClick={() => { onGoHome?.(); console.log('Go to home'); }}
          >
            Kembali ke Beranda
          </Button>
        </div>
      </main>
    </div>
  );
}
