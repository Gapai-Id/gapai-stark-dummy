'use client'

import React, { useState } from 'react';
import { ArrowLeft, Filter, Briefcase, Calendar, MapPin, Users, ChevronRight } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';

const pipelineData = [
  {
    id: '1',
    employer: 'Sakura Care Tokyo',
    location: 'Tokyo, Jepang',
    position: 'Caregiver',
    status: 'Interview dijadwalkan',
    statusVariant: 'active' as const,
    stage: 'interview',
    targetDate: '15 Mei 2026',
    interviewDate: '15 Mei 2026, 10:00 WIB',
    salary: '¥180,000 - ¥220,000/bulan',
    benefits: ['Accommodation', 'Health Insurance', 'Language Support'],
    priority: 'high'
  },
  {
    id: '2',
    employer: 'Osaka Senior Living',
    location: 'Osaka, Jepang',
    position: 'Caregiver',
    status: 'Dokumen review',
    statusVariant: 'waiting' as const,
    stage: 'document-review',
    targetDate: '20 Mei 2026',
    salary: '¥175,000 - ¥210,000/bulan',
    benefits: ['Accommodation', 'Transportation', 'Meals'],
    priority: 'medium'
  },
  {
    id: '3',
    employer: 'Kyoto Healthcare Group',
    location: 'Kyoto, Jepang',
    position: 'Caregiver',
    status: 'Profil dikirim',
    statusVariant: 'info' as const,
    stage: 'profile-submitted',
    targetDate: '25 Mei 2026',
    salary: '¥170,000 - ¥200,000/bulan',
    benefits: ['Accommodation', 'Health Insurance'],
    priority: 'low'
  },
  {
    id: '4',
    employer: 'Tokyo Medical Center',
    location: 'Tokyo, Jepang',
    position: 'Caregiver',
    status: 'Menunggu feedback',
    statusVariant: 'waiting' as const,
    stage: 'waiting-feedback',
    targetDate: '30 Mei 2026',
    salary: '¥190,000 - ¥230,000/bulan',
    benefits: ['Accommodation', 'Health Insurance', 'Bonus', 'Language Support'],
    priority: 'medium'
  }
];

export default function PipelineOverview() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'interview' | 'document-review' | 'profile-submitted'>('all');

  const filteredPipeline = selectedFilter === 'all'
    ? pipelineData
    : pipelineData.filter(item => item.stage === selectedFilter);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)] sticky top-0 z-10">
        <div className="h-[60px] flex items-center justify-between px-5">
          <button
            onClick={() => console.log('Go back to dashboard')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
          <h4>Pipeline Overview</h4>
          <div className="w-[60px]" /> {/* Spacer for alignment */}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 px-5 pb-3 overflow-x-auto">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              selectedFilter === 'all'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-[var(--neutral-100)] text-[var(--text-secondary)]'
            }`}
          >
            Semua ({pipelineData.length})
          </button>
          <button
            onClick={() => setSelectedFilter('interview')}
            className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              selectedFilter === 'interview'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-[var(--neutral-100)] text-[var(--text-secondary)]'
            }`}
          >
            Interview
          </button>
          <button
            onClick={() => setSelectedFilter('document-review')}
            className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              selectedFilter === 'document-review'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-[var(--neutral-100)] text-[var(--text-secondary)]'
            }`}
          >
            Review Dokumen
          </button>
          <button
            onClick={() => setSelectedFilter('profile-submitted')}
            className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              selectedFilter === 'profile-submitted'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-[var(--neutral-100)] text-[var(--text-secondary)]'
            }`}
          >
            Profil Dikirim
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-5 py-4 space-y-3">
        {filteredPipeline.length === 0 ? (
          <Card variant="default" className="text-center py-8">
            <p className="text-[14px] text-[var(--text-muted)]">
              Tidak ada pipeline di kategori ini
            </p>
          </Card>
        ) : (
          filteredPipeline.map((item) => (
            <Card
              key={item.id}
              variant="default"
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => console.log('View pipeline detail:', item.id)}
            >
              {/* Priority indicator */}
              {item.priority === 'high' && (
                <div className="mb-3">
                  <StatusPill variant="waiting" className="text-[11px] px-2 py-0.5">
                    Priority Tinggi
                  </StatusPill>
                </div>
              )}

              {/* Employer info */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-[var(--text-muted)]" />
                    <h4 className="text-[16px]">{item.employer}</h4>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-[var(--text-muted)]" />
                    <p className="text-[13px] text-[var(--text-muted)]">
                      {item.location}
                    </p>
                  </div>
                  <StatusPill variant={item.statusVariant} className="text-[12px] px-2 py-1">
                    {item.status}
                  </StatusPill>
                </div>
                <ChevronRight size={20} className="text-[var(--text-muted)] flex-shrink-0" />
              </div>

              {/* Details */}
              <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)]">
                {item.interviewDate && (
                  <div className="flex items-start gap-2 text-[13px]">
                    <Calendar size={14} className="text-[var(--text-muted)] mt-0.5" />
                    <div>
                      <span className="text-[var(--text-muted)]">Interview: </span>
                      <span className="text-[var(--text-primary)] font-medium">{item.interviewDate}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-2 text-[13px]">
                  <span className="text-[var(--text-muted)]">Gaji:</span>
                  <span className="text-[var(--text-primary)]">{item.salary}</span>
                </div>
                <div className="flex items-start gap-2 text-[13px]">
                  <span className="text-[var(--text-muted)]">Benefits:</span>
                  <span className="text-[var(--text-primary)]">
                    {item.benefits.join(', ')}
                  </span>
                </div>
              </div>
            </Card>
          ))
        )}
      </main>
    </div>
  );
}
