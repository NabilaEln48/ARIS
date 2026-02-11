/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0b0b0f",
          purple: "#9333ea",
          electric: "#c084fc",
          dark: "#16161e",
        }
      },
      backgroundImage: {
        'purple-glow': "radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, rgba(11, 11, 15, 1) 70%)",
      }
    },
  },
  plugins: [],
}