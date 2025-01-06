/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bgblack: '#121212',
        grayspotfy: '#212121',

      },

      letterSpacing: {
        2: '0.2em',
      }
    },
  },
  plugins: [
  ],
};
