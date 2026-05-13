'use client'

import React from 'react';

interface ProgressPillsProps {
  currentStep?: number;
  totalSteps?: number;
  current?: number;
  total?: number;
  className?: string;
}

export function ProgressPills({ currentStep, totalSteps, current, total, className = '' }: ProgressPillsProps) {
  const activeStep = currentStep ?? current ?? 1;
  const stepCount = totalSteps ?? total ?? 4;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Array.from({ length: stepCount }, (_, i) => i + 1).map((step) => {
        let pillStyle = '';

        if (step < activeStep) {
          // Done
          pillStyle = 'bg-[var(--brand-green-500)] text-white';
        } else if (step === activeStep) {
          // Current
          pillStyle = 'bg-white border-2 border-[var(--brand-green-500)] text-[var(--brand-green-500)]';
        } else {
          // Future
          pillStyle = 'bg-[var(--neutral-100)] text-[var(--text-muted)]';
        }

        return (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-[13px] ${pillStyle}`}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
}
