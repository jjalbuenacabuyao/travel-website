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
        "11px": "0.6875rem",
      },
      colors: {
        "light-cyan-blue": "#A6ADB4",
        "custom-pink": "#FA6980",
        "d-grayish-blue": "#343638",
        "off-white": "#F6F8F9",
      },
      backgroundImage: {
        "menu": "url(../images/icons/menu-icon.svg)",
      },
      margin: {
        "90px": "5.625rem",
      },
      gap: {
        "30px": "1.875rem",
      }
    },
  },
  plugins: [],
}
