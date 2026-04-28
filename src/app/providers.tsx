'use client'

import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

// Create a new QueryClient per component instance so server-side renders
// don't share cache across concurrent requests.
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 0,
      },
    },
  })
}

async function enableMocking() {
  const { worker } = await import('@/mocks/browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

const MOCK_ENABLED = process.env.NEXT_PUBLIC_ENABLE_MOCK === 'true'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(makeQueryClient)

  // Hold rendering until MSW worker is registered so no real
  // requests escape before handlers are in place.
  const [mockReady, setMockReady] = useState(!MOCK_ENABLED)

  useEffect(() => {
    if (!MOCK_ENABLED) return
    enableMocking().then(() => setMockReady(true))
  }, [])

  if (!mockReady) return null

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {children}
          <Toaster richColors position="top-right" />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
