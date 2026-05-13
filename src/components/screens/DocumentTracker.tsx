'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { StatusPill } from '@/components/design-system/StatusPill';
import { FileText, CheckCircle2, Clock, AlertCircle, Upload, Eye } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  category: string;
  status: 'verified' | 'pending' | 'missing' | 'rejected';
  uploadedDate?: string;
  note?: string;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'KTP',
    category: 'Identitas',
    status: 'verified',
    uploadedDate: '15 Apr 2026'
  },
  {
    id: '2',
    title: 'Kartu Keluarga',
    category: 'Identitas',
    status: 'verified',
    uploadedDate: '15 Apr 2026'
  },
  {
    id: '3',
    title: 'Paspor',
    category: 'Travel',
    status: 'pending',
    uploadedDate: '18 Apr 2026',
    note: 'Sedang diverifikasi tim'
  },
  {
    id: '4',
    title: 'Foto 4x6 (background putih)',
    category: 'Foto',
    status: 'rejected',
    uploadedDate: '16 Apr 2026',
    note: 'Background tidak sesuai, upload ulang'
  },
  {
    id: '5',
    title: 'Sertifikat N4 Bahasa Jepang',
    category: 'Sertifikasi',
    status: 'verified',
    uploadedDate: '17 Apr 2026'
  },
  {
    id: '6',
    title: 'Surat Keterangan Sehat',
    category: 'Kesehatan',
    status: 'missing'
  },
  {
    id: '7',
    title: 'SKCK',
    category: 'Legalitas',
    status: 'missing'
  }
];

export default function DocumentTracker() {
  const [activeTab, setActiveTab] = useState('dokumen');

  const verifiedCount = documents.filter(d => d.status === 'verified').length;
  const totalCount = documents.length;
  const progress = Math.round((verifiedCount / totalCount) * 100);

  const getStatusConfig = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return {
          icon: <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />,
          pill: { text: 'Terverifikasi', variant: 'done' as const },
          showView: true
        };
      case 'pending':
        return {
          icon: <Clock size={24} className="text-[var(--accent-amber-700)]" />,
          pill: { text: 'Dalam proses', variant: 'waiting' as const },
          showView: true
        };
      case 'rejected':
        return {
          icon: <AlertCircle size={24} className="text-[var(--semantic-error-500)]" />,
          pill: { text: 'Ditolak', variant: 'error' as const },
          showView: false
        };
      case 'missing':
        return {
          icon: <Upload size={24} className="text-[var(--neutral-400)]" />,
          pill: { text: 'Belum upload', variant: 'locked' as const },
          showView: false
        };
    }
  };

  const groupedDocs = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      <StatusBar name="Sari" />
      <ContextRow message="Pastikan semua dokumen sudah lengkap dan terverifikasi." />

      <main className="px-5 py-4 space-y-4">
        {/* Progress Card */}
        <Card variant="tinted">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Dokumen Kamu</h4>
              <p className="text-[13px] leading-[20px] text-[var(--text-muted)]">
                {verifiedCount} dari {totalCount} dokumen terverifikasi
              </p>
            </div>
          </div>

          <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-[var(--brand-green-500)] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">{progress}% complete</p>
        </Card>

        {/* Documents by Category */}
        {Object.entries(groupedDocs).map(([category, docs]) => (
          <div key={category}>
            <h4 className="mb-3 px-1">{category}</h4>
            <Card variant="default">
              <div className="space-y-0 -mx-4">
                {docs.map((doc, index) => {
                  const config = getStatusConfig(doc.status);

                  return (
                    <div key={doc.id}>
                      <div className="px-4 py-3 border-b border-[var(--border-subtle)]">
                        <div className="flex items-start gap-3">
                          {config.icon}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-[14px] text-[var(--text-primary)]">
                                {doc.title}
                              </span>
                              <StatusPill variant={config.pill.variant}>
                                {config.pill.text}
                              </StatusPill>
                            </div>

                            {doc.uploadedDate && (
                              <p className="text-[12px] text-[var(--text-muted)] mb-1">
                                Upload: {doc.uploadedDate}
                              </p>
                            )}

                            {doc.note && (
                              <p className={`text-[12px] leading-[18px] mb-2 ${
                                doc.status === 'rejected' ? 'text-[var(--semantic-error-700)]' : 'text-[var(--text-secondary)]'
                              }`}>
                                {doc.note}
                              </p>
                            )}

                            <div className="flex gap-2">
                              {doc.status === 'missing' && (
                                <Button
                                  variant="text"
                                  className="h-auto p-0 text-[13px] w-auto"
                                  onClick={() => console.log('Upload document:', doc.id)}
                                >
                                  Upload dokumen →
                                </Button>
                              )}
                              {doc.status === 'rejected' && (
                                <Button
                                  variant="text"
                                  className="h-auto p-0 text-[13px] w-auto"
                                  onClick={() => console.log('Re-upload document:', doc.id)}
                                >
                                  Upload ulang →
                                </Button>
                              )}
                              {config.showView && (
                                <button
                                  className="flex items-center gap-1 text-[13px] text-[var(--text-brand)]"
                                  onClick={() => console.log('View document:', doc.id)}
                                >
                                  <Eye size={14} />
                                  <span>Lihat</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        ))}

        {/* Help Card */}
        <Card variant="default">
          <div className="space-y-2">
            <h4>Butuh bantuan upload?</h4>
            <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
              Pastikan dokumen jelas, tidak blur, dan sesuai format yang diminta. Admin Gapai siap membantu jika ada kendala.
            </p>
            <Button variant="text" className="h-auto p-0 w-auto">
              Hubungi Admin Gapai →
            </Button>
          </div>
        </Card>
      </main>

      <BottomNav
        activeTab={activeTab}
        variant="3-tab"
        onTabChange={setActiveTab}
      />
    </div>
  );
}
