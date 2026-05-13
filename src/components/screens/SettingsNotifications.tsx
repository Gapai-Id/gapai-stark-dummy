'use client'

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/design-system/Card';

interface NotificationChannel {
  whatsapp: boolean;
  email: boolean;
}

interface NotificationSettings {
  channels: NotificationChannel;
  types: {
    assessment: boolean;
    training: boolean;
    pipeline: boolean;
    documents: boolean;
    departure: boolean;
    community: boolean;
  };
}

export default function SettingsNotifications() {
  const [settings, setSettings] = useState<NotificationSettings>({
    channels: {
      whatsapp: true,
      email: true
    },
    types: {
      assessment: true,
      training: true,
      pipeline: true,
      documents: true,
      departure: true,
      community: false
    }
  });

  const toggleChannel = (channel: keyof NotificationChannel) => {
    setSettings(prev => ({
      ...prev,
      channels: {
        ...prev.channels,
        [channel]: !prev.channels[channel]
      }
    }));
  };

  const toggleType = (type: keyof NotificationSettings['types']) => {
    setSettings(prev => ({
      ...prev,
      types: {
        ...prev.types,
        [type]: !prev.types[type]
      }
    }));
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
          <h2 className="mb-2">Notifikasi</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Atur bagaimana kamu menerima notifikasi
          </p>
        </div>

        {/* Notification Channels */}
        <div>
          <h4 className="mb-3">Kanal Notifikasi</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {/* WhatsApp */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)]">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)] mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    Terima notifikasi via WhatsApp
                  </p>
                </div>
                <label className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={settings.channels.whatsapp}
                    onChange={() => toggleChannel('whatsapp')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[var(--neutral-200)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--brand-green-500)]"></div>
                </label>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)] mb-0.5">
                    Email
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    Terima notifikasi via email
                  </p>
                </div>
                <label className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={settings.channels.email}
                    onChange={() => toggleChannel('email')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[var(--neutral-200)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--brand-green-500)]"></div>
                </label>
              </div>
            </div>
          </Card>
        </div>

        {/* Notification Types */}
        <div>
          <h4 className="mb-3">Jenis Notifikasi</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {/* Assessment */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)]">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    Assessment & Tes
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.types.assessment}
                  onChange={() => toggleType('assessment')}
                  className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
              </div>

              {/* Training */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)]">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    Pelatihan & Pembelajaran
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.types.training}
                  onChange={() => toggleType('training')}
                  className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
              </div>

              {/* Pipeline */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)]">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    Peluang Kerja & Pipeline
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.types.pipeline}
                  onChange={() => toggleType('pipeline')}
                  className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
              </div>

              {/* Documents */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)]">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    Dokumen & Administrasi
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.types.documents}
                  onChange={() => toggleType('documents')}
                  className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
              </div>

              {/* Departure */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)]">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    Keberangkatan & Travel
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.types.departure}
                  onChange={() => toggleType('departure')}
                  className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
              </div>

              {/* Community */}
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    Komunitas & Aktivitas
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.types.community}
                  onChange={() => toggleType('community')}
                  className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-2 focus:ring-[var(--brand-green-500)]"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Notifikasi penting seperti update dokumen dan jadwal keberangkatan tetap akan dikirim untuk memastikan kamu tidak ketinggalan informasi krusial.
          </p>
        </div>
      </main>
    </div>
  );
}
