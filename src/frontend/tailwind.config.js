import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        chart: {
          1: 'oklch(var(--chart-1))',
          2: 'oklch(var(--chart-2))',
          3: 'oklch(var(--chart-3))',
          4: 'oklch(var(--chart-4))',
          5: 'oklch(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))'
        },
        // Refined champagne gold palette — professional, not bright yellow
        gold: {
          50:  'oklch(0.97 0.03 82)',
          100: 'oklch(0.93 0.06 80)',
          200: 'oklch(0.87 0.10 78)',
          300: 'oklch(0.80 0.13 78)',
          400: 'oklch(0.74 0.14 75)',
          500: 'oklch(0.68 0.14 72)',
          600: 'oklch(0.62 0.14 70)',
          700: 'oklch(0.54 0.13 65)',
          800: 'oklch(0.44 0.11 62)',
          900: 'oklch(0.32 0.08 60)',
        },
        // Deep charcoal palette
        charcoal: {
          50:  'oklch(0.95 0.004 260)',
          100: 'oklch(0.90 0.004 260)',
          200: 'oklch(0.80 0.006 260)',
          300: 'oklch(0.65 0.006 260)',
          400: 'oklch(0.50 0.006 260)',
          500: 'oklch(0.40 0.008 260)',
          600: 'oklch(0.32 0.01 260)',
          700: 'oklch(0.26 0.01 260)',
          800: 'oklch(0.20 0.01 260)',
          900: 'oklch(0.13 0.01 260)',
        },
        // Platinum silver accent
        platinum: {
          100: 'oklch(0.96 0.004 220)',
          200: 'oklch(0.90 0.006 220)',
          300: 'oklch(0.82 0.008 220)',
          400: 'oklch(0.74 0.008 220)',
          500: 'oklch(0.66 0.008 220)',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
        gold: '0 4px 20px rgba(180, 130, 20, 0.28)',
        'gold-lg': '0 8px 40px rgba(180, 130, 20, 0.38)',
        'card': '0 2px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.14)',
        'logo-ring': '0 0 0 3px rgba(180,130,20,0.35), 0 0 20px rgba(180,130,20,0.20)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      }
    }
  },
  plugins: [typography, containerQueries, animate]
};
