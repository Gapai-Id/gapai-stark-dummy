'use client'

import React, { useState } from 'react';
import { ArrowLeft, CheckSquare } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

// Skills filtered by industry selection (simulating PA-04 → hospitality + food_and_beverage selection)
const MOCK_SKILLS = [
  { value: 'room_cleaning', label: 'Bersih-bersih Kamar & Housekeeping' },
  { value: 'facility_cleaning', label: 'Kebersihan Gedung & Fasilitas' },
  { value: 'spa_massage', label: 'Terapi Spa & Pijat' },
  { value: 'guest_service', label: 'Pelayanan Tamu & Waiting' },
  { value: 'cooking', label: 'Memasak' },
  { value: 'kitchen_helper', label: 'Bantuan Dapur' },
  { value: 'dishwashing', label: 'Mencuci Piring' },
];

export default function PreAssessmentStep2() {
  const [skills, setSkills] = useState<string[]>([]);

  const toggle = (v: string) =>
    setSkills((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);

  const handleSubmit = () => {
    console.log('Step 2 complete → PA-06 Tools', { skills });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-04 Experience + Industry')}
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
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 3 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">38%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[38%]" />
          </div>
        </div>

        <div>
          <h2 className="mb-1">Keahlian yang Kamu Punya</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Pilih keahlian yang pernah kamu lakukan. Tidak ada yang benar atau salah — ceritakan kondisi sebenarnya.
          </p>
        </div>

        {/* Skills list */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckSquare size={16} className="text-[var(--brand-green-600)]" />
            <p className="text-[14px] font-semibold text-[var(--text-primary)]">Keahlian</p>
            <span className="text-[12px] text-[var(--text-muted)]">— boleh lewati jika tidak ada</span>
          </div>
          <div className="space-y-2">
            {MOCK_SKILLS.map((skill) => {
              const selected = skills.includes(skill.value);
              return (
                <button
                  key={skill.value}
                  onClick={() => toggle(skill.value)}
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
                  <span className="text-[14px] text-[var(--text-primary)]">{skill.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="primary" onClick={handleSubmit}>
            Lanjutkan
          </Button>
          <button
            onClick={() => console.log('Skip Skills → PA-06 Tools')}
            className="w-full text-[14px] text-[var(--text-muted)] text-center py-2"
          >
            Lewati — saya tidak memiliki keahlian ini
          </button>
        </div>
      </main>
    </div>
  );
}
