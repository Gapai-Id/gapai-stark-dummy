'use client'

import React, { useState } from 'react';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';

interface Certification {
  id: string;
  name: string;
  category: 'language' | 'skill' | 'license';
}

const initialCertifications: Certification[] = [
  { id: '1', name: 'JLPT N4', category: 'language' },
  { id: '2', name: 'TOEFL ITP 500', category: 'language' },
  { id: '3', name: 'Sertifikat Caregiver', category: 'skill' },
  { id: '4', name: 'SIM A', category: 'license' }
];

export default function SettingsCertifications() {
  const [certifications, setCertifications] = useState<Certification[]>(initialCertifications);

  const handleRemove = (id: string) => {
    setCertifications(certifications.filter(cert => cert.id !== id));
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'language':
        return 'Bahasa';
      case 'skill':
        return 'Keahlian';
      case 'license':
        return 'Lisensi';
      default:
        return category;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center px-5">
          <button
            onClick={() => console.log('Go back to PR-01')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="px-5 py-4 space-y-6">
        <div>
          <h2 className="mb-2">Sertifikasi & Keahlian</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Kelola sertifikat dan keahlian yang kamu miliki
          </p>
        </div>

        {/* Language Certifications */}
        <div>
          <h4 className="mb-3">Bahasa</h4>
          <Card variant="default">
            <div className="flex flex-wrap gap-2">
              {certifications
                .filter(cert => cert.category === 'language')
                .map(cert => (
                  <div
                    key={cert.id}
                    className="flex items-center gap-2 px-3 py-2 bg-[var(--brand-green-50)] rounded-full border border-[var(--brand-green-200)]"
                  >
                    <span className="text-[13px] font-medium text-[var(--brand-green-700)]">
                      {cert.name}
                    </span>
                    <button
                      onClick={() => handleRemove(cert.id)}
                      className="text-[var(--brand-green-700)] hover:text-[var(--brand-green-900)]"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {/* Skill Certifications */}
        <div>
          <h4 className="mb-3">Keahlian</h4>
          <Card variant="default">
            <div className="flex flex-wrap gap-2">
              {certifications
                .filter(cert => cert.category === 'skill')
                .map(cert => (
                  <div
                    key={cert.id}
                    className="flex items-center gap-2 px-3 py-2 bg-[var(--neutral-100)] rounded-full border border-[var(--border-default)]"
                  >
                    <span className="text-[13px] font-medium text-[var(--text-primary)]">
                      {cert.name}
                    </span>
                    <button
                      onClick={() => handleRemove(cert.id)}
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {/* License Certifications */}
        <div>
          <h4 className="mb-3">Lisensi</h4>
          <Card variant="default">
            <div className="flex flex-wrap gap-2">
              {certifications
                .filter(cert => cert.category === 'license')
                .map(cert => (
                  <div
                    key={cert.id}
                    className="flex items-center gap-2 px-3 py-2 bg-[var(--neutral-100)] rounded-full border border-[var(--border-default)]"
                  >
                    <span className="text-[13px] font-medium text-[var(--text-primary)]">
                      {cert.name}
                    </span>
                    <button
                      onClick={() => handleRemove(cert.id)}
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {/* Add Certification Button */}
        <Button
          variant="secondary"
          onClick={() => console.log('Go to S-03a')}
        >
          <Plus size={18} />
          <span>Tambah Sertifikat</span>
        </Button>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Sertifikat bahasa dan keahlian akan meningkatkan peluang kamu untuk diterima di perusahaan tujuan.
          </p>
        </div>
      </main>
    </div>
  );
}
