import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tightly controlled 5-color palette
        black: "#000000",
        white: "#FFFFFF",
        "light-gray": "#F2F2F2",
        "mid-gray": "#777777",
        red: {
          DEFAULT: "#E91D2A",
          hover: "#C8101E",
        },
      },
      fontFamily: {
        display: ["'Arial Black'", "Helvetica", "Arial", "sans-serif"],
        heading: ["Helvetica", "Arial", "sans-serif"],
        body: ["'Times New Roman'", "Times", "Georgia", "serif"],
        mono: ["'Courier New'", "Courier", "monospace"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
        hard: "2px 2px 0px #000000",
        "hard-sm": "1px 1px 0px #000000",
      },
    },
  },
  plugins: [],
};
export default config;
