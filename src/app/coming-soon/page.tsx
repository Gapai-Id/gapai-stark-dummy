import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <Link href="/dashboard" className="p-1 -ml-1 text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-sm font-semibold font-poppins text-gray-900">Segera hadir</h1>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full px-4 flex flex-col items-center justify-center text-center space-y-6 py-16">
        <Image
          src="/assets/images/gapai-logo-green.png"
          alt="Gapai"
          width={72}
          height={24}
          className="h-6 w-auto"
        />

        <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
          <Clock className="w-8 h-8 text-primary-400" />
        </div>

        <div className="space-y-2 max-w-xs">
          <p className="text-lg font-bold font-poppins text-gray-900">
            Fitur ini sedang disiapkan
          </p>
          <p className="text-sm text-gray-500 font-roboto leading-relaxed">
            Kami sedang membangun sesuatu yang akan membantumu lebih siap. Pantau terus perkembanganmu dari beranda.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="bg-primary-500 text-white font-poppins font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-primary-600 transition-colors"
        >
          Kembali ke beranda
        </Link>
      </main>

      <footer className="pb-8 pt-2 text-center">
        <p className="text-2xs text-gray-400 font-roboto">© 2026 Gapai. All rights reserved.</p>
      </footer>
    </div>
  );
}
