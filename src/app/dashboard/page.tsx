import Link from 'next/link';
import Image from 'next/image';
import { Bell, Home, User } from 'lucide-react';
import { JourneyStatus } from './_unit/journey-status';
import { PhaseProgress, Phase } from './_unit/phase-progress';
import { QuickAccess } from './_unit/quick-access';

const DEMO_IS_RDT = true;

const RDT_PHASES: Phase[] = ['assessment', 'activation', 'matchmaking'];
const NON_RDT_PHASES: Phase[] = ['assessment', 'training', 'activation', 'matchmaking'];

export default function DashboardPage() {
  const candidateName = 'Sari';
  const trackName = 'Japan Caregiver';
  const currentPhase = 'activation' as const;
  const completedPhases: Phase[] = ['assessment'];

  const journeyPhases = DEMO_IS_RDT ? RDT_PHASES : NON_RDT_PHASES;
  const journeyState = DEMO_IS_RDT ? 'rdt-activation-start' as const : 'activation-in-progress' as const;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">

          {/* Topbar */}
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Image
              src="/assets/images/gapai-logo-green.png"
              alt="Gapai"
              width={72}
              height={24}
              className="h-6 w-auto brightness-0 invert"
            />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary-400 rounded-full ring-2 ring-primary-800" />
            </Link>
          </div>

          {/* Greeting */}
          <div className="px-4 pt-4 pb-8 space-y-5">
            <div className="space-y-1">
              <p className="text-sm text-white/60 font-sans">Selamat datang kembali</p>
              <h1 className="text-2xl font-bold font-poppins text-white leading-tight">
                Hai, {candidateName} 👋
              </h1>
            </div>

            {/* Track badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
              <span className="text-xs font-semibold font-poppins text-white/90 tracking-wide">
                {trackName} 🇯🇵
              </span>
            </div>

            {/* Phase progress */}
            <PhaseProgress
              currentPhase={currentPhase}
              completedPhases={completedPhases}
              phaseKeys={journeyPhases}
              variant="hero"
            />
          </div>
        </div>
      </div>

      {/* ── Content — slides over hero ───────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50 overflow-hidden">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-3">

          {/* Main action */}
          <JourneyStatus
            state={journeyState}
            trackName={trackName}
          />

          {/* Quick access */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <QuickAccess />
          </div>

        </div>
      </div>

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link
            href="/dashboard"
            className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-primary-600"
          >
            <Home className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-2xs font-semibold font-poppins">Beranda</span>
          </Link>
          <Link
            href="/profile"
            className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400"
          >
            <User className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
