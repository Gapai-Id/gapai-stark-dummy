'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function StepComplete() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="bg-primary-800 flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-16 space-y-6 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-white/5" />

        <Image
          src="/assets/images/gapai-logo-green.png"
          alt="Gapai"
          width={80}
          height={28}
          className="h-7 w-auto brightness-0 invert relative"
        />

        {/* Checkmark */}
        <div className="relative w-20 h-20 rounded-full bg-white/15 ring-8 ring-white/10 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div className="text-center space-y-3 max-w-xs relative">
          <h1 className="text-2xl font-bold font-poppins text-white leading-snug">
            Kamu resmi menjadi seorang preparer aktif
          </h1>
          <p className="text-sm font-sans text-white/60 leading-relaxed">
            Ini adalah langkah yang dilakukan seseorang yang serius tentang masa depannya.
            Asesmen pertamamu sudah menunggumu.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="relative flex items-center gap-2 bg-white text-primary-700 font-poppins font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
        >
          Mulai Asesmen
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-primary-800 pb-8 text-center">
        <p className="text-2xs text-white/30">© 2026 Gapai. All rights reserved.</p>
      </div>
    </div>
  );
}
