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
      keyframes: {
        borderRadius: {
          "0%": { borderRadius: "58% 48% 55% 44%" },
          "50%": { borderRadius: "51% 48% 47% 52%" },
          "100%": { borderRadius: "48% 63% 44% 55%" },
        },
      },
      animation: {
        "border-radius": "borderRadius 6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
}
