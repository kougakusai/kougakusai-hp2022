/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        popup: {
          '0%': {
            transform: 'translate(-50%, 0)',
            opacity: 0,
            display: 'flex',
          },
          '25%': {
            transform: 'translate(-50%, -100%)',
            opacity: 1,
          },
          '75%': {
            transform: 'translate(-50%, -100%)',
            opacity: 1,
          },
          '100%': {
            transform: 'translate(-50%, 0)',
            opacity: 0,
            display: 'none',
          },
        },
      },
      animation: {
        popup: 'popup 3s',
      },
    },
  },
  plugins: [],
};
