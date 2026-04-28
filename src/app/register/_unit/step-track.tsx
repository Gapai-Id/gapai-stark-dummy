'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepTrackProps {
  onNext: () => void;
}

const TRACKS = [
  {
    id: 'japan-caregiver',
    name: 'Japan Caregiver',
    flag: '🇯🇵',
    description: 'Bekerja sebagai caregiver lansia di Jepang melalui program EPA atau SSW',
  },
  {
    id: 'japan-ssw',
    name: 'Japan Specified Skilled Worker',
    flag: '🇯🇵',
    description: 'Bekerja di sektor manufaktur, food service, atau agrikultur di Jepang',
  },
  {
    id: 'taiwan-caregiver',
    name: 'Taiwan Caregiver',
    flag: '🇹🇼',
    description: 'Bekerja sebagai caregiver atau asisten rumah tangga di Taiwan',
  },
];

export function StepTrack({ onNext }: StepTrackProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-xl font-semibold font-poppins text-gray-900 leading-snug">
          Pilih jalurmu
        </h2>
        <p className="text-sm text-gray-500 font-roboto">
          Ini mencerminkan tujuanmu. Pilih jalur yang paling ingin kamu kejar.
        </p>
      </div>

      <div className="space-y-3">
        {TRACKS.map((track) => (
          <button
            key={track.id}
            onClick={() => setSelected(track.id)}
            className={cn(
              'w-full text-left p-4 rounded-2xl border-2 transition-all',
              selected === track.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 bg-white hover:border-gray-300',
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{track.flag}</span>
                  <span className="font-semibold font-poppins text-sm text-gray-900">
                    {track.name}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-roboto leading-relaxed">
                  {track.description}
                </p>
              </div>
              <div
                className={cn(
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all',
                  selected === track.id
                    ? 'bg-primary-500 border-primary-500'
                    : 'border-gray-300 bg-white',
                )}
              >
                {selected === track.id && (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selected}
        className="w-full bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Ini jalurku
      </button>
    </div>
  );
}
