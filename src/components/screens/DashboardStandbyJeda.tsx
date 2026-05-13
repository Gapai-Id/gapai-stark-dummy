'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';
import { Eye, BookOpen } from 'lucide-react';

export default function DashboardStandbyJeda() {
  const [activeTab, setActiveTab] = useState('beranda');

  const jedaStartDate = '5 Mei 2026';

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      <StatusBar name="Sari" />
      <ContextRow message="Kamu sedang jeda. Profil tetap aktif." />

      <main className="px-5 py-4 space-y-4">
        {/* Jeda Hero Card - Low energy, restful */}
        <Card variant="default" className="bg-[var(--neutral-100)] py-6">
          <div className="text-center space-y-3">
            <div className="text-[48px] leading-none">🌿</div>
            <h2 className="text-[24px] leading-[32px] font-semibold text-[var(--text-primary)]">
              Kamu sedang istirahat sejenak
            </h2>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Profil dan histori kamu aman. Kembali kapanpun kamu siap.
            </p>
          </div>
        </Card>

        {/* What you can still do */}
        <div>
          <h4 className="mb-3 px-1">Saat jeda, kamu tetap bisa:</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              <ListRow
                icon={<Eye size={24} className="text-[var(--brand-green-500)]" />}
                title="Lihat profil & dokumenmu"
                showChevron
                onClick={() => console.log('Navigate to profile')}
              />
              <ListRow
                icon={<BookOpen size={24} className="text-[var(--brand-green-500)]" />}
                title="Baca cerita alumni"
                showChevron
                onClick={() => console.log('Navigate to alumni stories')}
              />
            </div>
          </Card>
        </div>

        {/* Re-entry CTA */}
        <div className="pt-2">
          <Button variant="primary" onClick={() => console.log('Reactivate')}>
            Aktifkan kembali
          </Button>
        </div>

        {/* Jeda duration info */}
        <div className="text-center">
          <p className="text-[12px] leading-[18px] text-[var(--text-muted)]">
            Jeda dimulai: {jedaStartDate}
          </p>
        </div>

        {/* Supportive message */}
        <Card variant="default">
          <div className="text-center py-2">
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Tidak ada tekanan. Platform Gapai adalah ruang yang aman untuk istirahat dan kembali kapanpun kamu siap melanjutkan perjalanan.
            </p>
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
