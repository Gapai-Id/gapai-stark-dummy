'use client'

import React from 'react'
import { CheckCircle2, Clock, Lock, ChevronRight } from 'lucide-react'
import { Card } from '@/components/design-system/Card'
import { Button } from '@/components/design-system/Button'

export default function AssessmentMidTransition() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Green completion hero */}
      <div className="bg-[var(--brand-green-700)] px-5 pt-12 pb-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle2 size={36} className="text-white" />
          </div>
        </div>
        <h2 className="text-white mb-2">Bagian 1 Selesai</h2>
        <p className="text-[14px] text-white/80 leading-[22px]">
          Kamu sudah menjawab semua pertanyaan kemampuan bahasa. Kerja bagus!
        </p>
      </div>

      <main className="flex-1 px-5 py-5 space-y-4">
        {/* Review Part 1 */}
        <Card variant="default">
          <button
            className="w-full flex items-center gap-3"
            onClick={() => console.log('Review Part 1 (read-only)')}
          >
            <div className="w-9 h-9 rounded-full bg-[var(--neutral-100)] flex items-center justify-center flex-shrink-0">
              <Lock size={16} className="text-[var(--text-muted)]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">Tinjau jawaban Bagian 1</p>
              <p className="text-[13px] text-[var(--text-muted)]">Hanya bisa dibaca, tidak bisa diubah</p>
            </div>
            <ChevronRight size={18} className="text-[var(--text-muted)]" />
          </button>
        </Card>

        {/* Part 2 preview */}
        <Card variant="tinted">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[15px] font-bold">2</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">
                Selanjutnya: Kemampuan Caregiver
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Clock size={12} className="text-[var(--text-muted)]" />
                <p className="text-[13px] text-[var(--text-muted)]">±15 menit · 15 pertanyaan skenario</p>
              </div>
            </div>
          </div>
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Pertanyaan berbasis skenario — tidak ada jawaban benar/salah. Kami ingin tahu bagaimana kamu berpikir dan bekerja.
          </p>
        </Card>

        {/* Lock note */}
        <div className="flex items-start gap-2 px-1">
          <Lock size={14} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] leading-[20px] text-[var(--text-muted)]">
            Setelah kamu lanjut ke Bagian 2, jawaban Bagian 1 tidak bisa diubah lagi.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => console.log('Confirm → AS-04 Skill assessment')}
        >
          Lanjut ke Bagian 2
        </Button>
      </main>
    </div>
  )
}
