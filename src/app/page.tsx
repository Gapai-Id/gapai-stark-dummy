import { redirect } from 'next/navigation'

// Root route redirects to the main dashboard.
// Once auth is implemented, redirect based on session:
//   - authenticated  → /dashboard
//   - unauthenticated → /login
export default function Home() {
  redirect('/dashboard')
}
