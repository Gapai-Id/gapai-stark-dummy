import { Menu, Bell, Search, ChevronDown, LayoutDashboard, Users, Briefcase, FileText, Settings } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { label: 'Dashboard',  href: '/',            icon: LayoutDashboard },
  { label: 'Candidates', href: '/candidates',   icon: Users },
  { label: 'Jobs',       href: '/jobs',         icon: Briefcase },
  { label: 'Placements', href: '/placements',   icon: FileText },
  { label: 'Settings',   href: '/settings',     icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* ── Sidebar ───────────────────────────────────────────────── */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 left-0 z-30 border-r border-border bg-card">
        {/* Logo */}
        <div className="flex h-[72px] items-center px-6 border-b border-border shrink-0">
          <span className="font-display text-xl font-bold text-primary">Gapai</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-accent transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0">
              GA
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Gapai Admin</p>
              <p className="text-xs text-muted-foreground truncate">admin@gapai.id</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
          </button>
        </div>
      </aside>

      {/* ── Main column (offset by sidebar) ────────────────────────── */}
      <div className="flex flex-col flex-1 lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-[72px] items-center gap-4 px-4 lg:px-6 border-b border-border bg-card/80 backdrop-blur-sm shrink-0">
          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Open sidebar</span>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Search…"
                className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-2">
            <button className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
              <span className="sr-only">Notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
              GA
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
