'use client'

import React, { useState, useMemo } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/design-system/Button';
import { Card } from '@/components/design-system/Card';

const PROFILE = {
  name: 'Sari Dewi',
  gender: 'Perempuan',
  dateOfBirth: '15 Mar 1998',
};

type BmiCategory = {
  label: string;
  color: string;
  bg: string;
};

function getBmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return { label: 'Berat badan kurang', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' };
  if (bmi < 25.0) return { label: 'Normal', color: 'text-[var(--brand-green-700)]', bg: 'bg-[var(--brand-green-50)] border-[var(--border-brand)]' };
  if (bmi < 30.0) return { label: 'Kelebihan berat badan', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' };
  return { label: 'Obesitas', color: 'text-red-600', bg: 'bg-red-50 border-red-200' };
}

export default function PreAssessmentBasicInfo() {
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const h = Number(heightCm);
  const w = Number(weightKg);
  const validHeight = !isNaN(h) && h >= 100 && h <= 250;
  const validWeight = !isNaN(w) && w >= 30 && w <= 200;

  const bmi = useMemo(() => {
    if (!heightCm || !weightKg || !validHeight || !validWeight) return null;
    return w / ((h / 100) ** 2);
  }, [heightCm, weightKg, validHeight, validWeight, h, w]);

  const bmiCategory = bmi !== null ? getBmiCategory(bmi) : null;

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!heightCm) {
      newErrors.height = 'Tinggi badan wajib diisi';
    } else if (!validHeight) {
      newErrors.height = 'Masukkan tinggi yang valid (100–250 cm)';
    }

    if (!weightKg) {
      newErrors.weight = 'Berat badan wajib diisi';
    } else if (!validWeight) {
      newErrors.weight = 'Masukkan berat yang valid (30–200 kg)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Physical data complete → PA-10 Mental Health', {
      heightCm: h,
      weightKg: w,
      bmi: bmi?.toFixed(1),
      category: bmiCategory?.label,
    });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-08 Education')}
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
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 7 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">88%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[88%]" />
          </div>
        </div>

        <div>
          <h2 className="mb-1">Tinggi & Berat Badan</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Digunakan untuk mencocokkan jalur kerja yang sesuai kondisi fisikmu.
          </p>
        </div>

        {/* Pre-filled from profile */}
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

            {/* BMI result — shown when both inputs are valid */}
            {bmi !== null && bmiCategory !== null && (
              <div className={`rounded-[8px] border-[1.5px] px-4 py-3 flex items-center justify-between ${bmiCategory.bg}`}>
                <div>
                  <p className="text-[11px] text-[var(--text-muted)] mb-0.5">Indeks Massa Tubuh (BMI)</p>
                  <p className={`text-[13px] font-semibold ${bmiCategory.color}`}>{bmiCategory.label}</p>
                </div>
                <p className={`text-[28px] font-bold leading-none ${bmiCategory.color}`}>
                  {bmi.toFixed(1)}
                </p>
              </div>
            )}
          </div>
        </Card>

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
