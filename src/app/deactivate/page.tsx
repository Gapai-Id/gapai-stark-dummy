'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, AlertTriangle, Check, PauseCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type View = 'reason' | 'confirm' | 'deactivated' | 'reactivation' | 'sent' | 'login-blocked';

const REASONS = [
  'Saya ingin istirahat sementara',
  'Saya sudah menemukan pekerjaan sendiri',
  'Prosesnya terlalu lama untukku',
  'Saya tidak jadi ingin bekerja di luar negeri',
  'Alasan lainnya',
];

export default function DeactivatePage() {
  const [view, setView] = useState<View>('reason');
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [reactivationText, setReactivationText] = useState('');

  const TITLES: Record<View, string | null> = {
    reason: 'Nonaktifkan akun',
    confirm: 'Nonaktifkan akun',
    deactivated: null,
    reactivation: 'Permohonan reaktivasi',
    sent: 'Permohonan reaktivasi',
    'login-blocked': null,
  };

  const title = TITLES[view];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {title !== null && (
        <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
          {view === 'reason' ? (
            <Link href="/profile" className="p-1 -ml-1 text-gray-600">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          ) : (
            <button
              onClick={() => setView(view === 'confirm' ? 'reason' : view === 'reactivation' ? 'deactivated' : 'reason')}
              className="p-1 -ml-1 text-gray-600"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-sm font-semibold font-poppins text-gray-900">{title}</h1>
        </header>
      )}

      <main className="flex-1 max-w-lg mx-auto w-full px-4 pt-6 pb-16 flex flex-col">

        {/* STEP 1 — REASON */}
        {view === 'reason' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Sebelum kamu pergi</h2>
              <p className="text-sm text-gray-500 font-sans">
                Bantu kami memahami alasanmu. Akunmu tidak akan dihapus.
              </p>
            </div>

            <div className="space-y-2">
              {REASONS.map((reason) => (
                <button
                  key={reason}
                  onClick={() => setSelectedReason(reason)}
                  className={cn(
                    'w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all bg-white',
                    selectedReason === reason
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300',
                  )}
                >
                  <div className={cn(
                    'w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all',
                    selectedReason === reason ? 'border-primary-500 bg-primary-500' : 'border-gray-300',
                  )}>
                    {selectedReason === reason && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm font-sans text-gray-800">{reason}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setView('confirm')}
              disabled={!selectedReason}
              className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              Lanjutkan
            </button>
          </div>
        )}

        {/* STEP 2 — CONFIRM */}
        {view === 'confirm' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Jedakan perjalananmu</h2>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Semua progresmu akan tersimpan. Kamu bisa kembali kapan saja dengan mengajukan permohonan reaktivasi.
              </p>
            </div>

            <div className="bg-warning-50 border border-warning-200 rounded-xl px-4 py-3 flex gap-3">
              <AlertTriangle className="w-4 h-4 text-warning-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-warning-700 font-sans leading-relaxed">
                Setelah dinonaktifkan, kamu tidak dapat mengakses platform hingga Tim Gapai menyetujui permohonan reaktivasimu.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 font-sans">Data dan progresmu tetap tersimpan</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 font-sans">Kamu bisa kembali kapan saja lewat permohonan reaktivasi</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => setView('deactivated')}
                className="w-full bg-red-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-red-600 transition-colors shadow-sm"
              >
                Nonaktifkan akun
              </button>
              <button
                onClick={() => setView('reason')}
                className="w-full text-sm font-semibold font-poppins text-gray-500 py-2"
              >
                Batalkan, saya ingin melanjutkan
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — DEACTIVATED */}
        {view === 'deactivated' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-8">
            <Image
              src="/assets/images/gapai-logo-green.png"
              alt="Gapai"
              width={72}
              height={24}
              className="h-6 w-auto mb-2"
            />

            <div className="w-20 h-20 rounded-full bg-secondary-500/10 ring-8 ring-secondary-500/5 flex items-center justify-center">
              <PauseCircle className="w-10 h-10 text-secondary-600" />
            </div>

            <div className="space-y-2 max-w-xs">
              <p className="text-lg font-bold font-poppins text-gray-900">
                Perjalananmu sedang dijeda
              </p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Semua progresmu tersimpan dan menunggumu. Jika kamu siap melanjutkan, ajukan permohonan reaktivasi.
              </p>
            </div>

            <button
              onClick={() => setView('reactivation')}
              className="bg-primary-600 text-white font-poppins font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
            >
              Ajukan permohonan reaktivasi
            </button>
          </div>
        )}

        {/* STEP 4 — REACTIVATION FORM */}
        {view === 'reactivation' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Selamat datang kembali</h2>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Ceritakan apa yang membuatmu kembali — ini membantu Tim Gapai memproses permohonanmu lebih cepat.
              </p>
            </div>

            <textarea
              rows={5}
              value={reactivationText}
              onChange={(e) => setReactivationText(e.target.value)}
              placeholder="Tuliskan alasanmu di sini..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
            />

            <button
              onClick={() => setView('sent')}
              disabled={!reactivationText.trim()}
              className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              Kirim permohonan
            </button>
          </div>
        )}

        {/* STEP 5 — SENT */}
        {view === 'sent' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-16">
            <div className="w-20 h-20 rounded-full bg-primary-100 ring-8 ring-primary-50 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-sm">
                <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>

            <div className="space-y-2 max-w-xs">
              <p className="text-lg font-bold font-poppins text-gray-900">
                Permohonanmu sudah kami terima
              </p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Tim kami akan menghubungimu dalam <span className="font-semibold text-gray-700">2–3 hari kerja</span>. Perjalananmu menunggumu.
              </p>
            </div>
          </div>
        )}

        {/* LOGIN BLOCKED */}
        {view === 'login-blocked' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-8">
            <Image
              src="/assets/images/gapai-logo-green.png"
              alt="Gapai"
              width={72}
              height={24}
              className="h-6 w-auto mb-2"
            />

            <div className="w-20 h-20 rounded-full bg-secondary-500/10 ring-8 ring-secondary-500/5 flex items-center justify-center">
              <PauseCircle className="w-10 h-10 text-secondary-600" />
            </div>

            <div className="space-y-2 max-w-xs">
              <p className="text-lg font-bold font-poppins text-gray-900">
                Akunmu sedang dinonaktifkan
              </p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Semua progresmu masih tersimpan. Ajukan permohonan reaktivasi dan Tim Gapai akan menghubungimu dalam 2–3 hari kerja.
              </p>
            </div>

            <div className="w-full max-w-xs space-y-3">
              <button
                onClick={() => setView('reactivation')}
                className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
              >
                Ajukan reaktivasi
              </button>
              <a
                href="https://wa.me/628119999999"
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold font-poppins text-gray-500 py-2"
              >
                <MessageCircle className="w-4 h-4" />
                Butuh bantuan? Hubungi Tim Gapai
              </a>
            </div>
          </div>
        )}

      </main>

      {view !== 'deactivated' && view !== 'login-blocked' && (
        <footer className="pb-8 pt-2 text-center">
          <p className="text-2xs text-gray-400">© 2026 Gapai. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
