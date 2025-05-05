/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive'],
      },
      boxShadow: {
        'custom': '0 1px 2px 0 rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}

