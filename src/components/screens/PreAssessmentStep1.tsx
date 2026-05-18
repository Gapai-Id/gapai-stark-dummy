'use client'

import React, { useState } from 'react';
import { ArrowLeft, Clock, Briefcase } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

const EXPERIENCE = [
  { value: 'none', label: 'Belum ada pengalaman kerja' },
  { value: 'less_than_1', label: 'Kurang dari 1 tahun' },
  { value: '1_to_3', label: '1–3 tahun' },
  { value: '3_to_5', label: '3–5 tahun' },
  { value: 'more_than_5', label: 'Lebih dari 5 tahun' },
];

const INDUSTRIES = [
  { value: 'hospitality', label: 'Hotel & Pekerjaan Kamar' },
  { value: 'food_and_beverage', label: 'Dapur & Makanan' },
  { value: 'healthcare', label: 'Kesehatan & Perawatan' },
  { value: 'manufacturing', label: 'Pabrik & Produksi' },
  { value: 'agriculture', label: 'Pertanian & Perkebunan' },
];

export default function PreAssessmentStep1() {
  const [experience, setExperience] = useState('');
  const [industries, setIndustries] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const hasExperience = experience !== '' && experience !== 'none';

  const toggleIndustry = (v: string) =>
    setIndustries((prev) =>
      prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]
    );

  const canSubmit = experience !== '' && (!hasExperience || industries.length > 0);

  const handleSubmit = () => {
    setSubmitted(true);
    if (!canSubmit) return;
    if (!hasExperience) {
      console.log('No experience → skip to PA-07 Language', { experience });
    } else {
      console.log('Experience complete → PA-05 Skills', { experience, industries });
    }
  };

  const expError = submitted && !experience;
  const indError = submitted && hasExperience && industries.length === 0;

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-03 Destination')}
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
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 2 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">25%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[25%]" />
          </div>
        </div>

        <div>
          <h2 className="mb-1">Pengalaman Kerja</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Ceritakan latar belakang kerjamu — ini membantu kami mencocokkan jalur yang paling tepat.
          </p>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-[var(--brand-green-600)]" />
            <p className="text-[14px] font-semibold text-[var(--text-primary)]">Berapa lama pengalaman kerjamu?</p>
          </div>
          <div className="space-y-2">
            {EXPERIENCE.map((exp) => (
              <button
                key={exp.value}
                onClick={() => { setExperience(exp.value); if (exp.value === 'none') setIndustries([]); }}
                className={`w-full text-left px-3 py-3 rounded-[10px] border-[1.5px] transition-colors ${
                  experience === exp.value
                    ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
                    : 'border-[var(--border-default)] bg-white'
                }`}
              >
                <span className="text-[14px] text-[var(--text-primary)]">{exp.label}</span>
              </button>
            ))}
          </div>
          {expError && <p className="text-[12px] text-red-500 mt-1">Pilih lama pengalaman kerjamu</p>}
        </div>

        {/* Industry — only shown when has experience */}
        {hasExperience && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-[var(--brand-green-600)]" />
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">Latar belakang pekerjaan?</p>
            </div>
            <p className="text-[12px] text-[var(--text-muted)] mb-2">Boleh pilih lebih dari satu.</p>
            <div className="space-y-2">
              {INDUSTRIES.map((ind) => {
                const selected = industries.includes(ind.value);
                return (
                  <button
                    key={ind.value}
                    onClick={() => toggleIndustry(ind.value)}
                    className={`w-full text-left px-3 py-3 rounded-[10px] border-[1.5px] flex items-center gap-3 transition-colors ${
                      selected
                        ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
                        : 'border-[var(--border-default)] bg-white'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-[4px] border-[1.5px] flex items-center justify-center flex-shrink-0 ${
                      selected ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-500)]' : 'border-[var(--border-default)]'
                    }`}>
                      {selected && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-[14px] text-[var(--text-primary)]">{ind.label}</span>
                  </button>
                );
              })}
            </div>
            {indError && <p className="text-[12px] text-red-500 mt-1">Pilih minimal satu latar belakang</p>}
          </div>
        )}

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
