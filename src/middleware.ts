import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Prototype mode — no auth guard, all routes public
export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
