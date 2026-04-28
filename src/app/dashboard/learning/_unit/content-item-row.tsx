'use client';

import Link from 'next/link';
import { Play, FileText, HelpCircle, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContentItem, ContentType, ContentStatus } from './learning-types';

const typeConfig: Record<ContentType, { icon: React.ReactNode; bgClass: string; label: string }> = {
  video: {
    icon: <Play className="w-3.5 h-3.5 text-white" />,
    bgClass: 'bg-blue-500',
    label: 'Video',
  },
  article: {
    icon: <FileText className="w-3.5 h-3.5 text-white" />,
    bgClass: 'bg-primary-500',
    label: 'Artikel',
  },
  quiz: {
    icon: <HelpCircle className="w-3.5 h-3.5 text-white" />,
    bgClass: 'bg-secondary-500',
    label: 'Kuis',
  },
};

interface ContentItemRowProps {
  item: ContentItem;
  indent?: boolean;
}

export function ContentItemRow({ item, indent }: ContentItemRowProps) {
  const type = typeConfig[item.type];
  const isCompleted = item.status === 'completed';
  const isInProgress = item.status === 'in-progress';

  return (
    <Link
      href={`/dashboard/learning/${item.id}`}
      className={cn(
        'flex items-center gap-3 py-3 hover:bg-gray-50 rounded-xl px-2 transition-colors -mx-2',
        indent && 'pl-4'
      )}
    >
      {/* Type icon */}
      <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center shrink-0', type.bgClass)}>
        {type.icon}
      </div>

      {/* Title + meta */}
      <div className="flex-1 min-w-0 space-y-0.5">
        <p className={cn(
          'text-sm font-sans leading-snug',
          isCompleted ? 'text-gray-400' : 'text-gray-700 font-medium'
        )}>
          {item.title}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-sans">{type.label}</span>
          {item.duration && <span className="text-xs text-gray-300">·</span>}
          {item.duration && <span className="text-xs text-gray-400 font-sans">{item.duration}</span>}
          {isInProgress && (
            <>
              <span className="text-xs text-gray-300">·</span>
              <span className="inline-flex items-center gap-1 text-xs text-secondary-600 font-medium font-sans">
                <Clock className="w-3 h-3" />Sedang berlangsung
              </span>
            </>
          )}
        </div>
      </div>

      {/* Status */}
      {isCompleted ? (
        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
      ) : (
        <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
      )}
    </Link>
  );
}
