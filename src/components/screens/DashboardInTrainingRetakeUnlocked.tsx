'use client'

import React from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { Button } from '@/components/design-system/Button';
import { StatusPill } from '@/components/design-system/StatusPill';
import { CheckCircle2, ClipboardList, FileText, ChevronRight } from 'lucide-react';

// D-S4c — In Training, retake unlocked
export default function DashboardInTrainingRetakeUnlocked() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Training selesai. Sekarang saatnya assessment ulang." />

      <main className="px-5 py-4 space-y-4 pb-8">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        {/* Journey Status — Retake Unlocked */}
        <Card variant="inverse" className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <ClipboardList size={18} className="text-white" />
              </div>
              <span className="text-[11px] font-medium text-white/70 uppercase tracking-wide">Assessment ulang</span>
            </div>

            <h3 className="text-white mb-2">Kamu siap untuk mencoba lagi</h3>
            <p className="text-[13px] leading-[20px] text-white/75 mb-5">
              Tim Gapai sudah membuka akses retake assessment. Mulai kapan kamu siap.
            </p>

            <Button
              variant="secondary"
              className="w-full bg-white text-[var(--brand-green-700)] hover:bg-white/90 font-semibold"
              onClick={() => {}}
            >
              Mulai Assessment Ulang
            </Button>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] rounded-full bg-white opacity-[0.08] pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-white opacity-[0.05] pointer-events-none" />
        </Card>

        {/* Training completed — summary */}
        <Card variant="default">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--status-done-bg)] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={20} className="text-[var(--status-done-fg)]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-[14px] font-semibold text-[var(--text-primary)]">Bahasa Jepang Intensif untuk Caregiver</p>
              </div>
              <p className="text-[12px] text-[var(--text-secondary)]">Lembaga Bahasa International</p>
              <div className="mt-2">
                <StatusPill variant="done">Selesai</StatusPill>
              </div>
            </div>
          </div>
        </Card>

        {/* Documents — still accessible */}
        <Card variant="default" className="cursor-pointer" onClick={() => {}}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0">
              <FileText size={20} className="text-[var(--brand-green-600)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">Dokumen & Sertifikat</p>
              <p className="text-[12px] text-[var(--text-secondary)] mt-0.5">Pastikan dokumenmu sudah siap sebelum assessment</p>
            </div>
            <ChevronRight size={18} className="text-[var(--neutral-400)] flex-shrink-0" />
          </div>
        </Card>
      </main>
    </div>
  );
}
