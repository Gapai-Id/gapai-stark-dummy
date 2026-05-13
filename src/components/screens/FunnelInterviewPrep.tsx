'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { ProgressPills } from '@/components/design-system/ProgressPills';
import { ArrowLeft, Video, Calendar, Clock } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export default function FunnelInterviewPrep() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'Pelajari profil perusahaan', checked: false },
    { id: '2', text: 'Latihan bahasa Jepang', checked: false },
    { id: '3', text: 'Siapkan dokumen', checked: false }
  ]);

  const toggleCheck = (id: string) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const allChecked = checklist.every(item => item.checked);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      {/* Header with back & progress */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center justify-between px-5">
          <button
            onClick={() => console.log('Go back')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
          <ProgressPills currentStep={4} totalSteps={4} />
        </div>
      </div>

      <StatusBar name="Sari" />

      <main className="px-5 py-4 space-y-4">
        <div className="text-center mb-2">
          <h3 className="mb-1">Persiapan Wawancara</h3>
          <p className="text-[13px] text-[var(--text-muted)]">Langkah 4 dari 4</p>
        </div>

        {/* Interview info card */}
        <Card variant="tinted">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-3">
              <h3>Wawancara dengan Employer</h3>
              <StatusPill variant="active">Terjadwal</StatusPill>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[14px] text-[var(--text-primary)]">
                <Calendar size={18} className="text-[var(--brand-green-500)]" />
                <span className="font-medium">Senin, 19 Mei 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
                <Clock size={18} className="text-[var(--text-muted)]" />
                <span>10.00 WIB</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
                <Video size={18} className="text-[var(--text-muted)]" />
                <span>Online via Zoom</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Preparation checklist */}
        <div>
          <h4 className="mb-3 px-1">Persiapanmu</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {checklist.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--surface-card-tinted)] transition-colors ${
                    index < checklist.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      item.checked
                        ? 'bg-[var(--brand-green-500)] border-[var(--brand-green-500)]'
                        : 'border-[var(--neutral-300)]'
                    }`}
                  >
                    {item.checked && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path
                          d="M1 5L4.5 8.5L11 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-[14px] ${
                      item.checked
                        ? 'text-[var(--text-muted)] line-through'
                        : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Tips card */}
        <Card variant="cream">
          <div className="space-y-2">
            <h4 className="text-[var(--text-primary)]">💡 Tips dari alumni</h4>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              "Tunjukkan motivasimu, bukan hanya kemampuan. Employer ingin tahu kenapa kamu tertarik bekerja di Jepang."
            </p>
          </div>
        </Card>

        {/* CTAs */}
        <div className="space-y-3 pt-2">
          <Button
            variant="primary"
            disabled={!allChecked}
            onClick={() => console.log('Mark as ready')}
          >
            Saya Siap
          </Button>
          <div className="text-center">
            <Button
              variant="text"
              onClick={() => console.log('Open M-04 Admin Gapai sheet')}
            >
              Bicara dengan Admin Gapai
            </Button>
          </div>
        </div>
      </main>

      <BottomNav activeTab={activeTab} variant="4-tab" onTabChange={setActiveTab} />
    </div>
  );
}
