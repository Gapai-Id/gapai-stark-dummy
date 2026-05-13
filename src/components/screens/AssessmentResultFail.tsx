'use client'

import React, { useState, useEffect } from 'react'
import { BookOpen, Wrench, Loader2 } from 'lucide-react'
import { Card } from '@/components/design-system/Card'
import { Button } from '@/components/design-system/Button'

type FailVariant = 'language' | 'skill' | 'both'

const failContent: Record<FailVariant, {
  title: string
  subtitle: string
  gaps: Array<{ label: string; icon: 'language' | 'skill' }>
  cta: string
  ctaNote: string
}> = {
  language: {
    title: 'Kemampuan bahasamu perlu dikembangkan lebih dulu',
    subtitle: 'Hasil assessmentmu menunjukkan ada area bahasa yang masih perlu diperkuat. Ini informasi, bukan penilaian.',
    gaps: [{ label: 'Kemampuan Bahasa Jepang', icon: 'language' }],
    cta: 'Lihat Program Bahasa',
    ctaNote: 'Kamu bebas memilih program yang paling sesuai dengan jadwal dan kebutuhanmu.',
  },
  skill: {
    title: 'Kemampuan teknismu perlu dikembangkan lebih dulu',
    subtitle: 'Hasil assessmentmu menunjukkan beberapa kemampuan caregiver yang masih bisa diperkuat.',
    gaps: [{ label: 'Kemampuan Teknis Caregiver', icon: 'skill' }],
    cta: 'Lihat Program Pelatihan JAKER',
    ctaNote: 'Kamu bebas memilih program yang paling sesuai dengan jadwal dan kebutuhanmu.',
  },
  both: {
    title: 'Ada beberapa area yang perlu dikembangkan lebih dulu',
    subtitle: 'Banyak kandidat berhasil berangkat setelah pelatihan. Ini langkah selanjutnya, bukan akhir dari perjalananmu.',
    gaps: [
      { label: 'Kemampuan Bahasa Jepang', icon: 'language' },
      { label: 'Kemampuan Teknis Caregiver', icon: 'skill' },
    ],
    cta: 'Lihat Program Pelatihanmu',
    ctaNote: 'Admin Gapai siap membantumu merencanakan jalur pelatihan yang paling efisien.',
  },
}

export default function AssessmentResultFail() {
  const [isLoading, setIsLoading] = useState(true)
  const [variant, setVariant] = useState<FailVariant>('language')

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const content = failContent[variant]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col items-center justify-center px-5 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center mb-6">
          <Loader2 size={32} className="text-[var(--brand-green-500)] animate-spin" />
        </div>
        <h3 className="mb-3">Kami sedang mengevaluasi assessmentmu</h3>
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
          Ini biasanya hanya sebentar — tunggu sebentar ya.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Prototype variant switcher */}
      <div className="bg-[var(--neutral-100)] border-b border-[var(--border-subtle)] px-4 py-2">
        <div className="flex items-center gap-2">
          <p className="text-[11px] text-[var(--text-muted)]">Prototype:</p>
          <div className="flex gap-1">
            {(['language', 'skill', 'both'] as FailVariant[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  variant === v
                    ? 'bg-[var(--brand-green-500)] text-white'
                    : 'bg-white border border-[var(--border-default)] text-[var(--text-secondary)]'
                }`}
              >
                {v === 'language' ? 'Bahasa' : v === 'skill' ? 'Skill' : 'Keduanya'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[var(--neutral-700)] px-5 pt-10 pb-8 text-center">
        <div className="text-[48px] mb-4">🌱</div>
        <h2 className="text-white mb-2">{content.title}</h2>
        <p className="text-[14px] text-white/75 leading-[22px]">
          {content.subtitle}
        </p>
      </div>

      <main className="flex-1 px-5 py-5 space-y-4">
        <Card variant="default">
          <h4 className="mb-3">Area yang perlu dikembangkan</h4>
          <div className="space-y-2">
            {content.gaps.map((gap, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-[var(--neutral-50)] rounded-[10px] border border-[var(--border-subtle)]">
                <div className="w-8 h-8 rounded-full bg-[var(--neutral-200)] flex items-center justify-center flex-shrink-0">
                  {gap.icon === 'language' ? (
                    <BookOpen size={16} className="text-[var(--text-secondary)]" />
                  ) : (
                    <Wrench size={16} className="text-[var(--text-secondary)]" />
                  )}
                </div>
                <p className="text-[14px] font-medium text-[var(--text-primary)]">{gap.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="tinted">
          <div className="space-y-2.5">
            {[
              'Ini bukan akhir dari perjalananmu',
              'Banyak kandidat berhasil berangkat setelah pelatihan',
              'Kamu bisa kembali ke assessment setelah siap',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-[13px] leading-[20px] text-[var(--text-muted)] px-1">
          {content.ctaNote}
        </p>

        <Button variant="primary" onClick={() => console.log(`CTA: ${content.cta}`)}>
          {content.cta}
        </Button>
      </main>
    </div>
  )
}
