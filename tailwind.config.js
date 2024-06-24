/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./tests/test5.jsx",
  ],
  theme: {
    extend: {
      keyframes: {
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slowSpin: 'slowSpin 3s linear infinite',
      },
    },
  },
  plugins: [],
}