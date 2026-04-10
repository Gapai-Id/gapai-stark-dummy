# CLAUDE.md — Gapai Frontend

This file is automatically read by Claude Code, Cursor, and Windsurf before every code generation.
Follow every rule in this file strictly. Never deviate unless the engineer explicitly overrides in the prompt.

---

## 🏗️ Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js App Router | 15.x |
| Language | TypeScript strict mode | 5.x |
| Styling | Tailwind CSS | v4 |
| UI Components | shadcn/ui | latest |
| Server State | TanStack Query | v5 |
| Client State | Zustand | v5 |
| Forms | React Hook Form + Zod | latest |
| API Client | Axios | latest |
| API Mocking | MSW (Mock Service Worker) | v2 |
| Package Manager | pnpm | latest |

---

## 📁 Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx            # Centered card layout
│   ├── (da layout.tsx            # Sidebar + topbar shell
│   │   └── [feature]/
│   │       └── page.tsx
│   ├── design-system/            # Internal component reference (dev only)
│   │   └── page.tsx
│   ├── providers.tsx             # All client-side providers
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Tailwind base + CSS variables
│
├── components/
│   ├── ui/                       # shadcn/ui primitives — DO NOT edit directly
│   └── common/                   # Extended/composed components
│       ├── Typography.tsx
│       ├── PageHeader.tsx
│       ├── DataTable.tsx
│       ├── EmptyState.tsx
│       ├── ErrorState.tsx
│       └── index.ts
│
├── features/                     # Self-contained feature modules
│   └── [feature-name]/
│       ├── components/           # Feature-specific components
│       ├─�─ hooks/                        # Shared custom hooks
│   ├── use-debounce.ts
│   ├── use-local-storage.ts
│   └── use-media-query.ts
│
├── lib/
│   ├── api.ts                    # Axios instance + interceptors
│   ├── query-client.ts           # TanStack Query client config
│   └── utils.ts                  # cn() and shared utilities
│
├── services/                     # API functions — one file per resource
│   └── [resource].ts             # e.g. candidates.ts, jobs.ts
│
├── stores/                       # Zustand stores
│   ├── auth-store.ts
│   └── ui-store.ts
│
├── types/
│   ├── api.d.ts                  # Auto-generated or AI-generated API types
│   └── index.ts                  # Shared app types
│
└── mocks/                        # MSW mock handlers
    ├── browser.ts                # MSW browser setup
    ├── server.ts                 # MSW server setup- Component files: `kebab-case.tsx` — e.g. `candidate-card.tsx`
- One component per file, named export preferred
- Co-locate component-specific types at the top of the same file

### Required for every component
```tsx
// 1. Always define a Props interface
interface ComponentNameProps extends React.ComponentPropsWithoutRef<'div'> {
  // custom props here
}

// 2. Always use named export
export function ComponentName({ prop, className, ...props }: ComponentNameProps) {
  // 3. Always use cn() for className merging
  return (
    <div className={cn('base-classes', className)} {...props}>
      {/* content */}
    </div>
  )
}
```

### Always handle all states
Every component that receives data must handle:
- `isLoading` → render `<Skeleton>` matching component shape
- `isError` → render `<ErrorState>` with message
- `isEmpty` (data exists but array is empty) → render `<EmptyState>`
- `isSuccess` → render actual content

### Never
- Use inline `style={{}}` — Tailwind only
- Hardcode color hex valuealues — use design tokens
- Use `default export` for components — use named exports
- Fetch data inside a component directly — delegate to a hook
- Use `any` type — use `unknown` and narrow, or generate proper types

---

## 🎨 Styling Rules

### Tailwind class order (enforce this strictly)
```
Layout → Sizing → Spacing → Typography → Color → Border → Effects → State
```

Example:
```tsx
// ✅ Correct order
<div className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg shadow-sm hover:bg-accent transition-colors">

// ❌ Wrong — random order
<div className="border text-sm bg-background flex px-4 hover:bg-accent rounded-lg shadow-sm py-2 items-center text-foreground font-medium gap-3 w-full transition-colors">
```

### CSS Variables
All design tokens are defined in `globals.css` as CSS variables and mapped in `tailwind.config.ts`.
Always use semantic token names, never raw values:
```tsx
// ✅ Use semantic tokens
<div className="bg-background text-foreground border-border">
<div className="bg-primary text-primary-foreground">
<div className="bg-destructive text-destructive-foreground">

// ❌ Never hardcode
<div className="bg-[#1a1a2e] text-[#ffffff]">
```

### Dark mode
- Strategy: `class` on `<html>`
- Always test both light and dark
- Use `dark:` variants only when semantic tokens are not enough

### Responsive breakpoints
```
Mobile first. Default styles = mobile (375px)
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1440px
```

---

## 🪝 Hook Rules

### Naming
- All hooks prefixed with `use` — `useCandidateList`, `useJobDetail`
- Data-fetching hooks in `features/[feature]/hooks/` or `hooks/`
- Always export query key factories alongside the hook

### Query key factory pattern (always use this)
```ts
export const candidateKeys = {
  all: ['candidates'] as const,
  list: (params: CandidateListParams) =>
    [...candidateKeys.all, 'list', params] as const,
  detail: (id: string) =>
    [...candi}
```

### Query hook template
```ts
import { useQuery } from '@tanstack/react-query'
import { getCandidates } from '@/services/candidates'
import type { CandidateListParams } from '@/types/api'

export function useCandidateList(params: CandidateListParams) {
  return useQuery({
    queryKey: candidateKeys.list(params),
    queryFn: () => getCandidates(params),
    staleTime: 1000 * 60 * 5,   // 5 minutes
    gcTime: 1000 * 60 * 10,     // 10 minutes
  })
}
```

### Mutation hook template
```ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCandidate } from '@/services/candidates'
import { toast } from 'sonner'

export function useCreateCandidate() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCandidate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: candidateKeys.all })
      toast.success('Candidate created successfully')
    },
    onError: (error: ApiError) => {
      toast.error(error.message ?? 'Something went wrong')
    },
  })
}
```

---

## 🌐 API & Services

### Axios client (`src/lib/api.ts`)
- Base URL: `process.env.NEXT_PUBLIC_API_URL`
- Request interceptor: attaches Bearer token from auth store
- Response interceptor: normalizes errors to `{ message: string, code: string, errors?: Record<string, string[]> }`
- Never import `axios` directly in components or services — always import from `@/lib/api`

### Service file rules
- One file per API resource: `candidates.ts`, `jobs.ts`, `placements.ts`
- Every function is async, typed, returns the unwrapped data
- Params and responses always typed from `src/types/api.d.ts`

### Service template
```ts
import api from '@/lib/api'
import type {
  Candidate,
  CandidateListParams,
  CreateCandidateInput,
  PaginatedResponse,
} from '@/types/api'

export async function getCandidates(
  params: CandidateListParams
): Promise<PaginatedResponse<Candidate>> {
  const { data } = await api.get('/candidates', { params })
  return data
}

export async function getidateById(id: string): Promise<Candidate> {
  const { data } = await api.get(`/candidates/${id}`)
  return data
}

export async function createCandidate(
  input: CreateCandidateInput
): Promise<Candidate> {
  const { data } = await api.post('/candidates', input)
  return data
}

export async function updateCandidate(
  id: string,
  input: Partial<CreateCandidateInput>
): Promise<Candidate> {
  const { data } = await api.patch(`/candidates/${id}`, input)
  return data
}

export async function deleteCandidate(id: string): Promise<void> {
  await api.delete(`/candidates/${id}`)
}
```

---

## 🔧 Global Types (`src/types/api.d.ts`)

These types must always exist and be used everywhere:

```ts
// Pagination wrapper — all list endpoints return this
export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Standard API error shape
export interface ApiError {
  message: string
  code: string
  errors?: Record<string, str]>
}

// Standard list query params — extend per resource
export interface ListParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}
```

---

## 🎭 MSW Mock Rules

- MSW handlers live in `src/mocks/handlers/` — one file per resource
- Enabled via `NEXT_PUBLIC_ENABLE_MOCK=true` in `.env.local`
- Handlers must mirror the real API contract exactly — same URL, same response shape
- Use realistic fake data — not `"string"` or `123` placeholders
- Always mock pagination meta in list responses
- Simulate realistic delays: `await delay(400)` on list, `await delay(200)` on detail

### Handler template
```ts
import { http, HttpResponse, delay } from 'msw'
import type { Candidate, PaginatedResponse } from '@/types/api'

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    email: 'budi@example.com',
    status: 'active',
    createdAt: '2025-01-15T08:00:00Z',
  },
  // minimum 5 realistic entries
]

export const candidateH[
  http.get('/api/candidates', async ({ request }) => {
    await delay(400)
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page') ?? 1)
    const limit = Number(url.searchParams.get('limit') ?? 10)
    const response: PaginatedResponse<Candidate> = {
      data: mockCandidates.slice((page - 1) * limit, page * limit),
      meta: {
        page,
        limit,
        total: mockCandidates.length,
        totalPages: Math.ceil(mockCandidates.length / limit),
      },
    }
    return HttpResponse.json(response)
  }),

  http.get('/api/candidates/:id', async ({ params }) => {
    await delay(200)
    const candidate = mockCandidates.find(c => c.id === params.id)
    if (!candidate) {
      return HttpResponse.json(
        { message: 'Not found', code: 'NOT_FOUND' },
        { status: 404 }
      )
    }
    return HttpResponse.json(candidate)
  }),

  http.post('/api/candidates', async ({ request }) => {
    await delay(600)
    const body = await request.json() as Partial<Candidate>
    const newCandidate: Candidate = {
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      ...body,
    } as Candidate
    mockCandidates.push(newCandidate)
    return HttpResponse.json(newCandidate, { status: 201 })
  }),
]
```

---

## 📋 Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Component files | kebab-case | `candidate-card.tsx` |
| Hook files | kebab-case with `use-` prefix | `use-candidate-list.ts` |
| Service files | kebab-case plural | `candidates.ts` |
| Store files | kebab-case with `-store` suffix | `auth-store.ts` |
| Type files | kebab-case | `api.d.ts` |
| Component names | PascalCase | `CandidateCard` |
| Hook function names | camelCase `use` prefix | `useCandidateList` |
| Service function names | camelCase verb+noun | `getCandidates`, `createJob` |
| Types / Interfaces | PascalCase | `CandidateProps`, `ApiError` |
| Zustand stores | camelCase `use` prefix | `useAuthStore` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZ |
| Env variables | NEXT_PUBLIC_ prefix for client-side | `NEXT_PUBLIC_API_URL` |
| Route folders | kebab-case | `job-listings/`, `candidate-detail/` |

---

## 🗂️ Feature Module Rules

Every new feature follows this exact structure. No exceptions.

```
src/features/candidates/
├── components/
│   ├── candidate-card.tsx
│   ├── candidate-list.tsx
│   ├── candidate-form.tsx
│   └── candidate-table.tsx
├── hooks/
│   ├── use-candidate-list.ts
│   ├── use-candidate-detail.ts
│   └── use-create-candidate.ts
├── types.ts                    # Types specific to this feature
└── index.ts                    # Only export what other features need
```

Features must not import from each other directly.
Shared logic belongs in `hooks/`, `services/`, or `components/common/`.

---

## 🚨 Error Handling Rules

- All mutations: must have `onError` with `toast.error()`
- All query errors: shown via `<ErrorState>` component, never raw err custom error strings
- API 401: auth interceptor redirects to `/login` and clears the auth store
- API 403: show `<ErrorState type="forbidden">` component
- API 500: show `<ErrorState type="server">` with a retry button

---

## ⚡ Performance Rules

- Images: always use Next.js `<Image>` — never `<img>`
- Icons: use `lucide-react` only — never import icon libraries that ship full bundles
- Dynamic imports: use `next/dynamic` for heavy components (modals, charts, rich text editors)
- Memoization: use `useMemo` for expensive derived values, `useCallback` for handlers passed as props to children
- Never use `useEffect` for data fetching — use TanStack Query
- Barrel imports: avoid `import { x, y, z } from '@/components'` for large modules — import directly from the file

---

## 🚫 Absolute Don'ts

- ❌ `useEffect` for data fetching — use TanStack Query always
- ❌ `any` type — use `unknown` or generate proper types from the API contract
- ❌ Raw `fetch()` or `axios` in components — use tia hooks
- ❌ Editing files in `src/components/ui/` — extend in `src/components/common/`
- ❌ Hardcoded color values, spacing, or font sizes — use design tokens
- ❌ `console.log` in committed code — remove before PR
- ❌ `.env` committed to git — use `.env.example` with placeholder values only
- ❌ Installing new packages without checking if TanStack/shadcn already covers it
- ❌ Default exports for components — always use named exports
- ❌ Prop drilling beyond 2 levels — use Zustand or React Context

---

## ✅ Definition of Done

A component or feature is complete only when all of these pass:

- [ ] TypeScript: zero errors (`pnpm typecheck`)
- [ ] Lint: zero errors (`pnpm lint`)
- [ ] All four states handled: loading skeleton, error, empty, success
- [ ] Tested visually at mobile 375px and desktop 1440px
- [ ] MSW handler added for every new API endpoint consumed
- [ ] No hardcoded values — all pulled from design tokens or constants
- [ ] Props interface defined and exported
- [ ] aming conventions in this file
- [ ] No `console.log` left in code

---

## 🌍 Environment Variables

```bash
# .env.example — copy to .env.local and fill in values

# API base URL
NEXT_PUBLIC_API_URL=https://api.gapai.id/v1

# Set to true to intercept requests with MSW mocks instead of real API
NEXT_PUBLIC_ENABLE_MOCK=true
```

---

## 📦 Key Scripts

```bash
pnpm dev              # Start dev server at localhost:3000
pnpm build            # Production build
pnpm typecheck        # Run tsc --noEmit — must pass before PR
pnpm lint             # Run ESLint — must pass before PR
pnpm test             # Run Vitest unit tests
```

---

*CLAUDE.md · Gapai Frontend · Last updated April 2026*
*This file is the single source of truth for all AI-assisted code generation in this project.*
