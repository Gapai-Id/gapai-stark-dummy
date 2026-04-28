'use client';

import { Upload, RefreshCw, CheckCircle2, Clock, AlertCircle, XCircle, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type DocumentStatus =
  | 'not-uploaded'
  | 'under-review'
  | 'verified'
  | 'rejected'
  | 'expiring-soon'
  | 'expired';

export interface DocumentItem {
  id: string;
  name: string;
  status: DocumentStatus;
  hasExpiry: boolean;
  expiryDate?: string;
  cohortPercent: number;
  rejectionNote?: string;
  verifiedCopy?: string;
}

interface DocumentCardProps {
  document: DocumentItem;
  onUpload: (doc: DocumentItem) => void;
}

const statusConfig: Record<DocumentStatus, { label: string; className: string; icon: React.ReactNode }> = {
  'not-uploaded': {
    label: 'Belum diunggah',
    className: 'bg-gray-100 text-gray-500',
    icon: <Upload className="w-3.5 h-3.5" />,
  },
  'under-review': {
    label: 'Sedang ditinjau',
    className: 'bg-amber-50 text-amber-700',
    icon: <Clock className="w-3.5 h-3.5" />,
  },
  verified: {
    label: 'Terverifikasi',
    className: 'bg-primary-50 text-primary-700',
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
  },
  rejected: {
    label: 'Dikembalikan',
    className: 'bg-red-50 text-red-600',
    icon: <XCircle className="w-3.5 h-3.5" />,
  },
  'expiring-soon': {
    label: 'Segera kedaluwarsa',
    className: 'bg-orange-50 text-orange-600',
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
  },
  expired: {
    label: 'Kedaluwarsa',
    className: 'bg-red-50 text-red-600',
    icon: <AlertCircle className="w-3.5 h-3.5" />,
  },
};

const needsAction = (s: DocumentStatus) =>
  s === 'not-uploaded' || s === 'rejected' || s === 'expiring-soon' || s === 'expired';

export function DocumentCard({ document: doc, onUpload }: DocumentCardProps) {
  const config = statusConfig[doc.status];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 flex-1 min-w-0">
          <p className="text-sm font-semibold font-poppins text-gray-800 leading-snug">{doc.name}</p>
          <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium font-poppins', config.className)}>
            {config.icon}
            {config.label}
          </span>
        </div>

        {needsAction(doc.status) && (
          <button
            onClick={() => onUpload(doc)}
            className={cn(
              'shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-poppins transition-colors',
              doc.status === 'not-uploaded'
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            )}
          >
            {doc.status === 'not-uploaded' ? (
              <><Upload className="w-3.5 h-3.5" />Upload</>
            ) : (
              <><RefreshCw className="w-3.5 h-3.5" />Upload Ulang</>
            )}
          </button>
        )}
      </div>

      {doc.status === 'rejected' && doc.rejectionNote && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-3">
          <p className="text-xs text-red-600 leading-relaxed">{doc.rejectionNote}</p>
        </div>
      )}

      {doc.status === 'verified' && doc.verifiedCopy && (
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-3">
          <p className="text-xs text-primary-700 leading-relaxed">{doc.verifiedCopy}</p>
        </div>
      )}

      {doc.hasExpiry && doc.expiryDate && (
        <p className={cn(
          'text-xs font-sans',
          doc.status === 'expiring-soon' || doc.status === 'expired'
            ? 'text-orange-600 font-medium'
            : 'text-gray-400'
        )}>
          Kedaluwarsa: {doc.expiryDate}
        </p>
      )}

      <p className="text-xs text-gray-400 font-sans">
        {doc.cohortPercent}% kohortmu sudah mengirimkan dokumen ini
      </p>
    </div>
  );
}
