import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        motive: {
          white: "#FFFFFF",
          offwhite: "#F7F7F7",
          black: "#111111",
          grey: "#4B5563",
          lightgrey: "#6B7280",
          border: "#E8E8E8",
          dark: "#090909",
          darkborder: "#1F1F1F",
          darkcard: "#121212",
          red: {
            DEFAULT: "#DC2626",
            hover: "#B91C1C",
            light: "rgba(220, 38, 38, 0.08)",
            border: "rgba(220, 38, 38, 0.25)",
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
