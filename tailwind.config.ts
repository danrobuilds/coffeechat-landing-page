import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6BA5C2",
        secondary: "#93C5FD",
        textDark: "#374151",
        textLight: "#6B7280",
        textMuted: "#9CA3AF",
        background: "#FFFFFF",
        card: "#F9FAFB",
        cardVariant1: "#F5F8FB",
        cardVariant2: "#FAF9F7",
        cardVariant3: "#F8FAFC",
        border: "#E5E7EB",
        divider: "#E5E7EB",
        input: "#F9FAFB",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
        buttonPrimary: "#6BA5C2",
        buttonSecondary: "#F0F7FF",
        accent: "#FFF8F3",
        teal: "#5F9E97",
        white: "#FFFFFF",
        black: "#000000",
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      spartan: ["League Spartan", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
