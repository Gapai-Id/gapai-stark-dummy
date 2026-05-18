'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/design-system/Button';
import { InputField } from '@/components/design-system/InputField';

export default function RegisterCredentials() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!phone) {
      newErrors.phone = 'Nomor HP wajib diisi';
    } else if (phone.length < 10) {
      newErrors.phone = 'Nomor HP tidak valid';
    } else if (phone === '08111111111') {
      newErrors.phone = 'duplicate';
    }

    if (!name) newErrors.name = 'Nama wajib diisi';

    if (!password) {
      newErrors.password = 'Password wajib diisi';
    } else if (password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Password tidak sama';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Submit registration → R-02 OTP', { phone, name });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Logo / Brand */}
      <div className="pt-12 pb-8 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/gapai-logo.jpg"
            alt="Gapai"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mb-2">Selamat datang di Gapai</h2>
        <p className="text-[14px] text-[var(--text-secondary)]">
          Mulai perjalananmu bekerja di luar negeri
        </p>
      </div>

      <main className="flex-1 px-5 pb-8">
        <div className="space-y-4 mb-6">
          {/* Phone — custom to support +62 prefix */}
          <div>
            <label className="block text-[13px] font-medium text-[var(--text-primary)] mb-1.5">
              Nomor HP
            </label>
            <div className={`flex items-center bg-white border-[1.5px] rounded-[10px] overflow-hidden transition-colors focus-within:border-[var(--border-brand)] ${errors.phone && errors.phone !== 'duplicate' ? 'border-[var(--semantic-error-500)]' : 'border-[var(--border-default)]'}`}>
              <div className="flex items-center gap-1.5 pl-3 pr-2.5 py-3 border-r border-[var(--border-default)] shrink-0">
                <span className="text-[16px] leading-none">🇮🇩</span>
                <span className="text-[14px] font-medium text-[var(--text-primary)]">+62</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrors((err) => ({ ...err, phone: '' })); }}
                placeholder="8xx xxxx xxxx"
                className="flex-1 h-[50px] px-3 text-[14px] bg-transparent focus:outline-none placeholder:text-[var(--text-muted)]"
              />
            </div>
            {errors.phone && errors.phone !== 'duplicate' && (
              <p className="text-[12px] text-[var(--text-error)] mt-1">{errors.phone}</p>
            )}
            {!errors.phone && (
              <p className="text-[12px] text-[var(--text-muted)] mt-1">Pakai nomor yang aktif untuk WhatsApp</p>
            )}
            {errors.phone === 'duplicate' && (
              <div className="flex items-center justify-between px-3 py-2.5 rounded-[8px] bg-red-50 border border-red-200 mt-1.5">
                <p className="text-[13px] text-red-600">Nomor ini sudah terdaftar.</p>
                <button
                  onClick={() => console.log('Go to L-01 Login')}
                  className="text-[13px] font-semibold text-[var(--text-brand)] shrink-0 ml-2"
                >
                  Masuk
                </button>
              </div>
            )}
          </div>

          <InputField
            label="Nama Lengkap"
            value={name}
            onChange={(v) => { setName(v); setErrors((e) => ({ ...e, name: '' })); }}
            placeholder="Sesuai KTP"
            error={errors.name}
          />

          <InputField
            label="Buat kata sandi"
            type="password"
            value={password}
            onChange={(v) => { setPassword(v); setErrors((e) => ({ ...e, password: '' })); }}
            placeholder="Minimal 8 karakter"
            error={errors.password}
            helperText="Minimal 8 karakter"
          />

          <InputField
            label="Konfirmasi kata sandi"
            type="password"
            value={confirmPassword}
            onChange={(v) => { setConfirmPassword(v); setErrors((e) => ({ ...e, confirmPassword: '' })); }}
            placeholder="Ketik ulang untuk memastikan"
            error={errors.confirmPassword}
            helperText="Ketik ulang untuk memastikan"
          />
        </div>

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>

        <div className="text-center mt-6">
          <p className="text-[13px] text-[var(--text-secondary)]">
            Sudah punya akun?{' '}
            <button
              className="text-[var(--text-brand)] font-semibold"
              onClick={() => console.log('Go to login')}
            >
              Masuk
            </button>
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-[12px] leading-[18px] text-[var(--text-muted)]">
            Dengan mendaftar, kamu menyetujui{' '}
            <button className="text-[var(--text-brand)]">Syarat & Ketentuan</button>
            {' '}dan{' '}
            <button className="text-[var(--text-brand)]">Kebijakan Privasi</button>
          </p>
        </div>
      </main>
    </div>
  );
}
