/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColorFull: 'hsl(217, 19%, 35%)',
        textColorHalf: 'hsl(214, 17%, 51%)',
        bgColor2: 'hsl(212, 23%, 69%)',
        bgColor1: 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        manrope: ['Manrope', 'serif'],
      },
      backgroundImage: {
        iconFacebook: 'url("./assets/images/icon-facebook.svg")',
        iconPinterest: 'url("./assets/images/icon-pinterest.svg")',
        iconShare: 'url("./assets/images/icon-share.svg")',
        iconTwitter: 'url("./assets/images/icon-twitter.svg")',
      },
    },
  },
  plugins: [],
}

