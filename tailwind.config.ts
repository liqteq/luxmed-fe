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
            25: "#F1FAF9",
            50: "#E6F2F1",
            100: "#B0D6D4",
            500: "#017A73", //default theme color
            700: "#015752",
          },
          gray: {
            50: "#F9FAFB",
            100: "#F2F4F7",
            200: "#EAECF0",
            300: "#D0D5DD",
            400: "#475467",
            500: "#667085",
            600: "#475467",
            700: "#344054",
            800: "#202939",
            900: "#101828",

          },
          success: {
            50: "#ECFDF3",
            600: "#039855",
            700: "#027A48",
          },
          warning: {
            50: "#FFF4ED",
            700: "#B93815",
            400: "#FDB022"
          },
          purple: {
            50: "#F4F3FF",
            700: "#5925DC",
          },
          error: {
            50: "#FEF3F2",
            600: "#D92D20",
            700: "#B42318"
          },
          blue: {
            50: "#EFF8FF",
            700: "#175CD3"
          },
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config