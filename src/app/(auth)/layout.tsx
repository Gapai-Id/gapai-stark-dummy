interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-12">
      {/* Brand mark */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <span className="font-display text-3xl font-bold text-primary">Gapai</span>
        <p className="text-sm text-muted-foreground">Recruitment management platform</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-[440px] rounded-xl border border-border bg-card shadow-md">
        {children}
      </div>

      {/* Footer */}
      <p className="mt-8 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Gapai. All rights reserved.
      </p>
    </div>
  )
}
