'use client'

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { InputField } from '@/components/design-system/InputField';
import { Button } from '@/components/design-system/Button';

export default function ForgotPasswordNew() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!password) {
      newErrors.password = 'Password wajib diisi';
    } else if (password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password wajib diisi';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Password tidak sama';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
        <div className="h-[60px]" />
        <main className="flex-1 px-5 py-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--brand-green-100)] flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={32} className="text-[var(--brand-green-700)]" />
          </div>
          <h2 className="mb-2">Kata Sandi Berhasil Diubah</h2>
          <p className="text-[14px] text-[var(--text-secondary)] mb-8">
            Kata sandi kamu sudah diperbarui. Silakan masuk dengan kata sandi baru.
          </p>
          <Button variant="primary" onClick={() => console.log('Go to L-01 Login')}>
            Masuk Sekarang
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to L-03 ForgotPasswordOTP')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 py-8">
        <div className="text-center mb-8">
          <div className="text-[48px] mb-4">🔒</div>
          <h2 className="mb-2">Buat Kata Sandi Baru</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Kata sandi baru harus berbeda dari yang sebelumnya.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <InputField
            label="Kata Sandi Baru"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Minimal 8 karakter"
            error={errors.password}
          />

          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Ketik ulang kata sandi baru"
            error={errors.confirmPassword}
          />
        </div>

        <Button variant="primary" onClick={handleSubmit}>
          Simpan Kata Sandi
        </Button>
      </main>
    </div>
  );
}
