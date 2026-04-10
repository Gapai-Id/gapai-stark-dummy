import {
  Users,
  Briefcase,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  Circle,
  UserPlus,
} from 'lucide-react'
import { PageHeader } from '@/components/common'
import { cn } from '@/lib/utils'

// ── Stat cards ────────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string
  value: string
  change: number
  icon: React.ElementType
}

function StatCard({ label, value, change, icon: Icon }: StatCardProps) {
  const positive = change >= 0
  return (
    <div className="flex flex-col gap-4 p-5 bg-card border border-border rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="font-display text-3xl font-bold text-foreground">{value}</span>
        <span
          className={cn(
            'flex items-center gap-0.5 text-xs font-medium mb-0.5',
            positive ? 'text-success' : 'text-destructive',
          )}
        >
          {positive ? (
            <ArrowUpRight className="w-3.5 h-3.5" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5" />
          )}
          {Math.abs(change)}% vs last month
        </span>
      </div>
    </div>
  )
}

const stats: StatCardProps[] = [
  { label: 'Total Candidates', value: '1,284', change: 12, icon: Users },
  { label: 'Active Job Listings', value: '38', change: -4, icon: Briefcase },
  { label: 'Placements This Month', value: '24', change: 20, icon: FileText },
  { label: 'Conversion Rate', value: '18.7%', change: 5, icon: TrendingUp },
]

// ── Recent activity ───────────────────────────────────────────────────────────

type ActivityStatus = 'completed' | 'in_progress' | 'pending'

interface ActivityItem {
  id: string
  title: string
  subtitle: string
  time: string
  status: ActivityStatus
}

const StatusIcon: Record<ActivityStatus, React.ElementType> = {
  completed: CheckCircle2,
  in_progress: Clock,
  pending: Circle,
}

const statusColor: Record<ActivityStatus, string> = {
  completed: 'text-success',
  in_progress: 'text-warning',
  pending: 'text-muted-foreground',
}

const recentActivity: ActivityItem[] = [
  {
    id: '1',
    title: 'Budi Santoso placed at PT Maju Bersama',
    subtitle: 'Senior Frontend Engineer · Placement confirmed',
    time: '2h ago',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Interview scheduled — Siti Rahayu',
    subtitle: 'UX Designer · Round 2 with hiring manager',
    time: '4h ago',
    status: 'in_progress',
  },
  {
    id: '3',
    title: 'New application — Andi Wijaya',
    subtitle: 'Backend Engineer · Reviewing CV',
    time: '6h ago',
    status: 'pending',
  },
  {
    id: '4',
    title: 'Job listing closed — Data Analyst',
    subtitle: 'PT Teknologi Nusantara · Filled successfully',
    time: '1d ago',
    status: 'completed',
  },
  {
    id: '5',
    title: 'Dewi Lestari moved to offer stage',
    subtitle: 'Product Manager · Offer letter being prepared',
    time: '1d ago',
    status: 'in_progress',
  },
]

// ── Quick actions ─────────────────────────────────────────────────────────────

interface QuickAction {
  label: string
  description: string
  icon: React.ElementType
  href: string
}

const quickActions: QuickAction[] = [
  { label: 'Add Candidate', description: 'Register a new candidate profile', icon: UserPlus, href: '/candidates/new' },
  { label: 'Post a Job', description: 'Create a new job listing', icon: Briefcase, href: '/jobs/new' },
  { label: 'Record Placement', description: 'Log a successful placement', icon: FileText, href: '/placements/new' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Welcome back — here's what's happening at Gapai today."
      />

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2 flex flex-col gap-4 p-5 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-foreground">Recent Activity</h2>
            <span className="text-xs text-muted-foreground">Last 7 days</span>
          </div>

          <ul className="flex flex-col divide-y divide-border">
            {recentActivity.map(({ id, title, subtitle, time, status }) => {
              const Icon = StatusIcon[status]
              return (
                <li key={id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <Icon className={cn('w-4 h-4 mt-0.5 shrink-0', statusColor[status])} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{title}</p>
                    <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{time}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4 p-5 bg-card border border-border rounded-xl shadow-sm">
          <h2 className="font-display text-base font-semibold text-foreground">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            {quickActions.map(({ label, description, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
