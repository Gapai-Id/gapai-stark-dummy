'use client'

import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, X } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

const COUNTRIES = [
  { value: 'de', label: 'Jerman', region: 'Eropa' },
  { value: 'at', label: 'Austria', region: 'Eropa' },
  { value: 'nl', label: 'Belanda', region: 'Eropa' },
  { value: 'be', label: 'Belgia', region: 'Eropa' },
  { value: 'ch', label: 'Swiss', region: 'Eropa' },
  { value: 'gb', label: 'Inggris', region: 'Eropa' },
  { value: 'it', label: 'Italia', region: 'Eropa' },
  { value: 'pl', label: 'Polandia', region: 'Eropa' },
  { value: 'ae', label: 'Uni Emirat Arab', region: 'Timur Tengah' },
  { value: 'sa', label: 'Arab Saudi', region: 'Timur Tengah' },
  { value: 'qa', label: 'Qatar', region: 'Timur Tengah' },
  { value: 'kw', label: 'Kuwait', region: 'Timur Tengah' },
  { value: 'bh', label: 'Bahrain', region: 'Timur Tengah' },
  { value: 'om', label: 'Oman', region: 'Timur Tengah' },
  { value: 'jp', label: 'Jepang', region: 'Asia' },
  { value: 'my', label: 'Malaysia', region: 'Asia' },
  { value: 'sg', label: 'Singapura', region: 'Asia' },
  { value: 'kr', label: 'Korea Selatan', region: 'Asia' },
  { value: 'tw', label: 'Taiwan', region: 'Asia' },
  { value: 'hk', label: 'Hong Kong', region: 'Asia' },
];

const REGIONS = ['Eropa', 'Timur Tengah', 'Asia'];

export default function PreAssessmentDestination() {
  const [query, setQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const isSearching = query.trim().length > 0;
  const showList = isSearching || activeRegion !== null;

  const filtered = useMemo(() => {
    if (isSearching) {
      const q = query.toLowerCase();
      return COUNTRIES.filter(
        (c) => c.label.toLowerCase().includes(q) || c.region.toLowerCase().includes(q)
      );
    }
    if (activeRegion) return COUNTRIES.filter((c) => c.region === activeRegion);
    return [];
  }, [query, activeRegion, isSearching]);

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const handleRegionChip = (region: string) => {
    setQuery('');
    setActiveRegion((prev) => (prev === region ? null : region));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected.length === 0) return;
    console.log('Destination complete → PA-04 Experience + Industry', { selected });
  };

  const selectedCountries = COUNTRIES.filter((c) => selected.includes(c.value));

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back to PA-01 Eligibility Gate')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 space-y-5">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] text-[var(--text-muted)]">Langkah 1 dari 8</p>
            <p className="text-[12px] font-medium text-[var(--text-brand)]">13%</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--neutral-200)]">
            <div className="h-1.5 rounded-full bg-[var(--brand-green-500)] w-[13%]" />
          </div>
        </div>

        <div>
          <h2 className="mb-1">Tujuan Kerja</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Pilih negara yang ingin kamu tuju. Boleh pilih lebih dari satu.
          </p>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveRegion(null); }}
            placeholder="Cari negara..."
            className="w-full h-[44px] pl-9 pr-4 border-[1.5px] border-[var(--border-default)] rounded-[10px] text-[14px] bg-white focus:border-[var(--border-brand)] focus:outline-none placeholder:text-[var(--text-muted)]"
          />
        </div>

        {/* Region shortcut chips */}
        <div className="flex gap-2">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChip(region)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium border-[1.5px] transition-colors ${
                activeRegion === region
                  ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)] text-[var(--text-brand)]'
                  : 'border-[var(--border-default)] bg-white text-[var(--text-secondary)]'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Selected chips */}
        {selectedCountries.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedCountries.map((c) => (
              <div
                key={c.value}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--brand-green-50)] border-[1.5px] border-[var(--border-brand)]"
              >
                <span className="text-[13px] font-medium text-[var(--text-brand)]">{c.label}</span>
                <button onClick={() => toggle(c.value)} className="text-[var(--text-brand)] hover:opacity-70">
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Country list — only shown when searching or region selected */}
        {showList && (
          <div className="space-y-1.5">
            {filtered.length === 0 ? (
              <p className="text-[13px] text-[var(--text-muted)] text-center py-4">
                Negara tidak ditemukan
              </p>
            ) : (
              filtered.map((c) => {
                const isSelected = selected.includes(c.value);
                return (
                  <button
                    key={c.value}
                    onClick={() => toggle(c.value)}
                    className={`w-full text-left px-3 py-3 rounded-[10px] border-[1.5px] flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)]'
                        : 'border-[var(--border-default)] bg-white'
                    }`}
                  >
                    <span className="text-[14px] text-[var(--text-primary)]">{c.label}</span>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })
            )}
          </div>
        )}

        {/* Empty state hint */}
        {!showList && selectedCountries.length === 0 && (
          <p className="text-[13px] text-[var(--text-muted)] text-center py-2">
            Ketik nama negara atau pilih wilayah di atas
          </p>
        )}

        {submitted && selected.length === 0 && (
          <p className="text-[12px] text-red-500">Pilih minimal satu negara tujuan</p>
        )}

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
