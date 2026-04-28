'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User, PenSquare, Shield } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { PostCard } from './_unit/post-card';
import type { CommunityPost } from './_unit/community-types';

const MOCK_POSTS: CommunityPost[] = [
  {
    id: '1',
    authorName: 'Tim Growth',
    authorRole: 'growth',
    authorColor: 'bg-primary-700',
    content: 'Selamat datang di komunitas kohort Japan Caregiver Batch Apr 2024! 🎌\n\nIni adalah ruang untuk berbagi, bertanya, dan saling mendukung selama masa Activation. Tim Growth ada di sini — jangan ragu bertanya soal apapun.\n\nSemangat persiapannya. Kalian sudah memilih jalur yang serius — buktikan lewat setiap langkah kecil yang konsisten.',
    isPinned: true,
    isEdited: false,
    createdAt: '3 hari lalu',
    reactions: [{ emoji: '❤️', count: 18 }, { emoji: '🙌', count: 12 }],
    commentCount: 7,
    isOwnPost: false,
  },
  {
    id: '2',
    authorName: 'Kamu',
    authorRole: 'candidate',
    authorColor: 'bg-blue-500',
    content: 'Ada yang punya tips belajar kanji? Saya kesulitan di bagian ini.. sudah coba beberapa metode tapi masih belum nempel juga 😅',
    isPinned: false,
    isEdited: false,
    createdAt: '2 hari lalu',
    reactions: [{ emoji: '❤️', count: 5 }, { emoji: '💡', count: 3 }],
    commentCount: 8,
    isOwnPost: true,
  },
  {
    id: '3',
    authorName: 'Sari W.',
    authorRole: 'candidate',
    authorColor: 'bg-rose-500',
    content: 'Baru selesai upload semua dokumen! Lega banget akhirnya — tinggal tunggu verifikasi dari Tim Compliance 🎉 Semoga semuanya lolos ya!',
    isPinned: false,
    isEdited: false,
    createdAt: '2 hari lalu',
    reactions: [{ emoji: '❤️', count: 14 }, { emoji: '🔥', count: 6 }],
    commentCount: 3,
    isOwnPost: false,
  },
  {
    id: '4',
    authorName: 'Dani P.',
    authorRole: 'candidate',
    authorColor: 'bg-secondary-500',
    content: 'Pertanyaan: untuk medical check-up, apakah harus di klinik yang sudah ditunjuk atau bisa di mana saja? Ada yang sudah tanya ke Tim Compliance?',
    isPinned: false,
    isEdited: false,
    createdAt: '1 hari lalu',
    reactions: [{ emoji: '❤️', count: 2 }],
    commentCount: 11,
    isOwnPost: false,
  },
  {
    id: '5',
    authorName: 'Hendra M.',
    authorRole: 'candidate',
    authorColor: 'bg-neutral-600',
    content: 'Hari ini belajar bahasa Jepang 2 jam — progres pelan tapi konsisten. Siapa yang lagi berjuang bareng di sini? 💪\n\nIngat kata pelatih: konsistensi lebih kuat dari intensitas.',
    isPinned: false,
    isEdited: false,
    createdAt: '5 jam lalu',
    reactions: [{ emoji: '❤️', count: 9 }, { emoji: '💪', count: 7 }],
    commentCount: 5,
    isOwnPost: false,
  },
];

const GUIDELINES = [
  'Hormati sesama anggota — kritik boleh, tapi tetap sopan.',
  'Tidak ada konten SARA, hoaks, atau promosi pihak ketiga.',
  'Pertanyaan soal proses? Tag Tim Growth atau tanya langsung di sini.',
  'Postingan yang melanggar akan dihapus tanpa pemberitahuan.',
];

function GuidelinesModal({ onAcknowledge }: { onAcknowledge: (dontShowAgain: boolean) => void }) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end">
      <div className="bg-white w-full max-w-lg mx-auto rounded-t-3xl px-6 pt-6 pb-10 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-700" />
          </div>
          <h2 className="text-lg font-bold font-poppins text-gray-900">Standar komunitas kita</h2>
        </div>

        <p className="text-sm text-gray-500 font-sans leading-relaxed">
          Ini standar komunitas orang-orang yang serius mempersiapkan diri. Baca dan pahami sebelum bergabung.
        </p>

        <ul className="space-y-2.5">
          {GUIDELINES.map((g, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-sans">
              <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold font-poppins flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              {g}
            </li>
          ))}
        </ul>

        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={e => setDontShowAgain(e.target.checked)}
            className="w-4 h-4 rounded accent-primary-700 cursor-pointer"
          />
          <span className="text-sm text-gray-500 font-sans">Jangan tampilkan lagi</span>
        </label>

        <button
          onClick={() => onAcknowledge(dontShowAgain)}
          className="w-full py-3.5 bg-primary-700 text-white text-sm font-semibold font-poppins rounded-2xl hover:bg-primary-800 active:scale-[0.98] transition-all"
        >
          Saya siap berpartisipasi
        </button>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  const [guidelinesAcknowledged, setGuidelinesAcknowledged] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuickAccess = params.get('from') === 'quickaccess';
    const alreadyAcknowledged = localStorage.getItem('community-guidelines-ack') === '1';

    // DEMO ONLY: QuickAccess always triggers the modal regardless of checkbox state.
    // In production: checkbox makes modal never appear again, including from QuickAccess.
    if (fromQuickAccess || !alreadyAcknowledged) {
      setGuidelinesAcknowledged(false);
    }
  }, []);
  const [posts, setPosts] = useState<CommunityPost[]>(MOCK_POSTS);
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeText, setComposeText] = useState('');

  function handlePost() {
    const text = composeText.trim();
    if (!text) return;
    const newPost: CommunityPost = {
      id: Date.now().toString(),
      authorName: 'Kamu',
      authorRole: 'candidate',
      authorColor: 'bg-blue-500',
      content: text,
      isPinned: false,
      isEdited: false,
      createdAt: 'Baru saja',
      reactions: [{ emoji: '❤️', count: 0 }],
      commentCount: 0,
      isOwnPost: true,
    };
    setPosts(prev => {
      const pinned = prev.filter(p => p.isPinned);
      const regular = prev.filter(p => !p.isPinned);
      return [...pinned, newPost, ...regular];
    });
    setComposeText('');
    setComposeOpen(false);
  }

  function handleDelete(id: string) {
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  const pinnedPosts = posts.filter(p => p.isPinned);
  const regularPosts = posts.filter(p => !p.isPinned);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {!guidelinesAcknowledged && (
        <GuidelinesModal onAcknowledge={(dontShowAgain) => {
          if (dontShowAgain) localStorage.setItem('community-guidelines-ack', '1');
          setGuidelinesAcknowledged(true);
        }} />
      )}

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          <div className="px-4 pt-4 pb-8 space-y-1">
            <p className="text-sm text-white/60 font-sans">Japan Caregiver · Batch Apr 2024</p>
            <h1 className="text-2xl font-bold font-poppins text-white">Komunitas Kohort</h1>
            <p className="text-sm text-white/60 font-sans">Berbagi, bertanya, dan saling dukung bersama kohortmu.</p>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-32 space-y-3">

          {pinnedPosts.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">📌 Disematkan</p>
              {pinnedPosts.map(post => (
                <PostCard key={post.id} post={post} onDelete={handleDelete} />
              ))}
            </div>
          )}

          {regularPosts.length > 0 ? (
            <div className="space-y-3">
              {pinnedPosts.length > 0 && (
                <p className="text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">Terbaru</p>
              )}
              {regularPosts.map(post => (
                <PostCard key={post.id} post={post} onDelete={handleDelete} />
              ))}
            </div>
          ) : (
            <div className="py-16 flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center">
                <PenSquare className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-sm font-semibold font-poppins text-gray-700">Belum ada yang mulai percakapan</p>
              <p className="text-xs text-gray-400 font-sans">Jadilah yang pertama — tulis sesuatu untuk kohortmu.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Compose FAB ──────────────────────────────────── */}
      <button
        onClick={() => {
          if (!guidelinesAcknowledged) {
            setGuidelinesAcknowledged(false);
            return;
          }
          setComposeOpen(true);
        }}
        className="fixed bottom-20 right-4 z-20 w-13 h-13 bg-primary-700 rounded-2xl shadow-lg shadow-primary-900/30 flex items-center justify-center hover:bg-primary-800 active:scale-95 transition-all"
        style={{ width: '52px', height: '52px' }}
      >
        <PenSquare className="w-5 h-5 text-white" />
      </button>

      {/* ── Compose Sheet ────────────────────────────────── */}
      <Sheet open={composeOpen} onOpenChange={(open) => { if (!open) { setComposeOpen(false); } }}>
        <SheetContent side="bottom" className="rounded-t-3xl px-4 pb-8">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-base font-bold font-poppins">Tulis postingan</SheetTitle>
          </SheetHeader>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-white">K</span>
            </div>
            <textarea
              value={composeText}
              onChange={e => setComposeText(e.target.value)}
              placeholder="Apa yang ingin kamu bagikan ke kohortmu?"
              rows={4}
              className="flex-1 text-sm text-gray-700 font-sans leading-relaxed resize-none border-0 outline-none placeholder:text-gray-400 bg-transparent"
              autoFocus
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handlePost}
              disabled={!composeText.trim()}
              className="px-5 py-2.5 bg-primary-700 text-white text-sm font-semibold font-poppins rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-800 active:scale-95 transition-all"
            >
              Posting
            </button>
          </div>
        </SheetContent>
      </Sheet>

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link href="/dashboard" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Beranda</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <User className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
