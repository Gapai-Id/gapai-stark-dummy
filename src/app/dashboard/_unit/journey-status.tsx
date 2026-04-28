'use client';

import { ArrowRight, AlertTriangle, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type JourneyState =
  | 'assessment-start'
  | 'assessment-continue'
  | 'training-active'
  | 'rdt-activation-start'
  | 'activation-in-progress'
  | 'activation-new-content'
  | 'activation-document-alert'
  | 'activation-waiting'
  | 'matched';

interface JourneyStatusProps {
  state: JourneyState;
  activityName?: string;
  documentName?: string;
  jobOrderCount?: number;
  trackName?: string;
}

const stateConfig: Record<
  JourneyState,
  {
    heading: string;
    subtext: string;
    cta: string | null;
    ctaHref?: string;
    icon: React.ReactNode;
    variant: 'primary' | 'alert' | 'waiting' | 'matched';
  }
> = {
  'assessment-start': {
    heading: 'Perjalananmu dimulai di sini',
    subtext: 'Selesaikan asesmen untuk memastikan jalur persiapanmu',
    cta: 'Mulai Asesmen',
    icon: <ArrowRight className="w-4 h-4" />,
    variant: 'primary',
  },
  'assessment-continue': {
    heading: 'Perjalananmu dimulai di sini',
    subtext: 'Selesaikan asesmen untuk memastikan jalur persiapanmu',
    cta: 'Lanjutkan Asesmen',
    icon: <ArrowRight className="w-4 h-4" />,
    variant: 'primary',
  },
  'training-active': {
    heading: 'Lanjutkan pelatihanmu',
    subtext: 'Lanjutkan pelatihanmu di Xavier — progresmu tercatat otomatis di sini',
    cta: 'Buka Xavier',
    ctaHref: 'https://lms.gapai.id',
    icon: <ArrowRight className="w-4 h-4" />,
    variant: 'primary',
  },
  'rdt-activation-start': {
    heading: 'Kamu lolos langsung ke Aktivasi',
    subtext: 'Kesiapanmu sudah terbukti — sekarang waktunya membangun profil terbaikmu',
    cta: 'Mulai Aktivasi',
    icon: <ArrowRight className="w-4 h-4" />,
    variant: 'primary',
  },
  'activation-in-progress': {
    heading: 'Terus bangun kesiapanmu',
    subtext: 'Ada tugas persiapan yang menunggumu',
    cta: 'Lanjutkan',
    icon: <ArrowRight className="w-4 h-4" />,
    variant: 'primary',
  },
  'activation-new-content': {
    heading: 'Materi baru untuk jalurmu',
    subtext: 'Ada konten baru yang ditambahkan untuk persiapanmu',
    cta: 'Lihat yang baru',
    icon: <Sparkles className="w-4 h-4" />,
    variant: 'primary',
  },
  'activation-document-alert': {
    heading: 'Jaga dokumenmu tetap siap',
    subtext: 'Ada dokumen yang perlu diperbarui sebelum kedaluwarsa',
    cta: 'Perbarui dokumen',
    icon: <AlertTriangle className="w-4 h-4" />,
    variant: 'alert',
  },
  'activation-waiting': {
    heading: 'Kamu siap — pencocokan sedang berlangsung',
    subtext: 'Profilmu sedang ditinjau oleh tim pencocokan kami',
    cta: null,
    icon: <Clock className="w-4 h-4" />,
    variant: 'waiting',
  },
  matched: {
    heading: 'Kecocokan kerja telah ditemukan untukmu',
    subtext: 'Tinjau kecocokanmu dan ambil langkah berikutnya',
    cta: 'Lihat kecocokan kerjamu',
    icon: <CheckCircle2 className="w-4 h-4" />,
    variant: 'matched',
  },
};

export function JourneyStatus({
  state,
  activityName,
  documentName,
  jobOrderCount,
}: JourneyStatusProps) {
  const config = stateConfig[state];

  const subtext =
    state === 'activation-in-progress' && activityName
      ? `Lanjutkan: ${activityName}`
      : state === 'activation-document-alert' && documentName
        ? `${documentName} perlu diperbarui sebelum kedaluwarsa`
        : state === 'activation-waiting' && jobOrderCount !== undefined
          ? `${jobOrderCount} lowongan aktif untuk jalurmu saat ini`
          : config.subtext;

  const cta =
    state === 'activation-in-progress' && activityName
      ? `Lanjutkan ${activityName}`
      : state === 'activation-document-alert' && documentName
        ? `Perbarui ${documentName}`
        : config.cta;

  return (
    <div
      className={cn(
        'rounded-2xl p-5 space-y-4 overflow-hidden relative',
        config.variant === 'primary' && 'bg-primary-600 shadow-lg',
        config.variant === 'alert' && 'bg-warning-100 border border-warning-300',
        config.variant === 'waiting' && 'bg-primary-50 border border-primary-200',
        config.variant === 'matched' && 'bg-secondary-100 border border-secondary-300',
      )}
    >
      {/* Decorative circles — primary variant only */}
      {config.variant === 'primary' && (
        <>
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
          <div className="absolute -right-2 -top-2 w-20 h-20 rounded-full bg-white/5" />
        </>
      )}

      <div className="relative space-y-1">
        <p
          className={cn(
            'text-lg font-bold font-poppins leading-snug',
            config.variant === 'primary' && 'text-white',
            config.variant === 'alert' && 'text-warning-800',
            config.variant === 'waiting' && 'text-primary-700',
            config.variant === 'matched' && 'text-secondary-900',
          )}
        >
          {config.heading}
        </p>
        <p
          className={cn(
            'text-sm font-sans',
            config.variant === 'primary' && 'text-primary-100',
            config.variant === 'alert' && 'text-warning-700',
            config.variant === 'waiting' && 'text-primary-600',
            config.variant === 'matched' && 'text-secondary-800',
          )}
        >
          {subtext}
        </p>
      </div>

      {cta && (() => {
        const ctaClass = cn(
          'relative flex items-center gap-2 text-sm font-semibold font-poppins px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90 shadow-sm',
          config.variant === 'primary' && 'bg-white text-primary-700',
          config.variant === 'alert' && 'bg-warning-500 text-white',
          config.variant === 'matched' && 'bg-secondary-500 text-white',
        );
        return config.ctaHref ? (
          <a href={config.ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClass}>
            {config.icon}
            {cta}
          </a>
        ) : (
          <button className={ctaClass}>
            {config.icon}
            {cta}
          </button>
        );
      })()}

      {state === 'activation-waiting' && (
        <div className="flex items-center gap-2 text-primary-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-poppins">Pencocokan sedang berlangsung</span>
        </div>
      )}
    </div>
  );
}
