// Shared app-level types.
// API contract types live in api.d.ts.
// Export domain-agnostic types from here.

export type Nullable<T> = T | null
export type Optional<T> = T | undefined

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
