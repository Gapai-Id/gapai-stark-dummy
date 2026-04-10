// ============================================================
// API contract types — Gapai Frontend
// Keep in sync with the backend OpenAPI spec / API.md
// ============================================================

// ----------------------------------------------------------
// Shared response wrappers
// ----------------------------------------------------------

/** All list endpoints return this shape. */
export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ----------------------------------------------------------
// Error types
// ----------------------------------------------------------

/** Normalised API error — produced by the Axios response interceptor. */
export interface ApiError {
  message: string
  code: string
  errors?: Record<string, string[]>
}

// ----------------------------------------------------------
// Shared query params — extend per resource
// ----------------------------------------------------------

/** Base params accepted by every list endpoint. */
export interface ListParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}
