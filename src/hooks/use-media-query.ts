import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  // Initialise synchronously so the first render already has the right value,
  // which avoids the setState-inside-effect lint error and a flash of wrong state.
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}
