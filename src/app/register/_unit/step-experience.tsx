'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface StepExperienceProps {
  onNext: () => void;
}

const DURATIONS = ['Kurang dari 1 tahun', '1–2 tahun', '3–5 tahun', 'Lebih dari 5 tahun'];

export function StepExperience({ onNext }: StepExperienceProps) {
  const [hasExperience, setHasExperience] = useState<boolean | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-xl font-semibold font-poppins text-gray-900 leading-snug">
          Pengalaman kerjamu sejauh ini
        </h2>
        <p className="text-sm text-gray-500 font-roboto">
          Pengalaman apapun — formal atau informal — bernilai dalam perjalananmu
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-600 font-poppins">
            Apakah kamu punya pengalaman kerja?
          </p>
          <div className="flex gap-3">
            {[
              { label: 'Ya, punya', value: true },
              { label: 'Belum ada', value: false },
            ].map((opt) => (
              <button
                key={String(opt.value)}
                onClick={() => setHasExperience(opt.value)}
                className={cn(
                  'flex-1 py-3 rounded-xl text-sm font-medium font-poppins border-2 transition-all',
                  hasExperience === opt.value
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-white text-gray-700 border-gray-200',
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {hasExperience && (
          <>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 font-poppins">
                Bidang pekerjaan
              </label>
              <input
                type="text"
                placeholder="Contoh: Perawat, Operator Produksi"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 font-poppins">
                Total pengalaman
              </label>
              <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent appearance-none text-gray-700">
                <option value="">Pilih durasi</option>
                {DURATIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>

      <button
        onClick={onNext}
        disabled={hasExperience === null}
        className="w-full bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Lanjutkan
      </button>
    </div>
  );
}
