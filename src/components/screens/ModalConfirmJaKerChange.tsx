'use client'

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ModalConfirmJaKerChange() {
  const handleConfirm = () => {
    console.log('Confirm JaKer change');
  };

  const handleCancel = () => {
    console.log('Cancel JaKer change');
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-50 max-w-[375px] mx-auto flex items-center justify-center p-5">
      {/* Modal Card */}
      <div className="bg-white rounded-[12px] p-6 w-full max-w-sm">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[var(--semantic-warning-50)] flex items-center justify-center">
            <AlertTriangle size={32} className="text-[var(--semantic-warning-700)]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center mb-3">Yakin Ganti Jalur Kerja?</h3>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-center text-[var(--text-secondary)] mb-6">
          Mengganti jalur karir akan mereset progress assessment kamu. Kamu perlu mengulang assessment dari awal untuk jalur karir yang baru.
        </p>

        {/* Warning List */}
        <div className="bg-[var(--semantic-warning-50)] rounded-[8px] p-3 mb-6">
          <p className="text-[13px] leading-[20px] text-[var(--semantic-warning-900)]">
            <strong>Yang akan hilang:</strong>
          </p>
          <ul className="text-[13px] leading-[20px] text-[var(--semantic-warning-900)] mt-2 ml-4 list-disc space-y-1">
            <li>Progress assessment saat ini</li>
            <li>Rekomendasi pelatihan</li>
            <li>Riwayat tes kompetensi</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="primary"
            onClick={handleConfirm}
          >
            Ya, Ganti Jalur Kerja
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
