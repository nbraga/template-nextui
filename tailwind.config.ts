import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1920px" },
      lg: { max: "1280px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        gray: {
          100: "#F8F9FA",
          200: "#EAECEF",
          300: "#CED4DA",
          400: "#ACB5BD",
        },
        yellow: {
          100: "#FCC419",
        },
        green: {
          100: "#51CF66",
        },
        red: {
          100: "#FF6B6B",
        },
        blue: {
          100: "#1A5BC6",
          200: "#3B83F8",
        },
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
        },
      },
    }),
  ],
};
export default config;
