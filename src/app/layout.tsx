import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Manrope, Poppins, Roboto } from 'next/font/google'
import Script from 'next/script'
import { Providers } from './providers'
import './globals.css'

// Body font — Plus Jakarta Sans
const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

// Heading font — Manrope (STARK v2 design system)
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

// Heading font — Poppins (legacy)
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Body copy font — Roboto (legacy)
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gapai',
    template: '%s | Gapai',
  },
  description: 'Recruitment management platform by Gapai.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${manrope.variable} ${poppins.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
