import type { HttpHandler } from 'msw'

// Aggregate all MSW handlers here.
// Import resource-specific handler arrays and spread them into this export.
// Example:
//   import { candidateHandlers } from './candidates'
//   export const handlers: HttpHandler[] = [...candidateHandlers]

export const handlers: HttpHandler[] = []
