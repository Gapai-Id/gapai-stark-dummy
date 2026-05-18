'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { InputField } from '@/components/design-system/InputField';
import { Button } from '@/components/design-system/Button';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login with:', { phone, password });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/gapai-logo.jpg"
              alt="Gapai"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="mb-2">Selamat datang kembali</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Masuk untuk lanjutkan perjalananmu
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <InputField
            label="Nomor HP"
            type="tel"
            placeholder="+62 812-3456-7890"
            value={phone}
            onChange={(v) => setPhone(v)}
          />

          <InputField
            label="Kata sandi"
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(v) => setPassword(v)}
          />

          <div className="flex justify-end">
            <button
              onClick={() => console.log('Go to L-02 Forgot Password')}
              className="text-[13px] text-[var(--text-brand)]"
            >
              Lupa kata sandi?
            </button>
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!phone || !password}
        >
          Masuk
        </Button>

        {/* Register link */}
        <p className="text-center text-[13px] text-[var(--text-muted)] mt-6">
          Belum punya akun?{' '}
          <button
            onClick={() => console.log('Go to R-01 Register')}
            className="text-[var(--text-brand)] font-medium"
          >
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}
