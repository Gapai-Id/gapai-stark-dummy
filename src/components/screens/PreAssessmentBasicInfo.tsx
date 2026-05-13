'use client'

import React, { useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/design-system/Button';
import { InputField } from '@/components/design-system/InputField';
import { Card } from '@/components/design-system/Card';

// Mock pre-filled from R-03 registration profile
const PROFILE = {
  name: 'Sari Dewi',
  gender: 'Perempuan',
  dateOfBirth: '15 Mar 1998',
};

export default function PreAssessmentBasicInfo() {
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    const h = Number(heightCm);
    const w = Number(weightKg);

    if (!heightCm) {
      newErrors.height = 'Tinggi badan wajib diisi';
    } else if (isNaN(h) || h < 100 || h > 250) {
      newErrors.height = 'Masukkan tinggi yang valid (100–250 cm)';
    }

    if (!weightKg) {
      newErrors.weight = 'Berat badan wajib diisi';
    } else if (isNaN(w) || w < 30 || w > 200) {
      newErrors.weight = 'Masukkan berat yang valid (30–200 kg)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate BMI check — server-side in production
    const bmi = w / ((h / 100) ** 2);
    if (bmi < 18.5 || bmi > 25.0) {
      console.log(`BMI ${bmi.toFixed(1)} out of range → PA-02 Blocked`);
      return;
    }

    console.log(`BMI ${bmi.toFixed(1)} OK → PA-04 Step 1`);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-01 EligibilityGate')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 space-y-5">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 1 dari 6</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">17%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[17%]" />
          </div>
        </div>

        <div>
          <h2 className="mb-1">Data Diri</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Pastikan data akurat — ini digunakan untuk mencocokkan jalur kerja yang tepat untukmu.
          </p>
        </div>

        {/* Pre-filled from profile — read only */}
        <Card variant="tinted">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[var(--brand-green-100)] flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-[var(--brand-green-700)]" />
            </div>
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">{PROFILE.name}</p>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Jenis Kelamin', value: PROFILE.gender },
              { label: 'Tanggal Lahir', value: PROFILE.dateOfBirth },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[13px] text-[var(--text-muted)]">{label}</span>
                <span className="text-[13px] font-medium text-[var(--text-primary)]">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[var(--text-muted)] mt-3">
            Data dari profil registrasimu. Perbarui di Pengaturan jika ada yang salah.
          </p>
        </Card>

        {/* Height & Weight inputs */}
        <Card variant="default">
          <div className="space-y-4">
            <div>
              <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">
                Tinggi Badan
              </label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="numeric"
                  value={heightCm}
                  onChange={(e) => { setHeightCm(e.target.value); setErrors((err) => ({ ...err, height: '' })); }}
                  placeholder="Contoh: 165"
                  className={`w-full h-[52px] pl-4 pr-14 border-[1.5px] rounded-[8px] text-[14px] focus:border-[var(--border-brand)] focus:outline-none bg-white ${errors.height ? 'border-red-400' : 'border-[var(--border-default)]'}`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] text-[var(--text-muted)] font-medium">
                  cm
                </span>
              </div>
              {errors.height && <p className="text-[12px] text-red-500 mt-1">{errors.height}</p>}
            </div>

            <div>
              <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">
                Berat Badan
              </label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="numeric"
                  value={weightKg}
                  onChange={(e) => { setWeightKg(e.target.value); setErrors((err) => ({ ...err, weight: '' })); }}
                  placeholder="Contoh: 55"
                  className={`w-full h-[52px] pl-4 pr-14 border-[1.5px] rounded-[8px] text-[14px] focus:border-[var(--border-brand)] focus:outline-none bg-white ${errors.weight ? 'border-red-400' : 'border-[var(--border-default)]'}`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] text-[var(--text-muted)] font-medium">
                  kg
                </span>
              </div>
              {errors.weight && <p className="text-[12px] text-red-500 mt-1">{errors.weight}</p>}
            </div>
          </div>
        </Card>

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
