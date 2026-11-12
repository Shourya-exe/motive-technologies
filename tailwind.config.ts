import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        motive: {
          white: "#FFFFFF",
          offwhite: "#F7F7F7",
          black: "#111111",
          grey: "#777777",
          lightgrey: "#A3A3A3",
          border: "#E8E8E8",
          dark: "#090909",
          darkborder: "#1F1F1F",
          darkcard: "#121212",
          red: {
            DEFAULT: "#ED1C2E",
            hover: "#D61626",
            light: "rgba(237, 28, 46, 0.08)",
            border: "rgba(237, 28, 46, 0.2)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)",
        premium: "0 20px 40px -15px rgba(0, 0, 0, 0.06)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        darkcard: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
