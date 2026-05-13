'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { JaKerIdentityCard } from '@/components/design-system/JaKerIdentityCard';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { StatusPill } from '@/components/design-system/StatusPill';
import { CheckCircle2, FileText, MessageCircle, User } from 'lucide-react';

interface FeedItem {
  id: string;
  sender: string;
  message: string;
  time: string;
  type: 'system' | 'team' | 'cohort';
}

const todayActivities = [
  {
    id: '1',
    icon: '📋',
    badge: 'Hari ini',
    title: 'Lengkapi dokumen visa',
    description: 'Upload paspor dan foto 4x6 sebelum 17.00 WIB',
    action: 'Lihat detail'
  },
  {
    id: '2',
    icon: '💬',
    badge: 'Pesan',
    title: 'Admin Gapai menghubungi kamu',
    description: 'Ada update terkait jadwal wawancara dengan employer',
    action: 'Buka pesan'
  }
];

const feedItems: FeedItem[] = [
  {
    id: '1',
    sender: 'Admin Gapai',
    message: 'Selamat! Dokumen kamu sudah diverifikasi. Proses visa dimulai.',
    time: '2 jam lalu',
    type: 'team'
  },
  {
    id: '2',
    sender: 'Rina - Cohort 12',
    message: 'Halo semua! Ada yang sudah sampai tahap interview?',
    time: '5 jam lalu',
    type: 'cohort'
  },
  {
    id: '3',
    sender: 'Sistem',
    message: 'Reminder: Sesi informasi pra-keberangkatan besok pukul 14.00',
    time: '1 hari lalu',
    type: 'system'
  },
  {
    id: '4',
    sender: 'Dewi - Cohort 12',
    message: 'Terima kasih tips-nya kemarin! Sangat membantu.',
    time: '1 hari lalu',
    type: 'cohort'
  }
];

export default function DashboardActivation() {
  const [activeTab, setActiveTab] = useState('beranda');

  const today = new Date();
  const dateString = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const getAvatarColor = (type: string) => {
    if (type === 'team') return 'bg-[var(--brand-green-500)]';
    if (type === 'system') return 'bg-[var(--accent-blue-500)]';
    return 'bg-[var(--accent-amber-500)]';
  };

  const getInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length >= 2) return words[0][0] + words[1][0];
    return name.substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      <StatusBar name="Sari" />
      <ContextRow message="Kamu punya 2 tugas hari ini. Yuk diselesaikan!" />

      <main className="px-5 py-4 space-y-4">
        <JaKerIdentityCard
          destination="JEPANG"
          destinationEmoji="🇯🇵"
          title="Caregiver Jepang"
          tagline="PT Sakura Care Japan"
        />

        {/* Job Match Notification - Priority 1 */}
        <Card variant="default" className="shadow-md border-2 border-[var(--brand-green-500)]">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-[48px] leading-none">🎉</div>
            <div className="flex-1">
              <StatusPill variant="active" className="text-[11px] px-2 py-1 mb-2">
                Peluang Baru!
              </StatusPill>
              <h3 className="mb-2">Kamu Cocok untuk Pekerjaan Ini!</h3>
              <p className="text-[14px] leading-[22px] text-[var(--text-secondary)] mb-1">
                <strong>PT Sakura Care Tokyo</strong>
              </p>
              <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                Caregiver di Tokyo, Jepang • 92% cocok dengan profilmu
              </p>
            </div>
          </div>
          <Button variant="primary" onClick={() => console.log('Open F-01 Acceptance Gate')}>
            Lihat Detail Tawaran
          </Button>
        </Card>

        {/* Hari ini Section */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h4>Hari ini</h4>
            <span className="text-[12px] text-[var(--text-muted)]">{dateString}</span>
          </div>

          <div className="space-y-3">
            {todayActivities.map((activity) => (
              <Card key={activity.id} variant="tinted">
                <div className="flex items-start gap-3">
                  <div className="text-[32px] leading-none">{activity.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <StatusPill variant="waiting" className="text-[10px] px-2">
                        {activity.badge}
                      </StatusPill>
                    </div>
                    <h4 className="mb-1">{activity.title}</h4>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-3">
                      {activity.description}
                    </p>
                    <Button variant="text" className="h-auto p-0 w-auto text-left">
                      {activity.action} →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress Streak */}
        <Card variant="default">
          <div className="flex items-center gap-4">
            <div className="text-[40px] leading-none">🔥</div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[24px] leading-[28px] font-bold text-[var(--brand-green-500)]">
                  12 hari
                </span>
                <span className="text-[14px] text-[var(--text-muted)]">streak</span>
              </div>
              <p className="text-[13px] text-[var(--text-secondary)]">
                Kamu konsisten! Tetap jaga momentum.
              </p>
            </div>
            <Button variant="text" className="h-auto p-0 text-[13px]">
              Lihat
            </Button>
          </div>
        </Card>

        {/* Feed Section */}
        <div>
          <h4 className="mb-3 px-1">Aktivitas terbaru</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {feedItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 px-4 py-3 ${
                    index < feedItems.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full ${getAvatarColor(item.type)} flex items-center justify-center flex-shrink-0 text-white font-semibold text-[13px]`}
                  >
                    {item.type === 'system' ? '⚙️' : getInitials(item.sender)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-medium text-[13px] text-[var(--text-primary)]">
                        {item.sender}
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)]">{item.time}</span>
                    </div>
                    <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                      {item.message}
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
