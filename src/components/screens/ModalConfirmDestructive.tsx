'use client'

import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ModalConfirmDestructive() {
  const handleConfirm = () => {
    console.log('Confirm destructive action');
  };

  const handleCancel = () => {
    console.log('Cancel destructive action');
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-50 max-w-[375px] mx-auto flex items-center justify-center p-5">
      {/* Modal Card */}
      <div className="bg-white rounded-[12px] p-6 w-full max-w-sm">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[var(--semantic-error-50)] flex items-center justify-center">
            <AlertCircle size={32} className="text-[var(--semantic-error-700)]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center mb-3">Konfirmasi Tindakan</h3>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-center text-[var(--text-secondary)] mb-6">
          Tindakan ini tidak dapat dibatalkan. Apakah kamu yakin ingin melanjutkan?
        </p>

        {/* Warning */}
        <div className="bg-[var(--semantic-error-50)] rounded-[8px] p-3 mb-6">
          <p className="text-[13px] leading-[20px] text-[var(--semantic-error-900)]">
            <strong>Peringatan:</strong> Data yang terhapus tidak dapat dikembalikan. Pastikan kamu sudah yakin sebelum melanjutkan.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="destructive"
            onClick={handleConfirm}
          >
            Ya, Lanjutkan
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
