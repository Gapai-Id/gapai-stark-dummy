'use client'

import React, { useState } from 'react';
import { ArrowLeft, User, Upload } from 'lucide-react';
import { InputField } from '@/components/design-system/InputField';
import { Button } from '@/components/design-system/Button';

export default function SettingsEditProfile() {
  const [name, setName] = useState('Sari Dewi');
  const [phone, setPhone] = useState('+62 812-3456-7890');
  const [email, setEmail] = useState('sari.dewi@email.com');

  const handleSave = () => {
    console.log('Save profile:', { name, phone, email });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center px-5">
          <button
            onClick={() => console.log('Go back to PR-01')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="px-5 py-4 space-y-6">
        <div>
          <h2 className="mb-2">Edit Profil</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Ubah informasi pribadi kamu
          </p>
        </div>

        {/* Photo Upload */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-[var(--neutral-200)] flex items-center justify-center">
            <User size={40} className="text-[var(--neutral-500)]" />
          </div>
          <button className="flex items-center gap-2 text-[14px] text-[var(--text-brand)] font-medium">
            <Upload size={18} />
            <span>Ubah Foto</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <InputField
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
            value={name}
            onChange={(v) => setName(v)}
          />

          <InputField
            label="Nomor HP"
            type="tel"
            placeholder="+62 812-3456-7890"
            value={phone}
            onChange={(v) => setPhone(v)}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(v) => setEmail(v)}
          />
        </div>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Perubahan nomor HP dan email memerlukan verifikasi ulang.
          </p>
        </div>

        {/* Save Button */}
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={!name || !phone || !email}
        >
          Simpan Perubahan
        </Button>
      </main>
    </div>
  );
}
