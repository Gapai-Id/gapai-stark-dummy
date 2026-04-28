import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Home, User } from 'lucide-react';
import { ProfileForm } from '../_unit/profile-form';

export default function ProfileEditPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/profile" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <div className="w-8" />
          </div>
          <div className="px-4 pt-4 pb-8 space-y-1">
            <p className="text-sm text-white/60 font-sans">Profil</p>
            <h1 className="text-2xl font-bold font-poppins text-white">Edit Profil</h1>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28">
          <ProfileForm />
        </div>
      </div>

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
