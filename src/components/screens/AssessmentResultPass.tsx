'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircle2, Star, Loader2 } from 'lucide-react'
import { Card } from '@/components/design-system/Card'
import { Button } from '@/components/design-system/Button'

export default function AssessmentResultPass() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

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
      <div className="bg-[var(--brand-green-700)] px-5 pt-12 pb-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle2 size={36} className="text-white" />
          </div>
        </div>
        <h2 className="text-white mb-2">Kamu Siap Berangkat! 🎉</h2>
        <p className="text-[14px] text-white/80 leading-[22px]">
          Hasil assessmentmu menunjukkan kamu siap untuk jalur Caregiver Jepang.
        </p>
      </div>

      <main className="flex-1 px-5 py-5 space-y-4">
        <Card variant="tinted">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
              <Star size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[13px] text-[var(--text-muted)]">Kemampuan Bahasa Terverifikasi</p>
              <p className="text-[16px] font-bold text-[var(--text-primary)]">Setara JLPT N3</p>
            </div>
          </div>
        </Card>

        <Card variant="default">
          <h4 className="mb-3">Langkah selanjutnya</h4>
          <div className="space-y-3">
            {[
              'Status kesiapanmu sudah terkonfirmasi secara resmi',
              'Admin Gapai akan menghubungimu untuk proses aktivasi',
              'Jalur Caregiver Jepang siap dimulai',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[var(--brand-green-500)] flex-shrink-0">✓</span>
                <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <Button variant="primary" onClick={() => console.log('Go to Activation → D-S5a')}>
          Mulai Aktivasimu
        </Button>
      </main>
    </div>
  )
}
