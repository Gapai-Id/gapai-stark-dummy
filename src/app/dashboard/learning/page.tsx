import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User, BookOpen, Play, FileText, HelpCircle, ChevronRight } from 'lucide-react';
import { ModuleCard } from './_unit/module-card';
import { ContentItemRow } from './_unit/content-item-row';
import { LearningEntry, ContentType } from './_unit/learning-types';

const LEARNING_ENTRIES: LearningEntry[] = [
  {
    kind: 'module',
    data: {
      id: 'm1',
      title: 'Persiapan Dokumen & Administrasi',
      items: [
        { id: 'c1', title: 'Penjelasan Visa Working Holiday', type: 'video', status: 'completed', duration: '8 menit' },
        { id: 'c2', title: 'Checklist Dokumen Paspor', type: 'article', status: 'completed' },
        { id: 'c3', title: 'Cara Upload Dokumen di STARK', type: 'video', status: 'in-progress', duration: '5 menit' },
        { id: 'c4', title: 'Uji Pemahaman Dokumen', type: 'quiz', status: 'not-started' },
      ],
    },
  },
  {
    kind: 'module',
    data: {
      id: 'm2',
      title: 'Budaya Kerja Jepang',
      items: [
        { id: 'c5', title: 'Etika Kerja di Jepang', type: 'video', status: 'not-started', duration: '12 menit' },
        { id: 'c6', title: 'Panduan Komunikasi dengan Atasan', type: 'article', status: 'not-started' },
        { id: 'c7', title: 'Kehidupan Sehari-hari di Jepang', type: 'video', status: 'not-started', duration: '10 menit' },
      ],
    },
  },
  {
    kind: 'item',
    data: { id: 'c8', title: 'Pengenalan Sistem Kesehatan Jepang', type: 'article', status: 'completed' },
  },
];

const allItems = LEARNING_ENTRIES.flatMap(e =>
  e.kind === 'module' ? e.data.items : [e.data]
);
const completedCount = allItems.filter(i => i.status === 'completed').length;
const totalCount = allItems.length;
const progressPct = Math.round((completedCount / totalCount) * 100);
const nextItem =
  allItems.find(i => i.status === 'in-progress') ??
  allItems.find(i => i.status === 'not-started') ??
  null;

const typeIconMap: Record<ContentType, React.ReactNode> = {
  video: <Play className="w-4 h-4 text-white" />,
  article: <FileText className="w-4 h-4 text-white" />,
  quiz: <HelpCircle className="w-4 h-4 text-white" />,
};
const typeBgMap: Record<ContentType, string> = {
  video: 'bg-blue-500',
  article: 'bg-primary-500',
  quiz: 'bg-secondary-500',
};

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          <div className="px-4 pt-4 pb-8 space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60 font-sans">Persiapan keterampilanmu</p>
              <h1 className="text-2xl font-bold font-poppins text-white">Belajar</h1>
            </div>

            {/* Progress card */}
            <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-poppins text-sm">
                      {completedCount} dari {totalCount} selesai
                    </p>
                    <p className="text-white/55 text-xs font-sans">{progressPct}% progres keseluruhan</p>
                  </div>
                </div>
              </div>
              <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-300 rounded-full"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-3">

          {/* Next item — surfaces the first uncompleted item */}
          {nextItem && (
            <Link
              href={`/dashboard/learning/${nextItem.id}`}
              className="flex items-center gap-3 bg-primary-700 rounded-2xl p-4 shadow-sm hover:bg-primary-800 transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${typeBgMap[nextItem.type]}`}>
                {typeIconMap[nextItem.type]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-poppins text-white/60 mb-0.5">
                  {nextItem.status === 'in-progress' ? 'Lanjutkan dari sesi terakhir' : 'Mulai berikutnya'}
                </p>
                <p className="text-sm font-semibold font-poppins text-white leading-snug truncate">{nextItem.title}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/50 shrink-0" />
            </Link>
          )}

          {LEARNING_ENTRIES.map((entry, i) => {
            if (entry.kind === 'module') {
              return <ModuleCard key={entry.data.id} module={entry.data} />;
            }
            return (
              <div key={entry.data.id} className="bg-white rounded-2xl shadow-sm px-4">
                <ContentItemRow item={entry.data} />
              </div>
            );
          })}
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
    </div>
  );
}
