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
        brand: "#8044D8",
        "brand-light": "#A46BE4",
        cta: "#3F8CFF",
        "cta-hover": "#2F6FE6",
        "cta-glow": "#6AA8FF",
        darkbg: "#14083E",
        darkbg2: "#21165A",
        lightbg: "#FAF2E9",
        "lightbg-2": "#F3E6D8",
        bodytext: "#14083E",
        muted: "#CFC9E6",
      },
      fontFamily: {
        display: ["var(--font-asap)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "Courier New", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
