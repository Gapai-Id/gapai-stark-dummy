'use client'

import React, { useState } from 'react';
import { ArrowLeft, Languages, Plus, X } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

const LANGUAGE_OPTIONS = [
  { value: 'english', label: 'Bahasa Inggris' },
  { value: 'japanese', label: 'Bahasa Jepang' },
  { value: 'german', label: 'Bahasa Jerman' },
  { value: 'arabic', label: 'Bahasa Arab' },
  { value: 'malay', label: 'Bahasa Melayu' },
];

const LEVELS = [
  { value: 'basic', label: 'Dasar', desc: 'Mengerti kata-kata umum, belum bisa percakapan' },
  { value: 'conversational', label: 'Percakapan sehari-hari', desc: 'Bisa ngobrol dan memahami situasi umum' },
  { value: 'professional', label: 'Profesional / Fasih', desc: 'Lancar untuk kerja dan diskusi formal' },
  { value: 'native', label: 'Bilingual', desc: 'Tumbuh dengan bahasa ini atau fasih seperti penutur asli' },
];

interface LangEntry {
  id: string;
  lang: string;
  level: string;
  hasCert: boolean;
}

export default function PreAssessmentLanguage() {
  const [entries, setEntries] = useState<LangEntry[]>([
    { id: '1', lang: '', level: '', hasCert: false },
  ]);
  const [noneAbove, setNoneAbove] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const addEntry = () => {
    setNoneAbove(false);
    setEntries((prev) => [...prev, { id: Date.now().toString(), lang: '', level: '', hasCert: false }]);
  };

  const removeEntry = (id: string) =>
    setEntries((prev) => prev.filter((e) => e.id !== id));

  const updateEntry = (id: string, field: keyof LangEntry, value: string | boolean) =>
    setEntries((prev) => prev.map((e) => e.id === id ? { ...e, [field]: value } : e));

  const usedLanguages = entries.map((e) => e.lang).filter(Boolean);
  const availableFor = (id: string) => {
    const current = entries.find((e) => e.id === id)?.lang || '';
    return LANGUAGE_OPTIONS.filter((l) => l.value === current || !usedLanguages.includes(l.value));
  };

  const allEntriesFilled = entries.every((e) => e.lang && e.level);
  const canSubmit = noneAbove || allEntriesFilled;

  const handleSubmit = () => {
    setSubmitted(true);
    if (!canSubmit) return;
    console.log('Language complete → PA-08 Education', { noneAbove, entries });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-06 Step 3')}
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
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 5 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">63%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[63%]" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Languages size={20} className="text-[var(--brand-green-600)]" />
            <h2>Kemampuan Bahasa</h2>
          </div>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Bahasa adalah salah satu faktor utama dalam pencocokan jalur kerja. Ceritakan bahasa yang kamu bisa.
          </p>
        </div>

        {/* Language entries */}
        {!noneAbove && (
          <div className="space-y-4">
            {entries.map((entry, idx) => (
              <div
                key={entry.id}
                className="p-4 rounded-[12px] border-[1.5px] border-[var(--border-default)] bg-white space-y-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-[var(--text-primary)]">Bahasa {idx + 1}</p>
                  {entries.length > 1 && (
                    <button onClick={() => removeEntry(entry.id)} className="text-[var(--text-muted)] hover:text-red-500">
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* Language select */}
                <div>
                  <label className="block text-[12px] text-[var(--text-muted)] mb-1">Bahasa</label>
                  <select
                    value={entry.lang}
                    onChange={(e) => updateEntry(entry.id, 'lang', e.target.value)}
                    className={`w-full h-[44px] px-3 border-[1.5px] rounded-[8px] text-[14px] bg-white focus:border-[var(--border-brand)] focus:outline-none ${
                      submitted && !entry.lang ? 'border-red-400' : 'border-[var(--border-default)]'
                    }`}
                  >
                    <option value="">Pilih bahasa</option>
                    {availableFor(entry.id).map((l) => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>

                {/* Level select */}
                <div>
                  <label className="block text-[12px] text-[var(--text-muted)] mb-2">
                    Level kemampuan — <span className="italic">dari terendah ke tertinggi</span>
                  </label>
                  <div className="space-y-1.5">
                    {LEVELS.map((lv, idx) => {
                      const selected = entry.level === lv.value;
                      return (
                        <button
                          key={lv.value}
                          onClick={() => updateEntry(entry.id, 'level', lv.value)}
                          className={`w-full text-left px-3 py-2.5 rounded-[8px] border-[1.5px] flex items-center gap-3 transition-colors ${
                            selected
                              ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
                              : 'border-[var(--border-default)] bg-white'
                          }`}
                        >
                          <span className={`text-[11px] font-semibold w-4 flex-shrink-0 ${
                            selected ? 'text-[var(--brand-green-600)]' : 'text-[var(--text-muted)]'
                          }`}>
                            {idx + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-[13px] font-semibold leading-[18px] ${
                              selected ? 'text-[var(--brand-green-700)]' : 'text-[var(--text-primary)]'
                            }`}>
                              {lv.label}
                            </p>
                            <p className="text-[11px] text-[var(--text-muted)] leading-[16px] mt-0.5">
                              {lv.desc}
                            </p>
                          </div>
                          {selected && (
                            <div className="w-4 h-4 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
                              <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && !entry.level && (
                    <p className="text-[12px] text-red-500 mt-1">Pilih level kemampuan</p>
                  )}
                </div>

                {/* Certificate */}
                <div>
                  <label className="block text-[12px] text-[var(--text-muted)] mb-1">Punya sertifikat bahasa?</label>
                  <div className="flex gap-2">
                    {[{ v: true, l: 'Ya, punya' }, { v: false, l: 'Belum ada' }].map(({ v, l }) => (
                      <button
                        key={l}
                        onClick={() => updateEntry(entry.id, 'hasCert', v)}
                        className={`flex-1 py-2 rounded-[8px] border-[1.5px] text-[12px] font-medium transition-colors ${
                          entry.hasCert === v
                            ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)] text-[var(--brand-green-700)]'
                            : 'border-[var(--border-default)] text-[var(--text-primary)]'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Add language */}
            {usedLanguages.length < LANGUAGE_OPTIONS.length && (
              <button
                onClick={addEntry}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-[10px] border-[1.5px] border-dashed border-[var(--border-brand)] text-[14px] text-[var(--text-brand)] font-medium"
              >
                <Plus size={16} />
                Tambah bahasa lain
              </button>
            )}
          </div>
        )}

        {/* None of the above */}
        <button
          onClick={() => { setNoneAbove(!noneAbove); if (!noneAbove) setEntries([{ id: '1', lang: '', level: '', hasCert: false }]); }}
          className={`w-full text-left px-3 py-3 rounded-[10px] border-[1.5px] flex items-center gap-3 transition-colors ${
            noneAbove
              ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
              : 'border-[var(--border-default)] bg-white'
          }`}
        >
          <div className={`w-5 h-5 rounded-[4px] border-[1.5px] flex items-center justify-center flex-shrink-0 ${
            noneAbove ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-500)]' : 'border-[var(--border-default)]'
          }`}>
            {noneAbove && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-[14px] text-[var(--text-primary)]">Saya tidak berbicara bahasa asing</span>
        </button>

        {noneAbove && (
          <p className="text-[13px] text-[var(--text-muted)] bg-[var(--brand-green-50)] p-3 rounded-[10px]">
            Tidak apa-apa. Jalur kerja yang cocok tetap akan ditampilkan berdasarkan profilmu secara keseluruhan.
          </p>
        )}

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
