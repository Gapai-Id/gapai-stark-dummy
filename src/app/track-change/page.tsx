'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, Check, MessageCircle } from 'lucide-react';

type View = 'form' | 'sent';

const CURRENT_TRACK = 'Japan Caregiver 🇯🇵';

const ALL_TRACKS = [
  'Japan Caregiver 🇯🇵',
  'Jerman Caregiver 🇩🇪',
  'Australia Hospitality 🇦🇺',
  'Belanda Pertanian 🇳🇱',
  'Belum yakin — ingin konsultasi',
];

// Toggle to simulate single-track cohort scenario
const DEMO_SINGLE_TRACK = false;

export default function TrackChangePage() {
  const [view, setView] = useState<View>('form');
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [reason, setReason] = useState('');

  const availableTracks = DEMO_SINGLE_TRACK
    ? []
    : ALL_TRACKS.filter((t) => t !== CURRENT_TRACK);

  const hasOptions = availableTracks.length > 0;
  const canSubmit = !!selectedTrack && reason.trim().length > 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        {view === 'form' ? (
          <Link href="/profile" className="p-1 -ml-1 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        ) : (
          <button onClick={() => setView('form')} className="p-1 -ml-1 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-sm font-semibold font-poppins text-gray-900">Perubahan jalur</h1>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full px-4 pt-6 pb-16 flex flex-col">

        {/* FORM */}
        {view === 'form' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Ubah arah perjalananmu</h2>
              <p className="text-sm text-gray-500 font-roboto leading-relaxed">
                {hasOptions
                  ? 'Jalur barumu akan ditinjau oleh Tim Gapai sebelum dikonfirmasi.'
                  : 'Ceritakan kebutuhanmu dan Tim Gapai akan menghubungimu.'}
              </p>
            </div>

            {/* Current track — read only */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <Lock className="w-3.5 h-3.5 text-gray-400" />
                <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                  Jalur saat ini
                </p>
              </div>
              <div className="px-4 py-4">
                <p className="text-sm font-medium font-roboto text-gray-800">{CURRENT_TRACK}</p>
                <p className="text-xs text-gray-400 font-roboto mt-0.5">Dikonfirmasi melalui Asesmen</p>
              </div>
            </div>

            {hasOptions ? (
              <>
                {/* Track selection */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide px-1">
                    Pilih jalur baru
                  </p>
                  {availableTracks.map((track) => (
                    <button
                      key={track}
                      onClick={() => setSelectedTrack(track)}
                      className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all bg-white ${
                        selectedTrack === track
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                        selectedTrack === track ? 'border-primary-500 bg-primary-500' : 'border-gray-300'
                      }`}>
                        {selectedTrack === track && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm font-roboto text-gray-800">{track}</span>
                    </button>
                  ))}
                </div>

                {/* Reason */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide px-1">
                    Alasanmu
                  </p>
                  <textarea
                    rows={4}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Ceritakan mengapa kamu ingin mengubah jalur..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  onClick={() => setView('sent')}
                  disabled={!canSubmit}
                  className="w-full bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Kirim permohonan
                </button>
              </>
            ) : (
              <>
                {/* No other tracks available */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 space-y-1.5">
                  <p className="text-sm font-medium font-poppins text-gray-700">
                    Belum ada jalur lain yang tersedia
                  </p>
                  <p className="text-sm text-gray-500 font-roboto leading-relaxed">
                    Cohortmu saat ini hanya memiliki satu jalur. Jika kamu ingin mendiskusikan opsi lain, Tim Gapai siap membantu.
                  </p>
                </div>

                {/* Free-form message */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide px-1">
                    Ceritakan kebutuhanmu
                  </p>
                  <textarea
                    rows={4}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Jalur apa yang kamu inginkan, atau pertanyaan apa yang ingin kamu diskusikan?"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
                  />
                </div>

                <a
                  href={`https://wa.me/628119999999${reason.trim() ? `?text=${encodeURIComponent(reason.trim())}` : ''}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Hubungi Tim Gapai
                </a>
              </>
            )}
          </div>
        )}

        {/* SENT */}
        {view === 'sent' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-16">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>

            <div className="space-y-2 max-w-xs">
              <p className="text-lg font-bold font-poppins text-gray-900">
                Permohonanmu sudah kami terima
              </p>
              <p className="text-sm text-gray-500 font-roboto leading-relaxed">
                Tim Gapai akan meninjau dan menghubungimu dalam{' '}
                <span className="font-medium text-gray-700">2–3 hari kerja</span>.
                Perjalananmu terus bergerak maju.
              </p>
            </div>

            <Link
              href="/profile"
              className="text-sm font-semibold font-poppins text-primary-600"
            >
              Kembali ke profil
            </Link>
          </div>
        )}

      </main>

      {view === 'form' && (
        <footer className="pb-8 pt-2 text-center">
          <p className="text-2xs text-gray-400 font-roboto">© 2026 Gapai. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
