'use client'

import React, { useState } from 'react';
import { ArrowLeft, ThumbsUp, MessageCircle, User } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { StatusPill } from '@/components/design-system/StatusPill';
import { StatusBar } from '@/components/design-system/StatusBar';

const comments = [
  {
    id: '1',
    author: 'Dewi Lestari',
    comment: 'Wah inspiratif banget kak! Saya juga lagi persiapan ke Jepang nih. Terima kasih sharingnya!',
    time: '2 jam lalu'
  },
  {
    id: '2',
    author: 'Budi Santoso',
    comment: 'Setuju banget, kesabaran memang kunci utama bekerja dengan lansia. Pengalaman saya juga sama.',
    time: '5 jam lalu'
  },
  {
    id: '3',
    author: 'Ahmad Fauzi',
    comment: 'Keren kak! Sehat selalu di sana ya 🙏',
    time: '1 hari lalu'
  }
];

export default function AlumniStoryDetail() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(124);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      <StatusBar />

      {/* Secondary nav */}
      <div className="h-[48px] flex items-center px-5 bg-white border-b border-[var(--border-subtle)]">
        <button
          onClick={() => console.log('Go back')}
          className="-ml-2 p-2 mr-1 text-[var(--text-primary)]"
        >
          <ArrowLeft size={20} />
        </button>
        <h4>Cerita Alumni</h4>
      </div>

      {/* Main Content */}
      <main className="space-y-0">
        {/* Hero Photo */}
        <div className="w-full h-56 bg-[var(--neutral-200)] flex items-center justify-center">
          <User size={64} className="text-[var(--neutral-400)]" />
        </div>

        {/* Story Content */}
        <div className="px-5 py-4 space-y-4">
          {/* Author */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--neutral-200)] flex items-center justify-center flex-shrink-0">
              <User size={24} className="text-[var(--neutral-500)]" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Rina Susanti</h4>
              <div className="flex items-center gap-2">
                <StatusPill variant="destination" className="text-[10px] px-2 py-0.5">
                  🇯🇵 Jepang
                </StatusPill>
                <span className="text-[12px] text-[var(--text-muted)]">Batch 12</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2>Perjalanan dari Jakarta ke Tokyo: 2 tahun penuh pembelajaran</h2>

          {/* Body */}
          <div className="prose prose-sm text-[var(--text-primary)]">
            <p className="text-[14px] leading-[24px] mb-4">
              Bekerja sebagai caregiver di Tokyo bukanlah hal yang mudah, tapi setiap hari saya belajar sesuatu yang baru. Dari kesulitan bahasa di minggu-minggu pertama, hingga akhirnya bisa berkomunikasi dengan lancar dengan orang Jepang.
            </p>
            <p className="text-[14px] leading-[24px] mb-4">
              Yang paling berkesan adalah bagaimana saya belajar tentang kesabaran dan rasa hormat yang mendalam dalam budaya Jepang. Setiap interaksi dengan lansia yang saya rawat mengajarkan saya nilai-nilai kehidupan yang tidak pernah saya dapatkan sebelumnya.
            </p>
            <p className="text-[14px] leading-[24px] mb-4">
              Pesan saya untuk teman-teman yang sedang persiapan: jangan takut dengan tantangan. Setiap kesulitan adalah kesempatan untuk tumbuh. Admin Gapai selalu mendampingi kita, dan komunitas alumni juga siap membantu.
            </p>
            <p className="text-[14px] leading-[24px]">
              Terima kasih Gapai sudah memberikan kesempatan ini. Hidup saya berubah total, dan saya sangat bersyukur. 🙏
            </p>
          </div>

          {/* Reactions */}
          <div className="flex items-center gap-4 pt-2 border-t border-[var(--border-subtle)]">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 text-[14px] ${
                liked ? 'text-[var(--brand-green-500)]' : 'text-[var(--text-muted)]'
              }`}
            >
              <ThumbsUp size={20} fill={liked ? 'currentColor' : 'none'} />
              <span>{likeCount} suka</span>
            </button>
            <div className="flex items-center gap-2 text-[14px] text-[var(--text-muted)]">
              <MessageCircle size={20} />
              <span>{comments.length} komentar</span>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h4 className="mb-3">Komentar</h4>
            <Card variant="default">
              <div className="space-y-0 -mx-4">
                {comments.map((comment, index) => (
                  <div
                    key={comment.id}
                    className={`flex items-start gap-3 px-4 py-3 ${
                      index < comments.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--neutral-200)] flex items-center justify-center flex-shrink-0">
                      <User size={20} className="text-[var(--neutral-500)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-[13px]">{comment.author}</span>
                        <span className="text-[11px] text-[var(--text-muted)]">{comment.time}</span>
                      </div>
                      <p className="text-[13px] leading-[20px] text-[var(--text-secondary)]">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
