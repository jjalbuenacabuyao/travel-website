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
        "24px-80px": "clamp(1.5rem, -1.84rem + 14.25vw, 5rem)",
        "40px-80px": "clamp(2.5rem, 0.12rem + 10.18vw, 5rem)",
        "24px-44px": "clamp(1.5rem, 0.31rem + 5.09vw, 2.75rem)",
        "32px-44px": "clamp(2rem, 1.29rem + 3.06vw, 2.75rem)",
        "80px-140px": "clamp(5rem, 0.72rem + 8.93vw, 8.75rem)",
        "80px-180px": "clamp(5rem, -2.14rem + 14.88vw, 11.25rem)",
        "80px-320px": "clamp(5rem, -6.16rem + 23.26vw, 20rem)"
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
        "custom-black": "#202124",
        "d-grayish-blue": "#343638",
        "off-white": "#F6F8F9",
        "footer-text": "#CBD0D3",
      },
      backgroundImage: {
        "menu": "url(../images/icons/menu-icon.svg)",
        "back": "url(../images/icons/arrowbackleft.svg)",
        "send": "url(../images/icons/send.svg)",
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
