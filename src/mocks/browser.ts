// MSW browser setup — used in development when NEXT_PUBLIC_ENABLE_MOCK=true
//
// One-time setup required (run once after cloning):
//   npx msw init public/ --save
// This copies mockServiceWorker.js into the public/ directory.

import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
