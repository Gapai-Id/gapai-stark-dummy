'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContentModule } from './learning-types';
import { ContentItemRow } from './content-item-row';

interface ModuleCardProps {
  module: ContentModule;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const [expanded, setExpanded] = useState(false);

  const completedCount = module.items.filter(i => i.status === 'completed').length;
  const totalCount = module.items.length;
  const isComplete = completedCount === totalCount;
  const progressPct = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Module header */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <div className="flex-1 min-w-0 space-y-2">
          <p className="text-sm font-semibold font-poppins text-gray-800 leading-snug">{module.title}</p>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={cn('h-full rounded-full transition-all', isComplete ? 'bg-primary-500' : 'bg-primary-400')}
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-xs font-sans text-gray-400">
              {isComplete
                ? 'Semua item selesai'
                : `${completedCount} dari ${totalCount} selesai`}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-gray-400">
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Items */}
      {expanded && (
        <div className="px-4 pb-3 border-t border-gray-50 divide-y divide-gray-50">
          {module.items.map(item => (
            <ContentItemRow key={item.id} item={item} indent />
          ))}
        </div>
      )}
    </div>
  );
}
