export const theme = {
  colors: {
    deepBlue: '#002770',
    royalBlue: '#3700A5',
    yellow: '#FDD438',
    forestGreen: '#0E5E08',
    background: '#fcfae8',
    text: '#1a1a1a',
  },
  fonts: {
    saoTorpes: 'Sao Torpes',
    romanaLight: 'Romana Light',
    romanaBold: 'Romana Bold',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export type Theme = typeof theme; 