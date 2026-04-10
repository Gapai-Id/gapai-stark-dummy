import { AlertTriangle, ShieldOff, ServerCrash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type ErrorType = 'default' | 'forbidden' | 'server'

interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ErrorType
  message?: string
  onRetry?: () => void
}

const config: Record<ErrorType, { icon: React.ElementType; title: string; defaultMessage: string }> = {
  default: {
    icon: AlertTriangle,
    title: 'Something went wrong',
    defaultMessage: 'An unexpected error occurred. Please try again.',
  },
  forbidden: {
    icon: ShieldOff,
    title: 'Access denied',
    defaultMessage: "You don't have permission to view this page.",
  },
  server: {
    icon: ServerCrash,
    title: 'Server error',
    defaultMessage: 'Our servers are having trouble. Please try again in a moment.',
  },
}

export function ErrorState({
  type = 'default',
  message,
  onRetry,
  className,
  ...props
}: ErrorStateProps) {
  const { icon: Icon, title, defaultMessage } = config[type]

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-lg border border-destructive/20 bg-destructive/5 px-6 py-16 text-center',
        className,
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{message ?? defaultMessage}</p>
      </div>
      {onRetry && (
        <Button size="sm" variant="outline" onClick={onRetry} className="mt-1">
          Try again
        </Button>
      )}
    </div>
  )
}
