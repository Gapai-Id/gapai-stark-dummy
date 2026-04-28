'use client';

import { Fragment } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Phase = 'assessment' | 'training' | 'activation' | 'matchmaking';

interface PhaseProgressProps {
  currentPhase: Phase;
  completedPhases: Phase[];
  variant?: 'default' | 'hero';
  phaseKeys?: Phase[];
}

const ALL_PHASES: { key: Phase; label: string }[] = [
  { key: 'assessment', label: 'Asesmen' },
  { key: 'training', label: 'Pelatihan' },
  { key: 'activation', label: 'Aktivasi' },
  { key: 'matchmaking', label: 'Pencocokan' },
];

export function PhaseProgress({ currentPhase, completedPhases, variant = 'default', phaseKeys }: PhaseProgressProps) {
  const phases = phaseKeys ? ALL_PHASES.filter(p => phaseKeys.includes(p.key)) : ALL_PHASES;
  const isHero = variant === 'hero';

  return (
    <div className="flex items-start w-full">
      {phases.map((phase, index) => {
        const isCompleted = completedPhases.includes(phase.key);
        const isCurrent = currentPhase === phase.key;
        const isUpcoming = !isCompleted && !isCurrent;
        const nextPhase = phases[index + 1];
        const nextActive = nextPhase
          ? completedPhases.includes(nextPhase.key) || currentPhase === nextPhase.key
          : false;

        return (
          <Fragment key={phase.key}>
            {/* Dot + label — fixed width, not flex-1 */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-poppins transition-all',
                  isHero ? [
                    isCompleted && 'bg-white text-primary-700',
                    isCurrent && 'bg-white ring-4 ring-white/25 text-primary-700',
                    isUpcoming && 'bg-white/20 border border-white/30 text-white/50',
                  ] : [
                    isCompleted && 'bg-primary-500 text-white',
                    isCurrent && 'bg-primary-500 ring-4 ring-primary-100 text-white',
                    isUpcoming && 'bg-gray-200 text-gray-500',
                  ],
                )}
              >
                {isCompleted ? (
                  <Check className={cn('w-3.5 h-3.5', isHero ? 'text-primary-600' : 'text-white')} strokeWidth={3} />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  'text-2xs mt-1 font-poppins text-center whitespace-nowrap',
                  isHero ? [
                    isCompleted && 'text-white/80 font-medium',
                    isCurrent && 'text-white font-semibold',
                    isUpcoming && 'text-white/40',
                  ] : [
                    isCompleted && 'text-primary-600 font-medium',
                    isCurrent && 'text-primary-700 font-semibold',
                    isUpcoming && 'text-gray-400',
                  ],
                )}
              >
                {phase.label}
              </span>
            </div>

            {/* Connector — flex-1 fills space between dots, aligned to dot center (mt-3.5 = half of w-7) */}
            {index < phases.length - 1 && (
              <div
                className={cn(
                  'h-0.5 flex-1 mt-3.5 mx-1',
                  isHero
                    ? nextActive ? 'bg-white/50' : 'bg-white/15'
                    : nextActive ? 'bg-primary-400' : 'bg-gray-200',
                )}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
