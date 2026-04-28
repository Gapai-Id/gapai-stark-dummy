'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Eye, EyeOff, ShieldCheck, Smartphone, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type View = 'landing' | 'password' | 'phone' | 'phone-otp' | 'success-password' | 'success-phone';

const inputClass =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent';

export default function CredentialPage() {
  const [view, setView] = useState<View>('landing');
  const [failCount, setFailCount] = useState(0);
  const [lockedOut, setLockedOut] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState(false);

  const TITLES: Record<View, string> = {
    landing: 'Keamanan akun',
    password: 'Ubah password',
    phone: 'Ubah nomor HP',
    'phone-otp': 'Verifikasi nomor baru',
    'success-password': 'Keamanan akun',
    'success-phone': 'Keamanan akun',
  };

  const handlePasswordSave = () => {
    const newCount = failCount + 1;
    if (newCount >= 5) { setLockedOut(true); return; }
    if (failCount === 0) { setFailCount(newCount); setWrongPassword(true); return; }
    setWrongPassword(false);
    setView('success-password');
  };

  const handleOtpChange = (value: string, index: number) => {
    const next = [...otp];
    next[index] = value.replace(/\D/g, '').slice(-1);
    setOtp(next);
    setOtpError(false);
    if (value && index < 5) document.getElementById(`cotp-${index + 1}`)?.focus();
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0)
      document.getElementById(`cotp-${index - 1}`)?.focus();
  };

  const handleOtpVerify = () => {
    if (otp.join('').length < 6) { setOtpError(true); return; }
    setView('success-phone');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        {view === 'landing' ? (
          <Link href="/profile" className="p-1 -ml-1 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        ) : (
          <button onClick={() => setView(view === 'phone-otp' ? 'phone' : 'landing')} className="p-1 -ml-1 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-sm font-semibold font-poppins text-gray-900">{TITLES[view]}</h1>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full px-4 pt-6 pb-16 flex flex-col">

        {/* LANDING */}
        {view === 'landing' && (
          <div className="space-y-3">
            <p className="text-xs text-gray-500 font-sans px-1">
              Kelola password dan nomor HP-mu untuk menjaga akunmu tetap aman
            </p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-100 shadow-sm">
              <button
                onClick={() => setView('password')}
                className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold font-poppins text-gray-900">Ubah password</p>
                  <p className="text-xs text-gray-400 font-sans">Perbarui kata sandi akunmu</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </button>
              <button
                onClick={() => setView('phone')}
                className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold font-poppins text-gray-900">Ubah nomor HP</p>
                  <p className="text-xs text-gray-400 font-sans">Ganti nomor yang terhubung ke akunmu</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
        )}

        {/* CHANGE PASSWORD */}
        {view === 'password' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Ubah password</h2>
              <p className="text-sm text-gray-500 font-sans">Masukkan password saat ini untuk melanjutkan</p>
            </div>

            {lockedOut && (
              <div className="bg-warning-50 border border-warning-200 rounded-xl px-4 py-3">
                <p className="text-sm text-warning-700 font-sans">
                  Terlalu banyak percobaan — coba lagi dalam 15 menit
                </p>
              </div>
            )}

            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showCurrent ? 'text' : 'password'}
                  placeholder="Password saat ini"
                  disabled={lockedOut}
                  className={cn(inputClass, wrongPassword && 'border-red-400 focus:ring-red-400')}
                />
                <button type="button" onClick={() => setShowCurrent(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {wrongPassword && (
                <p className="text-xs text-red-500 font-sans -mt-1">Password tidak sesuai — coba lagi</p>
              )}
              <div className="relative">
                <input type={showNew ? 'text' : 'password'} placeholder="Password baru" disabled={lockedOut} className={inputClass} />
                <button type="button" onClick={() => setShowNew(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <input type="password" placeholder="Konfirmasi password baru" disabled={lockedOut} className={inputClass} />
            </div>

            <button
              onClick={handlePasswordSave}
              disabled={lockedOut}
              className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 shadow-sm"
            >
              Simpan password baru
            </button>
          </div>
        )}

        {/* CHANGE PHONE */}
        {view === 'phone' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Ubah nomor HP</h2>
              <p className="text-sm text-gray-500 font-sans">Masukkan nomor baru yang ingin kamu gunakan</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 whitespace-nowrap">
                🇮🇩 +62
              </div>
              <input type="tel" placeholder="812 xxxx xxxx" className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" />
            </div>
            <button
              onClick={() => setView('phone-otp')}
              className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
            >
              Kirim kode verifikasi
            </button>
          </div>
        )}

        {/* PHONE OTP */}
        {view === 'phone-otp' && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Verifikasi nomor baru</h2>
              <p className="text-sm text-gray-500 font-sans">
                Kode 6 digit dikirim ke <span className="text-gray-700 font-semibold">+62 812 xxxx xxxx</span>
              </p>
            </div>
            <div className="flex gap-2 justify-between">
              {otp.map((d, i) => (
                <input key={i} id={`cotp-${i}`} type="tel" maxLength={1} value={d}
                  onChange={e => handleOtpChange(e.target.value, i)}
                  onKeyDown={e => handleOtpKeyDown(e, i)}
                  className={cn(
                    'w-full aspect-square max-w-[48px] text-center text-lg font-semibold font-poppins border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors',
                    otpError ? 'border-red-400 bg-red-50' : d ? 'border-primary-500 bg-primary-50' : 'border-gray-200 bg-gray-50'
                  )}
                />
              ))}
            </div>
            {otpError && <p className="text-sm text-red-500 font-sans -mt-2">Kode tidak valid — pastikan kamu memasukkan kode terbaru</p>}
            <button onClick={handleOtpVerify}
              className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors shadow-sm">
              Verifikasi
            </button>
            <p className="text-center text-sm text-gray-500 font-sans">
              Tidak menerima kode?{' '}
              <button className="text-primary-600 font-semibold font-poppins">Kirim ulang (59d)</button>
            </p>
          </div>
        )}

        {/* SUCCESS PASSWORD */}
        {view === 'success-password' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-16">
            <div className="w-20 h-20 rounded-full bg-primary-100 ring-8 ring-primary-50 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-sm">
                <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2 max-w-xs">
              <p className="text-lg font-bold font-poppins text-gray-900">Kamu telah mengamankan akunmu</p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Notifikasi keamanan sudah dikirim ke nomor HP-mu via WhatsApp.
              </p>
            </div>
            <button onClick={() => setView('landing')}
              className="text-sm font-semibold font-poppins text-primary-600">
              Kembali ke pengaturan
            </button>
          </div>
        )}

        {/* SUCCESS PHONE */}
        {view === 'success-phone' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-16">
            <div className="w-20 h-20 rounded-full bg-blue-100 ring-8 ring-blue-50 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-sm">
                <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2 max-w-xs">
              <p className="text-lg font-bold font-poppins text-gray-900">Nomor HP-mu sudah diperbarui</p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Semua notifikasi WhatsApp akan dikirim ke nomor barumu mulai sekarang.
              </p>
            </div>
            <button onClick={() => setView('landing')}
              className="text-sm font-semibold font-poppins text-primary-600">
              Kembali ke pengaturan
            </button>
          </div>
        )}

      </main>

      <footer className="pb-8 pt-2 text-center">
        <p className="text-2xs text-gray-400">© 2026 Gapai. All rights reserved.</p>
      </footer>
    </div>
  );
}
