'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, DollarSign, Calendar } from 'lucide-react';

interface MatchReason {
  id: string;
  text: string;
}

interface JobDetail {
  id: string;
  title: string;
  content: string[];
}

const matchReasons: MatchReason[] = [
  { id: '1', text: 'Bahasa Jepang N4 - sesuai requirement' },
  { id: '2', text: 'Pengalaman perawatan 2 tahun' },
  { id: '3', text: 'Usia 25-35 tahun (kamu 28 tahun)' }
];

const jobDetails: JobDetail[] = [
  {
    id: '1',
    title: 'Jam kerja',
    content: [
      'Senin - Jumat: 08.00 - 17.00',
      'Sabtu: 08.00 - 13.00 (shift rotasi)',
      'Minggu & hari libur: off',
      'Overtime: maksimal 20 jam/bulan dengan kompensasi'
    ]
  },
  {
    id: '2',
    title: 'Masa kontrak',
    content: [
      'Kontrak awal: 3 tahun',
      'Dapat diperpanjang: hingga 5 tahun',
      'Evaluasi performa setiap 6 bulan',
      'Bonus perpanjangan kontrak'
    ]
  },
  {
    id: '3',
    title: 'Fasilitas',
    content: [
      'Akomodasi: dormitory dekat tempat kerja',
      'Makan: 2x sehari (senin-jumat)',
      'Asuransi kesehatan penuh',
      'Tiket pulang pergi 1x/tahun',
      'Pelatihan bahasa & skill gratis'
    ]
  }
];

export default function JaKerDetail() {
  const [expandedDetail, setExpandedDetail] = useState<string | null>(null);

  const toggleDetail = (id: string) => {
    setExpandedDetail(expandedDetail === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      {/* Secondary nav — back button + page title */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Detail Jalur Kerja</h4>
      </div>

      <main className="px-5 py-4 space-y-4">
        {/* JaKer Hero Card - Large version */}
        <Card variant="cream" className="p-5">
          <StatusPill variant="destination" className="mb-3">
            Tujuan: Jepang 🇯🇵
          </StatusPill>

          <h2 className="mb-2">Caregiver Jepang</h2>

          <p className="text-[13px] text-[var(--text-muted)] mb-4">Jalur Kerja · Program JAKER Gapai</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
              <DollarSign size={16} className="text-[var(--text-muted)]" />
              <span>Rata-rata ¥180,000 - ¥220,000 / bulan</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
              <Calendar size={16} className="text-[var(--text-muted)]" />
              <span>Kontrak 3 tahun (dapat diperpanjang)</span>
            </div>
          </div>

          {/* Fit Score - Prominent */}
          <div className="bg-white rounded-[12px] p-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="font-bold text-[40px] leading-[44px] text-[var(--brand-green-500)]">
                92%
              </div>
              <div className="text-left">
                <p className="text-[14px] font-semibold text-[var(--text-primary)]">
                  Sangat cocok
                </p>
                <p className="text-[12px] text-[var(--text-muted)]">
                  dengan profilmu
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Why you match */}
        <div>
          <h4 className="mb-3 px-1">Kenapa kamu cocok</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {matchReasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`flex items-start gap-3 px-4 py-3 ${
                    index < matchReasons.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <CheckCircle2 size={20} className="text-[var(--brand-green-500)] flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-[22px] text-[var(--text-primary)]">
                    {reason.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Job Details - Expandable */}
        <div>
          <h4 className="mb-3 px-1">Detail Pekerjaan</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {jobDetails.map((detail, index) => (
                <div key={detail.id}>
                  <button
                    onClick={() => toggleDetail(detail.id)}
                    className={`w-full flex items-center justify-between px-4 py-4 text-left hover:bg-[var(--surface-card-tinted)] transition-colors ${
                      index < jobDetails.length - 1 || expandedDetail === detail.id ? 'border-b border-[var(--border-subtle)]' : ''
                    }`}
                  >
                    <span className="font-medium text-[14px] text-[var(--text-primary)]">
                      {detail.title}
                    </span>
                    {expandedDetail === detail.id ? (
                      <ChevronUp size={20} className="text-[var(--text-muted)]" />
                    ) : (
                      <ChevronDown size={20} className="text-[var(--text-muted)]" />
                    )}
                  </button>

                  {expandedDetail === detail.id && (
                    <div className="px-4 py-3 bg-[var(--surface-card-tinted)] border-b border-[var(--border-subtle)]">
                      <ul className="space-y-2">
                        {detail.content.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-[13px] leading-[20px] text-[var(--text-secondary)]"
                          >
                            <span className="text-[var(--brand-green-500)] flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTAs */}
        <div className="space-y-3 pt-2">
          <Button variant="primary" onClick={() => console.log('Select this JaKer')}>
            Pilih Jalur Ini
          </Button>
          <div className="text-center">
            <Button variant="text" onClick={() => console.log('Save for later')}>
              Simpan untuk nanti
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
