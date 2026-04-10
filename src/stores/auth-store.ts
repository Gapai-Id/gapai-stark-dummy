import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AuthUser {
  id: string
  name: string
  email: string
  role: string
  avatarUrl?: string
}

interface AuthState {
  // Token is never stored on the client — the browser holds it in an
  // HttpOnly cookie scoped to .gapai.id. We only cache user display data.
  user: AuthUser | null
  isAuthenticated: boolean
  setAuth: (user: AuthUser) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setAuth: (user) => set({ user, isAuthenticated: true }),
      clearAuth: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'gapai-auth',
      // Only persist user display data — auth state is derived from the cookie,
      // which the browser manages automatically across all *.gapai.id subdomains.
      partialize: (state) => ({ user: state.user }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // isAuthenticated is re-derived from user presence on rehydration.
          // The middleware is the real gate — this is only for client-side UI state.
          state.isAuthenticated = !!state.user
        }
      },
    },
  ),
)
