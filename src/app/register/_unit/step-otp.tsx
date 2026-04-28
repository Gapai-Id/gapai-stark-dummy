'use client';

import { useState } from 'react';

interface StepOTPProps {
  onNext: () => void;
}

export function StepOTP({ onNext }: StepOTPProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, '').slice(-1);
    setOtp(newOtp);
    setError(false);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length < 6) {
      setError(true);
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h1 className="text-xl font-semibold font-poppins text-gray-900">
          Verifikasi nomormu
        </h1>
        <p className="text-sm text-gray-500 font-roboto">
          Kode 6 digit dikirim ke{' '}
          <span className="text-gray-700 font-medium">+62 812 xxxx xxxx</span>
        </p>
      </div>

      <div className="flex gap-2 justify-between">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="tel"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`w-full aspect-square max-w-[48px] text-center text-lg font-semibold font-poppins border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
              error
                ? 'border-red-400 bg-red-50 text-red-600'
                : digit
                ? 'border-primary-400 bg-primary-50 text-primary-700'
                : 'border-gray-200 bg-white text-gray-900'
            }`}
          />
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-500 font-roboto -mt-2">
          Kode tidak valid — pastikan kamu memasukkan kode terbaru
        </p>
      )}

      <button
        onClick={handleVerify}
        className="w-full bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors"
      >
        Verifikasi
      </button>

      <p className="text-center text-sm text-gray-500 font-roboto">
        Tidak menerima kode?{' '}
        <button className="text-primary-600 font-medium">Kirim ulang (59d)</button>
      </p>
    </div>
  );
}
