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
        base: '#FFFFFF',
        forest: '#99BC85',
        sage: '#BFD8AF',
        cream: '#D4E7C5',
        text: '#333333',
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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #99BC85 0%, #D4E7C5 100%)',
      },
    },
  },
  plugins: [],
} 