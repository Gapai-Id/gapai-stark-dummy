'use client'

import React, { useState } from 'react';
import { ArrowLeft, MapPin, ChevronRight, XCircle } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

const RECOMMENDATIONS = [
  {
    rank: 1,
    jakerName: 'Caregiver Jepang',
    destination: 'Jepang',
    flag: '🇯🇵',
    score: 92,
  },
  {
    rank: 2,
    jakerName: 'Hospitality Jepang',
    destination: 'Jepang',
    flag: '🇯🇵',
    score: 85,
  },
  {
    rank: 3,
    jakerName: 'Caregiver Korea',
    destination: 'Korea Selatan',
    flag: '🇰🇷',
    score: 78,
  },
];

interface Props {
  excludedJakers?: string[];
  onSelectJaker?: (jakerName: string) => void;
  onBack?: () => void;
}

export default function PreAssessmentResults({
  excludedJakers = [],
  onSelectJaker,
  onBack,
}: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (jakerName: string) => {
    setSelected(jakerName);
    if (onSelectJaker) {
      onSelectJaker(jakerName);
    } else {
      console.log(`Jaker selected: ${jakerName} → PA-10 Physical Conditions Gate`);
    }
  };

  const availableRecs = RECOMMENDATIONS.filter((r) => !excludedJakers.includes(r.jakerName));
  const excludedRecs = RECOMMENDATIONS.filter((r) => excludedJakers.includes(r.jakerName));
  const topRec = availableRecs[0];

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => onBack ? onBack() : console.log('Go back to PA-08 Education')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 space-y-5">
        <div>
          <h2 className="mb-1">Jalur Terbaik Untukmu</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            {excludedJakers.length > 0
              ? 'Kami mencarikan jalur lain yang lebih sesuai untukmu.'
              : 'Jalur-jalur ini memberimu posisi awal terbaik berdasarkan apa yang sudah kamu ceritakan.'}
          </p>
        </div>

        {/* Top recommendation */}
        {topRec ? (
          <div className="rounded-[16px] border-[2px] border-[var(--brand-green-500)] bg-white overflow-hidden">
            <div className="bg-[var(--brand-green-500)] px-4 py-2">
              <span className="text-[11px] font-bold text-white tracking-wide">REKOMENDASI UTAMA</span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[18px] font-bold text-[var(--text-primary)]">{topRec.jakerName}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-[var(--text-muted)]" />
                    <span className="text-[12px] text-[var(--text-muted)]">{topRec.flag} {topRec.destination}</span>
                  </div>
                </div>
                <span className="text-[13px] font-bold text-[var(--brand-green-600)] bg-[var(--brand-green-50)] px-2.5 py-1 rounded-full flex-shrink-0">
                  {topRec.score}% cocok
                </span>
              </div>
              <Button variant="primary" onClick={() => handleSelect(topRec.jakerName)}>
                Pilih Jalur Ini
              </Button>
            </div>
          </div>
        ) : (
          <div className="rounded-[16px] border-[1.5px] border-[var(--border-default)] bg-[var(--neutral-50)] p-5 text-center">
            <p className="text-[14px] text-[var(--text-muted)]">
              Semua jalur yang tersedia telah dilewati. Hubungi Admin Gapai untuk bantuan lebih lanjut.
            </p>
          </div>
        )}

        {/* Rank 2 & 3 — available */}
        {availableRecs.slice(1).map((rec) => (
          <div key={rec.rank} className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-white p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[16px] font-semibold text-[var(--text-primary)]">{rec.jakerName}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={12} className="text-[var(--text-muted)]" />
                  <span className="text-[12px] text-[var(--text-muted)]">{rec.flag} {rec.destination}</span>
                </div>
              </div>
              <span className="text-[12px] font-semibold text-[var(--brand-green-600)] bg-[var(--brand-green-50)] px-2 py-0.5 rounded-full flex-shrink-0">
                {rec.score}% cocok
              </span>
            </div>
            <button
              onClick={() => handleSelect(rec.jakerName)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-[8px] border-[1.5px] border-[var(--border-brand)] text-[13px] font-medium text-[var(--text-brand)]"
            >
              <span>Pilih jalur ini</span>
              <ChevronRight size={16} />
            </button>
          </div>
        ))}

        {/* Excluded JaKers — shown as unavailable */}
        {excludedRecs.map((rec) => (
          <div key={rec.rank} className="rounded-[14px] border-[1.5px] border-[var(--neutral-200)] bg-[var(--neutral-50)] p-4 opacity-60">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-[16px] font-semibold text-[var(--text-muted)] line-through">{rec.jakerName}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={12} className="text-[var(--text-muted)]" />
                  <span className="text-[12px] text-[var(--text-muted)]">{rec.flag} {rec.destination}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <XCircle size={14} className="text-[var(--text-muted)]" />
              <p className="text-[12px] text-[var(--text-muted)]">Tidak tersedia — kondisi fisik tidak terpenuhi</p>
            </div>
          </div>
        ))}

        {/* Expectation-setting */}
        <div className="bg-[var(--brand-green-50)] rounded-[12px] p-4">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Setelah memilih jalur, kamu akan melalui Asesmen untuk mengukur kesiapanmu secara lebih mendalam.
          </p>
        </div>
      </main>
    </div>
  );
}
