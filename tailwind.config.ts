import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      light: {
        primary: "#fff",
        secondary: "#e0e0e0",
        accent: "#3563e9",
        heading: "#1a202c",
        content: "#596780",
        details: "#90a3bf",
        error: "#db2719",
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
