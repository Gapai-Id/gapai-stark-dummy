'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepRegisterProps {
  onNext: () => void;
}

export function StepRegister({ onNext }: StepRegisterProps) {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const inputClass =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent';

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h1 className="text-xl font-semibold font-poppins text-gray-900 leading-snug">
          Mulai perjalananmu ke luar negeri
        </h1>
        <p className="text-sm text-gray-500 font-roboto">
          Daftarkan dirimu dan mulai mempersiapkan masa depanmu
        </p>
      </div>

      <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
        {(['phone', 'email'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className={cn(
              'flex-1 py-2 text-sm font-medium font-poppins rounded-lg transition-all',
              method === m ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500',
            )}
          >
            {m === 'phone' ? 'Nomor HP' : 'Email'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {method === 'phone' ? (
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 px-3 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 font-roboto whitespace-nowrap">
              🇮🇩 +62
            </div>
            <input
              type="tel"
              placeholder="812 xxxx xxxx"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            />
          </div>
        ) : (
          <input type="email" placeholder="email@contoh.com" className={inputClass} />
        )}

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Buat password"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Konfirmasi password"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors"
      >
        Daftar
      </button>

      <p className="text-center text-sm text-gray-500 font-roboto">
        Sudah punya akun?{' '}
        <Link href="/login" className="text-primary-600 font-medium">
          Masuk
        </Link>
      </p>
    </div>
  );
}
