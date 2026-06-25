'use client'

import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/design-system/Button'

const STATEMENTS = [
  'Saya bisa memahami percakapan sehari-hari dalam Bahasa Jepang',
  'Saya bisa membaca teks sederhana seperti petunjuk atau pengumuman',
  'Saya bisa berkomunikasi tentang topik pekerjaan dasar',
  'Saya bisa memahami instruksi tertulis di tempat kerja',
  'Saya pernah menggunakan Bahasa Jepang di lingkungan profesional',
]

type Answer = 'yes' | 'not_yet' | null

export default function AssessmentLanguageSelfReport() {
  const [answers, setAnswers] = useState<Answer[]>(Array(STATEMENTS.length).fill(null))

  const toggle = (idx: number, val: 'yes' | 'not_yet') => {
    setAnswers(prev => {
      const next = [...prev]
      next[idx] = next[idx] === val ? null : val
      return next
    })
  }

  const allAnswered = answers.every(a => a !== null)

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[var(--border-subtle)]">
        <div className="px-5 py-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-[var(--text-brand)]">
              Bagian 1 — Kemampuan Bahasa Jepang
            </p>
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 1 dari 3</p>
          </div>
          <div className="h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
            <div className="h-full w-[8%] bg-[var(--brand-green-500)] rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-5 flex flex-col gap-5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[var(--brand-green-400)]" />
          <p className="text-[12px] text-[var(--text-muted)]">Tersimpan otomatis</p>
        </div>

        <div>
          <h1 className="text-[18px] font-bold leading-[26px] text-[var(--text-primary)] mb-2">
            Seberapa familiar kamu dengan Bahasa Jepang?
          </h1>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Pilih{' '}
            <span className="font-semibold text-[var(--text-brand)]">Sudah bisa</span>{' '}
            atau <span className="font-semibold text-[var(--text-secondary)]">Belum</span>{' '}
            untuk setiap pernyataan. Jawab jujur — ini membantu kami menyesuaikan soal yang kamu terima.
          </p>
        </div>

        <div className="space-y-3">
          {STATEMENTS.map((stmt, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4 space-y-3"
            >
              <p className="text-[14px] leading-[22px] text-[var(--text-primary)]">{stmt}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => toggle(i, 'yes')}
                  className={`flex-1 py-2.5 rounded-[12px] border-2 text-[14px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    answers[i] === 'yes'
                      ? 'border-[var(--brand-green-500)] bg-[var(--brand-green-50)] text-[var(--brand-green-700)]'
                      : 'border-[var(--border-subtle)] text-[var(--text-muted)]'
                  }`}
                >
                  {answers[i] === 'yes' && <Check size={14} />}
                  Sudah bisa
                </button>
                <button
                  type="button"
                  onClick={() => toggle(i, 'not_yet')}
                  className={`flex-1 py-2.5 rounded-[12px] border-2 text-[14px] font-semibold transition-all ${
                    answers[i] === 'not_yet'
                      ? 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      : 'border-[var(--border-subtle)] text-[var(--text-muted)]'
                  }`}
                >
                  Belum
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-6">
          <Button
            variant={allAnswered ? 'primary' : 'secondary'}
            onClick={() => console.log('Submit self-report → AS-02b MCQ')}
          >
            Lanjutkan
          </Button>
        </div>
      </div>
    </div>
  )
}
