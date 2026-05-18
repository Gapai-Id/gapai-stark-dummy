'use client'

import React, { useState } from 'react';
import { ArrowLeft, Wrench } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

// Tools filtered by skill selection from PA-05 (simulating cooking + kitchen_helper selection)
const MOCK_TOOLS = [
  { value: 'kitchen_utensils', label: 'Peralatan & Perangkat Masak' },
  { value: 'food_hygiene_storage', label: 'Penyimpanan & Kebersihan Makanan' },
  { value: 'serving_equipment', label: 'Peralatan Saji & Makan' },
  { value: 'cleaning_equipment', label: 'Peralatan & Bahan Kebersihan' },
];

export default function PreAssessmentStep3() {
  const [tools, setTools] = useState<string[]>([]);

  const toggle = (v: string) =>
    setTools((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);

  const handleSubmit = () => {
    console.log('Tools complete → PA-07 Language', { tools });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-05 Skills')}
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
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 4 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">50%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[50%]" />
          </div>
        </div>

        <div>
          <h2 className="mb-1">Alat & Peralatan yang Pernah Dipakai</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Jika pernah menggunakan alat-alat tertentu di pekerjaan, ceritakan. Ini opsional — bisa dilewati.
          </p>
        </div>

        {/* Tools list */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Wrench size={16} className="text-[var(--brand-green-600)]" />
            <p className="text-[14px] font-semibold text-[var(--text-primary)]">Alat & Peralatan</p>
          </div>
          <div className="space-y-2">
            {MOCK_TOOLS.map((tool) => {
              const selected = tools.includes(tool.value);
              return (
                <button
                  key={tool.value}
                  onClick={() => toggle(tool.value)}
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
                  <span className="text-[14px] text-[var(--text-primary)]">{tool.label}</span>
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
            onClick={() => console.log('Skip Tools → PA-07 Language')}
            className="w-full text-[14px] text-[var(--text-muted)] text-center py-2"
          >
            Lewati langkah ini
          </button>
        </div>
      </main>
    </div>
  );
}
