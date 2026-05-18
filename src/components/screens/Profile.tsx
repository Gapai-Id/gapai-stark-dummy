'use client'

import React, { useState } from 'react';
import { StatusBar } from '@/components/design-system/StatusBar';
import { Card } from '@/components/design-system/Card';
import { ListRow } from '@/components/design-system/ListRow';
import { StatusPill } from '@/components/design-system/StatusPill';
import { User, Phone, Mail, MapPin, Calendar, Settings, Bell, Lock, Globe, LogOut, ChevronRight } from 'lucide-react';

interface ProfileInfo {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const profileData: ProfileInfo[] = [
  {
    label: 'Nama Lengkap',
    value: 'Sari Dewi',
    icon: <User size={20} className="text-[var(--text-muted)]" />
  },
  {
    label: 'Nomor HP',
    value: '+62 812-3456-7890',
    icon: <Phone size={20} className="text-[var(--text-muted)]" />
  },
  {
    label: 'Email',
    value: 'sari.dewi@email.com',
    icon: <Mail size={20} className="text-[var(--text-muted)]" />
  },
  {
    label: 'Domisili',
    value: 'Jakarta Selatan, DKI Jakarta',
    icon: <MapPin size={20} className="text-[var(--text-muted)]" />
  },
  {
    label: 'Tanggal Lahir',
    value: '15 Januari 1998',
    icon: <Calendar size={20} className="text-[var(--text-muted)]" />
  }
];

const settingsMenu = [
  {
    id: 'edit',
    icon: <Settings size={20} className="text-[var(--text-muted)]" />,
    title: 'Edit Profil',
    subtitle: 'Ubah data pribadi',
    showChevron: true
  },
  {
    id: 'notifications',
    icon: <Bell size={20} className="text-[var(--text-muted)]" />,
    title: 'Notifikasi',
    subtitle: 'Atur preferensi notifikasi',
    showChevron: true
  },
  {
    id: 'privacy',
    icon: <Lock size={20} className="text-[var(--text-muted)]" />,
    title: 'Privasi & Keamanan',
    subtitle: 'Password, verifikasi 2 langkah',
    showChevron: true
  },
  {
    id: 'language',
    icon: <Globe size={20} className="text-[var(--text-muted)]" />,
    title: 'Bahasa',
    subtitle: 'Bahasa Indonesia',
    showChevron: true
  }
];

export default function Profile() {

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar name="Sari" />

      <main className="px-5 py-4 space-y-4">
        {/* Hero card - JaKer identity + readiness */}
        <Card variant="cream" className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <StatusPill variant="destination" className="mb-2">
                Tujuan: Jepang 🇯🇵
              </StatusPill>
              <h3 className="mb-1">Caregiver Jepang</h3>
              <p className="text-[13px] text-[var(--text-muted)]">PT Sakura Care Japan</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <StatusPill variant="done" className="text-[13px] px-3 py-1">
                RTD ✓
              </StatusPill>
              <span className="text-[11px] text-[var(--text-muted)]">Ready to Deploy</span>
            </div>
          </div>

          {/* Progress summary */}
          <div className="bg-white rounded-[8px] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] text-[var(--text-secondary)]">Progress keseluruhan</span>
              <span className="text-[13px] font-semibold text-[var(--brand-green-500)]">85%</span>
            </div>
            <div className="w-full h-1.5 bg-[var(--neutral-100)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--brand-green-500)] rounded-full"
                style={{ width: '85%' }}
              />
            </div>
          </div>
        </Card>

        {/* Profile Info */}
        <div>
          <h4 className="mb-3 px-1">Informasi Pribadi</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {profileData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 px-4 py-3 ${
                    index < profileData.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <div className="mt-0.5">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-[12px] text-[var(--text-muted)] mb-0.5">{item.label}</p>
                    <p className="text-[14px] text-[var(--text-primary)]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Settings */}
        <div>
          <h4 className="mb-3 px-1">Pengaturan</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {settingsMenu.map((item, index) => (
                <ListRow
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  showChevron={item.showChevron}
                  onClick={() => console.log('Navigate to:', item.id)}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* App info */}
        <Card variant="default">
          <div className="space-y-2">
            <div className="flex items-center justify-between py-1">
              <span className="text-[13px] text-[var(--text-muted)]">Versi Aplikasi</span>
              <span className="text-[13px] text-[var(--text-secondary)]">1.2.0</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <button className="text-[13px] text-[var(--text-brand)]">
                Syarat & Ketentuan
              </button>
            </div>
            <div className="flex items-center justify-between py-1">
              <button className="text-[13px] text-[var(--text-brand)]">
                Kebijakan Privasi
              </button>
            </div>
            <div className="flex items-center justify-between py-1">
              <button className="text-[13px] text-[var(--text-brand)]">
                Bantuan & FAQ
              </button>
            </div>
          </div>
        </Card>

        {/* Logout */}
        <button
          onClick={() => console.log('Logout')}
          className="w-full flex items-center justify-center gap-2 h-[52px] text-[var(--semantic-error-700)] font-semibold"
        >
          <LogOut size={20} />
          <span>Keluar</span>
        </button>

        {/* Footer */}
        <div className="text-center pb-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            © 2026 Gapai. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
