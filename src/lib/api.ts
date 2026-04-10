import axios, { AxiosError } from 'axios'
import { useAuthStore } from '@/stores/auth-store'
import type { ApiError } from '@/types/api'

// No circular dependency: auth-store only imports from zustand, never from api.

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15_000,
})

// ----------------------------------------------------------
// Request interceptor — attach Bearer token
// useAuthStore.getState() is safe outside React (Zustand store API)
// ----------------------------------------------------------

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = useAuthStore.getState().token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error: unknown) => Promise.reject(error),
)

// ----------------------------------------------------------
// Response interceptor — normalise errors to ApiError shape
// ----------------------------------------------------------

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string; errors?: Record<string, string[]> }>) => {
    const status = error.response?.status
    const data = error.response?.data

    // 401 — clear auth store and redirect to login
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
