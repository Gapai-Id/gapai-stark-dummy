'use client'

import React from 'react';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ErrorTrackFailure() {
  const handleContactSupport = () => {
    console.log('Contact Admin Gapai');
  };

  const handleBackToDashboard = () => {
    console.log('Back to dashboard');
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center px-5">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[var(--semantic-error-50)] flex items-center justify-center">
              <XCircle size={40} className="text-[var(--semantic-error-700)]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-3">Dokumen Tidak Lolos Verifikasi</h2>

          {/* Message */}
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-8">
            Dokumen yang kamu upload tidak memenuhi persyaratan. Silakan perbaiki dan upload ulang sesuai dengan catatan di bawah.
          </p>

          {/* Failure Reasons */}
          <div className="bg-[var(--semantic-error-50)] rounded-[8px] p-4 mb-8 text-left">
            <p className="text-[13px] font-semibold text-[var(--semantic-error-900)] mb-2">
              Alasan penolakan:
            </p>
            <ul className="text-[13px] leading-[20px] text-[var(--semantic-error-900)] ml-4 list-disc space-y-1">
              <li>Foto KTP kurang jelas / blur</li>
              <li>Tanggal lahir tidak sesuai dengan data registrasi</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button
              variant="primary"
              onClick={() => console.log('Upload ulang dokumen')}
            >
              Upload Ulang Dokumen
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
    </div>
  );
}
