'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';
import { ChevronRight, Calendar } from 'lucide-react';

const PA_STEPS = [
  { id: 1, label: 'Negara Tujuan', done: true },
  { id: 2, label: 'Latar Belakang Kerja', done: true },
  { id: 3, label: 'Keahlian', done: false },
  { id: 4, label: 'Peralatan Kerja', done: false },
  { id: 5, label: 'Kemampuan Bahasa', done: false },
  { id: 6, label: 'Pendidikan', done: false },
  { id: 7, label: 'Tinggi & Berat Badan', done: false },
  { id: 8, label: 'Kesehatan Mental', done: false },
];

const CONTEXTUAL_EVENTS = [
  {
    id: 'evt-1',
    title: 'Webinar: Apa Itu Pre-Assessment?',
    date: 'Rabu, 21 Mei 2026',
    tag: 'Online',
  },
  {
    id: 'evt-2',
    title: 'Tanya Jawab: Proses Seleksi JaKer Eropa',
    date: 'Sabtu, 24 Mei 2026',
    tag: 'Online',
  },
];

const completedSteps = PA_STEPS.filter((s) => s.done).length;
const progressPct = Math.round((completedSteps / PA_STEPS.length) * 100);
const nextStep = PA_STEPS.find((s) => !s.done);

export default function DashboardPreAssessmentInProgress() {

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      <main className="px-5 py-4 space-y-4">
        {/* Resume PA card */}
        <Card variant="tinted" className="shadow-md">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">Pre-Assessment</p>
            <span className="text-[12px] font-bold text-[var(--text-brand)]">{progressPct}% selesai</span>
          </div>

          {/* Progress bar */}
          <div className="h-2 rounded-full bg-[var(--neutral-200)] mb-3">
            <div
              className="h-2 rounded-full bg-[var(--brand-green-500)] transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <p className="text-[13px] text-[var(--text-secondary)] mb-4">
            Kamu sudah selesai {completedSteps} dari {PA_STEPS.length} langkah.{' '}
            {nextStep && (
              <>Lanjutkan dari <span className="font-medium text-[var(--text-primary)]">{nextStep.label}</span>.</>
            )}
          </p>

          <Button variant="primary" onClick={() => console.log(`Resume PA → step ${nextStep?.id}`)}>
            Lanjutkan Pre-Assessment
          </Button>
        </Card>

        {/* Step checklist */}
        <Card variant="default">
          <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-3">Progresmu</p>
          <div className="space-y-2">
            {PA_STEPS.map((step) => (
              <div key={step.id} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.done ? 'bg-[var(--brand-green-500)]' : 'bg-[var(--neutral-200)]'
                }`}>
                  {step.done ? (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="text-[9px] font-bold text-[var(--text-muted)]">{step.id}</span>
                  )}
                </div>
                <p className={`text-[13px] ${step.done ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-primary)] font-medium'}`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Contextual events */}
        <div>
          <h4 className="mb-3">Event untukmu</h4>
          <div className="space-y-2">
            {CONTEXTUAL_EVENTS.map((evt) => (
              <button
                key={evt.id}
                onClick={() => console.log(`View event: ${evt.id}`)}
                className="w-full text-left bg-white border-[1.5px] border-[var(--border-default)] rounded-[12px] p-3 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <p className="text-[13px] font-medium text-[var(--text-primary)] mb-1">{evt.title}</p>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-[var(--text-muted)]" />
                    <span className="text-[12px] text-[var(--text-muted)]">{evt.date}</span>
                    <span className="text-[11px] text-[var(--text-brand)] bg-[var(--brand-green-50)] px-1.5 py-0.5 rounded-full font-medium">
                      {evt.tag}
                    </span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
