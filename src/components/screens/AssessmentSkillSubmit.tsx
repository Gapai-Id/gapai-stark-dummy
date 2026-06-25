'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/design-system/Button'

export default function AssessmentSkillSubmit() {
  const SUMMARY = [
    { label: 'Kemampuan Bahasa Jepang', value: 'Selesai ✓', ok: true },
    { label: 'Rekaman Suara', value: 'Selesai ✓', ok: true },
    { label: 'Kemampuan Hospitality', value: '15/15 soal ✓', ok: true },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Dark green hero */}
      <div className="bg-[var(--brand-green-800)] px-5 pt-12 pb-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle2 size={36} className="text-white" />
          </div>
        </div>
        <h1 className="text-[22px] font-bold leading-[30px] text-white mb-2">
          Semua soal telah dijawab
        </h1>
        <p className="text-[14px] text-white/80 leading-[22px]">
          15 dari 15 soal selesai. Siap untuk mengirim?
        </p>
      </div>

      {/* Slide-over content */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-white">
        <div className="px-5 pt-6 pb-10 space-y-4">
          {/* Summary card */}
          <div className="bg-neutral-50 rounded-[16px] border border-[var(--border-subtle)] p-4 space-y-3">
            <p className="text-[14px] font-semibold text-[var(--text-primary)]">
              Ringkasan assessment
            </p>
            {SUMMARY.map(item => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[14px] text-[var(--text-secondary)]">{item.label}</span>
                <span className="text-[14px] font-semibold text-[var(--brand-green-600)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="bg-neutral-50 rounded-[16px] border border-[var(--border-subtle)] p-4">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Setelah dikirim, jawabanmu{' '}
              <span className="font-semibold text-[var(--text-primary)]">tidak bisa diubah</span>.
              Hasil assessment akan muncul dalam beberapa saat.
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <Button
              variant="primary"
              onClick={() => console.log('Submit assessment → AS-05 Result Pass')}
            >
              Kirim Assessment
            </Button>
            <button
              type="button"
              onClick={() => console.log('Review answers → AS-04')}
              className="w-full py-4 rounded-[12px] border border-[var(--border-subtle)] text-[14px] font-semibold text-[var(--text-muted)]"
            >
              Tinjau Jawaban Dulu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
