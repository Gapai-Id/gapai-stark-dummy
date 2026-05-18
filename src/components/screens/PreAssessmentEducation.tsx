'use client'

import React, { useState } from 'react';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

const EDUCATION_LEVELS = [
  { value: 'below_sma', label: 'Di bawah SMA' },
  { value: 'sma_smk', label: 'SMA / SMK' },
  { value: 'diploma', label: 'Diploma (D1–D3)' },
  { value: 'bachelor', label: 'Sarjana (S1)' },
];

const MAJORS = [
  { value: 'hospitality_tourism', label: 'Pariwisata & Perhotelan' },
  { value: 'nursing_healthcare', label: 'Keperawatan & Kesehatan' },
  { value: 'welding_metalworking', label: 'Las & Pengerjaan Logam' },
  { value: 'agriculture', label: 'Pertanian' },
  { value: 'business_management', label: 'Bisnis & Manajemen' },
  { value: 'economics_finance', label: 'Ekonomi & Keuangan' },
  { value: 'education', label: 'Pendidikan' },
  { value: 'information_technology', label: 'Teknologi Informasi' },
  { value: 'social_sciences', label: 'Ilmu Sosial' },
  { value: 'communication_media', label: 'Komunikasi & Media' },
  { value: 'law', label: 'Hukum' },
  { value: 'other_general', label: 'Lainnya' },
];

const SHOW_MAJOR_FOR = ['sma_smk', 'diploma', 'bachelor'];

export default function PreAssessmentEducation() {
  const [level, setLevel] = useState('');
  const [major, setMajor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const showMajor = SHOW_MAJOR_FOR.includes(level);

  const canSubmit = level && (!showMajor || major);

  const handleSubmit = () => {
    setSubmitted(true);
    if (!canSubmit) return;
    console.log('Education complete → PA-09 Results', { level, major });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-07 Language')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 space-y-6">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 6 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">75%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[75%]" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap size={20} className="text-[var(--brand-green-600)]" />
            <h2>Latar Belakang Pendidikan</h2>
          </div>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Hampir selesai. Ceritakan pendidikan terakhirmu — ini hanya sebagian kecil dari pencocokan jalur.
          </p>
        </div>

        {/* Education Level */}
        <div>
          <p className="text-[14px] font-semibold text-[var(--text-primary)] mb-3">Pendidikan terakhir</p>
          <div className="space-y-2">
            {EDUCATION_LEVELS.map((edu) => (
              <button
                key={edu.value}
                onClick={() => { setLevel(edu.value); setMajor(''); }}
                className={`w-full text-left px-3 py-3 rounded-[10px] border-[1.5px] transition-colors ${
                  level === edu.value
                    ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
                    : 'border-[var(--border-default)] bg-white'
                }`}
              >
                <span className="text-[14px] text-[var(--text-primary)]">{edu.label}</span>
              </button>
            ))}
          </div>
          {submitted && !level && <p className="text-[12px] text-red-500 mt-1">Pilih pendidikan terakhirmu</p>}
        </div>

        {/* Major — shown conditionally */}
        {showMajor && (
          <div>
            <p className="text-[14px] font-semibold text-[var(--text-primary)] mb-3">Jurusan / Bidang studi</p>
            <div className="space-y-2">
              {MAJORS.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMajor(m.value)}
                  className={`w-full text-left px-3 py-3 rounded-[10px] border-[1.5px] transition-colors ${
                    major === m.value
                      ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
                      : 'border-[var(--border-default)] bg-white'
                  }`}
                >
                  <span className="text-[14px] text-[var(--text-primary)]">{m.label}</span>
                </button>
              ))}
            </div>
            {submitted && showMajor && !major && (
              <p className="text-[12px] text-red-500 mt-1">Pilih jurusan atau bidang studimu</p>
            )}
          </div>
        )}

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
