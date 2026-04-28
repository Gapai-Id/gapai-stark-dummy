'use client';

import Link from 'next/link';
import { Pin, MessageCircle, Trash2, MoreVertical, Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { CommunityPost } from './community-types';

const REACTION_EMOJIS = ['❤️', '🔥', '🙌', '💪', '💡', '😄', '👍', '🎉'];

interface PostCardProps {
  post: CommunityPost;
  onDelete?: (id: string) => void;
  showFullContent?: boolean;
}

export function PostCard({ post, onDelete, showFullContent = false }: PostCardProps) {
  const [reactions, setReactions] = useState(post.reactions);
  const [myReactions, setMyReactions] = useState<Set<string>>(new Set());
  const [menuOpen, setMenuOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

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

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className={cn('w-10 h-10 rounded-full flex items-center justify-center shrink-0', post.authorColor)}>
            <span className="text-sm font-bold text-white">{post.authorName[0]}</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="text-sm font-semibold font-poppins text-gray-800">{post.authorName}</p>
              {post.authorRole === 'growth' && (
                <span className="text-2xs font-poppins font-medium bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded-full">Tim Growth</span>
              )}
            </div>
            <p className="text-xs text-gray-400 font-sans">
              {post.createdAt}{post.isEdited ? ' · Diedit' : ''}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {post.isPinned && <Pin className="w-3.5 h-3.5 text-primary-500" />}
          {post.isOwnPost && onDelete && (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-7 z-20 bg-white rounded-xl shadow-lg border border-gray-100 py-1 w-36">
                    <button
                      onClick={() => { onDelete(post.id); setMenuOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 font-sans hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Hapus postingan
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <Link href={`/dashboard/community/${post.id}`}>
        <p className={cn('text-sm text-gray-700 font-sans leading-relaxed', !showFullContent && 'line-clamp-4')}>
          {post.content}
        </p>
      </Link>

      {/* Reactions + Comments */}
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
          <Link
            href={`/dashboard/community/${post.id}`}
            className="flex items-center gap-1.5 text-xs text-gray-400 font-sans ml-auto hover:text-gray-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{post.commentCount} komentar</span>
          </Link>
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
  );
}
