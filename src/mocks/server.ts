// MSW Node/test setup — used in Vitest and any server-side test environment.
// Import this in your test setup file (e.g. vitest.setup.ts):
//
//   import { server } from '@/mocks/server'
//   beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
//   afterEach(() => server.resetHandlers())
//   afterAll(() => server.close())

import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
