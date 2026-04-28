'use client';

import { cn } from '@/lib/utils';

interface OnboardingProgressProps {
  current: number;
  total: number;
}

export function OnboardingProgress({ current, total }: OnboardingProgressProps) {
  return (
    <div className="mb-6 space-y-2.5">
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1.5 rounded-full flex-1 transition-all duration-300',
              i < current ? 'bg-primary-500' : 'bg-gray-200',
            )}
          />
        ))}
      </div>
      <p className="text-xs font-semibold font-poppins text-primary-600">
        Langkah {current} dari {total}
      </p>
    </div>
  );
}
