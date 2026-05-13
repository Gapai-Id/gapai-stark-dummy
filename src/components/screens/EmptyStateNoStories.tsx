'use client'

import React from 'react';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function EmptyStateNoStories() {
  const handleCreateStory = () => {
    console.log('Create story');
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center px-5">
          <button
            onClick={() => console.log('Go back')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-5 py-20">
        <div className="w-full max-w-sm text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[var(--neutral-100)] flex items-center justify-center">
              <MessageSquare size={40} className="text-[var(--neutral-400)]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3">Belum Ada Cerita</h3>

          {/* Message */}
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-8">
            Jadilah yang pertama berbagi pengalaman! Cerita kamu bisa menginspirasi teman-teman lain di komunitas Gapai.
          </p>

          {/* Action */}
          <Button
            variant="primary"
            onClick={handleCreateStory}
          >
            Buat Cerita Pertama
          </Button>
        </div>
      </div>
    </div>
  );
}
