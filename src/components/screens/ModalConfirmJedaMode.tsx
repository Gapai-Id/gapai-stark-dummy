'use client'

import React from 'react';
import { Pause } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ModalConfirmJedaMode() {
  const handleConfirm = () => {
    console.log('Confirm Jeda mode');
  };

  const handleCancel = () => {
    console.log('Cancel Jeda mode');
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-50 max-w-[375px] mx-auto flex items-center justify-center p-5">
      {/* Modal Card */}
      <div className="bg-white rounded-[12px] p-6 w-full max-w-sm">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[var(--neutral-100)] flex items-center justify-center">
            <Pause size={32} className="text-[var(--text-muted)]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center mb-3">Aktifkan Mode Jeda?</h3>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-center text-[var(--text-secondary)] mb-6">
          Mode Jeda akan menonaktifkan sementara pencarian pekerjaan dan notifikasi peluang baru. Kamu bisa mengaktifkan kembali kapan saja.
        </p>

        {/* Info List */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3 mb-6">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            <strong>Saat mode jeda aktif:</strong>
          </p>
          <ul className="text-[13px] leading-[20px] text-[var(--text-secondary)] mt-2 ml-4 list-disc space-y-1">
            <li>Tidak menerima tawaran pekerjaan baru</li>
            <li>Progress pelatihan tetap tersimpan</li>
            <li>Bisa mengakses materi pembelajaran</li>
            <li>Aktivasi kembali kapan saja</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="primary"
            onClick={handleConfirm}
          >
            Ya, Aktifkan Mode Jeda
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
          >
            Batal
          </Button>
        </div>
      </div>
    </div>
  );
}
