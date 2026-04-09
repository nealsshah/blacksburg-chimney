/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bitter)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fcecd6',
          200: '#f8d5ad',
          300: '#f3b879',
          400: '#ed9043',
          500: '#e97316',
          600: '#da5d14',
          700: '#b54513',
          800: '#903817',
          900: '#743016',
        },
        warm: {
          50: '#faf8f5',
          100: '#f5f0ea',
          200: '#e8e0d4',
          300: '#d4c8b8',
          400: '#b8a68e',
          500: '#9c876a',
          600: '#7c6a52',
          700: '#5c4f3d',
          800: '#3d3529',
          900: '#1c1917',
          950: '#0f0d0a',
        },
      },
    },
  },
  plugins: [],
}
