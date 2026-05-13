'use client'

import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function Error404() {
  const handleBackToHome = () => {
    console.log('Back to home');
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[var(--neutral-100)] flex items-center justify-center">
            <SearchX size={40} className="text-[var(--neutral-400)]" />
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <span className="text-[48px] font-bold text-[var(--text-muted)]">404</span>
        </div>

        {/* Title */}
        <h2 className="mb-3">Halaman Tidak Ditemukan</h2>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-8">
          Maaf, halaman yang kamu cari tidak ditemukan atau sudah tidak tersedia lagi.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="primary"
            onClick={handleBackToHome}
          >
            Kembali ke Beranda
          </Button>
          <Button
            variant="outline"
            onClick={() => console.log('Contact support')}
          >
            Hubungi Admin Gapai
          </Button>
        </div>
      </div>
    </div>
  );
}
