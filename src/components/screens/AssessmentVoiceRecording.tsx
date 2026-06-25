'use client'

import React, { useState } from 'react'
import { Mic, Square, CheckCircle2, Volume2, Clock } from 'lucide-react'
import { Button } from '@/components/design-system/Button'

type Phase = 'rules' | 'scenario'
type RecordState = 'countdown' | 'recording' | 'recorded'

export default function AssessmentVoiceRecording() {
  const [phase, setPhase] = useState<Phase>('rules')
  const [recState, setRecState] = useState<RecordState>('countdown')
  const [elapsed, setElapsed] = useState(0)

  const RULES = [
    'Kamu akan membaca skenario situasi kerja di layar berikutnya.',
    'Kamu punya 15 detik untuk membaca — setelah itu rekaman dimulai otomatis.',
    'Jika sudah siap lebih cepat, ketuk tombol mikrofon untuk mulai merekam.',
    'Maksimal 60 detik merekam — kamu bisa berhenti kapan saja.',
  ]

  const SCENARIO = 'Seorang tamu hotel mengeluh kamarnya belum dibersihkan meski sudah pukul 14:00. Ia terdengar kesal dan meminta penjelasan. Bagaimana kamu merespons situasi ini?'

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[var(--border-subtle)]">
        <div className="px-5 py-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-[var(--text-brand)]">
              Bagian 1 — Kemampuan Bahasa Jepang
            </p>
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 3 dari 3</p>
          </div>
          <div className="h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
            <div className="h-full w-full bg-[var(--brand-green-500)] rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-5 flex flex-col gap-5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[var(--brand-green-400)]" />
          <p className="text-[12px] text-[var(--text-muted)]">Tersimpan otomatis</p>
        </div>

        {phase === 'rules' ? (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--brand-green-50)] rounded-full border border-[var(--brand-green-100)] mb-3">
                <Volume2 size={12} className="text-[var(--brand-green-600)]" />
                <span className="text-[11px] font-semibold text-[var(--brand-green-700)]">REKAMAN SUARA</span>
              </div>
              <h1 className="text-[18px] font-bold leading-[26px] text-[var(--text-primary)]">
                Cara kerja rekaman
              </h1>
              <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mt-1">
                Baca aturan di bawah sebelum melihat skenario.
              </p>
            </div>

            <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4 space-y-3">
              {RULES.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={12} className="text-[var(--brand-green-600)]" />
                  </div>
                  <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{rule}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4">
              <p className="text-[14px] font-semibold text-[var(--text-primary)] mb-2">Izin mikrofon</p>
              <div className="flex items-center gap-2 rounded-[10px] bg-[var(--brand-green-50)] border border-[var(--brand-green-100)] px-3 py-2.5">
                <CheckCircle2 size={16} className="text-[var(--brand-green-600)] shrink-0" />
                <p className="text-[14px] text-[var(--brand-green-700)]">Mikrofon siap digunakan</p>
              </div>
            </div>

            <Button variant="primary" onClick={() => setPhase('scenario')}>
              Lihat skenario
            </Button>
          </>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--brand-green-50)] rounded-full border border-[var(--brand-green-100)] mb-3">
                <Mic size={12} className="text-[var(--brand-green-600)]" />
                <span className="text-[11px] font-semibold text-[var(--brand-green-700)]">REKAMAN SUARA</span>
              </div>
              <h1 className="text-[18px] font-bold leading-[26px] text-[var(--text-primary)]">
                Respon secara lisan
              </h1>
              <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mt-1">
                Baca skenario di bawah, lalu rekam responsmu. Maksimal 60 detik.
              </p>
            </div>

            <div className="bg-[var(--brand-green-50)] rounded-[10px] px-4 py-3 border border-[var(--brand-green-100)]">
              <p className="text-[14px] text-[var(--brand-green-800)] italic">
                Jangan khawatir soal sempurna. Kami mendengarkan cara kamu menangani situasi nyata.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-[10px] px-4 py-3 border-l-4 border-[var(--brand-green-300)]">
              <p className="text-[11px] font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wide">Skenario</p>
              <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">{SCENARIO}</p>
            </div>

            <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-6 flex flex-col items-center gap-4">
              {recState === 'recorded' ? (
                <>
                  <div className="w-20 h-20 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-[var(--brand-green-600)]" />
                  </div>
                  <p className="text-[14px] font-semibold text-[var(--brand-green-700)]">Rekaman selesai. Siap dikirim.</p>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      if (recState === 'countdown') setRecState('recording')
                      else if (recState === 'recording') setRecState('recorded')
                    }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                      recState === 'recording'
                        ? 'bg-red-500 animate-pulse scale-110'
                        : 'bg-[var(--brand-green-600)]'
                    }`}
                  >
                    {recState === 'recording'
                      ? <Square size={28} className="text-white" fill="white" />
                      : <Mic size={28} className="text-white" />
                    }
                  </button>
                  <p className={`text-[32px] font-mono font-bold ${recState === 'recording' ? 'text-red-500' : 'text-[var(--brand-green-600)]'}`}>
                    {recState === 'countdown' ? '15' : `0:${elapsed.toString().padStart(2, '0')}`}
                  </p>
                  <p className="text-[12px] text-[var(--text-muted)] text-center">
                    {recState === 'countdown'
                      ? 'Baca skenario... rekaman dimulai dalam 15 detik. Ketuk mikrofon jika sudah siap.'
                      : 'Merekam... tekan tombol untuk berhenti'}
                  </p>
                </>
              )}
            </div>

            {recState === 'recorded' && (
              <Button variant="primary" onClick={() => console.log('Submit voice → AS-04')}>
                Kirim Rekaman
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
