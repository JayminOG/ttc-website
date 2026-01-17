/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // move half (since we duplicate logos)
        },
      },
      animation: {
        marquee: "marquee 5s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
