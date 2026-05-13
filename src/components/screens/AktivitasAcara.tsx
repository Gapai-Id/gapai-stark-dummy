'use client'

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { BottomNav } from '@/components/design-system/BottomNav';

const upcomingEvents = [
  {
    id: '1',
    date: '15 Mei',
    time: '14:00 WIB',
    title: 'Sesi Informasi: Budaya Kerja Jepang',
    type: 'Webinar',
    location: 'Online via Zoom',
    attendees: '45 peserta terdaftar'
  },
  {
    id: '2',
    date: '18 Mei',
    time: '10:00 WIB',
    title: 'Simulasi Interview dengan Mentor',
    type: 'Workshop',
    location: 'Online via Zoom',
    attendees: '12 peserta terdaftar'
  },
  {
    id: '3',
    date: '22 Mei',
    time: '15:00 WIB',
    title: 'Sharing Session Alumni: Hidup di Tokyo',
    type: 'Community',
    location: 'Online via Google Meet',
    attendees: '28 peserta terdaftar'
  }
];

const pastEvents = [
  {
    id: '1',
    date: '8 Mei',
    title: 'Orientasi Pra-Keberangkatan',
    type: 'Webinar',
    attended: true
  },
  {
    id: '2',
    date: '3 Mei',
    title: 'Workshop: Persiapan Dokumen Visa',
    type: 'Workshop',
    attended: true
  },
  {
    id: '3',
    date: '28 Apr',
    title: 'Meet & Greet Cohort 12',
    type: 'Community',
    attended: false
  }
];

export default function AktivitasAcara() {
  const [activeTab, setActiveTab] = useState('aktivitas');
  const [activeSubTab, setActiveSubTab] = useState('acara');

  const getEventTypePill = (type: string) => {
    if (type === 'Webinar') return 'info';
    if (type === 'Workshop') return 'active';
    return 'waiting';
  };

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
        {/* Upcoming events */}
        <div>
          <h4 className="mb-3 px-1">Acara Mendatang</h4>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                variant="default"
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => console.log('View event:', event.id)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-[11px] text-[var(--text-muted)] uppercase">
                      {event.date.split(' ')[1]}
                    </div>
                    <div className="text-[20px] font-bold text-[var(--text-primary)] leading-tight">
                      {event.date.split(' ')[0]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <StatusPill
                      variant={getEventTypePill(event.type) as any}
                      className="text-[11px] px-2 py-1 mb-2"
                    >
                      {event.type}
                    </StatusPill>
                    <h5 className="text-[15px] font-semibold mb-2">{event.title}</h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
                        <Users size={14} />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past events */}
        <div>
          <h4 className="mb-3 px-1">Acara Sebelumnya</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex items-start gap-3 px-4 py-3 opacity-60 ${
                    index < pastEvents.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <Calendar size={20} className="text-[var(--text-muted)] mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[12px] text-[var(--text-muted)]">{event.date}</span>
                      <StatusPill
                        variant={getEventTypePill(event.type) as any}
                        className="text-[10px] px-2 py-0.5"
                      >
                        {event.type}
                      </StatusPill>
                    </div>
                    <p className="text-[14px] text-[var(--text-primary)] mb-1">{event.title}</p>
                    <p className="text-[12px] text-[var(--text-muted)]">
                      {event.attended ? 'Sudah hadir' : 'Tidak hadir'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
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
