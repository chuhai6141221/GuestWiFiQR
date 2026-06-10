import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#FAF7F2",
          accent: "#B7791F",
          soft: "#FDECC8",
          ink: "#1F2937"
        }
      },
      boxShadow: {
        paper: "0 18px 50px rgba(31, 41, 55, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
