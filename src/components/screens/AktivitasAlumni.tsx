'use client'

import React, { useState } from 'react';
import { User, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';

const featuredStory = {
  id: 'featured',
  author: 'Rina Susanti',
  destination: 'Jepang',
  destinationEmoji: '🇯🇵',
  role: 'Caregiver',
  employer: 'Sakura Care Tokyo',
  excerpt: 'Perjalanan dari Jakarta ke Tokyo: 2 tahun penuh pembelajaran dan kebahagiaan. Bekerja dengan lansia Jepang mengajarkan saya tentang kesabaran dan rasa hormat yang mendalam...',
  photo: null, // placeholder
  readTime: '5 menit baca',
  publishedDate: '3 hari lalu'
};

const moreStories = [
  {
    id: '1',
    author: 'Budi Santoso',
    destination: 'Korea',
    destinationEmoji: '🇰🇷',
    role: 'Factory Worker',
    excerpt: 'Dari kesulitan bahasa hingga menjadi supervisor tim: bagaimana saya berkembang di pabrik elektronik Korea.',
    readTime: '4 menit',
    publishedDate: '1 minggu lalu'
  },
  {
    id: '2',
    author: 'Dewi Lestari',
    destination: 'Jepang',
    destinationEmoji: '🇯🇵',
    role: 'Hospitality',
    excerpt: 'Bekerja di hotel Kyoto: pengalaman melayani tamu dari seluruh dunia dan belajar budaya omotenashi.',
    readTime: '6 menit',
    publishedDate: '2 minggu lalu'
  },
  {
    id: '3',
    author: 'Ahmad Fauzi',
    destination: 'Taiwan',
    destinationEmoji: '🇹🇼',
    role: 'Manufacturing',
    excerpt: 'Kehidupan di Taipei: work-life balance yang saya temukan di industri teknologi Taiwan.',
    readTime: '5 menit',
    publishedDate: '3 minggu lalu'
  }
];

export default function AktivitasAlumni() {
  const [activeTab, setActiveTab] = useState('aktivitas');
  const [activeSubTab, setActiveSubTab] = useState('alumni');

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center justify-between px-5">
          <h3>Aktivitas</h3>
        </div>

        {/* Sub-tab pills */}
        <div className="flex gap-2 px-5 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('persiapan')}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              activeSubTab === 'persiapan'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-transparent text-[var(--text-muted)]'
            }`}
          >
            Persiapan
          </button>
          <button
            onClick={() => setActiveSubTab('acara')}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              activeSubTab === 'acara'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-transparent text-[var(--text-muted)]'
            }`}
          >
            Acara
          </button>
          <button
            onClick={() => setActiveSubTab('alumni')}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              activeSubTab === 'alumni'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-transparent text-[var(--text-muted)]'
            }`}
          >
            Alumni
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-5 py-4 space-y-4">
        {/* Featured story */}
        <div>
          <h4 className="mb-3 px-1">Cerita Pilihan</h4>
          <Card
            variant="cream"
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => console.log('Read featured story')}
          >
            {/* Photo placeholder */}
            <div className="w-full h-40 bg-[var(--neutral-200)] rounded-[8px] mb-4 flex items-center justify-center">
              <User size={48} className="text-[var(--neutral-400)]" />
            </div>

            <StatusPill variant="destination" className="text-[11px] px-2 py-1 mb-3">
              {featuredStory.destinationEmoji} {featuredStory.destination}
            </StatusPill>

            <h3 className="mb-2">{featuredStory.author}</h3>

            <div className="flex items-center gap-4 mb-3 text-[12px] text-[var(--text-muted)]">
              <div className="flex items-center gap-1">
                <Briefcase size={14} />
                <span>{featuredStory.role}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{featuredStory.employer}</span>
              </div>
            </div>

            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-4">
              {featuredStory.excerpt}
            </p>

            <div className="flex items-center justify-between text-[12px] text-[var(--text-muted)]">
              <span>{featuredStory.readTime}</span>
              <span>{featuredStory.publishedDate}</span>
            </div>
          </Card>
        </div>

        {/* More stories */}
        <div>
          <h4 className="mb-3 px-1">Cerita Lainnya</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {moreStories.map((story, index) => (
                <div
                  key={story.id}
                  className={`flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-[var(--neutral-50)] transition-colors ${
                    index < moreStories.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                  onClick={() => console.log('Read story:', story.id)}
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--neutral-200)] flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-[var(--neutral-500)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-[14px] font-semibold">{story.author}</h5>
                      <StatusPill variant="destination" className="text-[10px] px-2 py-0.5">
                        {story.destinationEmoji}
                      </StatusPill>
                    </div>
                    <p className="text-[12px] text-[var(--text-muted)] mb-1">{story.role}</p>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] line-clamp-2 mb-2">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-[var(--text-muted)]">
                      <span>{story.readTime}</span>
                      <span>•</span>
                      <span>{story.publishedDate}</span>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-[var(--text-muted)] flex-shrink-0 mt-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <Card variant="tinted">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-3">
              Punya pengalaman menarik? Bagikan ceritamu dan inspirasi teman-teman lain!
            </p>
            <Button variant="primary" onClick={() => console.log('Create alumni story')}>
              Tulis Cerita
            </Button>
          </div>
        </Card>
      </main>

      <BottomNav
        activeTab={activeTab}
        variant="4-tab"
        onTabChange={setActiveTab}
      />
    </div>
  );
}
