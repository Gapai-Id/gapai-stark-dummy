import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NotificationItem } from './_unit/notification-item';
import type { Notification } from './_unit/notification-item';

const NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    phase: 'Aktivasi',
    message: 'KTP kamu kedaluwarsa dalam 14 hari — perbarui sekarang agar persiapanmu tidak terhenti.',
    timestamp: '1 jam lalu',
    read: false,
  },
  {
    id: '2',
    phase: 'Aktivasi',
    message: 'Materi baru untuk jalur Japan Caregiver sudah tersedia — lanjutkan persiapanmu sekarang.',
    timestamp: '3 jam lalu',
    read: false,
  },
  {
    id: '3',
    phase: 'Asesmen',
    message: 'Kamu telah menyelesaikan Asesmen — jalur Japan Caregivermu sudah dikonfirmasi.',
    timestamp: 'Kemarin, 10.24',
    read: true,
  },
  {
    id: '4',
    phase: 'Aktivasi',
    message: 'Sesi orientasi Japan Caregiver dijadwalkan Jumat, 18 Apr 2026, pukul 14.00 WIB.',
    timestamp: '3 hari lalu',
    read: true,
  },
  {
    id: '5',
    phase: 'Pencocokan',
    message: 'Profilmu sedang ditinjau oleh tim pencocokan — kami akan segera menghubungimu.',
    timestamp: '5 hari lalu',
    read: true,
  },
];

const unread = NOTIFICATIONS.filter((n) => !n.read);
const read = NOTIFICATIONS.filter((n) => n.read);

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <Link href="/dashboard" className="p-1 -ml-1 text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-sm font-semibold font-poppins text-gray-900">Notifikasi</h1>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full pb-8">
        {NOTIFICATIONS.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center px-8 py-24 space-y-3">
            <p className="text-sm font-semibold font-poppins text-gray-700">
              Belum ada notifikasi
            </p>
            <p className="text-sm text-gray-400 font-roboto leading-relaxed">
              Notifikasi perjalananmu akan muncul di sini — mulai dari pembaruan asesmen hingga kabar kecocokan kerjamu.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-b-none">
            {unread.length > 0 && (
              <div>
                <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                    Belum dibaca · {unread.length}
                  </p>
                </div>
                {unread.map((n) => (
                  <NotificationItem key={n.id} notification={n} />
                ))}
              </div>
            )}

            {read.length > 0 && (
              <div>
                <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                    Sebelumnya
                  </p>
                </div>
                {read.map((n) => (
                  <NotificationItem key={n.id} notification={n} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="pb-8 pt-2 text-center">
        <p className="text-2xs text-gray-400 font-roboto">© 2026 Gapai. All rights reserved.</p>
      </footer>
    </div>
  );
}
