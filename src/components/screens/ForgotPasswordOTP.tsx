'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/design-system/Button';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      console.log('Verify reset OTP:', otpValue, '→ L-04 New Password');
    }
  };

  const handleResend = () => {
    setCountdown(60);
    console.log('Resend reset OTP');
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to L-02 ForgotPassword')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 py-8">
        <div className="text-center mb-8">
          <div className="text-[48px] mb-4">🔐</div>
          <h2 className="mb-2">Masukkan Kode Verifikasi</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Kode verifikasi sudah dikirim ke<br />
            <span className="font-medium text-[var(--text-primary)]">+62 812-3456-7890</span>
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-[24px] font-semibold border-2 border-[var(--border-default)] rounded-[12px] focus:border-[var(--border-brand)] focus:outline-none bg-white"
            />
          ))}
        </div>

        <div className="text-center mb-8">
          {countdown > 0 ? (
            <p className="text-[13px] text-[var(--text-muted)]">
              Kirim ulang kode dalam {countdown} detik
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-[13px] text-[var(--text-brand)] font-medium"
            >
              Kirim ulang kode
            </button>
          )}
        </div>

        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={otp.join('').length !== 6}
        >
          Verifikasi
        </Button>
      </main>
    </div>
  );
}
