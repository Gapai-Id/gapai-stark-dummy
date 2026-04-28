'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

type View = 'login' | 'forgot' | 'forgot-sent';
type Method = 'phone' | 'email';

const inputClass =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent';

export default function LoginPage() {
  const [view, setView] = useState<View>('login');
  const [method, setMethod] = useState<Method>('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [failCount, setFailCount] = useState(0);
  const [lockedOut, setLockedOut] = useState(false);
  const [forgotValue, setForgotValue] = useState('');

  const handleLogin = () => {
    const next = failCount + 1;
    if (next >= 5) { setLockedOut(true); return; }
    setFailCount(next);
    setLoginError(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* ── Login: green hero ────────────────────────── */}
      {view === 'login' && (
        <>
          <div className="bg-primary-800">
            <div className="max-w-lg mx-auto w-full px-6 pt-12 pb-12 flex flex-col items-center space-y-5">
              <Image
                src="/assets/images/gapai-logo-green.png"
                alt="Gapai"
                width={96}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="text-center space-y-1.5">
                <h1 className="text-2xl font-bold font-poppins text-white">Selamat datang kembali</h1>
                <p className="text-sm font-sans text-white/60">Perjalananmu masih menunggumu.</p>
              </div>
            </div>
          </div>

          {/* Form slides over hero */}
          <div className="flex-1 -mt-5 rounded-t-[28px] bg-white">
            <div className="max-w-lg mx-auto w-full px-6 pt-7 pb-16 space-y-5">

              {/* Method toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                {(['phone', 'email'] as Method[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => { setMethod(m); setLoginError(false); }}
                    className={cn(
                      'flex-1 py-2 text-sm font-medium font-poppins rounded-lg transition-all',
                      method === m ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500',
                    )}
                  >
                    {m === 'phone' ? 'Nomor HP' : 'Email'}
                  </button>
                ))}
              </div>

              {/* Input */}
              {method === 'phone' ? (
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 whitespace-nowrap">
                    🇮🇩 +62
                  </div>
                  <input
                    type="tel"
                    placeholder="812 xxxx xxxx"
                    disabled={lockedOut}
                    className={cn('flex-1 px-4 py-3 bg-gray-50 border rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent', loginError ? 'border-red-400' : 'border-gray-200')}
                  />
                </div>
              ) : (
                <input
                  type="email"
                  placeholder="nama@email.com"
                  disabled={lockedOut}
                  className={cn(inputClass, loginError && 'border-red-400 focus:ring-red-400')}
                />
              )}

              {/* Password */}
              <div className="space-y-1.5">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    disabled={lockedOut}
                    className={cn(inputClass, loginError && 'border-red-400 focus:ring-red-400')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {loginError && !lockedOut && (
                  <p className="text-xs text-red-500 font-sans">Nomor atau password tidak sesuai — coba lagi</p>
                )}
                {lockedOut && (
                  <p className="text-xs text-red-500 font-sans">Terlalu banyak percobaan — coba lagi dalam 15 menit</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setView('forgot')}
                  className="text-sm font-medium font-poppins text-primary-600"
                >
                  Lupa password?
                </button>
              </div>

              <button
                onClick={handleLogin}
                disabled={lockedOut}
                className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                Lanjutkan perjalananmu
              </button>

              <p className="text-center text-sm font-sans text-gray-500">
                Belum punya akun?{' '}
                <Link href="/register" className="text-primary-600 font-semibold font-poppins">
                  Daftar sekarang
                </Link>
              </p>

              <p className="text-center text-2xs text-gray-400 pt-4">© 2026 Gapai. All rights reserved.</p>
            </div>
          </div>
        </>
      )}

      {/* ── Forgot: white header ─────────────────────── */}
      {view !== 'login' && (
        <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
          <button
            onClick={() => setView(view === 'forgot-sent' ? 'forgot' : 'login')}
            className="p-1 -ml-1 text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-sm font-semibold font-poppins text-gray-900">Lupa password</h1>
        </header>
      )}

      {/* ── Forgot password ──────────────────────────── */}
      {view === 'forgot' && (
        <main className="flex-1 max-w-lg mx-auto w-full px-4 pt-6 pb-16">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold font-poppins text-gray-900">Reset passwordmu</h2>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Masukkan nomor HP atau emailmu — kami akan mengirimkan tautan untuk mengatur ulang passwordmu.
              </p>
            </div>
            <input
              type="text"
              placeholder="Nomor HP atau email"
              value={forgotValue}
              onChange={(e) => setForgotValue(e.target.value)}
              className={inputClass}
            />
            <button
              onClick={() => setView('forgot-sent')}
              disabled={!forgotValue.trim()}
              className="w-full bg-primary-600 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Kirim tautan reset
            </button>
          </div>
        </main>
      )}

      {/* ── Forgot sent ──────────────────────────────── */}
      {view === 'forgot-sent' && (
        <main className="flex-1 max-w-lg mx-auto w-full px-4 flex flex-col items-center justify-center text-center space-y-6 py-16">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="space-y-2 max-w-xs">
            <p className="text-lg font-bold font-poppins text-gray-900">Tautan sudah dikirim</p>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Cek WhatsApp atau emailmu. Setelah reset, kamu bisa langsung melanjutkan perjalananmu.
            </p>
          </div>
          <button
            onClick={() => setView('login')}
            className="text-sm font-semibold font-poppins text-primary-600"
          >
            Kembali ke login
          </button>
        </main>
      )}

    </div>
  );
}
