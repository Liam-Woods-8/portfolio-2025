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
        white: '#ffffff',
        background: 'var(--background)',
        'deep-blue': 'var(--deep-blue)',
        'royal-blue': 'var(--royal-blue)',
        yellow: 'var(--yellow)',
        'forest-green': 'var(--forest-green)',
      },
    },
  },
  plugins: [],
}

export default config 