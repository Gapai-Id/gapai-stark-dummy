'use client'

import React from 'react';
import { WifiOff } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ErrorNetworkError() {
  const handleRetry = () => {
    console.log('Retry connection');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[var(--neutral-100)] flex items-center justify-center">
            <WifiOff size={40} className="text-[var(--neutral-400)]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-3">Tidak Ada Koneksi</h2>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-8">
          Sepertinya koneksi internet kamu bermasalah. Periksa koneksi dan coba lagi.
        </p>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-4 mb-8 text-left">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            <strong>Tips:</strong>
            <br />
            • Pastikan WiFi atau data seluler aktif
            <br />
            • Coba pindah ke area dengan sinyal lebih baik
            <br />
            • Restart router atau perangkat kamu
          </p>
        </div>

        {/* Action */}
        <Button
          variant="primary"
          onClick={handleRetry}
        >
          Coba Lagi
        </Button>
      </div>
    </div>
  );
}
