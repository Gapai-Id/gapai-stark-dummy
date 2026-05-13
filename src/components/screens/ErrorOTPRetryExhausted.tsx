'use client'

import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ErrorOTPRetryExhausted() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center">
            <ShieldAlert size={40} className="text-[var(--brand-green-500)]" />
          </div>
        </div>

        <h2 className="mb-3">Kode OTP sudah dicoba terlalu banyak</h2>

        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-6">
          Untuk menjaga keamanan akunmu, kami perlu memverifikasi ulang. Kamu bisa coba lagi setelah 1 jam, atau hubungi kami langsung.
        </p>

        <div className="bg-[var(--neutral-100)] rounded-[12px] p-4 mb-8 text-left">
          <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-2">Yang bisa kamu lakukan sekarang:</p>
          <div className="space-y-1.5">
            {[
              'Pastikan nomor HP yang didaftarkan aktif dan bisa menerima SMS',
              'Tunggu 1 jam, lalu minta kode baru',
              'Hubungi tim kami jika masalah berlanjut',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[var(--brand-green-500)] flex-shrink-0 text-[13px]">•</span>
                <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="primary" onClick={() => console.log('Contact support')}>
            Hubungi Admin Gapai
          </Button>
          <Button variant="outline" onClick={() => console.log('Back to login')}>
            Kembali ke Login
          </Button>
        </div>
      </div>
    </div>
  );
}
