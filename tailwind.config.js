/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#22d3ee',
          light: '#67e8f9',
          dark: '#0e7490',
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
        glow: '0 0 32px -4px rgba(34, 211, 238, 0.5)',
      },
    },
  },
  plugins: [],
};
