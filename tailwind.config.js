/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
        backgroundImage: {
          'color': "url('../public/color2.jpg')",
        },
      },
    },
  },
  plugins: [],
}
