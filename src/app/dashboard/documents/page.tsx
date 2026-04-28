'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User } from 'lucide-react';
import { DocumentCard, DocumentItem } from './_unit/document-card';
import { UploadSheet } from './_unit/upload-sheet';

const MOCK_DOCUMENTS: DocumentItem[] = [
  {
    id: '1',
    name: 'Paspor',
    status: 'not-uploaded',
    hasExpiry: true,
    cohortPercent: 72,
  },
  {
    id: '2',
    name: 'SKCK',
    status: 'rejected',
    hasExpiry: false,
    cohortPercent: 89,
    rejectionNote: 'Foto tidak jelas. Mohon upload ulang dengan foto yang lebih terang dan semua teks terbaca.',
  },
  {
    id: '3',
    name: 'Sertifikat Bahasa Jepang',
    status: 'not-uploaded',
    hasExpiry: false,
    cohortPercent: 45,
  },
  {
    id: '4',
    name: 'KTP',
    status: 'expiring-soon',
    hasExpiry: true,
    expiryDate: '15 Mei 2026',
    cohortPercent: 95,
  },
  {
    id: '5',
    name: 'Surat Keterangan Sehat',
    status: 'under-review',
    hasExpiry: false,
    cohortPercent: 61,
  },
  {
    id: '6',
    name: 'Ijazah',
    status: 'verified',
    hasExpiry: false,
    cohortPercent: 91,
    verifiedCopy: 'Ijazahmu terverifikasi — satu dokumen lebih dekat ke keberangkatan.',
  },
  {
    id: '7',
    name: 'Kartu Keluarga',
    status: 'verified',
    hasExpiry: false,
    cohortPercent: 88,
    verifiedCopy: 'Kartu Keluargamu terverifikasi — satu dokumen lebih dekat ke keberangkatan.',
  },
];

const needsAction = (d: DocumentItem) =>
  d.status === 'not-uploaded' || d.status === 'rejected' || d.status === 'expiring-soon' || d.status === 'expired';

const actionDocs = MOCK_DOCUMENTS.filter(needsAction);
const reviewDocs = MOCK_DOCUMENTS.filter(d => d.status === 'under-review');
const verifiedDocs = MOCK_DOCUMENTS.filter(d => d.status === 'verified');

const verifiedCount = verifiedDocs.length;
const totalCount = MOCK_DOCUMENTS.length;
const progressPct = Math.round((verifiedCount / totalCount) * 100);

export default function DocumentsPage() {
  const [uploadDoc, setUploadDoc] = useState<DocumentItem | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">

          {/* Topbar */}
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image
              src="/assets/images/gapai-logo-green.png"
              alt="Gapai"
              width={72}
              height={24}
              className="h-6 w-auto brightness-0 invert"
            />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          {/* Heading + progress */}
          <div className="px-4 pt-4 pb-8 space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60 font-sans">Persiapan keberangkatan</p>
              <h1 className="text-2xl font-bold font-poppins text-white">Dokumenku</h1>
            </div>

            {/* Progress card */}
            <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-white font-semibold font-poppins text-base">
                  {verifiedCount} dari {totalCount} terverifikasi
                </p>
                <p className="text-white/55 text-xs font-sans">
                  Lengkapi dokumenmu sebelum keberangkatan
                </p>
              </div>

              {/* Circular progress */}
              <div className="relative w-12 h-12 shrink-0">
                <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                  <circle
                    cx="18" cy="18" r="15.9"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18" cy="18" r="15.9"
                    fill="none"
                    stroke="rgb(134,239,172)"
                    strokeWidth="3"
                    strokeDasharray={`${(verifiedCount / totalCount) * 99.9} 99.9`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold font-poppins text-white">
                  {progressPct}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-3">

          {actionDocs.length > 0 && (
            <>
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide px-1">
                Perlu tindakan
              </p>
              {actionDocs.map(doc => (
                <DocumentCard key={doc.id} document={doc} onUpload={setUploadDoc} />
              ))}
            </>
          )}

          {reviewDocs.length > 0 && (
            <>
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide px-1 pt-2">
                Sedang ditinjau
              </p>
              {reviewDocs.map(doc => (
                <DocumentCard key={doc.id} document={doc} onUpload={setUploadDoc} />
              ))}
            </>
          )}

          {verifiedDocs.length > 0 && (
            <>
              <p className="text-xs font-semibold font-poppins text-gray-400 uppercase tracking-wide px-1 pt-2">
                Selesai
              </p>
              {verifiedDocs.map(doc => (
                <DocumentCard key={doc.id} document={doc} onUpload={setUploadDoc} />
              ))}
            </>
          )}
        </div>
      </div>

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link href="/dashboard" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Beranda</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <User className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Profil</span>
          </Link>
        </div>
      </nav>

      {/* ── Upload Sheet ─────────────────────────────────── */}
      {uploadDoc && (
        <UploadSheet
          isOpen={!!uploadDoc}
          onClose={() => setUploadDoc(null)}
          documentName={uploadDoc.name}
          hasExpiry={uploadDoc.hasExpiry}
        />
      )}
    </div>
  );
}
