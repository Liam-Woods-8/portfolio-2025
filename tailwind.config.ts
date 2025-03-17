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
        'sage': '#E4EFE7',
        'forest': '#99BC85',
        'text': '#2C3E2D',
      },
      gradientColorStops: {
        'forest': '#99BC85',
        'sage': '#E4EFE7',
        'cream': '#FAF1E6',
      },
      fontFamily: {
        'sao-torpes': ['Sao Torpes', 'sans-serif'],
        'ramona': ['Ramona', 'sans-serif'],
        'ramona-light': ['Ramona Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 