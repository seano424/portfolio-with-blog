/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        'primary-black': '#0c0b1d',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
