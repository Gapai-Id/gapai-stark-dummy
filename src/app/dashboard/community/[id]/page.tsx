'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User, Send, Trash2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CommunityPost, CommunityComment } from '../_unit/community-types';

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

const MOCK_COMMENTS: Record<string, CommunityComment[]> = {
  '1': [
    { id: 'c1', authorName: 'Rizki A.', authorColor: 'bg-secondary-500', content: 'Siap Tim! Makasih sudah bikin ruang ini 🙏', createdAt: '3 hari lalu', isOwnComment: false },
    { id: 'c2', authorName: 'Sari W.', authorColor: 'bg-rose-500', content: 'Senang banget ada komunitas ini — jadi ngerasa ga sendirian dalam proses persiapan', createdAt: '3 hari lalu', isOwnComment: false },
    { id: 'c3', authorName: 'Kamu', authorColor: 'bg-blue-500', content: 'Terima kasih Tim Growth! Semangat persiapannya untuk semua 💪', createdAt: '2 hari lalu', isOwnComment: true },
    { id: 'c4', authorName: 'Dani P.', authorColor: 'bg-secondary-500', content: 'Komunitas ini bakal jadi tempat yang bagus untuk saling support!', createdAt: '2 hari lalu', isOwnComment: false },
  ],
  '2': [
    { id: 'c5', authorName: 'Hendra M.', authorColor: 'bg-neutral-600', content: 'Saya pakai aplikasi Anki — flashcard digital. Bisa diatur intervalnya jadi kanji yang susah muncul lebih sering.', createdAt: '2 hari lalu', isOwnComment: false },
    { id: 'c6', authorName: 'Tim Growth', authorColor: 'bg-primary-700', content: 'Ada modul khusus kanji di Learning Content — cek bagian "Huruf Dasar". Disusun dari yang paling sering muncul di konteks kerja caregiver.', createdAt: '1 hari lalu', isOwnComment: false },
    { id: 'c7', authorName: 'Sari W.', authorColor: 'bg-rose-500', content: 'Saya nulis ulang di kertas setiap malam — terasa old school tapi efektif banget untuk saya 😄', createdAt: '1 hari lalu', isOwnComment: false },
  ],
  '3': [
    { id: 'c8', authorName: 'Rizki A.', authorColor: 'bg-secondary-500', content: 'Keren! Semoga semua lolos verifikasi ya 🙌', createdAt: '2 hari lalu', isOwnComment: false },
    { id: 'c9', authorName: 'Kamu', authorColor: 'bg-blue-500', content: 'Wah cepet banget! Saya masih ada 2 dokumen lagi yang belum siap 😅', createdAt: '2 hari lalu', isOwnComment: true },
  ],
  '4': [
    { id: 'c10', authorName: 'Tim Growth', authorColor: 'bg-primary-700', content: 'Medical check-up harus di klinik yang sudah bekerjasama dengan Gapai. Daftarnya akan dikirimkan melalui WhatsApp grup kohort minggu ini.', createdAt: '1 hari lalu', isOwnComment: false },
    { id: 'c11', authorName: 'Dani P.', authorColor: 'bg-secondary-500', content: 'Terima kasih Tim Growth! Ditunggu infonya 🙏', createdAt: '1 hari lalu', isOwnComment: false },
  ],
  '5': [
    { id: 'c12', authorName: 'Sari W.', authorColor: 'bg-rose-500', content: 'Bareng! Saya juga lagi struggle di part listening 😅', createdAt: '4 jam lalu', isOwnComment: false },
    { id: 'c13', authorName: 'Rizki A.', authorColor: 'bg-secondary-500', content: '2 jam sehari itu udah bagus banget! Saya cuma 30 menit tapi setiap hari 💪', createdAt: '3 jam lalu', isOwnComment: false },
  ],
};

export default function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = MOCK_POSTS.find(p => p.id === id) ?? MOCK_POSTS[0];
  const [comments, setComments] = useState<CommunityComment[]>(MOCK_COMMENTS[post.id] ?? []);
  const [commentText, setCommentText] = useState('');
  const [reactions, setReactions] = useState(post.reactions);
  const [myReactions, setMyReactions] = useState<Set<string>>(new Set());
  const [pickerOpen, setPickerOpen] = useState(false);

  const REACTION_EMOJIS = ['❤️', '🔥', '🙌', '💪', '💡', '😄', '👍', '🎉'];

  function handleSendComment() {
    const text = commentText.trim();
    if (!text) return;
    setComments(prev => [...prev, {
      id: Date.now().toString(),
      authorName: 'Kamu',
      authorColor: 'bg-blue-500',
      content: text,
      createdAt: 'Baru saja',
      isOwnComment: true,
    }]);
    setCommentText('');
  }

  function handleReact(emoji: string) {
    const alreadyReacted = myReactions.has(emoji);
    setMyReactions(prev => {
      const next = new Set(prev);
      alreadyReacted ? next.delete(emoji) : next.add(emoji);
      return next;
    });
    setReactions(prev => {
      if (alreadyReacted) {
        return prev.map(r => r.emoji === emoji ? { ...r, count: r.count - 1 } : r).filter(r => r.count > 0);
      }
      const existing = prev.find(r => r.emoji === emoji);
      if (existing) return prev.map(r => r.emoji === emoji ? { ...r, count: r.count + 1 } : r);
      return [...prev, { emoji, count: 1 }];
    });
    setPickerOpen(false);
  }

  function handleDeleteComment(commentId: string) {
    setComments(prev => prev.filter(c => c.id !== commentId));
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard/community" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>
          <div className="px-4 pt-2 pb-8">
            <p className="text-sm text-white/60 font-sans">Komunitas Kohort</p>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-36 space-y-4">

          {/* Post */}
          <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className={cn('w-10 h-10 rounded-full flex items-center justify-center shrink-0', post.authorColor)}>
                <span className="text-sm font-bold text-white">{post.authorName[0]}</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold font-poppins text-gray-800">{post.authorName}</p>
                  {post.authorRole === 'growth' && (
                    <span className="text-2xs font-poppins font-medium bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded-full">Tim Growth</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 font-sans">{post.createdAt}{post.isEdited ? ' · Diedit' : ''}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 font-sans leading-relaxed whitespace-pre-line">{post.content}</p>

            <div className="space-y-2 pt-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                {reactions.map(r => (
                  <button
                    key={r.emoji}
                    onClick={() => handleReact(r.emoji)}
                    className={cn(
                      'flex items-center gap-1 text-xs font-sans rounded-full px-2.5 py-1 active:scale-95 transition-all',
                      myReactions.has(r.emoji)
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    )}
                  >
                    <span>{r.emoji}</span>
                    <span>{r.count}</span>
                  </button>
                ))}
                <button
                  onClick={() => setPickerOpen(v => !v)}
                  className={cn(
                    'flex items-center justify-center w-7 h-7 rounded-full text-gray-400 active:scale-95 transition-all',
                    pickerOpen ? 'bg-gray-200' : 'bg-gray-50 hover:bg-gray-100'
                  )}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              {pickerOpen && (
                <div className="flex flex-wrap gap-1 pt-1 border-t border-gray-100">
                  {REACTION_EMOJIS.map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => handleReact(emoji)}
                      className={cn(
                        'w-9 h-9 flex items-center justify-center text-xl rounded-xl active:scale-95 transition-all',
                        myReactions.has(emoji) ? 'bg-primary-50 ring-1 ring-primary-200' : 'hover:bg-gray-50'
                      )}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-2">
            <p className="text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wide">
              {comments.length} Komentar
            </p>

            {comments.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm px-4 py-8 text-center space-y-1">
                <p className="text-sm font-semibold font-poppins text-gray-600">Belum ada komentar</p>
                <p className="text-xs text-gray-400 font-sans">Jadilah yang pertama merespons.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-50">
                {comments.map(c => (
                  <div key={c.id} className="px-4 py-3 flex items-start gap-3">
                    <div className={cn('w-8 h-8 rounded-full flex items-center justify-center shrink-0', c.authorColor)}>
                      <span className="text-xs font-bold text-white">{c.authorName[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold font-poppins text-gray-800">{c.authorName}</p>
                        <div className="flex items-center gap-2 shrink-0">
                          <p className="text-xs text-gray-400 font-sans">{c.createdAt}</p>
                          {c.isOwnComment && (
                            <button
                              onClick={() => handleDeleteComment(c.id)}
                              className="p-0.5 text-gray-300 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed mt-0.5">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Comment Input ─────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-100">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-end gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-white">K</span>
          </div>
          <div className="flex-1 bg-gray-50 rounded-2xl px-3.5 py-2.5 min-h-[40px] max-h-32">
            <textarea
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Tulis komentar..."
              rows={1}
              className="w-full text-sm text-gray-700 font-sans resize-none border-0 outline-none bg-transparent placeholder:text-gray-400 leading-relaxed"
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendComment();
                }
              }}
            />
          </div>
          <button
            onClick={handleSendComment}
            disabled={!commentText.trim()}
            className="w-9 h-9 rounded-full bg-primary-700 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-800 active:scale-95 transition-all shrink-0"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Nav */}
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-sm">
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
        </div>
      </div>
    </div>
  );
}
