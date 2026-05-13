'use client'

import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '@/components/design-system/Card';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'en', name: 'English', nativeName: 'English' }
];

export default function SettingsAppLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState('id');

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    console.log('Language changed to:', code);
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
          <h2 className="mb-2">Bahasa Aplikasi</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Pilih bahasa yang kamu gunakan di aplikasi
          </p>
        </div>

        {/* Language Options */}
        <Card variant="default">
          <div className="space-y-0 -mx-4">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center justify-between px-4 py-4 text-left ${
                  index < languages.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                }`}
              >
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)] mb-0.5">
                    {language.nativeName}
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    {language.name}
                  </p>
                </div>
                {selectedLanguage === language.code && (
                  <div className="w-6 h-6 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Info */}
        <div className="bg-[var(--neutral-100)] rounded-[8px] p-3">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
            Aplikasi akan dimuat ulang setelah mengubah bahasa untuk menerapkan perubahan.
          </p>
        </div>
      </main>
    </div>
  );
}
