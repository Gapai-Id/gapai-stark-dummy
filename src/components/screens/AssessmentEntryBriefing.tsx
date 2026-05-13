'use client'

import React from 'react'
import { ArrowLeft, Clock, BookOpen, Wrench, RefreshCw } from 'lucide-react'
import { Card } from '@/components/design-system/Card'
import { Button } from '@/components/design-system/Button'
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard'

export default function AssessmentEntryBriefing() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center px-5">
          <button
            onClick={() => console.log('Back to D-S3-fresh')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      <main className="flex-1 px-5 py-5 space-y-4 pb-10">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        <div>
          <h2 className="mb-2">Ukur kesiapanmu</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Assessment ini membantu kami menemukan jalur terbaik untukmu — dan membantumu tahu persis di mana kamu sudah siap.
          </p>
        </div>

        <Card variant="tinted">
          <h4 className="mb-4">Assessment terdiri dari 2 bagian</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
                <BookOpen size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[var(--text-primary)]">Bagian 1 — Kemampuan Bahasa</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={12} className="text-[var(--text-muted)]" />
                  <p className="text-[13px] text-[var(--text-muted)]">±12 menit · 12 pertanyaan</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-[var(--border-subtle)]" />
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
                <Wrench size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[var(--text-primary)]">Bagian 2 — Kemampuan Caregiver</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={12} className="text-[var(--text-muted)]" />
                  <p className="text-[13px] text-[var(--text-muted)]">±15 menit · 15 pertanyaan</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card variant="default">
          <div className="space-y-3">
            {[
              'Bisa disimpan dan dilanjutkan kapan saja',
              'Progress otomatis tersimpan saat kamu keluar',
              'Assessment hanya bisa diikuti satu kali — jawab sejujurnya',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[var(--brand-green-600)] text-[10px] font-bold">✓</span>
                </div>
                <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex items-start gap-2 px-1">
          <RefreshCw size={14} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] leading-[20px] text-[var(--text-muted)]">
            Kalau kamu perlu berhenti, progresmu tersimpan otomatis. Kembali ke layar ini kapan pun kamu siap melanjutkan.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => console.log('Start assessment → AS-02')}
        >
          Mulai Penilaianku
        </Button>
      </main>
    </div>
  )
}
