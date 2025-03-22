import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#FDFAF6',
        'cream': '#FAF1E6',
        'sage': '#76c892',
        'forest': '#76c892',
        'mid-blue': '#76c892',
        'text': '#333333',
      },
      gradientColorStops: {
        'forest': '#76c892',
        'sage': '#76c892',
        'cream': '#FAF1E6',
      },
      fontFamily: {
        'sao-torpes': ['Sao Torpes', 'sans-serif'],
        'ramona': ['Ramona', 'sans-serif'],
        'ramona-light': ['Ramona Light', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'fade-in': 'fade-in 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

export default config 