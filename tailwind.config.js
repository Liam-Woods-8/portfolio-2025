/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#F0A202',
        'orange': '#F18805',
        'coral': '#D95D39',
        'charcoal': '#262626',
        'sky-blue': '#9AC4F8',
        'background': '#FFFFFF',
      },
      fontFamily: {
        'sao-torpes': ['Sao Torpes', 'sans-serif'],
        'romana-light': ['Romana Light', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
} 