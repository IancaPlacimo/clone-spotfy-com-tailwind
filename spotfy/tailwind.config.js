/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bgblack: '#121212',
      },

      letterSpacing: {
        2: '0.2em',
      }
    },
  },
  plugins: [
  ],
};
