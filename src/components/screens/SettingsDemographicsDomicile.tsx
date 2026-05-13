'use client'

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { InputField } from '@/components/design-system/InputField';
import { Button } from '@/components/design-system/Button';

export default function SettingsDemographicsDomicile() {
  const [birthDate, setBirthDate] = useState('1998-01-15');
  const [gender, setGender] = useState('Perempuan');
  const [province, setProvince] = useState('DKI Jakarta');
  const [city, setCity] = useState('Jakarta Selatan');
  const [ktpProvince, setKtpProvince] = useState('DKI Jakarta');
  const [ktpCity, setKtpCity] = useState('Jakarta Selatan');
  const [sameAsDomicile, setSameAsDomicile] = useState(true);

  const handleSave = () => {
    console.log('Save demographics:', {
      birthDate,
      gender,
      province,
      city,
      ktpProvince: sameAsDomicile ? province : ktpProvince,
      ktpCity: sameAsDomicile ? city : ktpCity
    });
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
          <h2 className="mb-2">Demografi & Domisili</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Informasi demografis dan alamat tempat tinggal
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Birth Date */}
          <InputField
            label="Tanggal Lahir"
            type="text"
            placeholder="YYYY-MM-DD"
            value={birthDate}
            onChange={(v) => setBirthDate(v)}
          />

          {/* Gender */}
          <div>
            <label className="block text-[14px] font-medium text-[var(--text-primary)] mb-2">
              Jenis Kelamin
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setGender('Laki-laki')}
                className={`flex-1 h-[48px] rounded-[8px] border-2 text-[14px] font-medium transition-all ${
                  gender === 'Laki-laki'
                    ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-50)] text-[var(--brand-green-700)]'
                    : 'border-[var(--border-default)] bg-white text-[var(--text-secondary)]'
                }`}
              >
                Laki-laki
              </button>
              <button
                onClick={() => setGender('Perempuan')}
                className={`flex-1 h-[48px] rounded-[8px] border-2 text-[14px] font-medium transition-all ${
                  gender === 'Perempuan'
                    ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-50)] text-[var(--brand-green-700)]'
                    : 'border-[var(--border-default)] bg-white text-[var(--text-secondary)]'
                }`}
              >
                Perempuan
              </button>
            </div>
          </div>

          {/* Domicile Section */}
          <div>
            <h4 className="mb-3">Domisili Saat Ini</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-[14px] font-medium text-[var(--text-primary)] mb-2">
                  Provinsi
                </label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[var(--border-default)] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-500)]"
                >
                  <option value="DKI Jakarta">DKI Jakarta</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                  <option value="Banten">Banten</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[var(--text-primary)] mb-2">
                  Kota/Kabupaten
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[var(--border-default)] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-500)]"
                >
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                </select>
              </div>
            </div>
          </div>

          {/* KTP Address Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4>Alamat KTP</h4>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sameAsDomicile}
                  onChange={(e) => setSameAsDomicile(e.target.checked)}
                  className="w-4 h-4 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
                <span className="text-[13px] text-[var(--text-secondary)]">Sama dengan domisili</span>
              </label>
            </div>

            {!sameAsDomicile && (
              <div className="space-y-3">
                <div>
                  <label className="block text-[14px] font-medium text-[var(--text-primary)] mb-2">
                    Provinsi
                  </label>
                  <select
                    value={ktpProvince}
                    onChange={(e) => setKtpProvince(e.target.value)}
                    className="w-full h-[48px] px-4 rounded-[8px] border border-[var(--border-default)] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-500)]"
                  >
                    <option value="DKI Jakarta">DKI Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="Banten">Banten</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[var(--text-primary)] mb-2">
                    Kota/Kabupaten
                  </label>
                  <select
                    value={ktpCity}
                    onChange={(e) => setKtpCity(e.target.value)}
                    className="w-full h-[48px] px-4 rounded-[8px] border border-[var(--border-default)] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-500)]"
                  >
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <Button
          variant="primary"
          onClick={handleSave}
        >
          Simpan Perubahan
        </Button>
      </main>
    </div>
  );
}
