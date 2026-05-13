'use client'

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Button } from '@/components/design-system/Button';
import { Card } from '@/components/design-system/Card';

export default function PreAssessmentBlocked() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <main className="flex-1 px-5 py-10 flex flex-col">
        {/* Icon + Title */}
        <div className="text-center mb-8">
          <div className="text-[48px] mb-4">🙏</div>
          <h2 className="mb-2">Terima Kasih Sudah Jujur</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Kejujuranmu melindungi kamu dari proses panjang yang tidak akan berhasil. Itu keputusan yang tepat.
          </p>
        </div>

        <Card variant="tinted" className="mb-8">
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Saat ini semua jalur kerja Gapai mensyaratkan kandidat bebas dari kondisi yang kamu sebutkan. Admin Gapai bisa membantumu memahami situasi ini lebih lanjut.
          </p>
        </Card>

        {/* Single CTA */}
        <div className="mt-auto">
          <Button
            variant="primary"
            onClick={() => console.log('Contact Admin Gapai')}
          >
            <PhoneCall size={18} />
            Bicara dengan Admin Gapai
          </Button>
        </div>
      </main>
    </div>
  );
}
