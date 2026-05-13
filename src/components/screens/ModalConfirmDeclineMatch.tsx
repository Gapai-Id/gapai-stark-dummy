'use client'

import React from 'react';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

export default function ModalConfirmDeclineMatch() {
  const handleConfirm = () => {
    console.log('Confirm decline match');
  };

  const handleCancel = () => {
    console.log('Cancel decline match');
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-50 max-w-[375px] mx-auto flex items-center justify-center p-5">
      {/* Modal Card */}
      <div className="bg-white rounded-[12px] p-6 w-full max-w-sm">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[var(--semantic-error-50)] flex items-center justify-center">
            <XCircle size={32} className="text-[var(--semantic-error-700)]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center mb-3">Tolak Tawaran Ini?</h3>

        {/* Message */}
        <p className="text-[14px] leading-[22px] text-center text-[var(--text-secondary)] mb-6">
          Jika kamu menolak tawaran ini, kami akan mencari peluang lain yang lebih sesuai dengan preferensi kamu.
        </p>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3 mb-6">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            <strong>PT Sakura Care Tokyo</strong>
            <br />
            Caregiver di Tokyo, Jepang
            <br />
            92% cocok dengan profilmu
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="destructive"
            onClick={handleConfirm}
          >
            Ya, Tolak Tawaran
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
          >
            Tinjau Lagi
          </Button>
        </div>
      </div>
    </div>
  );
}
