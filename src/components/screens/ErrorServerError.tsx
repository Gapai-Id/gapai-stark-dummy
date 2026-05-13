'use client'

import React from 'react';
import { ServerCrash } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ErrorServerError() {
  const handleRetry = () => {
    console.log('Retry');
    window.location.reload();
  };

  const handleContactSupport = () => {
    console.log('Contact support');
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[var(--semantic-error-50)] flex items-center justify-center">
            <ServerCrash size={40} className="text-[var(--semantic-error-700)]" />
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <span className="text-[48px] font-bold text-[var(--text-muted)]">500</span>
        </div>

        {/* Title */}
        <h2 className="mb-3">Terjadi Kesalahan Server</h2>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-8">
          Maaf, sistem kami sedang mengalami gangguan. Tim kami sudah bekerja untuk memperbaiki masalah ini.
        </p>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-4 mb-8 text-left">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            <strong>Apa yang bisa kamu lakukan:</strong>
            <br />
            • Tunggu beberapa menit dan coba lagi
            <br />
            • Refresh halaman
            <br />
            • Hubungi Admin Gapai jika masalah berlanjut
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="primary"
            onClick={handleRetry}
          >
            Coba Lagi
          </Button>
          <Button
            variant="outline"
            onClick={handleContactSupport}
          >
            Hubungi Admin Gapai
          </Button>
        </div>
      </div>
    </div>
  );
}
