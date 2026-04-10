import { cn } from '@/lib/utils'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'label'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: TypographyVariant
  as?: React.ElementType
}

const variantConfig: Record<
  TypographyVariant,
  { tag: React.ElementType; className: string }
> = {
  h1: {
    tag: 'h1',
    className:
      'font-display text-4xl font-semibold leading-tight tracking-tight text-foreground',
  },
  h2: {
    tag: 'h2',
    className:
      'font-display text-3xl font-semibold leading-tight tracking-tight text-foreground',
  },
  h3: {
    tag: 'h3',
    className:
      'font-display text-2xl font-semibold leading-snug text-foreground',
  },
  h4: {
    tag: 'h4',
    className:
      'font-display text-xl font-semibold leading-snug text-foreground',
  },
  body: {
    tag: 'p',
    className: 'font-sans text-base font-normal leading-relaxed text-foreground',
  },
  caption: {
    tag: 'p',
    className: 'font-sans text-xs font-normal leading-normal text-muted-foreground',
  },
  label: {
    tag: 'span',
    className: 'font-sans text-sm font-medium leading-normal text-foreground',
  },
}

export function Typography({ variant, as, className, children, ...props }: TypographyProps) {
  const config = variantConfig[variant]
  const Tag = as ?? config.tag

  return (
    <Tag className={cn(config.className, className)} {...props}>
      {children}
    </Tag>
  )
}
