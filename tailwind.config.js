/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FBFBFB',
        'light-blue': '#E8F9FF',
        'mid-blue': '#C4D9FF',
        purple: '#C5BAFF',
        text: '#2c3e50',
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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FBFBFB 0%, #E8F9FF 50%, #C4D9FF 100%)',
        'gradient-secondary': 'linear-gradient(to right, #C5BAFF 0%, #C4D9FF 100%)',
      },
    },
  },
  plugins: [],
} 