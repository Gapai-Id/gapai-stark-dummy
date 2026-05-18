'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { ContextRow } from '@/components/design-system/ContextRow';
import { Card } from '@/components/design-system/Card';
import { ListRow } from '@/components/design-system/ListRow';
import { Button } from '@/components/design-system/Button';
import { Toggle } from '@/components/design-system/Toggle';
import { FileText, Bell, BookOpen } from 'lucide-react';

export default function DashboardStandbyActive() {
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />
      <ContextRow message="Kami sedang pantau peluang baru untukmu." />

      <main className="px-5 py-4 space-y-4">
        {/* Empathetic Hero Card */}
        <Card variant="cream" className="py-6">
          <div className="text-center space-y-3">
            <h2 className="text-[24px] leading-[32px] font-semibold text-[var(--text-primary)]">
              Belum ada jalur yang pas sekarang
            </h2>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Tapi profilmu aktif. Admin Gapai memantau setiap peluang baru.
            </p>
          </div>
        </Card>

        {/* Yang bisa kamu lakukan section */}
        <div>
          <h4 className="mb-3 px-1">Yang bisa kamu lakukan</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              <ListRow
                icon={<FileText size={24} className="text-[var(--brand-green-500)]" />}
                title="Lengkapi profil"
                subtitle="Profil lengkap = peluang lebih besar"
                showChevron
                onClick={() => console.log('Navigate to profile')}
              />

              <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-subtle)]">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <Bell size={24} className="text-[var(--brand-green-500)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-[14px] leading-[20px]">
                    Aktifkan notifikasi JaKer baru
                  </div>
                </div>
                <Toggle
                  checked={notificationEnabled}
                  onChange={setNotificationEnabled}
                />
              </div>

              <ListRow
                icon={<BookOpen size={24} className="text-[var(--brand-green-500)]" />}
                title="Tingkatkan skill di Akademi Gapai"
                showChevron
                onClick={() => console.log('Navigate to Akademi Gapai')}
              />
            </div>
          </Card>
        </div>

        {/* Info Card */}
        <Card variant="tinted">
          <div className="space-y-2">
            <h4 className="text-[var(--text-primary)]">Mengapa belum ada jalur?</h4>
            <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
              Peluang kerja muncul sesuai dengan kebutuhan employer dan kualifikasi yang sesuai.
              Admin Gapai akan langsung kabari kamu begitu ada jalur yang cocok.
            </p>
          </div>
        </Card>

        {/* Jeda option */}
        <div className="flex justify-center pt-2">
          <Button variant="text" onClick={() => console.log('Open jeda modal')}>
            Butuh jeda sejenak?
          </Button>
        </div>
      </main>
    </div>
  );
}
