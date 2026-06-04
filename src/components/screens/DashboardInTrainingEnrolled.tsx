'use client'

import React from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { StatusPill } from '@/components/design-system/StatusPill';
import { FileText, ChevronRight, MapPin, Clock, Monitor } from 'lucide-react';

// D-S4b — In Training, enrolled
export default function DashboardInTrainingEnrolled() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Kamu sudah terdaftar. Ikuti training-nya dan tim Gapai akan mencatatkan penyelesaianmu." />

      <main className="px-5 py-4 space-y-4 pb-8">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="Perawat lansia dengan sertifikasi N4"
        />

        {/* Enrolled Training Card */}
        <div>
          <h4 className="text-[var(--text-secondary)] text-[12px] font-medium uppercase tracking-wide mb-2 px-1">Training Aktif</h4>
          <Card variant="default" className="space-y-4">
            {/* Provider + Status */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[var(--text-tertiary)] mb-0.5">Lembaga Bahasa International</p>
                <p className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                  Bahasa Jepang Intensif untuk Caregiver
                </p>
              </div>
              <StatusPill variant="active">Terdaftar</StatusPill>
            </div>

            {/* Training meta */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                <Monitor size={14} className="text-[var(--neutral-400)] flex-shrink-0" />
                <span>Online — via Zoom</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                <Clock size={14} className="text-[var(--neutral-400)] flex-shrink-0" />
                <span>8 minggu · mulai 10 Juni 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                <MapPin size={14} className="text-[var(--neutral-400)] flex-shrink-0" />
                <span className="text-[var(--brand-green-600)] font-medium">zoom.us/j/89234567 · ID: 892 3456 7</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border-subtle)]" />

            {/* What's next info */}
            <p className="text-[12px] leading-[18px] text-[var(--text-secondary)]">
              Setelah kamu selesai, tim Gapai akan mencatatnya dan membuka akses retake assessment untukmu.
            </p>
          </Card>
        </div>

        {/* Documents — still accessible */}
        <Card variant="default" className="cursor-pointer" onClick={() => {}}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--brand-green-50)] flex items-center justify-center flex-shrink-0">
              <FileText size={20} className="text-[var(--brand-green-600)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">Dokumen & Sertifikat</p>
              <p className="text-[12px] text-[var(--text-secondary)] mt-0.5">Sambil menunggu, persiapkan dokumenmu</p>
            </div>
            <ChevronRight size={18} className="text-[var(--neutral-400)] flex-shrink-0" />
          </div>
        </Card>
      </main>
    </div>
  );
}
