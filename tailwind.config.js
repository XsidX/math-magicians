/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      height: {
        screen50: '50vh',
      },
      gap: {
        0.125: '0.5px',
      },
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
