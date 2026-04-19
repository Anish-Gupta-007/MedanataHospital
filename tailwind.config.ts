import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#e8402a",
          dark: "#c73520",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
