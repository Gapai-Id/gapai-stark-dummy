'use client'

import React, { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from '@/components/design-system/Button'

const CURRENT_Q = 3
const TOTAL_Q = 12

const question = {
  passage: 'Petugas: "Selamat siang, ada yang bisa saya bantu?"\nSari: "Ya, saya ingin bertanya tentang jadwal keberangkatan."',
  text: 'Apa tujuan utama Sari dalam percakapan tersebut?',
  options: [
    { key: 'A', text: 'Meminta bantuan memindahkan barang' },
    { key: 'B', text: 'Menanyakan jadwal keberangkatan' },
    { key: 'C', text: 'Memperkenalkan diri kepada petugas' },
    { key: 'D', text: 'Memesan tiket perjalanan' },
  ],
}

export default function AssessmentLanguageQuestion() {
  const [selected, setSelected] = useState<string | null>(null)
  const progress = (CURRENT_Q / TOTAL_Q) * 100

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Sticky progress header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[var(--border-subtle)] px-5 py-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[12px] font-semibold text-[var(--text-brand)]">
            Bagian 1 dari 2 · Kemampuan Bahasa
          </p>
          <p className="text-[12px] text-[var(--text-muted)]">
            Pertanyaan {CURRENT_Q} dari {TOTAL_Q}
          </p>
        </div>
        <div className="h-1.5 bg-[var(--neutral-200)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--brand-green-500)] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <main className="flex-1 px-5 py-5 flex flex-col gap-4">
        {/* Auto-save indicator */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[var(--brand-green-400)]" />
          <p className="text-[12px] text-[var(--text-muted)]">Tersimpan otomatis</p>
        </div>

        {/* Passage */}
        <div className="bg-[var(--neutral-100)] rounded-[12px] px-4 py-3 border-l-4 border-[var(--brand-green-300)]">
          <p className="text-[12px] font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wide">Bacaan</p>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] whitespace-pre-line">
            {question.passage}
          </p>
        </div>

        {/* Question */}
        <div className="bg-white rounded-[12px] px-4 py-3 border border-[var(--border-subtle)]">
          <p className="text-[15px] leading-[24px] text-[var(--text-primary)] font-medium">
            {question.text}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelected(opt.key)}
              className={`w-full text-left p-3.5 rounded-[12px] border-2 transition-all ${
                selected === opt.key
                  ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-50)]'
                  : 'border-[var(--border-subtle)] bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                  selected === opt.key
                    ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-500)]'
                    : 'border-[var(--neutral-300)]'
                }`}>
                  {selected === opt.key && <Check size={12} className="text-white" />}
                </div>
                <div className="flex-1">
                  <span className={`text-[14px] font-semibold mr-1 ${
                    selected === opt.key ? 'text-[var(--brand-green-700)]' : 'text-[var(--text-muted)]'
                  }`}>
                    {opt.key}.
                  </span>
                  <span className="text-[14px] leading-[22px] text-[var(--text-primary)]">{opt.text}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mt-auto pt-2 pb-6">
          <button
            onClick={() => console.log('Back to Q2 (read-only)')}
            className="flex items-center gap-1.5 px-4 h-[52px] rounded-[12px] border border-[var(--border-default)] text-[14px] font-medium text-[var(--text-secondary)] bg-white flex-shrink-0"
          >
            <ArrowLeft size={16} />
            <span>Sebelumnya</span>
          </button>
          <div className="flex-1">
            <Button
              variant="primary"
              disabled={!selected}
              onClick={() => console.log('Next → Q4')}
            >
              Lanjutkan
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
