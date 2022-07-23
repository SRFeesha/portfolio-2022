/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        tight: "1.2",
      },
      scale: {
        90: 0.9,
      },
      colors: {
        "tory-blue": "#0f5099",
        "chrome-white": "#dcf0cf",
      },
    },
  },
  plugins: [],
}
