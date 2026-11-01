/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        f1: {
          red: '#e10600',
          redDark: '#a80400',
          redGlow: '#ff2a1f',
        },
        track: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1a1a1a',
          700: '#262626',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        redGlow: '0 0 32px -4px rgba(225, 6, 0, 0.55)',
      },
    },
  },
  plugins: [],
};
