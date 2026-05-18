'use client'

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Lock } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { StatusBar } from '@/components/design-system/StatusBar';

// Generate calendar data for current month
const generateCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay();

  // Active days (mock data - streak days)
  const activeDays = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
  const currentDay = 24;

  return { daysInMonth, startDayOfWeek, activeDays, currentDay };
};

const milestones = [
  {
    id: '1',
    title: '7 hari berturut-turut',
    progress: 7,
    target: 7,
    status: 'completed' as const
  },
  {
    id: '2',
    title: '30 hari berturut-turut',
    progress: 24,
    target: 30,
    status: 'active' as const
  },
  {
    id: '3',
    title: '100 hari berturut-turut',
    progress: 24,
    target: 100,
    status: 'locked' as const
  }
];

export default function StreakDetail() {
  const { daysInMonth, startDayOfWeek, activeDays, currentDay } = generateCalendar();

  const weeks = Math.ceil((daysInMonth + startDayOfWeek) / 7);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Streak Kamu</h4>
      </div>

      {/* Main Content */}
      <main className="px-5 py-4 space-y-4">
        {/* Streak Hero */}
        <Card variant="default" className="text-center py-6">
          <div className="text-[56px] leading-none mb-3">🔥</div>
          <h2 className="mb-1">24 hari streak</h2>
          <p className="text-[14px] text-[var(--text-muted)]">Persiapan harianmu</p>
        </Card>

        {/* Calendar */}
        <div>
          <h4 className="mb-3 px-1">Mei 2026</h4>
          <Card variant="default">
            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day, index) => (
                <div
                  key={index}
                  className="text-center text-[11px] font-medium text-[var(--text-muted)] py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: weeks * 7 }).map((_, index) => {
                const dayNumber = index - startDayOfWeek + 1;
                const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;
                const isActive = isValidDay && activeDays.has(dayNumber);
                const isToday = dayNumber === currentDay;

                if (!isValidDay) {
                  return <div key={index} className="aspect-square" />;
                }

                return (
                  <div
                    key={index}
                    className={`aspect-square flex items-center justify-center rounded-full text-[13px] font-medium ${
                      isActive
                        ? isToday
                          ? 'bg-[var(--brand-green-500)] text-white ring-2 ring-[var(--brand-green-500)] ring-offset-2'
                          : 'bg-[var(--brand-green-500)] text-white'
                        : 'bg-[var(--neutral-100)] text-[var(--text-muted)]'
                    }`}
                  >
                    {dayNumber}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Milestones */}
        <div>
          <h4 className="mb-3 px-1">Milestone</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {milestones.map((milestone, index) => {
                const progressPercentage = Math.round((milestone.progress / milestone.target) * 100);

                let icon;
                let statusPill;

                if (milestone.status === 'completed') {
                  icon = <CheckCircle2 size={24} className="text-[var(--brand-green-500)]" />;
                  statusPill = { text: 'Selesai', variant: 'done' as const };
                } else if (milestone.status === 'active') {
                  icon = (
                    <div className="w-6 h-6 rounded-full border-2 border-[var(--brand-green-500)] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--brand-green-500)]" />
                    </div>
                  );
                  statusPill = { text: `${milestone.progress}/${milestone.target}`, variant: 'active' as const };
                } else {
                  icon = <Lock size={24} className="text-[var(--neutral-400)]" />;
                  statusPill = { text: 'Terkunci', variant: 'locked' as const };
                }

                return (
                  <div
                    key={milestone.id}
                    className={`px-4 py-4 ${
                      index < milestones.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-shrink-0">{icon}</div>
                      <div className="flex-1">
                        <h5 className="text-[15px] font-semibold mb-1">{milestone.title}</h5>
                      </div>
                      <StatusPill variant={statusPill.variant} className="text-[11px] px-2 py-1">
                        {statusPill.text}
                      </StatusPill>
                    </div>

                    {milestone.status === 'active' && (
                      <div className="w-full h-1.5 bg-[var(--neutral-100)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--brand-green-500)] rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Info */}
        <Card variant="tinted">
          <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] text-center">
            Jaga streak-mu dengan login dan selesaikan minimal 1 aktivitas setiap hari! 💪
          </p>
        </Card>
      </main>
    </div>
  );
}
