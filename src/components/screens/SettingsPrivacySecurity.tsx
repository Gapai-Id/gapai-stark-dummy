'use client'

import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';

export default function SettingsPrivacySecurity() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

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
          <h2 className="mb-2">Privasi & Keamanan</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Kelola keamanan dan privasi akun kamu
          </p>
        </div>

        {/* Security Status */}
        <Card variant="default" className="border-2 border-[var(--brand-green-500)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-green-50)] flex items-center justify-center">
              <Shield size={24} className="text-[var(--brand-green-500)]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-[15px]">Keamanan Akun</h4>
                <StatusPill variant="done" className="text-[10px] px-2 py-0.5">
                  Aman
                </StatusPill>
              </div>
              <p className="text-[13px] text-[var(--text-muted)]">
                Akun kamu terlindungi dengan baik
              </p>
            </div>
          </div>
        </Card>

        {/* Password Section */}
        <div>
          <h4 className="mb-3">Kata Sandi</h4>
          <Card variant="default">
            <button
              onClick={() => console.log('Change password')}
              className="w-full flex items-center justify-between text-left"
            >
              <div>
                <p className="text-[14px] font-medium text-[var(--text-primary)] mb-0.5">
                  Ubah Kata Sandi
                </p>
                <p className="text-[13px] text-[var(--text-muted)]">
                  Terakhir diubah 3 bulan lalu
                </p>
              </div>
              <ChevronRight size={20} className="text-[var(--text-muted)]" />
            </button>
          </Card>
        </div>

        {/* Two-Factor Authentication */}
        <div>
          <h4 className="mb-3">Verifikasi 2 Langkah</h4>
          <Card variant="default">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-[14px] font-medium text-[var(--text-primary)] mb-1">
                  Verifikasi 2 Langkah (2FA)
                </p>
                <p className="text-[13px] text-[var(--text-muted)] mb-3">
                  Tambahkan lapisan keamanan ekstra saat login
                </p>
                {twoFactorEnabled && (
                  <StatusPill variant="active" className="text-[11px] px-2 py-1">
                    Aktif via WhatsApp
                  </StatusPill>
                )}
              </div>
              <label className="relative inline-block w-11 h-6 flex-shrink-0 ml-3">
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[var(--neutral-200)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--brand-green-500)]"></div>
              </label>
            </div>
          </Card>
        </div>

        {/* Privacy Section */}
        <div>
          <h4 className="mb-3">Privasi Data</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {/* Export Data */}
              <button
                onClick={() => console.log('Export data')}
                className="w-full flex items-center justify-between px-4 py-4 border-b border-[var(--border-subtle)] text-left"
              >
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)] mb-0.5">
                    Unduh Data Saya
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    Dapatkan salinan data pribadi kamu
                  </p>
                </div>
                <ChevronRight size={20} className="text-[var(--text-muted)]" />
              </button>

              {/* Delete Account */}
              <button
                onClick={() => console.log('Delete account')}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
              >
                <div>
                  <p className="text-[14px] font-medium text-[var(--semantic-error-700)] mb-0.5">
                    Hapus Akun
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    Hapus akun dan semua data permanen
                  </p>
                </div>
                <ChevronRight size={20} className="text-[var(--semantic-error-700)]" />
              </button>
            </div>
          </Card>
        </div>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            <strong>Penting:</strong> Menghapus akun akan menghapus semua data kamu secara permanen dan tidak dapat dikembalikan. Pastikan kamu sudah mengunduh data penting sebelum menghapus akun.
          </p>
        </div>
      </main>
    </div>
  );
}
