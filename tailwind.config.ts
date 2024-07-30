import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            500: "#20655A", //default theme color
            lightGreen: '#d2e0de'
          },
          gray: {
            700: 'rgba(51, 51, 51, 0.1)',
            lightGray: "rgba(102, 102, 102, 1)"


          },
          success: {

          },
          warning: {

          },
          purple: {

          },
          error: {
            50: "#FEF3F2",
            600: "#D92D20",
            700: "#B42318"
          },
          blue: {

          },
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config