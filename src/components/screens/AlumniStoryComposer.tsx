'use client'

import React, { useState } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';

export default function AlumniStoryComposer() {
  const [activeTab, setActiveTab] = useState('aktivitas');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center justify-between px-5">
          <button
            onClick={() => console.log('Cancel and go back')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Batal</span>
          </button>
          <h3>Tulis Cerita</h3>
          <div className="w-[60px]" /> {/* Spacer */}
        </div>
      </div>

      {/* Main Content */}
      <main className="px-5 py-4 space-y-4">
        {/* Photo upload */}
        <div>
          <label className="block mb-2">Foto (opsional)</label>
          {!hasPhoto ? (
            <button
              onClick={() => setHasPhoto(true)}
              className="w-full h-40 border-2 border-dashed border-[var(--border-default)] rounded-[8px] flex flex-col items-center justify-center gap-2 text-[var(--text-muted)] hover:border-[var(--border-brand)] hover:text-[var(--text-brand)] transition-colors"
            >
              <Upload size={32} />
              <span className="text-[13px]">Upload foto</span>
            </button>
          ) : (
            <div className="relative w-full h-40 bg-[var(--neutral-200)] rounded-[8px] flex items-center justify-center">
              <span className="text-[13px] text-[var(--text-muted)]">Foto preview</span>
              <button
                onClick={() => setHasPhoto(false)}
                className="absolute top-2 right-2 w-8 h-8 bg-[var(--neutral-800)] bg-opacity-60 rounded-full flex items-center justify-center text-white"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block mb-2">Judul cerita</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Perjalanan saya dari Jakarta ke Tokyo"
            className="w-full h-[52px] px-4 border border-[var(--border-default)] rounded-[8px] text-[16px] focus:outline-none focus:border-[var(--border-brand)]"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-2">Ceritamu</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Bagikan pengalamanmu bekerja di luar negeri. Apa yang kamu pelajari? Apa yang paling berkesan?"
            rows={8}
            className="w-full px-4 py-3 border border-[var(--border-default)] rounded-[8px] text-[16px] leading-[24px] resize-none focus:outline-none focus:border-[var(--border-brand)]"
          />
          <p className="text-[12px] text-[var(--text-muted)] mt-2">
            {content.length} karakter
          </p>
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-2">Tags</label>
          <div className="flex gap-2">
            <StatusPill variant="destination" className="text-[12px] px-3 py-1.5">
              🇯🇵 Jepang
            </StatusPill>
            <StatusPill variant="active" className="text-[12px] px-3 py-1.5">
              Caregiver
            </StatusPill>
          </div>
          <p className="text-[12px] text-[var(--text-muted)] mt-2">
            Tags otomatis berdasarkan profil kamu
          </p>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Button
            variant="primary"
            onClick={() => console.log('Publish story')}
            disabled={!isValid}
          >
            Publikasikan Cerita
          </Button>
          {!isValid && (
            <p className="text-[12px] text-[var(--text-muted)] text-center mt-2">
              Isi judul dan cerita untuk publikasi
            </p>
          )}
        </div>
      </main>

      <BottomNav
        activeTab={activeTab}
        variant="4-tab"
        onTabChange={setActiveTab}
      />
    </div>
  );
}
