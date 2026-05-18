'use client'

import React, { useState } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/design-system/Button';
import { Card } from '@/components/design-system/Card';

interface YesNoState {
  onTreatment: boolean | null;
}

interface Props {
  onComplete?: () => void;
  onSkip?: () => void;
}

export default function PreAssessmentMentalHealth({ onComplete, onSkip }: Props) {
  const [partB, setPartB] = useState<YesNoState>({
    onTreatment: null,
  });
  const [diagnosisText, setDiagnosisText] = useState('');

  const handleSubmit = () => {
    console.log('Mental health complete → PA-09 Results', { partB, diagnosisText });
    onComplete?.();
  };

  const handleSkip = () => {
    console.log('Mental health skipped → PA-09 Results');
    onSkip?.();
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-09 Physical Data')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 space-y-5">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 8 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">100%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-full" />
          </div>
        </div>

        {/* Icon + heading */}
        <div>
          <div className="w-12 h-12 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center mb-4">
            <Heart size={22} className="text-[var(--brand-green-600)]" />
          </div>
          <h2 className="mb-1">Kondisi Kesehatan Mental</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Pertanyaan ini bersifat opsional. Jawabanmu tidak mempengaruhi proses seleksi — data ini membantu kami memastikan kamu mendapat dukungan yang tepat selama program.
          </p>
        </div>

        {/* Kondisi saat ini */}
        <Card variant="default">
          <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-3">
            Kondisi saat ini
          </p>
          <p className="text-[13px] leading-[20px] text-[var(--text-primary)] mb-2">
            Apakah kamu sedang menjalani pengobatan atau terapi untuk kondisi kesehatan mental?
          </p>
          <div className="flex gap-2">
            {(['Ya', 'Tidak'] as const).map((opt) => {
              const val = opt === 'Ya';
              const selected = partB.onTreatment === val;
              return (
                <button
                  key={opt}
                  onClick={() => setPartB((p) => ({ ...p, onTreatment: val }))}
                  className={`flex-1 py-2 rounded-[8px] text-[13px] font-medium border-[1.5px] transition-colors ${
                    selected
                      ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)] text-[var(--text-brand)]'
                      : 'border-[var(--border-default)] bg-white text-[var(--text-primary)]'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Medication input — only shown when Ya is selected */}
          {partB.onTreatment === true && (
            <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
              <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-1">
                Obat-obatan yang dikonsumsi
              </p>
              <p className="text-[12px] text-[var(--text-muted)] mb-3">
                Sebutkan obat yang sedang atau rutin kamu konsumsi. Informasi ini bersifat rahasia.
              </p>
              <textarea
                value={diagnosisText}
                onChange={(e) => setDiagnosisText(e.target.value)}
                placeholder="Contoh: Risperidone 2mg, Alprazolam 0.5mg..."
                rows={4}
                className="w-full px-3 py-2.5 border-[1.5px] border-[var(--border-default)] rounded-[10px] text-[14px] leading-[22px] bg-white focus:border-[var(--border-brand)] focus:outline-none placeholder:text-[var(--text-muted)] resize-none"
              />
            </div>
          )}
        </Card>

        {/* CTAs */}
        <div className="space-y-3">
          <Button variant="primary" onClick={handleSubmit}>
            Lihat Rekomendasi Jalur Kerjaku
          </Button>
          <button
            onClick={handleSkip}
            className="w-full text-center text-[13px] text-[var(--text-muted)] py-2"
          >
            Lewati pertanyaan ini
          </button>
        </div>
      </main>
    </div>
  );
}
