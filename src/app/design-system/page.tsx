/**
 * /design-system — Internal component reference (dev only)
 *
 * Shows every shadcn/ui + common component variant in one place so
 * engineers can verify the design tokens, spacing, and dark-mode behaviour
 * without building a real page first.
 */

import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Typography } from '@/components/common/Typography'

// ─── section wrapper ────────────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
        <Separator className="mt-2" />
      </div>
      {children}
    </section>
  )
}

// ─── color swatch ───────────────────────────────────────────────────────────

function Swatch({ label, className }: { label: string; className: string }) {
  return (
    <div className="flex flex-col gap-1.5 items-center">
      <div className={`w-14 h-14 rounded-lg border border-border shadow-sm ${className}`} />
      <span className="text-xs text-muted-foreground text-center leading-tight">{label}</span>
    </div>
  )
}

// ─── page ───────────────────────────────────────────────────────────────────

export default function DesignSystemPage() {
  if (process.env.NODE_ENV !== 'development') notFound()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-6 py-8">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Internal Reference</p>
        <h1 className="font-display text-4xl font-bold text-foreground">Design System</h1>
        <p className="mt-2 text-base text-muted-foreground max-w-xl">
          Live reference for all design tokens, components, and variants. Visible in development only.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-16">

        {/* ── Typography ─────────────────────────────────────────────────── */}
        <Section title="Typography">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">h1 · Poppins 36px / semibold</span>
              <Typography variant="h1">The quick brown fox</Typography>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">h2 · Poppins 30px / semibold</span>
              <Typography variant="h2">The quick brown fox</Typography>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">h3 · Poppins 24px / semibold</span>
              <Typography variant="h3">The quick brown fox</Typography>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">h4 · Poppins 20px / semibold</span>
              <Typography variant="h4">The quick brown fox</Typography>
            </div>
            <Separator />
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">body · Plus Jakarta Sans 16px / normal</span>
              <Typography variant="body">
                Recruitment made smarter. Gapai helps you find, track, and place the right candidates
                faster than ever before.
              </Typography>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">label · 14px / medium</span>
              <Typography variant="label">Full Name</Typography>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">caption · 12px / muted</span>
              <Typography variant="caption">Last updated 3 minutes ago</Typography>
            </div>
          </div>
        </Section>

        {/* ── Color Palette ──────────────────────────────────────────────── */}
        <Section title="Color Palette">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Semantic (adapts to dark mode)</p>
              <div className="flex flex-wrap gap-4">
                <Swatch label="background" className="bg-background" />
                <Swatch label="foreground" className="bg-foreground" />
                <Swatch label="surface" className="bg-surface" />
                <Swatch label="card" className="bg-card" />
                <Swatch label="muted" className="bg-muted" />
                <Swatch label="border" className="bg-border" />
                <Swatch label="primary" className="bg-primary" />
                <Swatch label="primary-hover" className="bg-primary-hover" />
                <Swatch label="secondary" className="bg-secondary" />
                <Swatch label="accent" className="bg-accent" />
                <Swatch label="destructive" className="bg-destructive" />
                <Swatch label="success" className="bg-success" />
                <Swatch label="warning" className="bg-warning" />
                <Swatch label="info" className="bg-info" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Primary green scale</p>
              <div className="flex flex-wrap gap-4">
                {(['50','100','200','300','400','500','600','700','800','900','950'] as const).map((shade) => (
                  <Swatch key={shade} label={shade} className={`bg-primary-${shade}`} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Neutral scale</p>
              <div className="flex flex-wrap gap-4">
                {(['50','100','200','300','400','500','600','700','800','900','950'] as const).map((shade) => (
                  <Swatch key={shade} label={shade} className={`bg-neutral-${shade}`} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── Buttons ────────────────────────────────────────────────────── */}
        <Section title="Buttons">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg">Large</Button>
                <Button size="default">Default</Button>
                <Button size="sm">Small</Button>
                <Button size="icon" aria-label="icon button">+</Button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">States</p>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled outline</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Badges ─────────────────────────────────────────────────────── */}
        <Section title="Badges">
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            {/* Semantic feedback badges using design tokens */}
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-success/10 text-success border border-success/20">
              Active
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-warning/20 text-warning-foreground border border-warning/30">
              Pending
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-destructive/10 text-destructive border border-destructive/20">
              Rejected
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-info/10 text-info border border-info/20">
              In Review
            </span>
          </div>
        </Section>

        {/* ── Inputs ─────────────────────────────────────────────────────── */}
        <Section title="Inputs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ds-default">Default</Label>
              <Input id="ds-default" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ds-filled">With value</Label>
              <Input id="ds-filled" defaultValue="Budi Santoso" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ds-disabled">Disabled</Label>
              <Input id="ds-disabled" placeholder="Disabled input" disabled />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ds-error" className="text-destructive">Error state</Label>
              <Input
                id="ds-error"
                placeholder="invalid@"
                className="border-destructive focus-visible:ring-destructive"
              />
              <p className="text-xs text-destructive">Please enter a valid email address.</p>
            </div>
          </div>
        </Section>

        {/* ── Cards ──────────────────────────────────────────────────────── */}
        <Section title="Cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Basic */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Standard card with header and content.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card body content goes here. Use cards to group related information.
                </p>
              </CardContent>
            </Card>

            {/* With footer */}
            <Card>
              <CardHeader>
                <CardTitle>With Footer</CardTitle>
                <CardDescription>Card with an action footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Content area with a footer below.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Save</Button>
                <Button size="sm" variant="ghost">Cancel</Button>
              </CardFooter>
            </Card>

            {/* Stat card */}
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Candidates</CardDescription>
                <CardTitle className="text-3xl font-bold text-primary">1,284</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success font-medium">+12%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ── Skeletons ──────────────────────────────────────────────────── */}
        <Section title="Skeletons">
          <div className="flex flex-col gap-4 max-w-sm">
            {/* Card skeleton */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col gap-2 flex-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-4/6" />
              </CardContent>
            </Card>
            {/* Table row skeleton */}
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 px-3 py-2.5 border border-border rounded-md">
                  <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                  <Skeleton className="h-3 flex-1" />
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Spacing & Radius ───────────────────────────────────────────── */}
        <Section title="Border Radius">
          <div className="flex flex-wrap items-end gap-4">
            {[
              { label: 'sm (4px)',   cls: 'rounded-sm' },
              { label: 'md (8px)',   cls: 'rounded' },
              { label: 'lg (12px)',  cls: 'rounded-md' },
              { label: 'xl (16px)',  cls: 'rounded-lg' },
              { label: '2xl (24px)', cls: 'rounded-xl' },
              { label: 'full',       cls: 'rounded-full' },
            ].map(({ label, cls }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className={`w-14 h-14 bg-primary/20 border-2 border-primary ${cls}`} />
                <span className="text-xs text-muted-foreground text-center">{label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Shadows ────────────────────────────────────────────────────── */}
        <Section title="Shadows">
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'shadow-sm', cls: 'shadow-sm' },
              { label: 'shadow',    cls: 'shadow' },
              { label: 'shadow-md', cls: 'shadow-md' },
              { label: 'shadow-lg', cls: 'shadow-lg' },
              { label: 'shadow-xl', cls: 'shadow-xl' },
            ].map(({ label, cls }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className={`w-20 h-20 bg-card border border-border rounded-lg ${cls}`} />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}
