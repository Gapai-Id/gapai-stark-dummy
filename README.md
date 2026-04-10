# Gapai Frontend Boilerplate

Production-ready Next.js 16 boilerplate for the Gapai recruitment platform.
Stack: Next.js App Router · TypeScript · Tailwind CSS v4 · shadcn/ui · TanStack Query · Zustand · Axios · MSW

---

## Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)

---

## Setup

```bash
# 1. Clone and install
pnpm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. (One-time) Register the MSW service worker in public/
npx msw init public/ --save

# 4. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL for all API requests | `https://api.gapai.id/v1` |
| `NEXT_PUBLIC_ENABLE_MOCK` | Set `true` to intercept requests with MSW | `true` |

Edit `.env.local` (never commit this file).

---

## Scripts

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm typecheck    # TypeScript check — must pass before PR
pnpm lint         # ESLint — must pass before PR
pnpm test         # Run Vitest unit tests
```

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth pages (login, register) — centered card layout
│   ├── (dashboard)/        # Authenticated pages — sidebar + topbar layout
│   ├── design-system/      # Internal component reference at /design-system (dev only)
│   ├── providers.tsx       # QueryClientProvider, TooltipProvider, Toaster, MSW
│   ├── layout.tsx          # Root layout — fonts, metadata
│   └── globals.css         # Tailwind @theme tokens + CSS variables
│
├── components/
│   ├── ui/                 # shadcn/ui primitives — DO NOT edit directly
│   └── common/             # Extended/composed components (Typography, PageHeader, etc.)
│
├── features/               # Self-contained feature modules (one folder per domain)
│   └── [feature-name]/
│       ├── components/
│       ├── hooks/
│       ├── types.ts
│       └── index.ts
│
├── hooks/                  # Shared custom hooks (useDebounce, useLocalStorage, useMediaQuery)
├── lib/                    # Core utilities (api.ts, query-client.ts, utils.ts)
├── services/               # API functions — one file per resource
├── stores/                 # Zustand stores (auth-store, ui-store)
├── types/                  # Shared TypeScript types (api.d.ts, index.ts)
└── mocks/                  # MSW mock handlers
    ├── browser.ts          # Browser worker setup
    ├── server.ts           # Node/Vitest setup
    └── handlers/           # One handler file per resource
```

---

## MSW API Mocking

MSW intercepts all API requests in development so you can build UI without a running backend.

**Enable mocking** — set in `.env.local`:
```bash
NEXT_PUBLIC_ENABLE_MOCK=true
```

**Add a handler** for a new resource:

```ts
// src/mocks/handlers/candidates.ts
import { http, HttpResponse, delay } from 'msw'
import type { Candidate, PaginatedResponse } from '@/types/api'

export const candidateHandlers = [
  http.get('/api/candidates', async ({ request }) => {
    await delay(400)
    const response: PaginatedResponse<Candidate> = {
      data: [ /* mock data */ ],
      meta: { page: 1, limit: 10, total: 1, totalPages: 1 },
    }
    return HttpResponse.json(response)
  }),
]
```

**Register it** in `src/mocks/handlers/index.ts`:
```ts
import { candidateHandlers } from './candidates'
export const handlers = [...candidateHandlers]
```

**Simulated delays:** use `await delay(400)` on list, `await delay(200)` on detail, `await delay(600)` on mutations.

---

## Adding a New Feature

Every feature lives in `src/features/[feature-name]/` and is self-contained. Here's the full checklist:

### 1. Create the folder structure

```
src/features/jobs/
├── components/
│   ├── job-card.tsx
│   ├── job-list.tsx
│   └── job-form.tsx
├── hooks/
│   ├── use-job-list.ts
│   ├── use-job-detail.ts
│   └── use-create-job.ts
├── types.ts
└── index.ts
```

### 2. Add types to `src/types/api.d.ts`

```ts
export interface Job {
  id: string
  title: string
  status: 'open' | 'closed'
  createdAt: string
}

export interface JobListParams extends ListParams {
  status?: Job['status']
}
```

### 3. Create the service (`src/services/jobs.ts`)

```ts
import api from '@/lib/api'
import type { Job, JobListParams, PaginatedResponse } from '@/types/api'

export async function getJobs(params: JobListParams): Promise<PaginatedResponse<Job>> {
  const { data } = await api.get('/jobs', { params })
  return data
}
```

### 4. Create query hooks (`src/features/jobs/hooks/use-job-list.ts`)

```ts
import { useQuery } from '@tanstack/react-query'
import { getJobs } from '@/services/jobs'
import type { JobListParams } from '@/types/api'

export const jobKeys = {
  all: ['jobs'] as const,
  list: (params: JobListParams) => [...jobKeys.all, 'list', params] as const,
  detail: (id: string) => [...jobKeys.all, 'detail', id] as const,
}

export function useJobList(params: JobListParams) {
  return useQuery({
    queryKey: jobKeys.list(params),
    queryFn: () => getJobs(params),
    staleTime: 1000 * 60 * 5,
  })
}
```

### 5. Build components with all four states

```tsx
// src/features/jobs/components/job-list.tsx
'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useJobList } from '../hooks/use-job-list'

export function JobList() {
  const { data, isLoading, isError } = useJobList({ page: 1, limit: 10 })

  if (isLoading) return <JobListSkeleton />
  if (isError)   return <ErrorState message="Failed to load jobs" />
  if (!data?.data.length) return <EmptyState message="No jobs found" />

  return (
    <ul>
      {data.data.map((job) => (
        <li key={job.id}>{job.title}</li>
      ))}
    </ul>
  )
}

function JobListSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-16 w-full rounded-lg" />
      ))}
    </div>
  )
}
```

### 6. Add MSW handler + export from `index.ts`

Add `src/mocks/handlers/jobs.ts`, register in `handlers/index.ts`, and export only what other features need from `src/features/jobs/index.ts`.

### 7. Before opening a PR

```bash
pnpm typecheck   # zero errors
pnpm lint        # zero errors
```

---

## Design System Reference

Visit [http://localhost:3000/design-system](http://localhost:3000/design-system) to see all components, color tokens, typography scale, and spacing live in one page.

See also:
- `CLAUDE.md` — AI code-generation rules and conventions
- `DESIGN.md` — full design token reference (colors, typography, shadows)
- `API.md` — API endpoint documentation

---

## Key Decisions

| Decision | Reason |
|---|---|
| `src/components/ui/` is read-only | Protects shadcn primitives from drift; extensions go in `common/` |
| MSW in browser (not Next.js middleware) | Zero config, works with any backend, easy to toggle |
| TanStack Query for all server state | Eliminates `useEffect` data-fetching anti-patterns |
| CSS variables + `@theme inline` | Tailwind v4 approach — tokens adapt to dark mode automatically |
| Named exports only | Enables tree-shaking and consistent imports across the codebase |
