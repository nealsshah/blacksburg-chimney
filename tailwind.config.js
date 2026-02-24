/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        slate: {
          850: '#1a2332',
        }
      },
    },
  },
  plugins: [],
}
