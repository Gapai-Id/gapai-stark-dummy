'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Camera, Home, User, ChevronRight, Bell, Lock, UserPen, LogOut, AlertTriangle } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">

          {/* Topbar */}
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard" className="p-1 -ml-1 text-white/70 hover:text-white transition-colors">
              <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            </Link>
            <div className="w-8" />
          </div>

          {/* Avatar + identity */}
          <div className="px-4 pt-2 pb-10 flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-primary-600 ring-4 ring-white/20 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold font-poppins text-white">S</span>
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                <Camera className="w-3.5 h-3.5 text-primary-700" />
              </button>
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-bold font-poppins text-white">Sari Dewi</p>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
                <span className="text-xs font-semibold font-poppins text-white/90">Japan Caregiver 🇯🇵</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-3">

          {/* Profil */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">Profil</p>
            <Link href="/profile/edit" className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors border-t border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                  <UserPen className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-poppins font-medium text-gray-700">Edit Profil</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>

          {/* Pengaturan */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">Pengaturan</p>
            <Link href="/settings/notifications" className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors border-t border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-primary-700" />
                </div>
                <span className="text-sm font-poppins font-medium text-gray-700">Notifikasi WhatsApp</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link href="/credential" className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm font-poppins font-medium text-gray-700">Ubah Password atau Nomor HP</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>

          {/* Akun */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">Akun</p>
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors border-t border-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
                  <LogOut className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm font-poppins font-medium text-gray-700">Keluar</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <Link href="/deactivate" className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-sm font-poppins font-medium text-red-500">Nonaktifkan Akun</span>
              </div>
              <ChevronRight className="w-4 h-4 text-red-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Logout Modal ─────────────────────────────────── */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-6">
          <div className="bg-white rounded-2xl p-5 w-full max-w-lg space-y-4">
            <div className="space-y-1.5">
              <p className="text-base font-semibold font-poppins text-gray-900">Keluar dari akun?</p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Perjalananmu akan tetap tersimpan. Kamu bisa masuk kembali kapan saja.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold font-poppins text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => router.push('/login')}
                className="flex-1 py-3 rounded-xl bg-gray-900 text-sm font-semibold font-poppins text-white hover:bg-gray-800 transition-colors"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link href="/dashboard" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Beranda</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-primary-600">
            <User className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-2xs font-semibold font-poppins">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
