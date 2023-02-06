/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      backgroundImage: {
        "check": "url(/src/assets/icons/check.png)"
      }
    },
  },
  plugins: [],
}
