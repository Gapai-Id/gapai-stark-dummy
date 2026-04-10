import Link from 'next/link'
import { LayoutDashboard, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      {/* Brand mark */}
      <span className="font-display text-2xl font-bold text-primary mb-10">Gapai</span>

      {/* 404 number */}
      <div className="relative mb-6 select-none">
        <span className="font-display text-[160px] font-bold leading-none text-border sm:text-[200px]">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center font-display text-[160px] font-bold leading-none text-primary/10 blur-2xl sm:text-[200px]">
          404
        </span>
      </div>

      {/* Copy */}
      <h1 className="font-display text-2xl font-semibold text-foreground mb-2 sm:text-3xl">
        Page not found
      </h1>
      <p className="max-w-sm text-sm text-muted-foreground mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Check the URL or head
        back to the dashboard.
      </p>

      {/* Actions */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
        >
          <LayoutDashboard className="w-4 h-4" />
          Go to Dashboard
        </Link>
        <Link
          href="javascript:history.back()"
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground bg-card border border-border rounded-lg shadow-sm hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Link>
      </div>

      {/* Subtle grid decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </div>
  )
}
