import axios, { AxiosError } from 'axios'
import { useAuthStore } from '@/stores/auth-store'
import type { ApiError } from '@/types/api'

// No circular dependency: auth-store only imports from zustand, never from api.

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // withCredentials sends the HttpOnly cookie on every request, including
  // cross-origin requests to the API. Required for cross-subdomain auth.
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15_000,
})

// ----------------------------------------------------------
// Response interceptor — normalise errors to ApiError shape
// ----------------------------------------------------------

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string; errors?: Record<string, string[]> }>) => {
    const status = error.response?.status
    const data = error.response?.data

    // 401 — clear the cached user and redirect to login.
    // The HttpOnly cookie is cleared by the backend on logout;
    // here we only clear the client-side user cache.
    if (status === 401 && typeof window !== 'undefined') {
      useAuthStore.getState().clearAuth()
      window.location.href = '/login'
    }

    const normalised: ApiError = {
      message: data?.message ?? error.message ?? 'An unexpected error occurred.',
      code: data?.code ?? String(status ?? 'UNKNOWN'),
      ...(data?.errors ? { errors: data.errors } : {}),
    }

    return Promise.reject(normalised)
  },
)

export default api
