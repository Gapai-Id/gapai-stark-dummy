/**
 * tailwind.config.ts — Gapai Frontend
 *
 * NOTE (Tailwind v4): Design tokens (colors, typography, spacing, shadows,
 * border-radius) are defined as CSS @theme blocks in src/app/globals.css.
 * This file is referenced via `@config` in globals.css and is used for:
 *   - darkMode strategy
 *   - content glob paths
 *   - plugins
 *
 * To consume a token in JSX, use the utility class name that corresponds to
 * the CSS variable, e.g.:
 *   --color-primary  →  bg-primary / text-primary / border-primary
 *   --color-muted    →  bg-muted / text-muted
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',

  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/hooks/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      /**
       * Brand color palette — mirrors the @theme block in globals.css.
       * These are the raw brand scales; for component styling always use
       * the semantic tokens (primary, secondary, muted, etc.).
       */
      colors: {
        primary: {
          50:  '#edfaf5',
          100: '#d0f5e8',
          200: '#a3ebd4',
          300: '#6ddcba',
          400: '#41c69e',
          500: '#1eab86',
          600: '#118a6d',
          700: '#0d6e58',
          800: '#0a5443',
          900: '#083d31',
          950: '#04211a',
          DEFAULT: '#1eab86',
        },
        secondary: {
          300: '#fde68a',
          400: '#fec23f',
          500: '#f88c08',
          600: '#d97206',
          700: '#b45309',
          DEFAULT: '#fec23f',
        },
        error: {
          300: '#fca5a5',
          400: '#f56060',
          500: '#f23030',
          600: '#c41a1a',
          700: '#991b1b',
          DEFAULT: '#f23030',
        },
        neutral: {
          50:  '#f8fafc',
          100: '#f0f4f8',
          200: '#dde5f0',
          300: '#b8cce0',
          400: '#8aa8c4',
          500: '#6b7a8f',
          600: '#4a5a6e',
          700: '#2d3a4a',
          800: '#1a2536',
          900: '#0d1524',
          950: '#060b14',
        },
        // Semantic tokens — these read from CSS variables and adapt to dark mode
        background:  'var(--background)',
        foreground:  'var(--foreground)',
        surface: {
          DEFAULT:    'var(--surface)',
          foreground: 'var(--surface-foreground)',
        },
        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT:    'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        muted: {
          DEFAULT:    'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT:    'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT:    'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        success: {
          DEFAULT:    'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        warning: {
          DEFAULT:    'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        info: {
          DEFAULT:    'var(--info)',
          foreground: 'var(--info-foreground)',
        },
        border: 'var(--border)',
        input:  'var(--input)',
        ring:   'var(--ring)',
      },

      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },

      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem',     { lineHeight: '1.5rem' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',  { lineHeight: '2rem' }],
        '3xl': ['1.875rem',{ lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },

      fontWeight: {
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },

      borderRadius: {
        sm:   '0.25rem',   // 4px
        DEFAULT: '0.5rem', // 8px
        md:   '0.75rem',   // 12px
        lg:   '1rem',      // 16px
        xl:   '1.5rem',    // 24px
        full: '9999px',
      },

      boxShadow: {
        sm: '0 1px 3px 0 rgba(0,0,0,.10), 0 1px 2px -1px rgba(0,0,0,.10)',
        DEFAULT: '0px 5px 12px 0px rgba(0,0,0,0.10)',
        md: '0px 4px 12px 0px rgba(13,10,44,0.06)',
        lg: '0px 12px 34px 0px rgba(13,10,44,0.08), 0px 34px 26px 0px rgba(13,10,44,0.05)',
        xl: '0px 10px 15px 0px rgba(5,13,29,0.18)',
      },

      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1440px',
      },
    },
  },

  plugins: [],
}

export default config
