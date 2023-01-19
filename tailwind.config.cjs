/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "header": "clamp(1rem, 0.76rem + 1.02vw, 1.25rem)",
      },
      fontFamily: {
        "helvetica": ["Helvetica", "sans-serif"],
        "acumin": ["acumin-pro", "sans-serif"],
      },
      fontSize: {
        "13px": "0.8125rem",
      }
    },
  },
  plugins: [],
}
