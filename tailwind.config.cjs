/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '20em': '20em',
      },
    },
    minHeight: {
      '1.5em': '1.5em',
    },
  },
  plugins: [],
};
