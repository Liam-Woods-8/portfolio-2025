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
        'base': '#FFFFFF',
        'text': '#333333',
        'forest': '#76c892',
        'sage': '#5ab37a',
        'mid-blue': '#76c892',
        cream: '#D4E7C5',
        border: '#E5E7EB',
      },
      fontFamily: {
        'sao-torpes': ['Sao Torpes', 'sans-serif'],
        'honey-salt': ['Honey Salt', 'sans-serif'],
        'ramona': ['Ramona', 'serif'],
        'palugada': ['Palugada', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #99BC85 0%, #D4E7C5 100%)',
      },
    },
  },
  plugins: [],
} 