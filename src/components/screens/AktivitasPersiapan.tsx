'use client'

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';
import { BottomNav } from '@/components/design-system/BottomNav';

const todayTasks = [
  {
    id: '1',
    title: 'Latihan percakapan bahasa Jepang',
    description: 'Modul 3: Perkenalan diri di tempat kerja (10 menit)',
    action: 'Mulai latihan'
  },
  {
    id: '2',
    title: 'Review dokumen paspor',
    description: 'Pastikan masa berlaku minimal 18 bulan',
    action: 'Cek dokumen'
  }
];

const weeklyTasks = [
  { id: '1', task: 'Latihan bahasa Jepang (5 sesi)', completed: true },
  { id: '2', task: 'Upload dokumen kesehatan', completed: true },
  { id: '3', task: 'Baca materi budaya Jepang', completed: false },
  { id: '4', task: 'Praktek interview dengan mentor', completed: false },
  { id: '5', task: 'Update profil LinkedIn', completed: false }
];

export default function AktivitasPersiapan() {
  const [activeTab, setActiveTab] = useState('aktivitas');
  const [activeSubTab, setActiveSubTab] = useState('persiapan');

  const completedCount = weeklyTasks.filter(t => t.completed).length;
  const totalCount = weeklyTasks.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto relative pb-[106px]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center justify-between px-5">
          <h3>Aktivitas</h3>
        </div>

        {/* Sub-tab pills */}
        <div className="flex gap-2 px-5 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('persiapan')}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              activeSubTab === 'persiapan'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-transparent text-[var(--text-muted)]'
            }`}
          >
            Persiapan
          </button>
          <button
            onClick={() => setActiveSubTab('acara')}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              activeSubTab === 'acara'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-transparent text-[var(--text-muted)]'
            }`}
          >
            Acara
          </button>
          <button
            onClick={() => setActiveSubTab('alumni')}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
              activeSubTab === 'alumni'
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-transparent text-[var(--text-muted)]'
            }`}
          >
            Alumni
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-5 py-4 space-y-4">
        {/* Today's tasks */}
        <div>
          <h4 className="mb-3 px-1">Hari ini</h4>
          <div className="space-y-3">
            {todayTasks.map((task) => (
              <Card key={task.id} variant="default">
                <h5 className="text-[14px] font-semibold mb-1">{task.title}</h5>
                <p className="text-[13px] leading-[20px] text-[var(--text-secondary)] mb-3">
                  {task.description}
                </p>
                <Button variant="text" className="h-auto p-0 w-auto">
                  {task.action} →
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly tasks */}
        <div>
          <h4 className="mb-3 px-1">Minggu ini</h4>
          <Card variant="default">
            <div className="space-y-0 -mx-4">
              {weeklyTasks.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    index < weeklyTasks.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    readOnly
                    className="w-5 h-5 rounded border-2 border-[var(--border-default)] text-[var(--brand-green-500)] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <span
                    className={`flex-1 text-[14px] ${
                      item.completed
                        ? 'line-through text-[var(--text-muted)]'
                        : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {item.task}
                  </span>
                  {item.completed && (
                    <CheckCircle2 size={18} className="text-[var(--brand-green-500)]" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Progress summary */}
        <Card variant="tinted">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-[14px] font-semibold">Progress minggu ini</h5>
              <span className="text-[13px] font-semibold text-[var(--brand-green-500)]">
                {progressPercentage}%
              </span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--brand-green-500)] rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)]">
            {completedCount} dari {totalCount} tugas minggu ini selesai
          </p>
        </Card>
      </main>

      <BottomNav
        activeTab={activeTab}
        variant="4-tab"
        onTabChange={setActiveTab}
      />
    </div>
  );
}
