'use client'

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { InputField } from '@/components/design-system/InputField';
import { Button } from '@/components/design-system/Button';

export default function ForgotPassword() {
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    console.log('Send OTP to:', phone, '→ similar to R-02 OTP flow');
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to L-01 Login')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke login</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <div className="w-full max-w-sm">
          {/* Icon */}
          <div className="text-center mb-6">
            <div className="text-[56px] mb-3">🔑</div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="mb-2">Lupa kata sandi?</h2>
            <p className="text-[14px] text-[var(--text-secondary)]">
              Masukkan nomor HP kamu, kami kirim kode verifikasi untuk reset kata sandi.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <InputField
              label="Nomor HP"
              type="tel"
              placeholder="+62 812-3456-7890"
              value={phone}
              onChange={(v) => setPhone(v)}
            />

            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={!phone}
            >
              Kirim Kode
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
