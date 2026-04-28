'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User, Play, CheckCircle2, HelpCircle, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContentType } from '../_unit/learning-types';

interface ContentDetail {
  id: string;
  title: string;
  type: ContentType;
  status: 'not-started' | 'in-progress' | 'completed';
  duration?: string;
  body?: string;
  questions?: { question: string; options: string[] }[];
}

const MOCK_CONTENT: ContentDetail[] = [
  {
    id: 'c3',
    title: 'Cara Upload Dokumen di STARK',
    type: 'video',
    status: 'not-started',
    duration: '5 menit',
  },
  {
    id: 'c4',
    title: 'Uji Pemahaman Dokumen',
    type: 'quiz',
    status: 'not-started',
    questions: [
      {
        question: 'Dokumen mana yang memiliki tanggal kedaluwarsa dan harus diperbarui?',
        options: ['KTP', 'Paspor', 'Kartu Keluarga', 'Ijazah'],
      },
      {
        question: 'Apa yang terjadi jika dokumenmu dikembalikan oleh Tim Compliance?',
        options: [
          'Proses keberangkatan otomatis dibatalkan',
          'Kamu perlu upload ulang dokumen yang diperbaiki',
          'Tim Gapai akan mengurusnya untukmu',
          'Kamu harus menghubungi kantor secara langsung',
        ],
      },
    ],
  },
  {
    id: 'c6',
    title: 'Panduan Komunikasi dengan Atasan',
    type: 'article',
    status: 'not-started',
    body: `Berkomunikasi dengan atasan di Jepang berbeda dengan kebiasaan di Indonesia. Memahami perbedaan ini sejak awal akan membantumu beradaptasi lebih cepat dan membangun reputasi yang baik di tempat kerja.

**Gunakan bahasa yang sopan secara konsisten**

Di Jepang, penggunaan bahasa sopan (keigo) kepada atasan bukan pilihan — ini standar. Bahkan dalam percakapan sehari-hari, pastikan kamu menggunakan bentuk kata kerja yang tepat dan menghindari bahasa kasual.

**Konfirmasi instruksi sebelum bertindak**

Ketika menerima instruksi dari atasan, biasakan untuk mengulang kembali apa yang kamu pahami sebelum mulai bekerja. Ini menunjukkan bahwa kamu serius dan mengurangi risiko kesalahan.

**Jangan ragu melaporkan kendala**

Berbeda dengan stereotip "jangan mempermalukan atasan", atasan Jepang di lingkungan kerja modern justru menghargai transparansi. Laporkan kendala sesegera mungkin — jangan tunggu masalah membesar.

**Ketepatan waktu adalah bentuk rasa hormat**

Datang tepat waktu atau lebih awal. Di Jepang, datang terlambat — bahkan satu menit — dianggap tidak profesional dan tidak menghormati waktu orang lain.`,
  },
  {
    id: 'c5',
    title: 'Etika Kerja di Jepang',
    type: 'video',
    status: 'not-started',
    duration: '12 menit',
  },
  {
    id: 'c7',
    title: 'Kehidupan Sehari-hari di Jepang',
    type: 'video',
    status: 'not-started',
    duration: '10 menit',
  },
];

const typeConfig: Record<ContentType, { label: string; bgClass: string; icon: React.ReactNode }> = {
  video: { label: 'Video', bgClass: 'bg-blue-500', icon: <Play className="w-4 h-4 text-white" /> },
  article: { label: 'Artikel', bgClass: 'bg-primary-500', icon: <FileText className="w-4 h-4 text-white" /> },
  quiz: { label: 'Kuis', bgClass: 'bg-secondary-500', icon: <HelpCircle className="w-4 h-4 text-white" /> },
};

export default function ContentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const content = MOCK_CONTENT.find(c => c.id === id) ?? MOCK_CONTENT[2];

  const [completed, setCompleted] = useState(content.status === 'completed');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const type = typeConfig[content.type];

  const handleComplete = () => {
    setCompleted(true);
    setShowConfirmation(true);
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    setCompleted(true);
    setShowConfirmation(true);
  };

  const confirmationCopy: Record<ContentType, string> = {
    article: `Kamu telah menyelesaikan "${content.title}"`,
    video: `Kamu telah menyelesaikan "${content.title}"`,
    quiz: 'Jawabanmu sudah dikirim — nilaimu tercatat',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard/learning" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          <div className="px-4 pt-4 pb-8 space-y-3">
            <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-medium font-poppins', `${type.bgClass}/20`)}>
              {type.icon}
              <span className="text-white/80">{type.label}{content.duration ? ` · ${content.duration}` : ''}</span>
            </span>
            <h1 className="text-xl font-bold font-poppins text-white leading-snug">{content.title}</h1>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-32 space-y-4">

          {/* Completion confirmation */}
          {showConfirmation && (
            <div className="flex items-start gap-2.5 bg-primary-50 border border-primary-100 rounded-2xl p-4">
              <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <p className="text-sm font-semibold font-poppins text-primary-700">{confirmationCopy[content.type]}</p>
            </div>
          )}

          {/* Video player placeholder */}
          {content.type === 'video' && (
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-sm">
              <button
                onClick={handleComplete}
                className="flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
                <p className="text-xs font-poppins">{completed ? 'Ditandai selesai' : 'Tap untuk mulai'}</p>
              </button>
            </div>
          )}

          {/* Article body */}
          {content.type === 'article' && content.body && (
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <div className="prose prose-sm max-w-none text-gray-600 font-sans leading-relaxed space-y-4">
                {content.body.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <p key={i} className="font-semibold font-poppins text-gray-800 text-sm">{para.replace(/\*\*/g, '')}</p>;
                  }
                  if (para.includes('**')) {
                    const parts = para.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={i} className="text-sm text-gray-600">
                        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="font-semibold text-gray-800">{part}</strong> : part)}
                      </p>
                    );
                  }
                  return <p key={i} className="text-sm text-gray-600">{para}</p>;
                })}
              </div>
            </div>
          )}

          {/* Quiz */}
          {content.type === 'quiz' && content.questions && (
            <div className="space-y-4">
              {content.questions.map((q, qi) => (
                <div key={qi} className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
                  <p className="text-sm font-semibold font-poppins text-gray-800 leading-snug">
                    {qi + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => (
                      <button
                        key={oi}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedAnswers(prev => ({ ...prev, [qi]: oi }))}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-xl border text-sm font-sans transition-colors',
                          selectedAnswers[qi] === oi
                            ? 'border-primary-400 bg-primary-50 text-primary-700 font-medium'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Sticky CTA ───────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-100 px-4 py-3">
        <div className="max-w-lg mx-auto">
          {content.type === 'article' && !completed && (
            <button
              onClick={handleComplete}
              className="w-full py-3.5 rounded-2xl bg-primary-600 text-white text-sm font-semibold font-poppins hover:bg-primary-700 transition-colors"
            >
              Tandai Sudah Dibaca
            </button>
          )}
          {content.type === 'quiz' && !quizSubmitted && (
            <button
              onClick={handleQuizSubmit}
              disabled={Object.keys(selectedAnswers).length < (content.questions?.length ?? 0)}
              className="w-full py-3.5 rounded-2xl bg-secondary-500 text-white text-sm font-semibold font-poppins hover:bg-secondary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Kirim Jawaban
            </button>
          )}
          {completed && (
            <Link
              href="/dashboard/learning"
              className="flex items-center justify-center w-full py-3.5 rounded-2xl border border-gray-200 text-gray-500 text-sm font-semibold font-poppins hover:bg-gray-50 transition-colors"
            >
              Kembali ke Daftar Konten
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
