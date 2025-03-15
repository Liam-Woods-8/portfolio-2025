/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      fontFamily: {
        'sao-torpes': ['Sao Torpes', 'sans-serif'],
        'romana-light': ['Romana Light', 'sans-serif'],
        'romana-bold': ['Romana Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 